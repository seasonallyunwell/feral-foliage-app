/**
 * AffiliateCTATemplate - Reusable inline CTA component for Amazon affiliate links
 * Uses Amazon Associates tag: feralfoliage-20
 */

import React from 'react';
import './AffiliateCTAStyles.css';

const AMAZON_TAG = 'feralfoliage-20';

/**
 * Build Amazon affiliate URL with tag parameter
 * @param {string} asin - Amazon Product ID (ASIN)
 * @returns {string} Full Amazon URL with affiliate tag
 */
export const buildAffiliateLink = (asin) => {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
};

/**
 * Main AffiliateCTA component for inline use
 * @param {string} productName - Name of the product
 * @param {string} asin - Amazon ASIN/product ID
 * @param {string} price - Price display (optional)
 * @param {string} ctaText - Button text (optional, defaults to "View on Amazon")
 * @param {string} variant - Style variant: 'primary', 'secondary', 'compact'
 * @param {string} icon - Icon type: 'humidifier', 'meter', 'hygrometer', 'default'
 */
const AffiliateCTATemplate = ({
  productName,
  asin,
  price,
  ctaText = 'View on Amazon',
  variant = 'primary',
  icon = 'default'
}) => {
  const affiliateLink = buildAffiliateLink(asin);

  const getIcon = () => {
    const icons = {
      humidifier: '💧',
      meter: '📊',
      hygrometer: '🌡️',
      leaf: '🌿',
      default: '🛒'
    };
    return icons[icon] || icons.default;
  };

  return (
    <div className={`affiliate-cta affiliate-cta--${variant}`}>
      <div className="affiliate-cta__content">
        <span className="affiliate-cta__icon">{getIcon()}</span>
        <div className="affiliate-cta__details">
          <span className="affiliate-cta__product">{productName}</span>
          {price && <span className="affiliate-cta__price">{price}</span>}
        </div>
      </div>
      <a 
        href={affiliateLink}
        className="affiliate-cta__button"
        target="_blank"
        rel="noopener noreferrer sponsored"
      >
        {ctaText}
      </a>
      <span className="affiliate-cta__disclaimer">Amazon affiliate link</span>
    </div>
  );
};

/**
 * Pre-built CTA for Humidifiers (LEVOIT 6L - Top Pick)
 */
export const HumidifierCTA = ({ variant = 'primary' }) => (
  <AffiliateCTATemplate
    productName="LEVOIT 6L Ultrasonic Humidifier"
    asin="B09V1KX3B8"
    price="$80-90"
    ctaText="Check Price on Amazon"
    variant={variant}
    icon="humidifier"
  />
);

/**
 * Pre-built CTA for Premium Humidifier (MIRO)
 */
export const PremiumHumidifierCTA = ({ variant = 'primary' }) => (
  <AffiliateCTATemplate
    productName="MIRO NR08M Modular Humidifier"
    asin="B0BSHF4WWH"
    price="$100-130"
    ctaText="View Premium Option"
    variant={variant}
    icon="humidifier"
  />
);

/**
 * Pre-built CTA for Budget Humidifier (TaoTronics)
 */
export const BudgetHumidifierCTA = ({ variant = 'primary' }) => (
  <AffiliateCTATemplate
    productName="TaoTronics 4L Cool Mist Humidifier"
    asin="B085VLJJPH"
    price="$30-45"
    ctaText="View Budget Option"
    variant={variant}
    icon="humidifier"
  />
);

/**
 * Pre-built CTA for TDS Meter (HM Digital - Professional)
 */
export const TdsMeterCTA = ({ variant = 'primary' }) => (
  <AffiliateCTATemplate
    productName="HM Digital TDS Meter"
    asin="B01HYX5V3W"
    price="$15-25"
    ctaText="View on Amazon"
    variant={variant}
    icon="meter"
  />
);

/**
 * Pre-built CTA for Budget TDS Meter (iPstyle)
 */
export const BudgetTdsMeterCTA = ({ variant = 'primary' }) => (
  <AffiliateCTATemplate
    productName="iPstyle Digital TDS Meter"
    asin="B085VLJJPH"
    price="$10-15"
    ctaText="View Budget Option"
    variant={variant}
    icon="meter"
  />
);

/**
 * Pre-built CTA for Hygrometer (Govee - Smart Pick)
 */
export const HygrometerCTA = ({ variant = 'primary' }) => (
  <AffiliateCTATemplate
    productName="Govee Wireless Hygrometer"
    asin="B07Y36FW1S"
    price="$20-30"
    ctaText="View on Amazon"
    variant={variant}
    icon="hygrometer"
  />
);

/**
 * Pre-built CTA for Budget Hygrometer (AcuRite)
 */
export const BudgetHygrometerCTA = ({ variant = 'primary' }) => (
  <AffiliateCTATemplate
    productName="AcuRite Digital Hygrometer"
    asin="B00T0K3O14"
    price="$10-15"
    ctaText="View Budget Option"
    variant={variant}
    icon="hygrometer"
  />
);

/**
 * Compact inline CTA for embedding in paragraphs
 */
export const InlineCTA = ({ 
  text = 'Check prices on Amazon',
  asin = 'B09V1KX3B8',
  children 
}) => {
  const affiliateLink = buildAffiliateLink(asin);
  
  return (
    <a 
      href={affiliateLink}
      className="affiliate-cta-inline"
      target="_blank"
      rel="noopener noreferrer sponsored"
    >
      {children || text}
    </a>
  );
};

export default AffiliateCTATemplate;
