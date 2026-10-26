(function () {
  const profile = window.PORTFOLIO_PROFILE || {};
  const projects = [
    {
      kind: "system",
      status: "live",
      mark: "EV",
      color: "#0f4f4a",
      title: "EVO HR",
      links: [
        { href: "https://evo-hr.com/", ar: "الموقع والنظام", en: "Website and system" },
        { href: "https://evo-hr.com/login", ar: "صفحة الدخول", en: "Login" }
      ],
      access: { email: "admintest@example.com", password: "123456" },
      ar: {
        category: "نظام موارد بشرية متكامل",
        summary: "منصة موارد بشرية من الصفحة التعريفية حتى التشغيل اليومي. تجمع ملفات الموظفين والحضور والرواتب والفروع، وترتبط بأجهزة البصمة وبـ Zoom، وفيها توظيف وصلاحيات وتقارير للامتثال.",
        points: ["رواتب وحضور", "أجهزة البصمة", "توظيف", "Zoom", "صلاحيات", "تقارير وفروع"]
      },
      en: {
        category: "Complete HR system",
        summary: "An HR platform from the public site through daily operations: employee files, attendance, payroll, and branches, connected to fingerprint devices and Zoom, with hiring, permissions, and compliance reports.",
        points: ["Payroll and attendance", "Fingerprint devices", "Hiring", "Zoom", "Permissions", "Reports and branches"]
      }
    },
    {
      kind: "system",
      status: "partial",
      mark: "MG",
      color: "#1d4e89",
      title: "Magalis",
      links: [{ href: "https://mag-opt.com/", ar: "النسخة الحية", en: "Live system" }],
      ar: {
        category: "حسابات وشحن ومتابعة عملاء",
        summary: "منصة تشغيل للشركة: حسابات، شحن، متابعة عملاء، واتساب، ربط Meta WhatsApp، وطلبات Shopify. البيانات الحية خاصة بالشركة، والنسخة متاحة معي للتجربة محليًا.",
        points: ["حسابات", "شحن", "متابعة عملاء", "واتساب", "Meta WhatsApp", "Shopify"]
      },
      en: {
        category: "Accounting, shipping, and customers",
        summary: "An operations platform for accounting, shipping, customer follow-up, WhatsApp, the Meta WhatsApp connection, and Shopify orders. Live data stays with the company, and a local trial is available with me.",
        points: ["Accounting", "Shipping", "Customer follow-up", "WhatsApp", "Meta WhatsApp", "Shopify"]
      }
    },
    {
      kind: "system",
      status: "client",
      mark: "ES",
      color: "#0b3a4a",
      title: "إسنا",
      enTitle: "Esna",
      links: [{ href: "https://tracking.erp.arabilancers.com/", ar: "دخول النظام", en: "System login" }],
      ar: {
        category: "تتبع المركبات وإدارة الأسطول",
        summary: "نظام لعميل يدير به نشاط تتبع المركبات والأسطول، من الدخول حتى لوحة التشغيل الخاصة بالشركة.",
        points: ["تتبع مركبات", "إدارة أسطول", "لوحة تشغيل", "نشاط العميل"]
      },
      en: {
        category: "Vehicle tracking and fleet",
        summary: "A client system for a vehicle-tracking and fleet business, from sign-in through the company’s operating dashboard.",
        points: ["Vehicle tracking", "Fleet management", "Operations dashboard", "Client business"]
      }
    },
    {
      kind: "system",
      status: "live",
      mark: "LM",
      color: "#16324f",
      title: "Lex Mizan",
      links: [
        { href: "https://lexmizan.com/", ar: "الموقع والنظام", en: "Website and system" },
        { href: "https://lexmizan.com/login", ar: "صفحة الدخول", en: "Login" }
      ],
      access: { email: "shaimaa@admin.com", password: "123456789" },
      ar: {
        category: "نظام إدارة مكاتب المحاماة",
        summary: "نظام للمحامين يجمع القضايا والموكلين والجلسات والمستندات والفواتير في مكان واحد، مع موقع تعريفي وصفحة دخول للتجربة.",
        points: ["قضايا", "موكلون", "جلسات", "مستندات", "فواتير"]
      },
      en: {
        category: "Law firm management",
        summary: "A system for law offices covering cases, clients, hearings, documents, and billing, with a public site and a login for a trial.",
        points: ["Cases", "Clients", "Hearings", "Documents", "Billing"]
      }
    },
    {
      kind: "store",
      status: "live",
      mark: "ST",
      color: "#9a4e24",
      title: "متجر إلكتروني",
      enTitle: "Online store",
      links: [
        { href: "https://store.erp.arabilancers.com/", ar: "المتجر", en: "Store" },
        { href: "https://store.erp.arabilancers.com/admin/login", ar: "لوحة التحكم", en: "Dashboard" }
      ],
      access: { email: "admin@admin.com", password: "Admin@123" },
      ar: {
        category: "متجر مع لوحة تحكم",
        summary: "متجر متكامل بواجهة شراء ولوحة إدارة: منتجات، عروض، سلة، دفع، وشحن للمدن.",
        points: ["واجهة المتجر", "لوحة تحكم", "منتجات وعروض", "دفع وشحن"]
      },
      en: {
        category: "Store with an admin dashboard",
        summary: "A complete store with a shopping front and an admin dashboard: products, offers, cart, payment, and city delivery.",
        points: ["Storefront", "Admin dashboard", "Products and offers", "Payment and delivery"]
      }
    },
    {
      kind: "system",
      status: "local",
      mark: "POS",
      color: "#3f4d3a",
      title: "ERP و POS",
      enTitle: "ERP and POS",
      links: [],
      ar: {
        category: "نظام موارد ونقطة بيع",
        summary: "برنامج ERP و POS متكامل للبيع والمخزون والحسابات. النسخة الحية لدى الشركة لحفظ البيانات، والتجربة متاحة محليًا.",
        points: ["مبيعات", "مخزون", "حسابات", "نقطة بيع"]
      },
      en: {
        category: "ERP and point of sale",
        summary: "An integrated ERP and POS for sales, inventory, and accounting. The live system stays with the company, and it can be demonstrated locally.",
        points: ["Sales", "Inventory", "Accounting", "Point of sale"]
      }
    },
    {
      kind: "system",
      status: "client",
      mark: "TR",
      color: "#3d3a36",
      title: "المتحدة للنقل والسيارات",
      enTitle: "United Transport and Cars",
      links: [],
      ar: {
        category: "نظام نقل ومركبات",
        summary: "عمل على نظام المتحدة للنقل والسيارات لتشغيل نشاط النقل والمركبات.",
        points: ["نقل", "سيارات", "تشغيل النشاط"]
      },
      en: {
        category: "Transport and vehicles",
        summary: "Work on the United Transport and Cars system for running a transport and vehicle business.",
        points: ["Transport", "Vehicles", "Daily operations"]
      }
    },
    {
      kind: "website",
      status: "live",
      mark: "YT",
      color: "#1a4f73",
      title: "Yachtly",
      links: [{ href: "https://yachtly.mag-opt.com/", ar: "زيارة الموقع", en: "Visit site" }],
      ar: {
        category: "تأجير يخوت",
        summary: "موقع Yachtly لحجز رحلات اليخوت: اختيار الوجهة، رحلة خاصة أو مشتركة، وأسعار واضحة.",
        points: ["اختيار الوجهة", "رحلة خاصة", "رحلة مشتركة", "أسعار واضحة"]
      },
      en: {
        category: "Yacht rental",
        summary: "Yachtly for booking yacht trips: choose a destination, a private charter or a shared trip, with the price shown up front.",
        points: ["Destinations", "Private charter", "Shared trip", "Clear pricing"]
      }
    },
    {
      kind: "website",
      status: "live",
      mark: "بر",
      color: "#7a2f3b",
      title: "جمعية البر بالخرج",
      enTitle: "Al-Birr Al-Kharj",
      links: [{ href: "https://elbr2.vercel.app/", ar: "زيارة الموقع", en: "Visit site" }],
      ar: {
        category: "موقع تبرعات",
        summary: "موقع تبرعات لجمعية البر بالخرج، يعرض الثقة والشفافية ووصول التبرع إلى مستحقيه.",
        points: ["تبرعات", "شفافية", "حوكمة", "جمعية خيرية"]
      },
      en: {
        category: "Donations website",
        summary: "A donations site for Al-Birr Association in Al-Kharj, presenting trust, transparency, and delivery of donations to the people who need them.",
        points: ["Donations", "Transparency", "Governance", "Charity"]
      }
    },
    {
      kind: "website",
      status: "live",
      mark: "مو",
      color: "#6b3f2a",
      title: "الموئل للتنمية والتدريب",
      enTitle: "Al Mawel",
      links: [{ href: "https://almawel.org/", ar: "زيارة الموقع", en: "Visit site" }],
      ar: {
        category: "موقع مؤسسة",
        summary: "موقع تعريفي لمؤسسة الموئل في عمّان: الخدمات، المبادرات، الدورات، وقصص الشركاء.",
        points: ["مبادرات", "دورات", "خدمات", "مؤسسة غير ربحية"]
      },
      en: {
        category: "Organization website",
        summary: "A public site for Al Mawel in Amman: services, initiatives, courses, and partner stories.",
        points: ["Initiatives", "Courses", "Services", "Non-profit"]
      }
    },
    {
      kind: "website",
      status: "live",
      mark: "AK",
      color: "#0e4b3c",
      title: "أكنانا",
      enTitle: "AKNANA",
      links: [{ href: "https://aknana.com/", ar: "زيارة الموقع", en: "Visit site" }],
      ar: {
        category: "موقع تعريفي",
        summary: "موقع تعريفي لاستوديو أكنانا في السعودية: منظومة مشاريع تعرض الرؤية، نطاقات العمل، وطريقة بناء المشروع من الفكرة حتى التشغيل.",
        points: ["استوديو مشاريع", "نطاقات عمل", "رؤية وطريقة", "السعودية"]
      },
      en: {
        category: "Brochure website",
        summary: "A brochure site for AKNANA in Saudi Arabia: a project studio presenting its vision, fields of work, and the path from idea to operation.",
        points: ["Project studio", "Fields of work", "Vision and method", "Saudi Arabia"]
      }
    },
    {
      kind: "website",
      status: "live",
      mark: "حو",
      color: "#8a5a2b",
      title: "الحواشي",
      enTitle: "Alhawashi",
      links: [{ href: "https://alhawashiksa.com/", ar: "زيارة الموقع", en: "Visit site" }],
      ar: {
        category: "موقع تعريفي",
        summary: "موقع تعريفي لمؤسسة الحواشي للمقاولات العامة في الرياض، يعرض الدهانات والديكور والتشطيبات مع المشاريع والعملاء.",
        points: ["دهانات", "ديكور وتشطيب", "مشاريع", "الرياض"]
      },
      en: {
        category: "Brochure website",
        summary: "A brochure site for Alhawashi General Contracting in Riyadh, presenting painting, décor, and finishing work alongside projects and clients.",
        points: ["Painting", "Décor and finishing", "Projects", "Riyadh"]
      }
    },
    {
      kind: "store",
      status: "live",
      mark: "WA",
      color: "#243044",
      title: "Walker",
      links: [{ href: "https://walker-stores.com/", ar: "زيارة المتجر", en: "Visit store" }],
      ar: {
        category: "متجر ملابس رجالية",
        summary: "متجر إلكتروني للملابس الرجالية، مع تصنيفات وعروض وسلة ومفضلة وحساب عميل وفروع.",
        points: ["ملابس رجالية", "عروض", "سلة ومفضلة", "فروع وحساب"]
      },
      en: {
        category: "Men’s clothing store",
        summary: "An online men’s clothing store with categories, offers, cart, wishlist, customer accounts, and branches.",
        points: ["Men’s clothing", "Offers", "Cart and wishlist", "Branches and accounts"]
      }
    },
    {
      kind: "store",
      status: "live",
      mark: "SF",
      color: "#3e6b4f",
      title: "سما فارم",
      enTitle: "Sama Farm",
      links: [{ href: "https://sama-farm.com/", ar: "زيارة المتجر", en: "Visit store" }],
      ar: {
        category: "متجر مستحضرات",
        summary: "متجر منتجات لابيترا التابعة لسما فارم، مع كتالوج وأسعار وعروض وبيانات التواصل.",
        points: ["لابيترا", "كتالوج", "عروض", "تواصل"]
      },
      en: {
        category: "Cosmetics store",
        summary: "A store for Lapetra products from Sama Farm, with a catalog, prices, offers, and contact details.",
        points: ["Lapetra", "Catalog", "Offers", "Contact"]
      }
    },
    {
      kind: "store",
      status: "live",
      mark: "KA",
      color: "#5c3d16",
      title: "Karma",
      links: [{ href: "https://alkarmagroup.net/", ar: "زيارة المتجر", en: "Visit store" }],
      ar: {
        category: "متجر مراقبة وشبكات وأدوات",
        summary: "متجر لمعدات المراقبة والشبكات والأدوات، مع عرض المنتجات والأسعار والتواصل للطلب.",
        points: ["كاميرات مراقبة", "شبكات", "أدوات", "أسعار وطلب"]
      },
      en: {
        category: "Surveillance, network, and tools",
        summary: "A store for surveillance equipment, networking, and tools, with product listings, prices, and a way to order.",
        points: ["Cameras", "Networking", "Tools", "Prices and orders"]
      }
    }
  ];

  const copy = {
    ar: {
      pageTitle: "بورتفوليو أعمال",
      folio: "سيرة أعمال",
      eyebrow: "يُرفق مع السيرة الذاتية",
      region: "أعمال مسلّمة في مصر والأردن والسعودية",
      lede: "أبني أنظمة تدير الشركة من الداخل، ومتاجر تبيع من الخارج. من الموارد البشرية والرواتب وربط البصمة، إلى الحسابات والشحن وواتساب وShopify، وتتبع المركبات، وERP مع نقطة البيع.",
      seeWork: "الأعمال",
      savePdf: "حفظ PDF",
      navWork: "الأعمال",
      navFields: "المجالات",
      navBio: "نبذة للسيرة",
      fact1t: "أنظمة تشغيل",
      fact1d: "موارد بشرية، حسابات، تتبع، وبيع",
      fact2t: "متاجر ومواقع",
      fact2d: "واجهات شراء وصفحات تعريفية عاملة",
      fact3t: "ربط خارجي",
      fact3d: "بصمة، Zoom، واتساب، وShopify",
      fieldsTitle: "ماذا أسلّم",
      fieldsIntro: "العمل ليس صفحة فقط. في الأنظمة يوجد تشغيل يومي، صلاحيات، ولوحة يشتغل عليها الفريق.",
      f1t: "موارد بشرية",
      f1d: "موظفون، حضور، رواتب، توظيف، وتقارير.",
      f2t: "حسابات وتشغيل",
      f2d: "شحن، عملاء، واتساب، وطلبات المتجر.",
      f3t: "تتبع وأسطول",
      f3d: "نظام لمتابعة المركبات ونشاط الشركة.",
      f4t: "ERP ونقطة بيع",
      f4d: "بيع ومخزون وحسابات في نظام واحد.",
      f5t: "متاجر",
      f5d: "كتالوج، عروض، سلة، دفع، وشحن.",
      f6t: "مواقع تعريفية",
      f6d: "عرض المؤسسة أو النشاط وخدماته.",
      workTitle: "أعمال مختارة",
      workIntro: "الروابط تفتح العمل نفسه. إذا ظهرت صفحة دخول فالنظام حي لبيانات العميل، ويمكن عرض النسخة المحلية في المقابلة. توجد مواقع ومتاجر أخرى غير المعروضة هنا.",
      filter_all: "الكل",
      filter_system: "الأنظمة",
      filter_store: "المتاجر",
      filter_website: "المواقع",
      showing: "المعروض",
      status_live: "يعمل الآن",
      status_partial: "متاحة للتجربة محليًا",
      status_local: "عرض محلي",
      status_client: "نظام لعميل",
      status_new: "موقع جديد",
      demoLogin: "دخول للتجربة",
      demoEmail: "البريد",
      demoPassword: "كلمة المرور",
      bioTitle: "نبذة جاهزة للسيرة",
      bio: "مطوّر أنظمة أعمال ومتاجر إلكترونية. أبني منصات تشغيل ومواقع بيع عاملة: موارد بشرية برواتب وحضور وربط أجهزة البصمة وتوظيف، وحسابات وشحن ومتابعة عملاء مع واتساب وShopify، وتتبع مركبات، وERP مع نقطة بيع، ونظام لإدارة مكاتب المحاماة. من الأعمال: EVO HR، وMagalis، وLex Mizan، ومتجر إلكتروني بلوحة تحكم، ونظام إسنا لتتبع المركبات، وYachtly لتأجير اليخوت، وموقع تبرعات جمعية البر بالخرج، وموقع مؤسسة الموئل، وموقعا أكنانا والحواشي التعريفيان، ومتاجر Walker وسما فارم وKarma، إلى جانب نظام نقل ومواقع أخرى.",
      copyBio: "انسخ النبذة",
      copied: "تم نسخ النبذة",
      copyFail: "انسخ النص يدويًا",
      contactTitle: "التواصل",
      contactFallback: "بيانات التواصل مذكورة في السيرة الذاتية المرفقة مع هذا الملف.",
      more: "بعض النسخ الحية تخص الشركة ولا تُستخدم للتجربة العشوائية. العرض المناسب لها يكون من النسخة المحلية أثناء المقابلة.",
      email: "البريد",
      phone: "الهاتف",
      whatsapp: "واتساب",
      linkedin: "لينكدإن"
    },
    en: {
      pageTitle: "Work portfolio",
      folio: "Selected work",
      eyebrow: "Sent with the CV",
      region: "Delivered work in Egypt, Jordan, and Saudi Arabia",
      lede: "I build the systems a company runs on, and the stores it sells through. That includes HR and payroll with fingerprint devices, accounting and shipping, WhatsApp and Shopify, vehicle tracking, and ERP with a point of sale.",
      seeWork: "Selected work",
      savePdf: "Save PDF",
      navWork: "Work",
      navFields: "Scope",
      navBio: "CV summary",
      fact1t: "Operating systems",
      fact1d: "HR, accounting, tracking, and sales",
      fact2t: "Stores and sites",
      fact2d: "Live storefronts and public websites",
      fact3t: "Connections",
      fact3d: "Fingerprint, Zoom, WhatsApp, and Shopify",
      fieldsTitle: "What I deliver",
      fieldsIntro: "The work is not only a page. The systems include daily operations, permissions, and a dashboard a team actually uses.",
      f1t: "Human resources",
      f1d: "Employees, attendance, payroll, hiring, and reports.",
      f2t: "Accounting and operations",
      f2d: "Shipping, customers, WhatsApp, and store orders.",
      f3t: "Tracking and fleet",
      f3d: "A system for vehicles and the client’s operation.",
      f4t: "ERP and POS",
      f4d: "Sales, inventory, and accounting in one system.",
      f5t: "Stores",
      f5d: "Catalog, offers, cart, payment, and delivery.",
      f6t: "Public websites",
      f6d: "A clear presentation of an organization and its services.",
      workTitle: "Selected work",
      workIntro: "The links open the work itself. A login screen means the live system holds client data; the local build can be shown in an interview. There are further sites and stores beyond this selection.",
      filter_all: "All",
      filter_system: "Systems",
      filter_store: "Stores",
      filter_website: "Websites",
      showing: "Showing",
      status_live: "Live",
      status_partial: "Local trial with me",
      status_local: "Local demo",
      status_client: "Client system",
      status_new: "New site",
      demoLogin: "Demo login",
      demoEmail: "Email",
      demoPassword: "Password",
      bioTitle: "Summary for the CV",
      bio: "Business-systems and e-commerce developer. I build operating platforms and live stores: HR with payroll, attendance, fingerprint devices, and hiring; accounting, shipping, and customer follow-up with WhatsApp and Shopify; vehicle tracking; ERP with a point of sale; and a system for law offices. The work includes EVO HR, Magalis, Lex Mizan, an online store with an admin dashboard, the Esna vehicle-tracking system, Yachtly for yacht rental, the Al-Birr Al-Kharj donations site, the Al Mawel foundation site, the AKNANA and Alhawashi brochure sites, and the Walker, Sama Farm, and Karma stores, plus a transport system and other websites.",
      copyBio: "Copy summary",
      copied: "Summary copied",
      copyFail: "Please copy the text manually",
      contactTitle: "Contact",
      contactFallback: "Contact details are on the CV sent with this file.",
      more: "Some live systems belong to the company and are not for casual trial use. Those are best shown from the local build during an interview.",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn"
    }
  };

  let lang = localStorage.getItem("pf-lang") === "en" ? "en" : "ar";
  let filter = "all";

  function t(key) {
    return copy[lang][key];
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function tx(value) {
    const isolated = String(value ?? "").replace(/[A-Za-z0-9][A-Za-z0-9+'’%-]*/g, function (word) {
      return "\u2066" + word + "\u2069";
    });
    return esc(isolated);
  }

  function text(ar, en) {
    const value = lang === "ar" ? ar : en;
    return (value || "").trim();
  }

  function name() {
    return text(profile.nameAr, profile.nameEn);
  }

  function title() {
    return text(profile.titleAr, profile.titleEn) || t("folio");
  }

  function city() {
    return text(profile.cityAr, profile.cityEn);
  }

  function contacts() {
    const items = [];
    if (profile.email) items.push({ href: "mailto:" + profile.email, label: profile.email });
    if (profile.phone) items.push({ href: "tel:" + profile.phone, label: profile.phone });
    if (profile.whatsapp) items.push({ href: "https://wa.me/" + String(profile.whatsapp).replace(/\D/g, ""), label: t("whatsapp") });
    if (profile.linkedin) items.push({ href: profile.linkedin, label: t("linkedin") });
    return items;
  }

  function projectHtml(project, index) {
    const body = project[lang];
    const hidden = filter !== "all" && project.kind !== filter;
    const lead = index === 0 ? " is-lead" : "";
    const links = project.links.map(function (link) {
      const label = lang === "ar" ? link.ar : link.en;
      return '<a href="' + esc(link.href) + '" target="_blank" rel="noopener noreferrer">' + tx(label) + "</a>";
    }).join("");
    const chips = body.points.map(function (point) {
      return "<li>" + tx(point) + "</li>";
    }).join("");
    const heading = lang === "en" && project.enTitle ? project.enTitle : project.title;
    const access = project.access
      ? '<div class="login"><p class="login-label">' + tx(t("demoLogin")) + "</p>" +
        "<p><span>" + tx(t("demoEmail")) + '</span> <code dir="ltr">' + esc(project.access.email) + "</code></p>" +
        "<p><span>" + tx(t("demoPassword")) + '</span> <code dir="ltr">' + esc(project.access.password) + "</code></p></div>"
      : "";

    return (
      '<article class="work' + lead + (hidden ? " is-hidden" : "") + '">' +
        '<div class="badge" style="--mark:' + esc(project.color) + '">' + tx(project.mark) + "</div>" +
        '<div>' +
          '<div class="work-top">' +
            "<h3>" + tx(heading) + "</h3>" +
            '<span class="status status-' + project.status + '">' + tx(t("status_" + project.status)) + "</span>" +
          "</div>" +
          '<p class="category">' + tx(body.category) + "</p>" +
          '<p class="summary">' + tx(body.summary) + "</p>" +
          '<ul class="chips">' + chips + "</ul>" +
          access +
          (links ? '<div class="link-row">' + links + "</div>" : "") +
        "</div>" +
      "</article>"
    );
  }

  function render() {
    const y = window.scrollY;
    const shown = projects.filter(function (project) {
      return filter === "all" || project.kind === filter;
    }).length;
    const person = name();
    const contact = contacts();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = (person ? person + " — " : "") + t("pageTitle");

    const contactHtml = contact.length
      ? '<div class="side-links">' + contact.map(function (item) {
          const external = item.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
          return '<a href="' + esc(item.href) + '"' + external + ">" + tx(item.label) + "</a>";
        }).join("") + "</div>"
      : '<p class="side-note">' + tx(t("contactFallback")) + "</p>";

    const filters = ["all", "system", "store", "website"].map(function (key) {
      return '<button type="button" data-action="filter" data-filter="' + key + '" aria-pressed="' + (filter === key) + '">' + tx(t("filter_" + key)) + "</button>";
    }).join("");

    document.getElementById("app").innerHTML =
      '<div class="shell">' +
        '<aside class="side">' +
          '<div class="mark-row">' +
            '<span class="logo" aria-hidden="true"><i></i><i></i><i></i><i></i></span>' +
            "<div>" +
              '<p class="eyebrow">PORTFOLIO</p>' +
              '<p class="brand-name">' + tx(person || t("folio")) + "</p>" +
            "</div>" +
          "</div>" +
          (person ? '<p class="brand-role">' + tx(title()) + "</p>" : "") +
          (city() ? '<p class="side-note">' + tx(city()) + "</p>" : "") +
          "<nav>" +
            '<button type="button" data-action="jump" data-target="work">' + tx(t("navWork")) + "</button>" +
            '<button type="button" data-action="jump" data-target="fields">' + tx(t("navFields")) + "</button>" +
            '<button type="button" data-action="jump" data-target="bio">' + tx(t("navBio")) + "</button>" +
          "</nav>" +
          '<div class="lang no-print">' +
            '<button type="button" data-action="lang" data-lang="ar" aria-pressed="' + (lang === "ar") + '">عربي</button>' +
            '<button type="button" data-action="lang" data-lang="en" aria-pressed="' + (lang === "en") + '">English</button>' +
          "</div>" +
          '<div class="side-contact" id="contact">' +
            '<p class="eyebrow">' + tx(t("contactTitle")) + "</p>" +
            contactHtml +
          "</div>" +
        "</aside>" +
        '<main class="main"><div class="wrap">' +
          '<header class="hero">' +
            '<p class="eyebrow">' + tx(t("eyebrow")) + "</p>" +
            "<h1>" + tx(title()) + "</h1>" +
            '<p class="lede">' + tx(t("lede")) + "</p>" +
            '<p class="fine">' + tx(t("region")) + (city() ? " · " + tx(city()) : "") + "</p>" +
            '<div class="hero-actions no-print">' +
              '<button type="button" class="btn btn-primary" data-action="jump" data-target="work">' + tx(t("seeWork")) + "</button>" +
              '<button type="button" class="btn btn-ghost" data-action="print">' + tx(t("savePdf")) + "</button>" +
            "</div>" +
            '<div class="facts">' +
              "<article class=\"fact\"><strong>" + tx(t("fact1t")) + "</strong><span>" + tx(t("fact1d")) + "</span></article>" +
              "<article class=\"fact\"><strong>" + tx(t("fact2t")) + "</strong><span>" + tx(t("fact2d")) + "</span></article>" +
              "<article class=\"fact\"><strong>" + tx(t("fact3t")) + "</strong><span>" + tx(t("fact3d")) + "</span></article>" +
            "</div>" +
          "</header>" +
          '<section class="section" id="fields">' +
            "<h2>" + tx(t("fieldsTitle")) + "</h2>" +
            '<p class="section-intro">' + tx(t("fieldsIntro")) + "</p>" +
            '<div class="fields">' +
              field(t("f1t"), t("f1d")) +
              field(t("f2t"), t("f2d")) +
              field(t("f3t"), t("f3d")) +
              field(t("f4t"), t("f4d")) +
              field(t("f5t"), t("f5d")) +
              field(t("f6t"), t("f6d")) +
            "</div>" +
          "</section>" +
          '<section class="section" id="work">' +
            "<h2>" + tx(t("workTitle")) + "</h2>" +
            '<p class="section-intro">' + tx(t("workIntro")) + "</p>" +
            '<div class="work-head no-print">' +
              '<div class="filters" role="group">' + filters + "</div>" +
              '<p class="count">' + tx(t("showing")) + " " + shown + "</p>" +
            "</div>" +
            '<div class="list">' + projects.map(projectHtml).join("") + "</div>" +
          "</section>" +
          '<section class="section" id="bio">' +
            '<div class="bio-box">' +
              "<h2>" + tx(t("bioTitle")) + "</h2>" +
              "<p>" + tx(t("bio")) + "</p>" +
              '<button type="button" class="btn no-print" data-action="copy">' + tx(t("copyBio")) + "</button>" +
            "</div>" +
            '<div class="note">' +
              "<h2>" + tx(t("contactTitle")) + "</h2>" +
              (contact.length
                ? '<div class="link-row">' + contact.map(function (item) {
                    const external = item.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
                    return '<a href="' + esc(item.href) + '"' + external + ">" + tx(item.label) + "</a>";
                  }).join("") + "</div>"
                : '<p class="fine">' + tx(t("contactFallback")) + "</p>") +
              '<p class="fine">' + tx(t("more")) + "</p>" +
            "</div>" +
          "</section>" +
        "</div></main>" +
      "</div>" +
      '<div class="toast" id="toast" role="status"></div>';

    window.scrollTo(0, y);
  }

  function field(heading, detail) {
    return "<article class=\"field\"><h3>" + tx(heading) + "</h3><p>" + tx(detail) + "</p></article>";
  }

  document.body.addEventListener("click", function (event) {
    const el = event.target.closest("[data-action]");
    if (!el) return;
    const action = el.dataset.action;
    if (action === "lang") {
      lang = el.dataset.lang === "en" ? "en" : "ar";
      localStorage.setItem("pf-lang", lang);
      render();
    }
    if (action === "filter") {
      filter = el.dataset.filter || "all";
      render();
    }
    if (action === "jump") {
      document.getElementById(el.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (action === "print") window.print();
    if (action === "copy") {
      const toast = document.getElementById("toast");
      navigator.clipboard.writeText(t("bio")).then(function () {
        showToast(t("copied"));
      }).catch(function () {
        showToast(t("copyFail"));
      });
      function showToast(message) {
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(function () { toast.classList.remove("show"); }, 1800);
      }
    }
  });

  render();
})();
