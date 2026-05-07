/**
 * Google Tag Manager and Google Ads utilities for SOS Admissions
 * GTM Container ID: GTM-K86JCR92
 * Google Ads ID: AW-824664390
 */

const GTM_ID = 'GTM-K86JCR92';
const GOOGLE_ADS_ID = 'AW-824664390';

/**
 * Initialize Google Tag Manager
 * Should be called once in the head or early in the application
 */
export function initGTM(): void {
  if (typeof window === 'undefined') return;

  // Prevent duplicate initialization
  if ((window as any).dataLayer) return;

  // Initialize dataLayer
  (window as any).dataLayer = (window as any).dataLayer || [];

  // GTM script injection
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);

  // Add noscript fallback
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
}

/**
 * Push an event to the GTM dataLayer
 */
export function gtmEvent(
  eventName: string,
  eventData?: Record<string, any>
): void {
  if (typeof window === 'undefined') return;

  const dataLayer = (window as any).dataLayer;
  if (!dataLayer) {
    console.warn('GTM dataLayer not initialized');
    return;
  }

  dataLayer.push({
    event: eventName,
    ...eventData,
  });
}

/**
 * Track a page view
 */
export function trackPageView(
  pagePath: string,
  pageTitle?: string,
  customData?: Record<string, any>
): void {
  gtmEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle || document.title,
    ...customData,
  });
}

/**
 * Track a service view
 */
export function trackServiceView(
  serviceId: string,
  serviceName: string,
  serviceSlug: string
): void {
  gtmEvent('service_view', {
    service_id: serviceId,
    service_name: serviceName,
    service_slug: serviceSlug,
  });
}

/**
 * Track a consultation request/form start
 */
export function trackConsultationStart(
  source?: string,
  serviceType?: string
): void {
  gtmEvent('consultation_start', {
    source: source || 'unknown',
    service_type: serviceType || 'general',
  });
}

/**
 * Track form completion
 */
export function trackFormSubmission(
  formType: string,
  formName?: string,
  customData?: Record<string, any>
): void {
  gtmEvent('form_submission', {
    form_type: formType,
    form_name: formName || 'unknown',
    ...customData,
  });
}

/**
 * Track a conversion on the thank you page
 */
export function trackConversion(
  conversionType: 'lead' | 'consultation_booked' | 'payment',
  conversionValue?: number,
  currency?: string,
  customData?: Record<string, any>
): void {
  const eventData: Record<string, any> = {
    conversion_type: conversionType,
  };

  if (conversionValue !== undefined) {
    eventData.value = conversionValue;
  }

  if (currency) {
    eventData.currency = currency;
  }

  gtmEvent('conversion', {
    ...eventData,
    ...customData,
  });

  // Also fire Google Ads conversion
  trackGoogleAdsConversion(conversionType, conversionValue, currency);
}

/**
 * Track CTA click
 */
export function trackCTAClick(
  buttonText: string,
  location: string,
  customData?: Record<string, any>
): void {
  gtmEvent('cta_click', {
    button_text: buttonText,
    location: location,
    ...customData,
  });
}

/**
 * Track testimonial view
 */
export function trackTestimonialView(
  testimonialId: string,
  serviceName?: string
): void {
  gtmEvent('testimonial_view', {
    testimonial_id: testimonialId,
    service_name: serviceName || 'unknown',
  });
}

/**
 * Track social media share
 */
