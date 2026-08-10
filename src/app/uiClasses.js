// Shared Tailwind utility-class strings.
// Not CSS - plain JS constants applied via className, kept here so the many
// pages that reuse the same look (buttons, cards, section headings, forms)
// stay visually consistent without duplicating long class strings everywhere.

export const btnClass =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gold bg-gold px-7 py-[13px] text-[15px] font-bold tracking-[0.2px] text-navy-deep no-underline transition-all duration-[250ms] ease-in-out hover:-translate-y-px hover:border-gold-dark hover:bg-gold-dark hover:text-white hover:shadow-s";

export const btnLargeClass =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gold bg-gold px-8 py-3.5 text-base font-bold leading-none tracking-[0.2px] text-navy-deep no-underline transition-all duration-[250ms] ease-in-out hover:-translate-y-px hover:border-gold-dark hover:bg-gold-dark hover:text-white hover:shadow-s";

export const btnOutlineClass =
  "inline-flex items-center gap-2 rounded-full border-[1.5px] border-white bg-transparent px-[26px] py-3 text-[15px] font-bold text-white no-underline transition-all duration-[250ms] ease-in-out hover:-translate-y-px hover:bg-white/[0.12]";

// Section heading helpers
export const subTitleClass = "text-[13px] font-bold uppercase tracking-[2px] text-gold-dark";

export const hnyTitleClass = "my-2.5 mb-4 text-[32px] font-bold leading-[1.25] text-navy";

export const sectionTitleClass =
  "relative mb-2 mt-14 text-center text-[34px] font-bold leading-[1.2] text-navy after:mx-auto after:mt-3.5 after:block after:h-[3px] after:w-14 after:rounded-[3px] after:bg-gold after:content-['']";

// Services grid
export const servicePageClass = "flex w-full justify-center px-6 py-3 pb-12";
export const serviceBoxClass =
  "grid w-full max-w-container grid-cols-4 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1";
export const featuresServiceClass =
  "flex h-full cursor-pointer flex-col items-center gap-1.5 rounded-m border border-border bg-white px-[22px] py-[38px] text-center shadow-s transition-all duration-[250ms] ease-in-out hover:-translate-y-1.5 hover:border-gold hover:shadow-m";
export const featuresServiceImgClass =
  "mb-2 h-20 w-20 rounded-full bg-cream object-contain p-4 shadow-s transition-all duration-[250ms] ease-in-out group-hover:bg-gold group-hover:shadow-m";
export const featuresServiceTitleClass =
  "flex min-h-[52px] items-center justify-center font-body text-[17px] font-bold leading-snug text-navy line-clamp-2";
export const featuresServiceTextClass = "line-clamp-2 min-h-[40px] text-sm leading-normal text-ink-soft";

// About
export const aboutClass =
  "mx-auto flex max-w-container flex-wrap items-center justify-center gap-x-[60px] gap-y-8 bg-white px-[6vw] py-6 pb-20 max-md:px-[22px] max-md:pb-[60px]";
export const aboutImgWrapClass = "relative w-[420px] flex-1 basis-[380px]";
export const aboutImgFrameClass =
  "absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-l border-2 border-gold/40 max-md:-bottom-3 max-md:-right-3";
export const aboutImgInnerClass = "relative w-full rounded-l shadow-m";
export const aboutLeftClass = "w-[420px] flex-1 basis-[420px] max-md:w-full";
export const aboutSubTitleRowClass = "mb-1 flex items-center gap-3";
export const aboutSubTitleRuleClass = "h-[2px] w-9 rounded-full bg-gold";
export const aboutLeadPClass = "mb-3 text-lg font-semibold leading-[1.6] text-navy";
export const aboutFeaturesClass = "mt-5 mb-[26px] grid grid-cols-2 gap-3 max-md:grid-cols-1";
export const aboutFeatureClass =
  "flex items-center gap-2.5 rounded-m border border-border bg-cream/60 px-3.5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-gold/50 hover:bg-cream";
export const aboutFeatureIconWrapClass = "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark";
export const aboutFeatureIconClass = "!text-[16px]";

// Contact
export const contactSectionClass =
  "flex flex-wrap items-start gap-10 bg-cover bg-center px-[6vw] py-[72px] max-md:px-[22px] max-md:py-12";
export const contactTitleClass = "flex-1 basis-[480px]";
export const contactBoxRowClass = "flex flex-wrap gap-[18px]";
export const contactBoxClass =
  "flex w-[220px] min-h-[150px] cursor-default flex-col items-center justify-center gap-2.5 rounded-m border border-white/[0.14] bg-white/[0.06] p-[18px] text-center backdrop-blur-[2px] transition-all duration-[250ms] ease-in-out hover:-translate-y-1 hover:border-gold hover:bg-white/10";
