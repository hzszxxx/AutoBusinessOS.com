# AutoBusinessOS 英文版转换 Claude Code 提示词集合

## 1. 网站架构重新设计提示词

```bash
# Claude Code 命令
Create a complete English website architecture for AutoBusinessOS based on the following requirements:

Project: AutoBusinessOS - Business Automation Platform for English-speaking markets (US, UK, Canada, Australia)

Requirements:
1. **Target Market Analysis**
   - Primary: US B2B decision makers, company owners, operations managers
   - Secondary: UK, Canada, Australia business automation seekers
   - Focus on companies with 10-500 employees
   - Annual revenue $1M-$50M range

2. **SEO Strategy for English Market**
   - Primary keywords: "business automation platform", "workflow automation software", "marketing automation tools"
   - Long-tail keywords: "small business process automation", "automated workflow solutions", "business process management software"
   - Competitor analysis: HubSpot, Zapier, Monday.com, Asana

3. **Content Structure** 
   Create pages for:
   - Homepage (value proposition, hero section, features overview)
   - Solutions pages: Marketing Automation, Sales Automation, Customer Service Automation, Finance Automation, HR Automation, Operations Automation
   - Industry pages: E-commerce, SaaS, Manufacturing, Healthcare, Professional Services
   - Tools pages: ROI Calculator, Automation Assessment, Workflow Builder, Integration Guide
   - Resources: Implementation guides, case studies, templates, blog

4. **Technical Requirements**
   - Next.js 14 with App Router
   - TypeScript for type safety
   - Tailwind CSS for styling
   - Vercel deployment optimization
   - Google Analytics 4 integration
   - Google AdSense optimization
   - Core Web Vitals optimization

5. **Monetization Focus**
   - Google AdSense placement optimization
   - Affiliate marketing integration (software tools)
   - Lead generation forms
   - Email list building

Please create the complete file structure, routing, and basic component architecture.
```

## 2. 首页内容重新创作提示词

```bash
# Claude Code 命令  
Create a high-converting English homepage for AutoBusinessOS with the following specifications:

Context: AutoBusinessOS is a business automation platform targeting English-speaking markets, competing with HubSpot, Zapier, and Monday.com in the workflow automation space.

Requirements:

1. **Hero Section**
   - Compelling headline that addresses the #1 pain point: "Manual processes eating profits"
   - Value proposition: "Automate your business processes and increase efficiency by 80%"
   - Primary CTA: "Calculate Your ROI" (leads to ROI calculator)
   - Secondary CTA: "See How It Works" (demo video)
   - Hero image: Professional business automation visualization

2. **Problem-Solution Framework**
   - Address pain points: Time waste, human errors, scaling challenges, competitive pressure
   - Position automation as the solution to modern business challenges
   - Use statistics: "Companies save 40+ hours/week with automation"

3. **Social Proof Section**
   - Customer testimonials (create realistic business scenarios)
   - Company logos (use placeholder/generic company types)
   - Success metrics: "500+ businesses automated", "2M+ processes optimized"

4. **Features Section**
   - 6 core automation solutions with icons and brief descriptions
   - Focus on business outcomes rather than features
   - Each feature links to dedicated solution page

5. **Industry-Specific Value Props**
   - E-commerce: "Automate inventory and customer service"
   - SaaS: "Scale customer onboarding and support"  
   - Manufacturing: "Optimize supply chain and quality control"
   - Professional Services: "Streamline client management and billing"

6. **Trust Indicators**
   - Security badges, compliance mentions
   - "Used by businesses in 50+ countries"
   - "SOC 2 compliant" and similar trust signals

7. **Final CTA Section**
   - "Start Your Automation Journey Today"
   - Free trial or assessment offer
   - Risk-free trial language

Technical requirements:
- Implement with React/Next.js components
- Responsive design for mobile-first
- Core Web Vitals optimization
- Schema markup for SEO
- Google Analytics event tracking for all CTAs

Please create the complete homepage component with all sections, styling, and interactivity.
```

## 3. 解决方案页面内容创作提示词