export function trackSocialShare(
  platform: string,
  contentType: string,
  contentTitle?: string
): void {
  gtmEvent('social_share', {
    platform: platform,
    content_type: contentType,
    content_title: contentTitle || 'unknown',
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(
  percentScrolled: number,
  pagePath?: string
): void {
  gtmEvent('scroll_depth', {
    percent_scrolled: percentScrolled,
    page_path: pagePath || window.location.pathname,
  });
}

/**
 * Track video engagement
 */
export function trackVideoEngagement(
  videoTitle: string,
  action: 'play' | 'pause' | 'complete',
  currentTime?: number
): void {
  gtmEvent('video_engagement', {
    video_title: videoTitle,
    action: action,
    current_time: currentTime,
  });
}

/**
 * Track blog post view
 */
export function trackBlogPostView(
  postId: string,
  postTitle: string,
  category?: string
): void {
  gtmEvent('blog_post_view', {
    post_id: postId,
    post_title: postTitle,
    category: category || 'uncategorized',
  });
}

/**
 * Track FAQ click
 */
export function trackFAQClick(
  questionId: string,
  questionTitle: string,
  category?: string
): void {
  gtmEvent('faq_click', {
    question_id: questionId,
    question_title: questionTitle,
    category: category || 'general',
  });
}

/**
 * Track user sign up or account creation
 */
export function trackSignUp(
  signUpMethod: string,
  customData?: Record<string, any>
): void {
  gtmEvent('sign_up', {
    sign_up_method: signUpMethod,
    ...customData,
  });
}

/**
 * Track search action
 */
export function trackSearch(
  searchTerm: string,
  resultCount?: number
): void {
  gtmEvent('search', {
    search_term: searchTerm,
    result_count: resultCount,
  });
}

/**
 * Fire Google Ads conversion tracking
 * Requires Google Ads conversion ID and label to be set up
 */
export function trackGoogleAdsConversion(
  conversionType: string,
  conversionValue?: number,
  currency?: string
): void {
  if (typeof window === 'undefined') return;

  // Use gtag if available
  if ((window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      allow_custom_scripts: true,
      conversion_id: GOOGLE_ADS_ID,
      conversion_label: getGoogleAdsConversionLabel(conversionType),
      value: conversionValue || 0,
      currency: currency || 'USD',
    });
  }
}

/**
 * Get the appropriate Google Ads conversion label based on conversion type
 */
function getGoogleAdsConversionLabel(
  conversionType: string
): string {
  const labels: Record<string, string> = {
    lead: 'rLuMCNrDuIQCEPG44scD', // Example label - replace with actual
    consultation_booked: 'rLuMCNrDuIQCEPG44scD', // Example label - replace with actual
    payment: 'rLuMCNrDuIQCEPG44scD', // Example label - replace with actual
    thank_you_page_lead: 'rLuMCNrDuIQCEPG44scD', // Example label - replace with actual
    thank_you_page_payment: 'rLuMCNrDuIQCEPG44scD', // Example label - replace with actual
  };

  return labels[conversionType] || '';
}

/**
 * Track thank you page (conversion landing)
 * Specifically for /thank-you/ route
 */
export function trackThankYouPageLead(
  leadSource?: string,
  serviceType?: string,
  customData?: Record<string, any>
): void {
  // Fire GTM conversion event
  trackConversion('lead', undefined, undefined, {
    lead_source: leadSource || 'form_submission',
    service_type: serviceType || 'general',
    page_type: 'thank_you_lead',
    ...customData,
  });

  // Track page view
  trackPageView('/thank-you', 'Thank You - Consultation Request', {
    page_type: 'thank_you_lead',
  });
}

/**
 * Track thank you page for payment (conversion landing)
 * Specifically for /thank-you-payment/ route
 */
export function trackThankYouPagePayment(
  paymentAmount?: number,
  currency?: string,
  serviceType?: string,
  customData?: Record<string, any>
): void {
  // Fire GTM conversion event
  trackConversion('payment', paymentAmount, currency || 'USD', {
    service_type: serviceType || 'general',
    page_type: 'thank_you_payment',
    ...customData,
  });

  // Track page view
  trackPageView('/thank-you-payment', 'Thank You - Payment Received', {
    page_type: 'thank_you_payment',
    payment_amount: paymentAmount,
    currency: currency || 'USD',
  });
}

/**
 * Set user properties/segments for personalized tracking
 */
export function setUserProperties(
  userId?: string,
  customProperties?: Record<string, any>
): void {
  gtmEvent('user_properties', {
    user_id: userId,
    ...customProperties,
  });
}

/**
 * Track an exception/error
 */
export function trackException(
  description: string,
  fatal?: boolean
): void {
  gtmEvent('exception', {
    description: description,
    fatal: fatal || false,
  });
}

/**
 * Custom event for general tracking
 */
export function trackCustomEvent(
  eventName: string,
  eventData?: Record<string, any>
): void {
  gtmEvent(eventName, eventData);
}

/**
 * Get current GTM ID
 */
export function getGTMId(): string {
  return GTM_ID;
}

/**
 * Get current Google Ads ID
 */
export function getGoogleAdsId(): string {
  return GOOGLE_ADS_ID;
}

/**
 * Check if GTM is initialized
 */
export function isGTMInitialized(): boolean {
  if (typeof window === 'undefined') return false;
  return !!(window as any).dataLayer;
}
