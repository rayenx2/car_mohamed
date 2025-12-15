// Report Web Vitals to analytics or console
export const reportWebVitals = (metric: any) => {
    // Log to console for development
    console.log(metric);

    // Example: Send to Google Analytics if available
    if (window.gtag) {
        window.gtag('event', metric.name, {
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_category: 'Web Vitals',
            event_label: metric.id,
            non_interaction: true,
        });
    }
};

// Add type definition for global gtag
declare global {
    interface Window {
        gtag?: (command: string, action: string, params?: any) => void;
    }
}