```bash
# Claude Code 命令
Create comprehensive English solution pages for AutoBusinessOS covering all 6 automation areas:

Pages to create:
1. Marketing Automation
2. Sales Process Automation  
3. Customer Service Automation
4. Finance & Accounting Automation
5. HR & Recruiting Automation
6. Operations & Workflow Automation

For EACH page, create content following this structure:

**Page Structure Template:**

1. **SEO-Optimized Header**
   - H1: "[Solution] Software - Automate Your [Process] and Boost Efficiency by X%"
   - Meta description focusing on benefits and ROI
   - Breadcrumb navigation

2. **Value Proposition Section**
   - One-sentence value prop
   - 3 key benefits with statistics
   - "Companies using [solution] see X% improvement in Y"

3. **Problem Identification** 
   - "The Hidden Costs of Manual [Process]"
   - 4-5 specific pain points with cost implications
   - Industry-specific challenges

4. **Solution Overview**
   - "How [Solution] Transforms Your Business"
   - Core features explanation (6-8 features)
   - Process automation workflow diagram description

5. **ROI & Benefits Section**
   - Quantified benefits: time saved, cost reduction, accuracy improvement
   - ROI calculator integration
   - Before/after comparison scenarios

6. **Use Cases & Applications**
   - 5-6 specific business scenarios
   - Step-by-step automation examples
   - Integration possibilities with popular tools

7. **Success Stories** 
   - 2-3 realistic case studies (anonymized)
   - Specific metrics and outcomes
   - Industry variety (SaaS, e-commerce, manufacturing, etc.)

8. **Implementation Guidance**
   - "Getting Started in 5 Steps"
   - Timeline expectations
   - Common challenges and solutions

9. **Tool Recommendations & Affiliate Integration**
   - "Best [Solution] Tools for 2024"
   - Comparison of 3-5 popular tools
   - Affiliate links integration
   - Pros/cons for each tool

10. **FAQ Section**
    - 8-10 common questions about the solution
    - Address pricing, implementation, ROI concerns
    - Technical requirements

11. **CTA Section**
    - Multiple conversion paths: ROI calculator, free consultation, guide download
    - "Free [Solution] Assessment" offer

**Content Guidelines:**
- Write for business decision-makers (not technical users)
- Focus on business outcomes over technical features  
- Use persuasive but professional tone
- Include relevant statistics and industry benchmarks
- Optimize for featured snippets and long-tail keywords
- Each page should be 2500-3500 words for SEO

**Technical Implementation:**
- Next.js page components with TypeScript
- Tailwind CSS for styling
- Schema markup for each page
- Internal linking strategy
- Related content recommendations
- Social sharing integration

Please create all 6 solution pages following this template.
```

## 4. 工具页面开发提示词

```bash
# Claude Code 命令
Create interactive tool pages for AutoBusinessOS that serve as lead magnets and demonstrate value:

Tools to Build:

**1. ROI Calculator**
Requirements:
- Calculate automation ROI based on:
  * Current annual revenue
  * Number of employees  
  * Hours spent on manual processes
  * Average hourly cost
  * Error rate percentage
  * Expected automation efficiency gain

- Output metrics:
  * Annual cost savings
  * ROI percentage
  * Payback period
  * 5-year projected value
  * Time saved per month

- Lead capture: Email required for detailed report
- Social sharing of results
- Integration with Google Analytics events

**2. Business Automation Assessment**
Requirements:
- 15-question assessment covering:
  * Current process efficiency
  * Technology adoption level
  * Pain points and challenges
  * Growth goals and timeline
  * Industry-specific questions

- Scoring system (0-100 points)
- Personalized recommendations based on score
- Automation priority matrix
- Tool recommendations with affiliate links
- Email capture for full report

**3. Workflow Builder Demo**  
Requirements:
- Visual drag-and-drop interface (simplified)
- Pre-built workflow templates:
  * Lead nurturing sequence
  * Customer onboarding process
  * Invoice approval workflow
  * Employee feedback loop
  * Content approval process

- Export functionality (requires email)
- Integration suggestions
- Implementation timeline estimate

**4. Cost vs Benefit Analysis Tool**
Requirements:
- Compare costs of:
  * Manual processes (time, errors, opportunity cost)
  * Automation solutions (software, setup, training)
  * Hybrid approaches

- Industry-specific templates
- Customizable parameters
- Visual charts and graphs
- PDF report generation
- Consultation booking integration

**Technical Specifications:**
- React components with hooks for state management
- Responsive design (mobile-first)
- Form validation and error handling
- Progress indicators for multi-step tools
- Results sharing functionality
- Email integration (lead capture)
- Analytics event tracking
- Local storage for progress saving
- Accessibility compliance

**SEO Optimization:**
- Each tool as separate page with unique content
- Tool-specific landing pages with keywords
- FAQ sections for each tool
- Usage guides and tutorials
- Schema markup for software applications

**Monetization Integration:**
- Strategic ad placement around tools
- Affiliate tool recommendations in results
- Premium features teasers
- Consultation upsells
- Email nurture sequences

Please create all 4 interactive tools with complete functionality and professional UI/UX.
```

