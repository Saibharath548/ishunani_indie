import wixLocation from 'wix-location';
import { THEME, formatHtmlHeading, formatHtmlParagraph, formatHtmlBadge, applyElementTheme } from 'public/theme';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from 'public/portfolioData';

let currentCategory = "All";

$w.onReady(function () {
  initPageTheme();
  renderHeader();
  renderCategoryFilters();
  renderProjectCards();
});

function initPageTheme() {
  const sections = ['#page1', '#section7', '#section8'];
  sections.forEach(id => {
    try {
      if ($w(id)) {
        applyElementTheme($w(id), { backgroundColor: THEME.colors.aubergineDark });
      }
    } catch (e) {}
  });

  const columns = ['#column26', '#column27', '#column28', '#column29', '#column30', '#column31'];
  columns.forEach(id => {
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

function renderHeader() {
  try {
    if ($w('#text25')) {
      $w('#text25').html = `
        <div style="font-family: ${THEME.fonts.heading}; text-align: center; margin-bottom: 24px;">
          <span style="color: ${THEME.colors.marigoldPrimary}; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">Portfolio Archive</span>
          <h1 style="font-size: 40px; font-weight: 800; color: ${THEME.colors.iceSilverHeading}; margin: 8px 0 12px 0;">Selected Works</h1>
          <p style="font-size: 16px; color: ${THEME.colors.iceSilverMuted}; max-width: 650px; margin: 0 auto;">
            A curated showcase of commercial titles, game jam prototypes, and interactive technical art.
          </p>
        </div>
      `;
    }
  } catch (e) {}
}

/**
 * Renders category filters (All / Games / 3D & VR / Web)
 */
function renderCategoryFilters() {
  const filterElements = [
    { el: '#text75', category: 'All' },
    { el: '#text76', category: 'Games' },
    { el: '#text77', category: '3D & VR' }
  ];

  filterElements.forEach(({ el, category }) => {
    try {
      if ($w(el)) {
        updateFilterStyle(el, category);
        $w(el).onClick(() => {
          currentCategory = category;
          filterElements.forEach(f => updateFilterStyle(f.el, f.category));
          renderProjectCards();
        });
      }
    } catch (e) {}
  });
}

function updateFilterStyle(selector, category) {
  try {
    const isActive = (category === currentCategory);
    const bg = isActive ? THEME.colors.marigoldWarm : THEME.colors.aubergineSurface;
    const color = isActive ? THEME.colors.aubergineDark : THEME.colors.iceSilverBody;
    const border = isActive ? `1px solid ${THEME.colors.marigoldPrimary}` : `1px solid ${THEME.colors.iceSilverBorder}`;

    $w(selector).html = `
      <div style="display: inline-block; padding: 6px 16px; border-radius: 9999px; background: ${bg}; border: ${border}; color: ${color}; font-family: ${THEME.fonts.heading}; font-size: 13px; font-weight: 700; cursor: pointer; text-align: center; transition: all 0.2s ease;">
        ${category}
      </div>
    `;
  } catch (e) {}
}

/**
 * Binds data to the 6 project cards
 */
function renderProjectCards() {
  const filtered = currentCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === currentCategory);

  const cardSlots = [
    { col: '#column26', img: '#image1', title: '#text78', desc: '#text79' },
    { col: '#column27', img: '#image2', title: '#text80', desc: '#text81' },
    { col: '#column28', img: '#image3', title: '#text82', desc: '#text83' },
    { col: '#column29', img: '#image4', title: '#text84', desc: '#text85' },
    { col: '#column30', img: '#image5', title: '#text86', desc: '#text87' },
    { col: '#column31', img: '#image6', title: '#text88', desc: '#text89' }
  ];

  cardSlots.forEach((slot, index) => {
    const project = filtered[index];
    try {
      if (!project) {
        // If fewer projects match the filter, collapse the slot
        if ($w(slot.col)) $w(slot.col).collapse();
        return;
      }

      if ($w(slot.col)) $w(slot.col).expand();

      // Card Image
      if ($w(slot.img)) {
        $w(slot.img).src = project.image;
        $w(slot.img).alt = project.title;
      }

      // Title & Year
      if ($w(slot.title)) {
        $w(slot.title).html = `
          <div style="font-family: ${THEME.fonts.heading}; margin: 8px 0 4px 0;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h3 style="font-size: 19px; font-weight: 700; color: ${THEME.colors.iceSilverHeading}; margin: 0;">${project.title}</h3>
              <span style="font-size: 12px; font-weight: 600; color: ${THEME.colors.marigoldPrimary}; font-family: ${THEME.fonts.mono};">${project.timeline}</span>
            </div>
          </div>
        `;
      }

      // Tags & Short Description
      if ($w(slot.desc)) {
        const tagsHtml = project.tags.map(t => `
          <span style="display: inline-block; padding: 2px 7px; margin-right: 4px; margin-bottom: 6px; border-radius: 4px; background: rgba(255, 179, 0, 0.1); border: 1px solid rgba(255, 179, 0, 0.3); font-size: 11px; font-weight: 600; color: ${THEME.colors.marigoldPrimary};">
            ${t}
          </span>
        `).join('');

        $w(slot.desc).html = `
          <div style="margin-bottom: 8px;">${tagsHtml}</div>
          <p style="font-family: ${THEME.fonts.body}; font-size: 13px; line-height: 1.5; color: ${THEME.colors.iceSilverMuted}; margin: 0;">
            ${project.shortDesc}
          </p>
        `;
      }
    } catch (e) {}
  });
}
