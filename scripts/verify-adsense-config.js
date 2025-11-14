#!/usr/bin/env node

/**
 * AdSense Configuration Verification Script
 * Checks if all required AdSense environment variables are configured
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 AdSense Configuration Verification\n');
console.log('=' .repeat(50));

// Check .env.local file
const envLocalPath = path.join(process.cwd(), '.env.local');
const envExamplePath = path.join(process.cwd(), '.env.example');

let envLocalExists = false;
let envContent = '';

if (fs.existsSync(envLocalPath)) {
  envLocalExists = true;
  envContent = fs.readFileSync(envLocalPath, 'utf8');
  console.log('✅ .env.local file found\n');
} else {
  console.log('❌ .env.local file not found\n');
  console.log('💡 Create .env.local file with your ad unit IDs\n');
  process.exit(1);
}

// Required environment variables
const requiredVars = [
  'NEXT_PUBLIC_ADSENSE_HEADER_AD_SLOT',
  'NEXT_PUBLIC_ADSENSE_SIDEBAR_AD_SLOT',
  'NEXT_PUBLIC_ADSENSE_INCONTENT_AD_SLOT',
  'NEXT_PUBLIC_ADSENSE_FOOTER_AD_SLOT',
];

// Placeholder values to check against
const placeholders = [
  '1234567890',
  '0987654321',
  '1122334455',
  '5566778899',
];

console.log('📋 Checking Ad Unit IDs:\n');

let allConfigured = true;
const results = [];

requiredVars.forEach((varName, index) => {
  const regex = new RegExp(`${varName}=(.+)`, 'm');
  const match = envContent.match(regex);
  
  if (match && match[1]) {
    const value = match[1].trim();
    const isPlaceholder = placeholders.includes(value);
    
    if (isPlaceholder) {
      console.log(`❌ ${varName}: ${value} (Placeholder - needs real ID)`);
      allConfigured = false;
      results.push({ var: varName, status: 'placeholder', value });
    } else {
      console.log(`✅ ${varName}: ${value}`);
      results.push({ var: varName, status: 'configured', value });
    }
  } else {
    console.log(`❌ ${varName}: Not found`);
    allConfigured = false;
    results.push({ var: varName, status: 'missing', value: null });
  }
});

console.log('\n' + '='.repeat(50));

if (allConfigured) {
  console.log('\n✅ All AdSense ad units are configured correctly!');
  console.log('\n📝 Next steps:');
  console.log('   1. Restart your development server: npm run dev');
  console.log('   2. Visit http://localhost:3000');
  console.log('   3. Check browser console for any errors');
  console.log('   4. Configure same variables in Vercel for production');
  console.log('\n⏰ Note: Ads may take 24-48 hours to start displaying');
} else {
  console.log('\n⚠️  Some ad units are not configured correctly');
  console.log('\n📝 To fix:');
  console.log('   1. Get ad unit IDs from AdSense console:');
  console.log('      https://www.google.com/adsense/ → Ads → By ad unit');
  console.log('   2. Update .env.local with real ad unit IDs');
  console.log('   3. See ADSENSE_AD_UNITS_SETUP_GUIDE.md for details');
}

console.log('\n' + '='.repeat(50));

// Summary
const configuredCount = results.filter(r => r.status === 'configured').length;
const placeholderCount = results.filter(r => r.status === 'placeholder').length;
const missingCount = results.filter(r => r.status === 'missing').length;

console.log('\n📊 Summary:');
console.log(`   Configured: ${configuredCount}/4`);
console.log(`   Placeholders: ${placeholderCount}/4`);
console.log(`   Missing: ${missingCount}/4`);

process.exit(allConfigured ? 0 : 1);