## 5. 行业案例页面创作提示词

```bash
# Claude Code 命令
Create industry-specific automation case study pages targeting key English-speaking market verticals:

Industries to Cover:
1. E-commerce & Retail
2. SaaS & Technology  
3. Manufacturing & Supply Chain
4. Healthcare & Medical Services
5. Professional Services (Legal, Consulting, Accounting)

For EACH industry page, create:

**Page Structure:**

1. **Industry Overview Section**
   - Market size and growth statistics
   - Digital transformation trends
   - Automation adoption rates
   - Key challenges facing the industry

2. **Automation Opportunities Analysis**
   - 8-10 specific processes that can be automated
   - Potential ROI for each process
   - Implementation complexity ratings
   - Popular tools and solutions

3. **Process-Specific Automation Guides**
   For each major process:
   - Current manual approach problems
   - Automated solution workflow
   - Tools and integrations needed
   - Expected outcomes and metrics
   - Implementation timeline

4. **Success Story Case Studies**
   - 3-4 detailed case studies per industry
   - Company size and type (anonymized)
   - Specific challenges faced
   - Automation solution implemented
   - Quantified results and ROI
   - Lessons learned and tips

5. **Implementation Roadmap**
   - Phase 1: Quick wins (30-60 days)
   - Phase 2: Core process automation (3-6 months)  
   - Phase 3: Advanced integration (6-12 months)
   - Budget considerations and resource requirements

6. **Tool Recommendations by Use Case**
   - Categorized tool suggestions with affiliate links
   - Comparison matrices
   - Pricing considerations
   - Implementation difficulty ratings

7. **Industry-Specific ROI Calculator**
   - Customized for industry metrics
   - Typical cost savings by process
   - Industry benchmark comparisons

8. **Regulatory and Compliance Considerations**
   - Industry-specific regulations (HIPAA, SOX, GDPR, etc.)
   - Compliance-friendly automation approaches
   - Documentation and audit trail requirements

**Content Guidelines per Industry:**

**E-commerce:**
- Focus: Inventory management, order processing, customer service, marketing automation
- Pain points: Peak season scaling, inventory stockouts, cart abandonment, customer retention
- Popular integrations: Shopify, WooCommerce, Amazon, social media platforms

**SaaS:**
- Focus: Customer onboarding, support ticketing, churn prediction, feature usage tracking
- Pain points: User adoption, support scalability, subscription management, product-led growth
- Popular integrations: CRM systems, support platforms, analytics tools, payment processors

**Manufacturing:**
- Focus: Supply chain optimization, quality control, equipment maintenance, compliance reporting
- Pain points: Production efficiency, supply chain disruptions, quality consistency, safety compliance
- Popular integrations: ERP systems, IoT sensors, quality management systems, supply chain platforms

**Healthcare:**
- Focus: Patient scheduling, billing automation, compliance reporting, inventory management
- Pain points: Regulatory compliance, patient experience, operational efficiency, cost management
- Popular integrations: EMR systems, billing platforms, patient communication tools, compliance software

**Professional Services:**
- Focus: Client onboarding, project management, time tracking, invoicing, document management
- Pain points: Billable hour maximization, client communication, project profitability, compliance
- Popular integrations: CRM, project management tools, accounting software, document management systems

**SEO Optimization:**
- Target industry-specific keywords
- Local SEO considerations for different markets
- Industry publication linking opportunities
- Thought leadership content positioning

Please create all 5 industry pages with comprehensive, actionable content that positions AutoBusinessOS as the industry expert.
```

## 6. 博客内容和SEO优化提示词

