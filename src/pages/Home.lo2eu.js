import wixLocation from 'wix-location';
import { THEME, formatHtmlHeading, formatHtmlParagraph, formatHtmlBadge, applyElementTheme } from 'public/theme';
import { PROFILE_DATA, PROJECTS_DATA, CORE_ARSENAL } from 'public/portfolioData';

$w.onReady(function () {
  initPageTheme();
  renderHeroProfile();
  renderImpactMetrics();
  renderFeaturedProjects();
  renderCoreArsenal();
  renderCallToAction();
});

/**
 * Applies Deep Aubergine backgrounds to sections and page containers
 */
function initPageTheme() {
  const sectionsToTheme = ['#page1', '#section108', '#section6', '#Section1Regular', '#Section1WidgetBookings'];
  sectionsToTheme.forEach(id => {
    try {
      if ($w(id)) {
        applyElementTheme($w(id), { backgroundColor: THEME.colors.aubergineDark });
      }
    } catch (e) {}
  });

  const columnsToTheme = ['#section1col1', '#column206', '#column210', '#column207', '#column208', '#column209'];
  columnsToTheme.forEach(id => {
    try {
      if ($w(id)) {
        applyElementTheme($w(id), {
          backgroundColor: THEME.colors.aubergineSurface,
          borderColor: THEME.colors.iceSilverBorder,
          borderWidth: '1px'
        });
      }
    } catch (e) {}
  });
}

/**
 * Left Profile / Hero Statement
 */
function renderHeroProfile() {
  // Main Hero Headline
  try {
    if ($w('#text1')) {
      $w('#text1').html = `
        <div style="font-family: ${THEME.fonts.heading};">
          <div style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: ${THEME.colors.marigoldPrimary}; box-shadow: 0 0 10px ${THEME.colors.marigoldPrimary};"></span>
            <span style="color: ${THEME.colors.marigoldPrimary}; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">
              ${PROFILE_DATA.statusBadge}
            </span>
          </div>
          <h1 style="font-size: 42px; font-weight: 800; line-height: 1.15; color: ${THEME.colors.iceSilverPure}; margin: 0 0 16px 0;">
            Hi, I'm <span style="color: ${THEME.colors.marigoldPrimary};">${PROFILE_DATA.name}</span>.
          </h1>
          <p style="font-size: 20px; font-weight: 600; color: ${THEME.colors.iceSilverHeading}; margin: 0 0 14px 0;">
            ${PROFILE_DATA.role}
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: ${THEME.colors.iceSilverMuted}; max-width: 600px; margin: 0;">
            ${PROFILE_DATA.headline}
          </p>
        </div>
      `;
    }
  } catch (e) {}

  // Hero Avatar / Image
  try {
    if ($w('#image1')) {
      applyElementTheme($w('#image1'), {
        borderColor: THEME.colors.marigoldWarm,
        borderWidth: '2px'
      });
    }
  } catch (e) {}

  // Secondary subhead/bio
  try {
    if ($w('#text2')) {
      $w('#text2').html = `
        <p style="font-family: ${THEME.fonts.body}; font-size: 15px; color: ${THEME.colors.iceSilverBody}; line-height: 1.6;">
          ${PROFILE_DATA.subheadline}
        </p>
      `;
    }
  } catch (e) {}
}

/**
 * 3-Stat Metric Counters (e.g. 15+ / 4+ / 100%)
 */
function renderImpactMetrics() {
  const statTextPairs = [
    { valueEl: '#text4', labelEl: '#text6', stat: PROFILE_DATA.stats[0] },
    { valueEl: '#text7', labelEl: '#text9', stat: PROFILE_DATA.stats[1] },
    { valueEl: '#text41', labelEl: '#text42', stat: PROFILE_DATA.stats[2] }
  ];

  statTextPairs.forEach(({ valueEl, labelEl, stat }) => {
    if (!stat) return;
    try {
      if ($w(valueEl)) {
        $w(valueEl).html = `
          <div style="font-family: ${THEME.fonts.heading}; font-size: 36px; font-weight: 900; color: ${THEME.colors.marigoldPrimary}; line-height: 1;">
            ${stat.value}
          </div>
        `;
      }
      if ($w(labelEl)) {
        $w(labelEl).html = `
          <div style="font-family: ${THEME.fonts.body}; font-size: 13px; font-weight: 600; color: ${THEME.colors.iceSilverMuted}; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px;">
            ${stat.label}
          </div>
        `;
      }
    } catch (e) {}
  });
}

/**
 * Featured Bento Project Showcase
 */
function renderFeaturedProjects() {
  try {
    if ($w('#text25')) {
      $w('#text25').html = `
        <div style="font-family: ${THEME.fonts.heading}; margin-bottom: 8px;">
          <span style="color: ${THEME.colors.marigoldPrimary}; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Selected Works</span>
          <h2 style="font-size: 30px; font-weight: 800; color: ${THEME.colors.iceSilverHeading}; margin: 4px 0 0 0;">Featured Projects</h2>
        </div>
      `;
    }
  } catch (e) {}

  // Populate gallery if present
  try {
    if ($w('#gallery6')) {
      const featuredItems = PROJECTS_DATA.slice(0, 4).map(p => ({
        src: p.image,
        title: p.title,
        description: `${p.tags.join(' • ')} — ${p.shortDesc}`
      }));
      $w('#gallery6').items = featuredItems;
    }
  } catch (e) {}
}

/**
 * 4-Card Arsenal Suite (Capabilities)
 */
function renderCoreArsenal() {
  const cardElements = [
    { titleEl: '#text35', descEl: '#text36', item: CORE_ARSENAL[0] },
    { titleEl: '#text37', descEl: '#text38', item: CORE_ARSENAL[1] },
    { titleEl: '#text39', descEl: '#text40', item: CORE_ARSENAL[2] },
    { titleEl: '#text30', descEl: '#text31', item: CORE_ARSENAL[3] }
  ];

  cardElements.forEach(({ titleEl, descEl, item }) => {
    if (!item) return;
    try {
      if ($w(titleEl)) {
        $w(titleEl).html = `
          <h3 style="font-family: ${THEME.fonts.heading}; font-size: 18px; font-weight: 700; color: ${THEME.colors.iceSilverHeading}; margin: 0 0 8px 0;">
            ${item.title}
          </h3>
        `;
      }
      if ($w(descEl)) {
        const skillsHtml = item.skills.map(s => `
          <span style="display: inline-block; padding: 2px 8px; margin: 2px; border-radius: 4px; background: rgba(255,255,255,0.05); border: 1px solid ${THEME.colors.iceSilverBorder}; font-size: 11px; color: ${THEME.colors.iceSilverMuted};">
            ${s}
          </span>
        `).join('');

        $w(descEl).html = `
          <p style="font-family: ${THEME.fonts.body}; font-size: 14px; color: ${THEME.colors.iceSilverBody}; line-height: 1.5; margin: 0 0 10px 0;">
            ${item.desc}
          </p>
          <div>${skillsHtml}</div>
        `;
      }
    } catch (e) {}
  });
}

/**
 * "Let's Talk" Collaboration CTA
 */
function renderCallToAction() {
  try {
    if ($w('#button22')) {
      $w('#button22').label = "Let's Connect →";
      applyElementTheme($w('#button22'), {
        backgroundColor: THEME.colors.marigoldWarm,
        color: THEME.colors.aubergineDark
      });
      $w('#button22').onClick(() => {
        wixLocation.to('/contact');
      });
    }
  } catch (e) {}
}