export const contactFormWrapClass = "flex-1 basis-[380px] max-w-[440px] max-md:max-w-full";
export const contactFormClass = "flex flex-col justify-center rounded-l bg-white p-8 shadow-l";
export const formGroupClass = "flex flex-col gap-1.5";
export const formGroupLabelClass = "text-[13px] font-semibold text-ink-soft";
export const formGroupInputClass =
  "mb-4 h-12 w-full rounded-s border border-border bg-cream px-[18px] text-[15px] text-ink outline-none transition-colors duration-200 focus:border-gold focus:bg-white";

// Gallery
export const galleryGridClass =
  "mx-auto grid max-w-container grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 px-[6vw] py-2 pb-[60px] max-md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-md:px-5 max-md:pb-12";
export const galleryImageCardClass =
  "overflow-hidden rounded-m shadow-s transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-m";
export const galleryImageClass = "h-60 w-full object-cover";
export const galleryEmptyClass = "col-span-full py-10 text-center text-ink-soft";

// Blog / service listing cards
export const blogSectionClass = "mx-auto max-w-container px-[6vw] py-10 pb-[70px]";
export const blogHeadingClass = "mb-9 text-center text-[34px]";
export const blogRowClass = "flex flex-wrap justify-center gap-7";
export const postImageCardClass =
  "w-[340px] overflow-hidden rounded-m border border-border bg-white shadow-s transition-all duration-[250ms] ease-in-out hover:-translate-y-1.5 hover:shadow-m max-md:w-full max-md:max-w-[380px]";
export const postImageHeaderClass = "relative h-[200px] overflow-hidden";
export const postImageClass = "h-full w-full object-cover transition-transform duration-[400ms] ease-in-out hover:scale-[1.06]";
export const postBodyClass = "px-[18px] pb-2 pt-[18px]";
export const postBodyLinkClass = "text-lg font-bold text-navy no-underline hover:text-gold-dark";
export const blogActionsClass = "flex gap-5 px-[18px] pb-[18px] pt-1";
export const blogActionLinkClass = "text-[13px] font-bold uppercase tracking-[0.4px] text-gold-dark no-underline";

export const singlePostClass = "mx-auto max-w-container bg-no-repeat bg-[length:100%_100%] px-[6vw] py-12";
export const singleDetailsClass = "py-3";
export const singleTitleClass = "text-[32px] font-bold text-navy";
export const singlePostCardClass = "rounded-l border border-border bg-white p-6 shadow-m";

// Login
export const loginWrapClass = "flex flex-1 w-full items-center justify-center bg-cream px-6 py-[60px]";
export const loginFormWrapClass = "w-full max-w-[420px] overflow-hidden rounded-l border border-border bg-white shadow-l";
export const loginFormClass = "flex flex-col justify-center gap-4 px-9 pb-6 pt-11";
export const loginInputClass =
  "w-full rounded-s border border-border bg-cream px-4 py-3.5 text-[15px] text-ink transition-colors duration-200 outline-none focus:border-gold";
export const forgotBtnClass =
  "mt-2 w-full cursor-pointer border-none bg-navy p-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-2";

// Panels / breadcrumb (blog upload listing)
export const panelClass = "flex items-center bg-cream px-[6vw] py-3.5";

// Admin forms (blog / service upload)
export const blogContainerClass = "mx-auto max-w-[960px] px-6 pb-20 pt-10";
export const formGroupFullClass = "mx-auto flex w-full gap-6 pb-5 max-md:flex-col max-md:gap-0";
export const formGroupBlockClass = "mb-2.5 w-full";
export const inputFieldClass =
  "w-full rounded-s border border-border bg-cream px-4 py-3.5 text-[15px] transition-colors duration-200 focus:border-gold focus:bg-white focus:outline-none";
export const fileInputClass = "w-full py-2.5";
export const submitButtonClass =
  "w-full cursor-pointer rounded-s border-none bg-gold px-0 py-3.5 text-[15px] font-bold text-navy-deep transition-colors duration-200 hover:bg-gold-dark hover:text-white";

// Service / product detail pages
export const breadcrumbClass = "mb-5 text-sm text-ink-soft";
export const breadcrumbLinkClass = "text-ink-soft no-underline";
export const breadcrumbCurrentClass = "text-navy";
export const productDetailClass =
  "mx-auto my-6 flex max-w-container flex-wrap gap-[34px] rounded-l border border-border bg-white p-7 shadow-s max-md:m-4 max-md:gap-5 max-md:p-5";