```bash
# Claude Code 命令
Create a comprehensive blog content strategy and 20 high-value blog posts for AutoBusinessOS targeting English-speaking B2B audiences:

**Content Pillars:**

1. **Automation Strategy & ROI** (5 posts)
2. **Industry-Specific Automation** (5 posts) 
3. **Tool Comparisons & Reviews** (5 posts)
4. **Implementation Guides** (3 posts)
5. **Trends & Future of Automation** (2 posts)

**Blog Post Requirements:**

Each post should be:
- 2000-3000 words for SEO authority
- Optimized for specific long-tail keywords
- Include actionable takeaways
- Feature relevant statistics and data
- Include internal links to solution/tool pages
- End with clear CTAs (ROI calculator, assessment, etc.)

**Specific Blog Posts to Create:**

**Automation Strategy & ROI:**
1. "Business Process Automation ROI: How to Calculate and Maximize Your Investment"
   - Target keyword: "business process automation ROI"
   - Include ROI calculator integration
   - Industry-specific ROI examples

2. "Small Business Automation: 15 Processes You Should Automate First"
   - Target keyword: "small business automation"  
   - Priority matrix for automation decisions
   - Budget-conscious recommendations

3. "Workflow Automation vs Manual Processes: The True Cost Comparison"
   - Target keyword: "workflow automation benefits"
   - Cost-benefit analysis framework
   - Hidden costs of manual processes

4. "Business Automation Strategy: A Step-by-Step Implementation Guide"
   - Target keyword: "business automation strategy"
   - Change management considerations
   - Success metrics and KPIs

5. "Automation Mistakes That Cost Companies Thousands (And How to Avoid Them)"
   - Target keyword: "automation implementation mistakes"
   - Real failure case studies
   - Prevention strategies

**Industry-Specific Automation:**
6. "E-commerce Automation: 12 Ways to Scale Your Online Store"
   - Target keyword: "ecommerce automation tools"
   - Peak season preparation
   - Customer lifecycle automation

7. "SaaS Automation Playbook: Reduce Churn and Increase MRR"  
   - Target keyword: "SaaS automation tools"
   - Customer success automation
   - Revenue optimization

8. "Manufacturing Automation Beyond the Factory Floor: Office Process Optimization"
   - Target keyword: "manufacturing process automation"
   - Supply chain automation
   - Compliance automation

9. "Healthcare Practice Automation: Improve Patient Care While Reducing Costs"
   - Target keyword: "healthcare automation solutions"
   - HIPAA compliance considerations
   - Patient experience optimization

10. "Professional Services Automation: Bill More Hours, Deliver Better Results"
    - Target keyword: "professional services automation"
    - Time tracking and project management
    - Client relationship automation

**Tool Comparisons & Reviews:**
11. "HubSpot vs Salesforce vs Pipedrive: Marketing Automation Platform Comparison 2024"
    - Include affiliate links
    - Feature comparison matrix
    - Use case recommendations

12. "Zapier Alternatives: 10 Workflow Automation Tools Compared"
    - Target keyword: "Zapier alternatives"
    - Price-feature analysis
    - Integration capabilities comparison

13. "Best Business Process Management Software: 2024 Buyer's Guide"
    - Target keyword: "business process management software"
    - Category breakdown
    - Implementation difficulty ratings

14. "Monday.com vs Asana vs Notion: Project Automation Showdown"
    - Team size recommendations
    - Feature deep-dive
    - Pricing analysis

15. "Free vs Paid Automation Tools: When to Upgrade and Why"
    - Budget planning guidance
    - Growth stage recommendations
    - ROI thresholds for upgrading

**Implementation Guides:**
16. "How to Automate Your Sales Process: From Lead to Close in 7 Steps"
    - Target keyword: "sales process automation"
    - CRM integration strategies
    - Lead nurturing sequences

17. "Customer Service Automation Setup: Reduce Response Time by 90%"
    - Target keyword: "customer service automation"
    - Chatbot implementation
    - Escalation procedures

18. "Marketing Automation for Small Business: Start to Finish Guide"
    - Target keyword: "marketing automation for small business"
    - Email marketing automation
    - Social media automation

**Trends & Future:**
19. "The Future of Business Automation: AI, Machine Learning, and What's Next"
    - Target keyword: "future of business automation"
    - Emerging technologies
    - Preparation strategies

20. "Automation Trends 2024: What Every Business Leader Should Know"
    - Target keyword: "business automation trends 2024"
    - Industry predictions
    - Investment priorities

**Technical Requirements:**
- Next.js dynamic routing for blog posts
- Markdown content management
- SEO metadata optimization
- Related post recommendations
- Social sharing integration
- Comment system consideration
- Newsletter signup integration
- Reading time estimates

**Content Calendar Integration:**
- 2 posts per week publication schedule
- Seasonal content planning
- Industry event tie-ins
- Product launch coordination

Please create all 20 blog posts with proper SEO optimization, internal linking strategy, and conversion-focused CTAs.
```
