'use client';

import { useAnalytics, AnalyticsPageConfigs } from '@/hooks/useAnalytics';

interface AnalyticsWrapperProps {
  page: keyof typeof AnalyticsPageConfigs;
  children: React.ReactNode;
}

export default function AnalyticsWrapper({ page, children }: AnalyticsWrapperProps) {
  useAnalytics(AnalyticsPageConfigs[page]);

  return <>{children}</>;
}