'use client';

import { useEffect, useRef } from 'react';
import { trackEvent, trackPageDepth } from '@/components/Analytics/GoogleAnalytics';
import { trackHighValuePageView, setSmartBiddingSignals } from '@/components/Analytics/GoogleAds';

interface AnalyticsConfig {
  trackScrollDepth?: boolean;
  trackTimeOnPage?: boolean;
  trackPageValue?: number;
  highValuePage?: boolean;
}

export function useAnalytics(config: AnalyticsConfig = {}) {
  const {
    trackScrollDepth = true,
    trackTimeOnPage = true,
    trackPageValue,
    highValuePage = false
  } = config;

  const startTime = useRef<number>(Date.now());
  const maxScrollDepth = useRef<number>(0);
  const hasTrackedEngagement = useRef<boolean>(false);

  useEffect(() => {
    // Detect user type
    const isReturningUser = localStorage.getItem('user_visited') === 'true';
    const userType = isReturningUser ? 'returning' : 'new';

    // 检测设备类型
    const deviceType = window.innerWidth <= 768 ? 'mobile' :
                      window.innerWidth <= 1024 ? 'tablet' : 'desktop';

    // 检测流量来源
    const trafficSource = document.referrer ?
      new URL(document.referrer).hostname : 'direct';

    // 设置智能竞价信号
    setSmartBiddingSignals(userType, trafficSource, deviceType);

    // 标记用户已访问
    localStorage.setItem('user_visited', 'true');

    // 高价值页面追踪
    if (highValuePage && trackPageValue) {
      trackHighValuePageView(window.location.pathname, trackPageValue);
    }

    // 滚动深度追踪
    const handleScroll = () => {
      if (!trackScrollDepth) return;

      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScrollDepth.current) {
        maxScrollDepth.current = scrollPercent;

        // 追踪关键滚动里程碑
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          trackPageDepth(scrollPercent);
        }

        // 深度参与转化追踪
        if (scrollPercent >= 75 && !hasTrackedEngagement.current) {
          hasTrackedEngagement.current = true;
          trackEvent('deep_engagement', {
            category: 'engagement',
            label: 'scroll_75_percent',
            value: 75,
            engagement_type: 'deep_scroll'
          });
        }
      }
    };

    // 页面离开时追踪时间
    const handleBeforeUnload = () => {
      if (!trackTimeOnPage) return;

      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000);

      trackEvent('time_on_page', {
        category: 'engagement',
        label: 'page_exit',
        value: timeOnPage,
        time_spent: timeOnPage
      });

      // 高参与度转化追踪
      if (timeOnPage > 120) { // 超过2分钟
        trackEvent('high_engagement', {
          category: 'engagement',
          label: 'long_session',
          value: timeOnPage,
          engagement_type: 'time_spent'
        });
      }
    };

    // 页面可见性变化追踪
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // 页面隐藏时记录时间
        const sessionTime = Date.now() - startTime.current;
        if (sessionTime > 30000) { // 超过30秒才记录
          trackEvent('page_visibility', {
            category: 'engagement',
            label: 'page_hidden',
            value: Math.round(sessionTime / 1000),
            session_duration: sessionTime
          });
        }
      }
    };

    // 添加事件监听器
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 初始页面视图追踪
    trackEvent('page_view_enhanced', {
      category: 'navigation',
      label: window.location.pathname,
      page_path: window.location.pathname,
      page_title: document.title,
      user_type: userType,
      device_type: deviceType,
      traffic_source: trafficSource
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [trackScrollDepth, trackTimeOnPage, trackPageValue, highValuePage]);

  // 返回追踪函数供组件使用
  return {
    trackCustomEvent: trackEvent,
    getSessionTime: () => Date.now() - startTime.current,
    getMaxScrollDepth: () => maxScrollDepth.current
  };
}

// 特定页面的分析配置
export const AnalyticsPageConfigs = {
  homepage: {
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackPageValue: 30,
    highValuePage: true
  },

  solutions: {
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackPageValue: 50,
    highValuePage: true
  },

  roiCalculator: {
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackPageValue: 100,
    highValuePage: true
  },

  resources: {
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackPageValue: 25,
    highValuePage: false
  },

  industries: {
    trackScrollDepth: true,
    trackTimeOnPage: true,
    trackPageValue: 40,
    highValuePage: true
  }
};