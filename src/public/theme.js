/**
 * Theme & Color System for Portfolio
 * Palette:
 * - Deep Aubergine (Primary Dark / Surface)
 * - Ice Silver (Typography / Structure / Frosted Borders)
 * - Marigold (Radiant Glow / Active Indicators / CTA Highlights)
 */

export const THEME = {
  colors: {
    // Deep Aubergine spectrum
    aubergineDark: '#130722',       // Canvas & primary page background
    aubergineSurface: '#1A0B2E',    // Bento card surfaces & containers
    aubergineElevated: '#24123E',   // Hover cards & active containers
    aubergineBorder: '#351B5A',     // Card separation borders
    
    // Ice Silver spectrum
    iceSilverPure: '#FFFFFF',       // Top-level emphasis
    iceSilverHeading: '#F8FAFC',    // Main titles & headers
    iceSilverBody: '#E2E8F0',       // Standard readable text
    iceSilverMuted: '#94A3B8',      // Metadata, timelines, tags
    iceSilverBorder: 'rgba(226, 232, 240, 0.12)', // Subtle frosted glass outline
    
    // Marigold spectrum
    marigoldPrimary: '#FFB300',     // Vibrant golden accent
    marigoldWarm: '#F59E0B',        // Deep marigold for buttons/pills
    marigoldGlow: '#FBBF24',        // High-contrast highlights
    marigoldShadow: 'rgba(245, 158, 11, 0.35)', // Ambient neon glow
    marigoldSoft: 'rgba(255, 179, 0, 0.15)'     // Subtle tint for badge backgrounds
  },
  
  fonts: {
    heading: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'Fira Code', 'JetBrains Mono', monospace"
  }
};

/**
 * Generates HTML text styled with the theme colors for $w.Text elements (.html property)
 */
export function formatHtmlHeading(text, level = 2, highlightText = '', highlightColor = THEME.colors.marigoldPrimary) {
  const content = highlightText && text.includes(highlightText)
    ? text.replace(highlightText, `<span style="color: ${highlightColor}; font-weight: 700;">${highlightText}</span>`)
    : text;

  const fontSizes = {
    1: '38px',
    2: '28px',
    3: '22px',
    4: '18px'
  };

  return `<h${level} style="margin: 0; font-family: ${THEME.fonts.heading}; font-size: ${fontSizes[level] || '24px'}; color: ${THEME.colors.iceSilverHeading}; font-weight: 700; line-height: 1.2;">${content}</h${level}>`;
}

export function formatHtmlParagraph(text, isMuted = false) {
  const color = isMuted ? THEME.colors.iceSilverMuted : THEME.colors.iceSilverBody;
  return `<p style="margin: 0; font-family: ${THEME.fonts.body}; font-size: 15px; color: ${color}; line-height: 1.6;">${text}</p>`;
}

export function formatHtmlBadge(label, isMarigold = false) {
  const bg = isMarigold ? THEME.colors.marigoldSoft : 'rgba(255, 255, 255, 0.06)';
  const color = isMarigold ? THEME.colors.marigoldPrimary : THEME.colors.iceSilverMuted;
  const border = isMarigold ? `1px solid ${THEME.colors.marigoldPrimary}` : `1px solid ${THEME.colors.iceSilverBorder}`;
  
  return `<span style="display: inline-block; padding: 4px 10px; border-radius: 9999px; background: ${bg}; border: ${border}; color: ${color}; font-size: 12px; font-weight: 600; font-family: ${THEME.fonts.heading}; letter-spacing: 0.5px;">${label}</span>`;
}

/**
 * Safely applies style properties if the Wix Element supports .style API
 */
export function applyElementTheme(element, styles = {}) {
  if (!element) return;
  try {
    if (element.style) {
      if (styles.backgroundColor) element.style.backgroundColor = styles.backgroundColor;
      if (styles.color) element.style.color = styles.color;
      if (styles.borderColor) element.style.borderColor = styles.borderColor;
      if (styles.borderWidth) element.style.borderWidth = styles.borderWidth;
    }
  } catch (err) {
    // Fallback gracefully on Wix elements with read-only styles
  }
}
