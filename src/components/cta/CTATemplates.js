/**
 * CTATemplates - Export file with multiple CTA variants for different use cases
 * Amazon Associates tag: feralfoliage-20
 * 
 * Usage:
 * import { HumidifierBundle, TdsMeterCTA, getCtaTemplate } from './CTATemplates';
 */

import React from 'react';
import {
  AffiliateCTATemplate,
  HumidifierCTA,
  PremiumHumidifierCTA,
  BudgetHumidifierCTA,
  TdsMeterCTA,
  BudgetTdsMeterCTA,
  HygrometerCTA,
  BudgetHygrometerCTA,
  InlineCTA,
  buildAffiliateLink
} from './AffiliateCTATemplate';

/**
 * Bundle CTA - For showing humidifier + hygrometer together
 */
export const HumidifierBundle = ({ variant = 'primary' }) => (
  <div className="cta-bundle">
    <h4 className="cta-bundle__title">Recommended Setup</h4>
    <HygrometerCTA variant={variant} />
    <HumidifierCTA variant={variant} />
    <p className="cta-bundle__note">
      Track your humidity with a hygrometer, then boost it with a humidifier to keep 
      your calathea in the 50-60% zone.
    </p>
  </div>
);

/**
 * Full Humidifier Comparison CTA
 */
export const HumidifierComparison = ({ variant = 'secondary' }) => (
  <div className="cta-comparison">
    <h4 className="cta-comparison__title">Humidifier Options</h4>
    <div className="cta-comparison__grid">
      <PremiumHumidifierCTA variant={variant} />
      <HumidifierCTA variant={variant} />
      <BudgetHumidifierCTA variant={variant} />
    </div>
  </div>
);

/**
 * Full TDS Meter Comparison CTA
 */
export const TdsMeterComparison = ({ variant = 'secondary' }) => (
  <div className="cta-comparison">
    <h4 className="cta-comparison__title">TDS Meter Options</h4>
    <div className="cta-comparison__grid">
      <TdsMeterCTA variant={variant} />
      <BudgetTdsMeterCTA variant={variant} />
    </div>
    <p className="cta-comparison__note">
      Under 100 ppm is the sweet spot for calatheas.
    </p>
  </div>
);

/**
 * Full Hygrometer Comparison CTA
 */
export const HygrometerComparison = ({ variant = 'secondary' }) => (
  <div className="cta-comparison">
    <h4 className="cta-comparison__title">Hygrometer Options</h4>
    <div className="cta-comparison__grid">
      <HygrometerCTA variant={variant} />
      <BudgetHygrometerCTA variant={variant} />
    </div>
  </div>
);

/**
 * Get CTA template by type
 * @param {string} type - CTA type: 'humidifier', 'tds', 'hygrometer', 'bundle'
 * @param {string} variant - Style variant: 'primary', 'secondary', 'compact'
 */
export const getCtaTemplate = (type, variant = 'primary') => {
  const templates = {
    humidifier: HumidifierCTA,
    'humidifier-premium': PremiumHumidifierCTA,
    'humidifier-budget': BudgetHumidifierCTA,
    tds: TdsMeterCTA,
    'tds-budget': BudgetTdsMeterCTA,
    hygrometer: HygrometerCTA,
    'hygrometer-budget': BudgetHygrometerCTA,
    bundle: HumidifierBundle,
    comparison: HumidifierComparison
  };

  const Template = templates[type];
  return Template ? <Template variant={variant} /> : null;
};

/**
 * CTA for blog post sections - Humidifier recommendation
 */
export const BlogHumidifierCTA = () => (
  <div className="blog-cta">
    <p className="blog-cta__text">
      Want to give your calathea the humidity it craves? Check out these tested 
      humidifiers that keep tropical plants happy.
    </p>
    <HumidifierCTA variant="primary" />
  </div>
);

/**
 * CTA for blog post sections - TDS Meter recommendation
 */
export const BlogTdsCTA = () => (
  <div className="blog-cta">
    <p className="blog-cta__text">
      Not sure if your water is safe? A TDS meter takes the guesswork out — 
      under 100 ppm is the sweet spot for calatheas.
    </p>
    <TdsMeterCTA variant="primary" />
  </div>
);

/**
 * CTA for blog post sections - Bundle recommendation
 */
export const BlogBundleCTA = () => (
  <div className="blog-cta">
    <p className="blog-cta__text">
      Track it, boost it: Start with a hygrometer to measure your current humidity, 
      then pair with a humidifier to keep it in the 50-60% zone.
    </p>
    <HumidifierBundle variant="primary" />
  </div>
);

/**
 * Re-export all components for convenience
 */
export {
  AffiliateCTATemplate,
  HumidifierCTA,
  PremiumHumidifierCTA,
  BudgetHumidifierCTA,
  TdsMeterCTA,
  BudgetTdsMeterCTA,
  HygrometerCTA,
  BudgetHygrometerCTA,
  InlineCTA,
  buildAffiliateLink
};

export default {
  AffiliateCTATemplate,
  HumidifierCTA,
  PremiumHumidifierCTA,
  BudgetHumidifierCTA,
  TdsMeterCTA,
  BudgetTdsMeterCTA,
  HygrometerCTA,
  BudgetHygrometerCTA,
  InlineCTA,
  HumidifierBundle,
  HumidifierComparison,
  TdsMeterComparison,
  HygrometerComparison,
  getCtaTemplate,
  BlogHumidifierCTA,
  BlogTdsCTA,
  BlogBundleCTA,
  buildAffiliateLink
};