export const productImagesClass = "max-w-[380px] flex-1 basis-[320px] max-md:max-w-full";
export const mainImageClass = "h-[280px] w-full rounded-m object-cover";
export const thumbnailImagesClass = "mt-2.5 flex gap-2.5";
export const thumbnailImageClass = "h-[60px] w-[60px] cursor-pointer rounded-s border border-border object-cover";
export const productInfoClass = "flex-1 basis-[380px] pb-1";
export const productInfoTitleClass = "mb-3 text-[25px] leading-[1.3] text-navy max-md:text-[21px]";
export const skuClass = "text-[15px] text-ink-soft";
export const priceClass = "mb-3.5 inline-block rounded-full border border-border bg-cream px-[18px] py-2 text-xl font-bold text-navy-deep";
export const paymentInfoClass = "text-sm text-ink-soft";
export const paymentInfoLinkClass = "text-navy no-underline";
export const actionsWrapperClass = "mb-[18px] flex border-b border-border pb-[22px]";
export const actionsRowClass = "flex flex-wrap gap-3";
export const addToCartClass = "rounded-full bg-gold px-6 py-3 text-[15px] font-bold text-navy-deep transition-colors duration-200 hover:bg-gold-dark hover:text-white";
export const buyNowClass = "rounded-full bg-navy px-6 py-3 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-navy-2";
export const additionalInfoClass = "mt-1 text-sm";
export const tabsClass = "mt-5 border-b border-border";
export const tabButtonClass = "mr-5 cursor-pointer border-none border-b-2 border-transparent bg-none py-2.5 text-[15px] font-semibold text-ink-soft";
export const tabButtonActiveClass = "border-gold font-bold text-navy";
export const tabContentClass = "mt-5 text-sm leading-[1.8] text-ink-soft";

// Admin dashboard
export const adminWrapClass = "mx-auto max-w-container px-[6vw] py-12 pb-20 max-md:px-5 max-md:py-8 max-md:pb-[60px]";
export const adminHeaderClass = "mb-8 text-center";
export const adminHeaderTitleClass = "mb-2 text-[30px]";
export const adminHeaderTextClass = "text-ink-soft";
export const adminDashboardLinksClass = "grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5";
export const adminDashboardCardClass =
  "block rounded-m border border-border bg-white p-7 px-6 shadow-s transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-m";
export const adminDashboardCardTitleClass = "mb-1.5 text-navy";
export const adminDashboardCardTextClass = "mb-0 text-sm text-ink-soft";

// Admin gallery manager
export const adminUploadCardClass = "mx-auto mb-12 flex max-w-[480px] flex-col gap-3.5 rounded-l border border-border bg-white p-7 shadow-s max-md:p-5";
export const adminUploadDropClass =
  "flex h-40 cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-m border-2 border-dashed border-border bg-cream text-sm text-ink-soft transition-colors duration-200 hover:border-gold";
export const adminGalleryImgGridClass = "grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4";
export const adminGalleryEmptyClass = "col-span-full py-10 text-center text-ink-soft";
export const adminGalleryCardClass = "group relative aspect-square overflow-hidden rounded-m shadow-s";
export const adminGalleryCardOverlayClass =
  "absolute inset-0 flex items-start justify-end bg-gradient-to-b from-navy-deep/55 to-transparent p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100";
export const adminGalleryCardActionsClass = "flex gap-1.5";
export const adminGalleryActionBtnClass =
  "flex h-[30px] w-[30px] items-center justify-center rounded-full border-none bg-white/90 text-navy transition-colors duration-200 hover:enabled:bg-white disabled:cursor-not-allowed disabled:opacity-40";
export const adminGalleryDeleteBtnClass = "text-danger";

// Admin service tiles manager
export const adminServiceGridClass = "grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4";
export const adminServiceCardClass = "flex flex-col gap-2 rounded-m border border-border bg-white p-4 shadow-s";
export const adminServiceCardHeaderClass = "flex items-center gap-3";
export const adminServiceCardIconClass = "h-12 w-12 shrink-0 rounded-full bg-cream object-contain p-2";
export const adminServiceCardTitleClass = "text-sm font-bold text-navy";
export const adminServiceCardDescClass = "text-xs text-ink-soft";
export const adminServiceCardHrefClass = "text-xs text-gold-dark";
export const adminServiceCardActionsClass = "mt-2 flex items-center gap-1.5 border-t border-border pt-2";
export const adminServiceEditInputClass =
  "w-full rounded-s border border-border bg-cream px-2.5 py-1.5 text-sm outline-none transition-colors duration-200 focus:border-gold focus:bg-white";
export const adminServiceEditLabelClass = "text-xs font-semibold text-ink-soft";
