// ============== DATA ==============
const timetable = [
  { day:1, start:'09:00', end:'10:30', name:'Software Development Lifecycles', code:'Unit 7', room:'Classroom 1', instructor:'Tr. Win Sandar, Yi Yi Aung', color:'blue' },
  { day:1, start:'11:00', end:'12:30', name:'Website Design & Development', code:'Unit 13', room:'Computer Lab', instructor:'Tr. Ei Po Po Aung', color:'lime' },
  { day:1, start:'14:00', end:'15:30', name:'Planning a Computing Project', code:'Unit 6', room:'Classroom 2', instructor:'Tr. Thiri Win', color:'pink' },
  { day:2, start:'09:00', end:'10:30', name:'Security', code:'Unit 5', room:'Computer Lab', instructor:'Sir. Aung Bo Bo Kyaw', color:'yellow' },
  { day:2, start:'11:00', end:'12:30', name:'Software Development Lifecycles', code:'Unit 7', room:'Classroom 1', instructor:'Tr. Win Sandar, Yi Yi Aung', color:'blue' },
  { day:3, start:'09:00', end:'10:30', name:'Website Design & Development', code:'Unit 13', room:'Computer Lab', instructor:'Tr. Ei Po Po Aung', color:'lime' },
  { day:3, start:'11:00', end:'12:30', name:'Planning a Computing Project', code:'Unit 6', room:'Classroom 2', instructor:'Tr. Thiri Win', color:'pink' },
  { day:4, start:'09:00', end:'10:30', name:'Security', code:'Unit 5', room:'Computer Lab', instructor:'Sir. Aung Bo Bo Kyaw', color:'yellow' },
  { day:5, start:'09:00', end:'10:30', name:'Software Development Lifecycles', code:'Unit 7', room:'Classroom 1', instructor:'Tr. Win Sandar, Yi Yi Aung', color:'blue' }
];

const modules = [
  { code:'Unit 7', key:'sdlc', name:'Software Development Lifecycles', instructor:'Tr. Win Sandar, Yi Yi Aung', progress:78, next:'Mon 9:00 AM', tags:['current','due'], color:'blue' },
  { code:'Unit 6', key:'pacp', name:'Planning a Computing Project', instructor:'Tr. Thiri Win', progress:65, next:'Mon 2:00 PM', tags:['current','due'], color:'pink' },
  { code:'Unit 5', key:'security', name:'Security', instructor:'Sir. Aung Bo Bo Kyaw', progress:72, next:'Tue 9:00 AM', tags:['current','due'], color:'lime' },
  { code:'Unit 13', key:'wdd', name:'Website Design & Development', instructor:'Tr. Ei Po Po Aung', progress:82, next:'Tue 11:00 AM', tags:['current','due'], color:'yellow' }
];

const lostFoundItems = [
  { id:1, name:'Black Wallet', status:'lost', category:'Wallet', date:'8 Aug', location:'Gusto Campus · Classroom', desc:'Black wallet with student card inside.', seed:'wallet77' },
  { id:2, name:'Blue Water Bottle', status:'found', category:'Bottle', date:'8 Aug', location:'Gusto Campus · Reception', desc:'Blue water bottle found near the reception area.', seed:'bottle42' },
  { id:3, name:'Laptop Charger', status:'found', category:'Charger', date:'7 Aug', location:'Computer Lab', desc:'Laptop charger found after class.', seed:'charger18' },
  { id:4, name:'Calculator', status:'lost', category:'Calculator', date:'7 Aug', location:'Classroom 2', desc:'Scientific calculator with a small name sticker.', seed:'calc33' },
  { id:5, name:'Earbuds Case', status:'claimed', category:'Accessories', date:'6 Aug', location:'Student Area', desc:'Earbuds case returned to the owner.', seed:'earbuds99' },
  { id:6, name:'Notebook', status:'lost', category:'Stationery', date:'6 Aug', location:'Classroom 1', desc:'Black notebook containing class notes.', seed:'notebook55' },
  { id:7, name:'Backpack', status:'found', category:'Bag', date:'5 Aug', location:'Gusto Campus', desc:'Backpack reported to student services.', seed:'backpack21' },
  { id:8, name:'Student ID Card', status:'found', category:'ID Card', date:'5 Aug', location:'Computer Lab', desc:'Student ID card found near a computer desk.', seed:'idcard66' },
];

const buzzItems = [
  { type:'event', title:'HND PROJECT PRESENTATION DAY', desc:'Presentation schedule and room information for HND students.', meta:'20 Aug · Gusto Campus · 9:00 AM', color:'blue', icon:'fa-person-chalkboard' },
  { type:'event', title:'GUSTO TECH TALK', desc:'Technology sharing session for computing students.', meta:'22 Aug · Gusto Campus · 1:00 PM', color:'lime', icon:'fa-microchip' },
  { type:'notice', title:'ASSIGNMENT SUBMISSION REMINDER', desc:'Check your assignment due dates in Academic Hub before submission.', meta:'THIS WEEK · Gusto LMS', color:'yellow', icon:'fa-file-circle-exclamation' },
  { type:'club', title:'STUDENT CLUB MEETING', desc:'Student activity meeting and planning session.', meta:'23 Aug · Student Area · 2:00 PM', color:'blue', icon:'fa-people-group' },
  { type:'notice', title:'THADINGYUT HOLIDAY NOTICE', desc:'Holiday and class schedule information will be announced by Gusto.', meta:'NOTICE · Academic Calendar', color:'pink', icon:'fa-calendar-days' },
  { type:'notice', title:'LMS MAINTENANCE NOTICE', desc:'Please download important files before scheduled LMS maintenance.', meta:'24 Aug · Online Services', color:'yellow', icon:'fa-wifi' },
  { type:'event', title:'NEW INTAKE ORIENTATION', desc:'Orientation session for new students joining Gusto.', meta:'28 Aug · Gusto Campus · 10:00 AM', color:'blue', icon:'fa-user-graduate' },
  { type:'club', title:'COMPUTING STUDENT SHARING SESSION', desc:'Students share project ideas, study tips and development experience.', meta:'29 Aug · Computer Lab · 1:30 PM', color:'lime', icon:'fa-comments' },
  { type:'notice', title:'EXAM TIMETABLE UPDATE', desc:'Students should check the latest examination timetable and room information.', meta:'COMING SOON · Academic Hub', color:'pink', icon:'fa-clipboard-list' },
];

const services = [
  { icon:'fa-user-graduate', name:'Academic Support', desc:'Help with modules, assignment instructions and academic questions.', hours:'Mon-Fri · Office Hours', contact:'09-979387111', color:'#1E5AA8' },
  { icon:'fa-laptop-code', name:'IT Help Desk', desc:'Gusto LMS login, Wi-Fi, software and technical support.', hours:'Mon-Fri · Office Hours', contact:'09-979387111', color:'#183A57' },
  { icon:'fa-id-card', name:'Student Services', desc:'Student information, forms and general administrative support.', hours:'Mon-Fri · Office Hours', contact:'09-979387111', color:'#278455' },
  { icon:'fa-book-open', name:'Library Support', desc:'Reference books, learning materials and study resources.', hours:'Mon-Fri · Office Hours', contact:'09-979387111', color:'#9A6D00' },
  { icon:'fa-file-arrow-up', name:'Assignment / LMS Support', desc:'Help with assignment briefs, uploads and submission issues.', hours:'Mon-Fri · Office Hours', contact:'09-979387111', color:'#B5475D' },
  { icon:'fa-circle-question', name:'General Enquiries', desc:'General student questions and guidance to the correct department.', hours:'Mon-Fri · Office Hours', contact:'09-979387111', color:'#52677A' },
];

const assignments = [
  { id:"real-sdlc-a1", moduleKey:"sdlc", title:"SDLC Assignment 1", officialTitle:"Software Development Lifecycles and Feasibility Study Analysis", module:"Software Development Lifecycles", teacher:"Tr. Win Sandar, Yi Yi Aung", due:"24 May 2026", status:'Graded', grade:'P', brief:"SDLC_Assignment_1_Brief_HND69.pdf", submittedFiles:['SDLC_Assignment1_Report.pdf','SDLC_Assignment1_Presentation.pdf'], submittedAt:'24 May 2026 · 10:42 PM' },
  { id:"real-sdlc-a2", moduleKey:"sdlc", title:"SDLC Assignment 2", officialTitle:"Software Development Lifecycles and Software Behavioural Design Techniques Analysis", module:"Software Development Lifecycles", teacher:"Tr. Win Sandar, Yi Yi Aung", due:"27 Jun 2026", status:'Not Submitted', grade:null, brief:"SDLC_Assignment_2_Brief_HND69.pdf" },
  { id:"real-pacp-a1", moduleKey:"pacp", title:"Planning a Computing Project Assignment Brief", officialTitle:"Produce Project Plans & Present Project Recommendations - Planning a Computing Project for Cyber Security", module:"Planning a Computing Project", teacher:"Tr. Thiri Win", due:"23 Jun 2026", status:'Not Submitted', grade:null, brief:"PACP_Assignment_Brief_HND69.pdf" },
  { id:"real-security-a1", moduleKey:"security", title:"Security Assignment", officialTitle:"Designing a Defense-in-Depth Security Posture and Access Control Architecture for MetroMart & StarLight Enterprise Group", module:"Security", teacher:"Sir. Aung Bo Bo Kyaw", due:"19 Jun 2026", status:'Not Submitted', grade:null, brief:"Security_Assignment_Brief_HND69.pdf" },
  { id:"real-wdd-a1", moduleKey:"wdd", title:"Website Design & Development Assignment 1", officialTitle:"Understanding Server Technologies and Website Development Tools", module:"Website Design & Development", teacher:"Tr. Ei Po Po Aung", due:"31 May 2026", status:'Graded', grade:'M', brief:"WDD_Assignment_1_Brief_HND69.pdf", submittedFiles:['WDD_Assignment1_Report.pdf'], submittedAt:'31 May 2026 · 9:18 PM' },
  { id:"real-wdd-a2", moduleKey:"wdd", title:"Website Design & Development Assignment 2", officialTitle:"Designing, Developing and Testing the Multiple Page Website", module:"Website Design & Development", teacher:"Tr. Ei Po Po Aung", due:"30 Jun 2026", status:'Not Submitted', grade:null, brief:"WDD_Assignment_2_Brief_HND69.pdf" }
];

const realAssignmentBriefs = {"sdlc1": {"id": "real-sdlc-a1", "moduleKey": "sdlc", "unit": "Unit 7", "module": "Software Development Lifecycles", "teacher": "Tr. Win Sandar, Yi Yi Aung", "title": "SDLC Assignment 1", "officialTitle": "Software Development Lifecycles and Feasibility Study Analysis", "file": "SDLC_Assignment_1_Brief_HND69.pdf", "issue": "27 Apr 2026", "due": "24 May 2026", "submission": "Report PDF + Presentation PDF", "requirements": ["Describe at least two iterative and two sequential SDLC models and apply them to the Campus Shuttle System.", "Explain how risk is managed in software lifecycle models and suggest risk mitigation strategies.", "Explain the purpose of a feasibility study and why it is important before development.", "Describe feasibility types and explain how technical solutions can be compared for the Campus Shuttle System."], "criteria": {"P": ["P1: Describe two iterative and two sequential software lifecycle models.", "P2: Explain how risk is managed in software lifecycle models.", "P3: Explain the purpose of a feasibility report.", "P4: Describe how technical solutions can be compared."], "M": ["M1: Discuss why a particular lifecycle model is selected for a development environment.", "M2: Discuss the components of a feasibility report."], "D": ["D1: Assess the merits of applying the Waterfall lifecycle model to a large software development project.", "D2: Assess the impact of different feasibility criteria on a software investigation."]}}, "sdlc2": {"id": "real-sdlc-a2", "moduleKey": "sdlc", "unit": "Unit 7", "module": "Software Development Lifecycles", "teacher": "Tr. Win Sandar, Yi Yi Aung", "title": "SDLC Assignment 2", "officialTitle": "Software Development Lifecycles and Software Behavioural Design Techniques Analysis", "file": "SDLC_Assignment_2_Brief_HND69.pdf", "issue": "25 May 2026", "due": "27 Jun 2026", "submission": "Report PDF + Presentation PDF", "requirements": ["Undertake an SDLC investigation for the Campus Shuttle System to meet a business need.", "Create requirements and design documentation such as use case, class, sequence and activity diagrams.", "Analyse requirements traceability and discuss approaches for improving software quality.", "Discuss and evaluate behavioural design techniques, including finite state machines and extended FSMs."], "criteria": {"P": ["P5: Undertake a software investigation to meet a business need.", "P6: Use appropriate software analysis tools/techniques and create supporting documentation.", "P7: Discuss the suitability of software behavioural design techniques using examples."], "M": ["M3: Analyse how software requirements can be traced throughout the lifecycle.", "M4: Discuss two approaches to improving software quality.", "M5: Analyse a range of software behavioural tools and techniques.", "M6: Differentiate between a finite state machine and an extended FSM, with an application for both."], "D": ["D3: Evaluate the systems investigation process and its effectiveness in improving software quality.", "D4: Justify how data-driven software can improve software reliability and effectiveness."]}}, "pacp": {"id": "real-pacp-a1", "moduleKey": "pacp", "unit": "Unit 6", "module": "Planning a Computing Project", "teacher": "Tr. Thiri Win", "title": "Planning a Computing Project Assignment Brief", "officialTitle": "Produce Project Plans & Present Project Recommendations - Planning a Computing Project for Cyber Security", "file": "PACP_Assignment_Brief_HND69.pdf", "issue": "15 May 2026", "due": "23 Jun 2026", "submission": "Formal report + data collection file + Gantt Chart + project charter + presentation", "requirements": ["Use qualitative and quantitative research methods and examine secondary sources.", "Discuss business features, operational areas, stakeholders and business challenges.", "Produce a comprehensive project plan including a Gantt Chart and Work Breakdown Structure.", "Present project recommendations, justify planning decisions and evaluate research accuracy and reliability."], "criteria": {"P": ["P1-P2: Generate relevant primary data and examine secondary sources.", "P3-P4: Discuss business features/operational areas and stakeholder roles.", "P5: Devise comprehensive project plans.", "P6-P8: Communicate recommendations, justify planning decisions and discuss research accuracy/reliability."], "M": ["M1: Analyse primary and secondary data.", "M2: Analyse challenges to business success.", "M3: Produce comprehensive project plans considering aims, objectives, risks and benefits.", "M4: Assess how project recommendations meet organisational needs."], "D": ["D1: Interpret findings to show how the research theme supports business requirements.", "D2: Evaluate project planning recommendations and the accuracy/reliability of the research."]}}, "security": {"id": "real-security-a1", "moduleKey": "security", "unit": "Unit 5", "module": "Security", "teacher": "Sir. Aung Bo Bo Kyaw", "title": "Security Assignment", "officialTitle": "Designing a Defense-in-Depth Security Posture and Access Control Architecture for MetroMart & StarLight Enterprise Group", "file": "Security_Assignment_Brief_HND69.pdf", "issue": "21 May 2026", "due": "19 Jun 2026", "submission": "Technical report PDF + network simulation lab file + presentation", "requirements": ["Prepare a group presentation covering security risks, risk management and network monitoring.", "Build a network prototype with departmental segregation and ACL rules.", "Explain configuration failures involving firewall policies and third-party VPNs, and show security improvements using DMZ, Static IP and NAT.", "Produce a technical report covering security policy, disaster recovery/business continuity, defense-in-depth and security audit/compliance."], "criteria": {"P": ["P1-P2: Discuss security risks and assess organisational security procedures.", "P3-P4: Discuss configuration risks and explain how DMZ, Static IP and NAT improve network security.", "P5-P6: Review risk assessment and data protection processes.", "P7-P8: Design a suitable security policy and discuss stakeholder roles in security audits."], "M": ["M1: Analyse benefits of network monitoring systems with supporting reasons.", "M2: Propose a method to assess and treat IT security risks.", "M3-M4: Summarise risk management and analyse security audit impacts.", "M5: Justify the developed security plan."], "D": ["D1: Evaluate physical and virtual security measures.", "D2: Recommend how IT security can align with organisational policy.", "D3: Evaluate the suitability of security tools used to meet business needs."]}}, "wdd1": {"id": "real-wdd-a1", "moduleKey": "wdd", "unit": "Unit 13", "module": "Website Design & Development", "teacher": "Tr. Ei Po Po Aung", "title": "Website Design & Development Assignment 1", "officialTitle": "Understanding Server Technologies and Website Development Tools", "file": "WDD_Assignment_1_Brief_HND69.pdf", "issue": "5 May 2026", "due": "31 May 2026", "submission": "Individual written report PDF", "requirements": ["Explain DNS purpose/types, domain names and how domain names are organised and managed.", "Explain relationships among communication protocols, server hardware, operating systems, web server software, development technologies/frameworks and SEO.", "Discuss front-end and back-end technologies and how they relate to presentation and application layers.", "Compare online website creation tools with custom-built websites."], "criteria": {"P": ["P1: Explain DNS purpose/types and domain name organisation/management.", "P2: Explain relationships among protocols, server hardware, operating systems and web server software.", "P3: Discuss front-end/back-end capabilities and relationships.", "P4: Compare online website creation tools and custom-built sites."], "M": ["M1: Analyse the impact of common web development technologies/frameworks.", "M2: Review search engine influence and support SEO improvements with evidence.", "M3: Analyse tools and techniques used to design and develop a custom-built website."], "D": ["D1: Justify the technologies, management services, tools and software chosen for a custom-built website."]}}, "wdd2": {"id": "real-wdd-a2", "moduleKey": "wdd", "unit": "Unit 13", "module": "Website Design & Development", "teacher": "Tr. Ei Po Po Aung", "title": "Website Design & Development Assignment 2", "officialTitle": "Designing, Developing and Testing the Multiple Page Website", "file": "WDD_Assignment_2_Brief_HND69.pdf", "issue": "1 Jun 2026", "due": "30 Jun 2026", "submission": "Individual report PDF + program code ZIP", "requirements": ["Create a design document for a branded multipage website with client/user requirements, sitemap and medium-fidelity wireframes.", "Build a responsive multipage website with consistent navigation and realistic content.", "Create and use a suitable test plan covering functionality, buttons, links, modals, content and responsive appearance.", "Use peer review and evaluate QA, implementation decisions, technical challenges and overall website success."], "criteria": {"P": ["P5: Create a design document with medium-fidelity wireframes and client/user requirements.", "P6: Use the design document to produce a branded multipage website with realistic content.", "P7: Create a suitable test plan identifying key performance areas."], "M": ["M4: Justify multipage website implementation decisions against the design document.", "M5: Analyse the QA process during website design and development."], "D": ["D2: Evaluate design/development against the design document, including technical challenges.", "D3: Evaluate Test Plan results and overall website success with recommendations."]}}};

// ============== MULTI-PAGE ROUTER ==============
const pageFiles = {
  dashboard: 'index.html',
  academic: 'academic.html',
  ai: 'ai.html',
  campus: 'campus.html',
  support: 'support.html',
  profile: 'profile.html'
};

function navigate(page) {
  const target = pageFiles[page] || 'index.html';
  window.location.href = target;
}

function navigateToTarget(page, targetId, notificationId=null) {
  if (notificationId) markNotificationRead(notificationId, false);
  const target = pageFiles[page] || 'index.html';
  window.location.href = `${target}#${encodeURIComponent(targetId)}`;
}

function scrollToHashTarget() {
  if (!window.location.hash) return;
  const id = decodeURIComponent(window.location.hash.slice(1));
  let attempts = 0;

  const findAndScroll = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior:'smooth', block:'center' });
      el.classList.add('target-highlight');
      setTimeout(() => el.classList.remove('target-highlight'), 2200);
      return;
    }
    attempts++;
    if (attempts < 12) setTimeout(findAndScroll, 120);
  };
  setTimeout(findAndScroll, 80);
}

function setActiveNavigation() {
  const current = document.body.dataset.page || 'dashboard';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === current);
  });
}

function toggleMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) mobileNav.classList.toggle('hidden');
}

// ============== TIMETABLE ENGINE ==============
function timeToMin(t) {
  const [h,m] = t.split(':').map(Number);
  return h*60 + m;
}

function getStatus() {
  const now = new Date();
  const today = now.getDay();
  const nowMin = now.getHours()*60 + now.getMinutes();
  const todayClasses = timetable.filter(c => c.day === today).sort((a,b) => timeToMin(a.start) - timeToMin(b.start));
  const current = todayClasses.find(c => nowMin >= timeToMin(c.start) && nowMin < timeToMin(c.end));
  let next = todayClasses.find(c => timeToMin(c.start) > nowMin);
  let nextDayOffset = 0;
  if (!next) {
    for (let i = 1; i <= 7; i++) {
      const nextDay = (today + i) % 7;
      const nextDayClasses = timetable.filter(c => c.day === nextDay).sort((a,b) => timeToMin(a.start) - timeToMin(b.start));
      if (nextDayClasses.length) {
        next = nextDayClasses[0];
        nextDayOffset = i;
        break;
      }
    }
  }
  return { now, current, next, todayClasses, nextDayOffset };
}

function formatCountdown(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return [h,m,s].map(v => String(v).padStart(2,'0')).join(':');
}

function updateTimetable() {
  const status = getStatus();
  const nowMin = status.now.getHours()*60 + status.now.getMinutes();
  const statusPanel = document.getElementById('class-status-panel');
  const liveIndicator = document.getElementById('live-indicator');
  const liveDot = document.getElementById('live-dot');
  const liveLabel = document.getElementById('live-label');
  const statusLabel = document.getElementById('status-label');
  const className = document.getElementById('class-name');
  const classMeta = document.getElementById('class-meta');
  const classTime = document.getElementById('class-time');
  const classRoom = document.getElementById('class-room');
  const countdownLabel = document.getElementById('countdown-label');
  const countdown = document.getElementById('countdown');
  const countdownSub = document.getElementById('countdown-sub');
  const progressFill = document.getElementById('class-progress-fill');

  const colorMap = { blue:'#2563EB', lime:'#84CC16', pink:'#EC4899', yellow:'#FCD34D' };

  if (status.current) {
    // LIVE in class
    const c = status.current;
    const totalSec = (timeToMin(c.end) - timeToMin(c.start)) * 60;
    const elapsedSec = (nowMin - timeToMin(c.start)) * 60;
    const remainingSec = totalSec - elapsedSec;
    const pct = (elapsedSec / totalSec) * 100;

    liveIndicator.classList.remove('bg-[#2563EB]','bg-[#FCD34D]','bg-white');
    liveIndicator.classList.add('bg-[#84CC16]');
    liveDot.classList.add('pulse-dot');
    liveLabel.textContent = 'LIVE NOW';
    statusLabel.textContent = 'CURRENT CLASS';
    className.textContent = c.name;
    className.style.color = colorMap[c.color] || '#2563EB';
    classMeta.textContent = `${c.code} · ${c.instructor} · ${c.room}`;
    classTime.textContent = `${c.start} — ${c.end}`;
    classRoom.textContent = c.room;
    countdownLabel.textContent = 'ENDS IN';
    countdown.textContent = formatCountdown(remainingSec);
    countdownSub.textContent = `${Math.floor(remainingSec/60)} min remaining`;
    progressFill.style.width = pct + '%';
    progressFill.style.background = colorMap[c.color] || '#84CC16';
    statusPanel.style.background = colorMap[c.color] + '15';
  } else if (status.next) {
    const c = status.next;
    liveIndicator.classList.remove('bg-[#84CC16]');
    liveIndicator.classList.add('bg-[#FCD34D]');
    liveDot.classList.remove('pulse-dot');
    liveLabel.textContent = 'UP NEXT';
    statusLabel.textContent = status.nextDayOffset === 0 ? 'NEXT CLASS TODAY' : (status.nextDayOffset === 1 ? 'NEXT CLASS TOMORROW' : 'NEXT CLASS');
    className.textContent = c.name;
    className.style.color = colorMap[c.color] || '#2563EB';
    classMeta.textContent = `${c.code} · ${c.instructor} · ${c.room}`;
    classTime.textContent = `${c.start} — ${c.end}`;
    classRoom.textContent = c.room;

    let secToStart;
    if (status.nextDayOffset === 0) {
      secToStart = (timeToMin(c.start) - nowMin) * 60;
    } else {
      secToStart = ((status.nextDayOffset * 24 * 60) - nowMin + timeToMin(c.start)) * 60;
    }
    countdownLabel.textContent = 'STARTS IN';
    countdown.textContent = formatCountdown(secToStart);
    countdownSub.textContent = status.nextDayOffset === 0 ? `in ${Math.floor(secToStart/60)} min` : (status.nextDayOffset === 1 ? 'tomorrow' : `in ${status.nextDayOffset} days`);
    progressFill.style.width = '0%';
    statusPanel.style.background = '#FAF7F2';
  } else {
    liveIndicator.classList.remove('bg-[#84CC16]','bg-[#FCD34D]');
    liveIndicator.classList.add('bg-white');
    liveLabel.textContent = 'NO CLASS';
    statusLabel.textContent = 'NO SCHEDULED CLASS';
    className.textContent = 'Enjoy your day!';
    countdown.textContent = '--:--:--';
    progressFill.style.width = '0%';
  }

  // Upcoming list
  const upcomingList = document.getElementById('upcoming-list');
  if (!upcomingList) return;
  upcomingList.innerHTML = '';
  const upcoming = status.todayClasses.filter(c => !status.current || c !== status.current).filter(c => timeToMin(c.start) > nowMin).slice(0,3);
  if (upcoming.length === 0) {
    upcomingList.innerHTML = '<div class="text-sm text-[#0F172A]/50 font-mono p-3 border-2 border-dashed border-[#0F172A]/30">No more classes today. You\'re done! 🎉</div>';
  } else {
    upcoming.forEach(c => {
      const colorBg = colorMap[c.color] || '#2563EB';
      const div = document.createElement('div');
      div.className = 'flex items-center gap-3 p-3 border-[2.5px] border-[#0F172A] bg-white hover:bg-[#FCD34D]/30 transition cursor-pointer';
      div.innerHTML = `
        <div class="w-1 h-10" style="background:${colorBg}"></div>
        <div class="flex-1 min-w-0">
          <div class="font-bold text-sm truncate">${c.name}</div>
          <div class="text-xs text-[#0F172A]/60 font-mono">${c.code} · ${c.room}</div>
        </div>
        <div class="text-right">
          <div class="font-display text-sm">${c.start}</div>
          <div class="text-xs text-[#0F172A]/50 font-mono">${c.end}</div>
        </div>`;
      upcomingList.appendChild(div);
    });
  }
}

// ============== MODULES ==============
function renderModules(filter='all') {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = modules.filter(m => filter === 'all' || m.tags.includes(filter));
  if (!filtered.length) {
    grid.innerHTML = '<div class="col-span-full text-center py-10 text-[#0F172A]/50">No modules match this filter.</div>';
    return;
  }

  const colorMap = { blue:'#1E5AA8', lime:'#278455', pink:'#B5475D', yellow:'#C68C08' };

  filtered.forEach((m,i) => {
    const card = document.createElement('article');
    card.className = 'brutal p-5 pop-in';
    card.style.animationDelay = (i*0.04)+'s';
    card.innerHTML = `
      <div class="flex items-start justify-between gap-3 mb-4">
        <div>
          <div class="font-mono text-xs text-[#0F172A]/50">${m.code}</div>
          <h3 class="font-display text-xl mt-1 leading-tight">${m.name}</h3>
          <div class="text-xs text-[#0F172A]/60 mt-1">${m.instructor}</div>
        </div>
        <div class="module-progress-number">${m.progress}%</div>
      </div>
      <div class="progress-track mb-3"><div class="progress-fill" style="width:${m.progress}%;background:${colorMap[m.color]}"></div></div>
      <div class="flex items-center justify-between text-xs gap-3">
        <span class="font-mono text-[#0F172A]/60">NEXT: <span class="text-[#0F172A] font-bold">${m.next}</span></span>
        <button class="font-bold text-[#1E5AA8]" onclick="openModuleModal('${m.code}')">View Module →</button>
      </div>`;
    grid.appendChild(card);
  });
}

// ============== LOST & FOUND ==============
function renderLostFound(filter='all') {
  const grid = document.getElementById('lf-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = lostFoundItems.filter(item => filter === 'all' || item.status === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="col-span-full text-center py-12 text-[#0F172A]/50">No items match this filter.</div>';
    return;
  }

  const tagClass = { lost:'tag-lost', found:'tag-found', claimed:'tag-claimed' };
  const tagLabel = { lost:'LOST', found:'FOUND', claimed:'CLAIMED' };

  filtered.forEach((item,i) => {
    const card = document.createElement('article');
    card.className = 'brutal-sm overflow-hidden pop-in lf-card';
    card.style.animationDelay = (i*0.04) + 's';

    const isMyReport = item.userCreated === true;

    card.innerHTML = `
      <div class="lf-visual lf-visual-clean relative">
        <span class="absolute top-3 left-3 ${tagClass[item.status]} font-mono text-xs font-bold px-2 py-1">${tagLabel[item.status]}</span>

        ${isMyReport ? `
          <div class="my-report-badge">MY REPORT</div>
          <button class="my-report-delete"
            title="Delete my report"
            aria-label="Delete my report"
            onclick="event.stopPropagation();confirmDeleteMyReport(${item.id})">
            <i class="fas fa-trash-can"></i>
          </button>
        ` : ''}

        <div class="lf-clean-label">
          <div class="lf-clean-category">${escapeHtml(item.category || 'Item')}</div>
          <div class="lf-clean-name">${escapeHtml(item.name)}</div>
        </div>
      </div>

      <div class="p-4">
        <h3 class="font-display text-base mb-1 leading-tight">${escapeHtml(item.name)}</h3>

        <div class="flex items-center gap-2 text-xs font-mono text-[#0F172A]/70 mb-2">
          <i class="fas fa-calendar"></i>${escapeHtml(item.date)}
          <span>·</span>
          <i class="fas fa-location-dot"></i>${escapeHtml(item.location)}
        </div>

        <p class="text-xs text-[#0F172A]/70 leading-snug mb-3">${escapeHtml(item.desc)}</p>

        <button class="w-full lf-action-btn py-2 text-xs" onclick="handleLostFoundAction(${item.id})">
          ${item.status==='claimed'?'Resolved':item.status==='lost'?'I Found This':'I Own This'}
        </button>
      </div>`;

    grid.appendChild(card);
  });
}

function confirmDeleteMyReport(id) {
  const item = lostFoundItems.find(i => Number(i.id) === Number(id));

  // Student can never delete built-in / other-student reports.
  if (!item || item.userCreated !== true) {
    showToast('You can only delete reports that you created.', 'error');
    return;
  }

  openInfoModal('DELETE MY REPORT', `
    <div class="space-y-4">
      <div class="info-box">
        <div class="info-label">YOUR REPORT</div>
        <b>${escapeHtml(item.name)}</b>
        <div class="text-xs text-[#0F172A]/60 mt-1">
          ${escapeHtml(item.status.toUpperCase())} · ${escapeHtml(item.location)}
        </div>
      </div>

      <p class="text-sm text-[#0F172A]/70">
        Delete this report if it was submitted by mistake or is no longer needed.
        Other students' reports cannot be deleted from your account.
      </p>

      <div class="flex gap-2">
        <button class="btn-secondary flex-1 py-2.5" onclick="closeModal()">Cancel</button>
        <button class="btn-danger flex-1 py-2.5" onclick="deleteMyLostFoundReport(${item.id})">
          Delete My Report
        </button>
      </div>
    </div>
  `, '#B5475D');
}

function deleteMyLostFoundReport(id) {
  const index = lostFoundItems.findIndex(i => Number(i.id) === Number(id));
  if (index < 0 || lostFoundItems[index].userCreated !== true) {
    showToast('You can only delete reports that you created.', 'error');
    return;
  }

  lostFoundItems.splice(index, 1);
  saveLostFoundItems();
  closeModal();

  const activeFilter =
    document.querySelector('#lf-filters .filter-tag.active')?.dataset.lfFilter || 'all';

  renderLostFound(activeFilter);
  updateLostFoundCounts();
  showToast('Your report was deleted.', 'success');
}

// ============== CAMPUS BUZZ ==============
function renderBuzz(filter='all') {
  const grid = document.getElementById('buzz-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = buzzItems.filter(b => filter === 'all' || b.type === filter);
  const colorMap = { blue:'#2563EB', lime:'#84CC16', pink:'#EC4899', yellow:'#FCD34D' };
  const typeLabel = { event:'EVENT', club:'CLUB', notice:'NOTICE' };
  filtered.forEach((b,i) => {
    const bg = colorMap[b.color];
    const textDark = b.color === 'lime' || b.color === 'yellow';
    const card = document.createElement('article');
    card.className = 'brutal overflow-hidden pop-in';
    card.style.animationDelay = (i*0.04) + 's';
    card.onclick = () => openBuzzDetails(b.title);
    card.style.cursor = 'pointer';
    card.innerHTML = `
      <div class="h-32 border-b-[3px] border-[#0F172A] relative" style="background:${bg}">
        <div class="absolute inset-0 flex items-center justify-center">
          <i class="fas ${b.icon} text-5xl ${textDark?'text-[#0F172A]':'text-white/90'}"></i>
        </div>
        <span class="absolute top-3 left-3 ${textDark?'bg-[#0F172A] text-[#FCD34D]':'bg-white text-[#0F172A]'} font-mono text-xs font-bold px-2 py-1 border-2 border-[#0F172A]">${typeLabel[b.type]}</span>
      </div>
      <div class="p-4">
        <h3 class="font-display text-lg mb-1 leading-tight">${b.title}</h3>
        <p class="text-sm text-[#0F172A]/70 mb-2">${b.desc}</p>
        <div class="text-xs font-mono text-[#0F172A]/60">${b.meta}</div>
      </div>`;
    grid.appendChild(card);
  });
}

// ============== SERVICES ==============
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  services.forEach((s,i) => {
    const card = document.createElement('div');
    card.className = 'brutal p-5 pop-in';
    card.style.animationDelay = (i*0.05) + 's';
    const isDark = s.color === '#0F172A';
    card.innerHTML = `
      <div class="flex items-start gap-4 mb-3">
        <div class="w-14 h-14 flex items-center justify-center border-[3px] border-[#0F172A] shadow-[3px_3px_0_#0F172A] flex-shrink-0" style="background:${s.color}">
          <i class="fas ${s.icon} text-2xl ${isDark?'text-[#FCD34D]':'text-white'}"></i>
        </div>
        <div class="flex-1">
          <h3 class="font-display text-xl leading-tight">${s.name}</h3>
          <p class="text-sm text-[#0F172A]/70 mt-1">${s.desc}</p>
        </div>
      </div>
      <div class="space-y-1.5 text-xs font-mono border-t-2 border-[#0F172A]/10 pt-3 mb-3">
        <div class="flex items-center gap-2"><i class="fas fa-clock text-[#2563EB] w-4"></i> ${s.hours}</div>
        <div class="flex items-center gap-2"><i class="fas fa-phone text-[#EC4899] w-4"></i> ${s.contact}</div>
      </div>
      <button class="btn-brutal bg-[#84CC16] text-[#0F172A] w-full py-2 text-xs" onclick="selectSupportService('${s.name}')">Book Appointment</button>`;
    grid.appendChild(card);
  });
}

// ============== MODAL ==============
function openReportModal() {
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="fixed inset-0 modal-backdrop z-[90] flex items-center justify-center p-4" onclick="if(event.target===this)closeModal()">
      <div class="brutal-lg bg-white w-full max-w-lg modal-panel" style="animation:pop-in .35s ease-out">
        <div class="bg-[#EC4899] text-white p-5 border-b-[4px] border-[#0F172A] flex items-center justify-between sticky top-0 z-10">
          <div>
            <div class="font-mono text-xs text-white/80">// NEW REPORT</div>
            <h2 class="font-display text-2xl">REPORT ITEM</h2>
          </div>
          <button class="bg-white text-[#EC4899] w-9 h-9 border-[3px] border-[#0F172A] font-bold flex items-center justify-center" onclick="closeModal()">×</button>
        </div>
        <form id="lost-found-form" class="p-5 space-y-4" onsubmit="submitReport(event)">
          <div>
            <label class="font-mono text-xs uppercase text-[#0F172A]/60 block mb-2">Status</label>
            <div class="grid grid-cols-2 gap-2">
              <label class="cursor-pointer">
                <input type="radio" name="status" value="lost" checked class="peer sr-only">
                <div class="border-[3px] border-[#0F172A] p-3 text-center font-bold peer-checked:bg-[#EC4899] peer-checked:text-white transition">
                  <i class="fas fa-magnifying-glass mb-1"></i><div class="text-xs uppercase">Lost</div>
                </div>
              </label>
              <label class="cursor-pointer">
                <input type="radio" name="status" value="found" class="peer sr-only">
                <div class="border-[3px] border-[#0F172A] p-3 text-center font-bold peer-checked:bg-[#84CC16] transition">
                  <i class="fas fa-hand mb-1"></i><div class="text-xs uppercase">Found</div>
                </div>
              </label>
            </div>
          </div>
          <div>
            <label class="font-mono text-xs uppercase text-[#0F172A]/60 block mb-2">Item Name</label>
            <input required name="name" type="text" placeholder="e.g. Black leather wallet" class="w-full border-[3px] border-[#0F172A] px-3 py-2.5 font-bold focus:outline-none focus:bg-[#FCD34D]/20">
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-mono text-xs uppercase text-[#0F172A]/60 block mb-2">Category</label>
              <select name="category" class="w-full border-[3px] border-[#0F172A] px-3 py-2.5 font-bold bg-white focus:outline-none">
                <option>Electronics</option><option>Accessories</option><option>Clothing</option>
                <option>Bags</option><option>Stationery</option><option>Other</option>
              </select>
            </div>
            <div>
              <label class="font-mono text-xs uppercase text-[#0F172A]/60 block mb-2">Date</label>
              <input required name="date" type="date" class="w-full border-[3px] border-[#0F172A] px-3 py-2.5 font-bold focus:outline-none">
            </div>
          </div>
          <div>
            <label class="font-mono text-xs uppercase text-[#0F172A]/60 block mb-2">Location</label>
            <input required name="location" type="text" placeholder="e.g. Library · 2nd Floor" class="w-full border-[3px] border-[#0F172A] px-3 py-2.5 font-bold focus:outline-none focus:bg-[#FCD34D]/20">
          </div>
          <div>
            <label class="font-mono text-xs uppercase text-[#0F172A]/60 block mb-2">Description</label>
            <textarea required name="desc" class="w-full border-[3px] border-[#0F172A] px-3 py-2.5 font-medium focus:outline-none focus:bg-[#FCD34D]/20 h-24 resize-none" placeholder="Add details — color, brand, distinguishing features..."></textarea>
          </div>
          <div class="flex gap-2 pt-2">
            <button type="button" class="btn-brutal bg-white text-[#0F172A] flex-1 py-3" onclick="closeModal()">Cancel</button>
            <button type="submit" class="btn-brutal bg-[#2563EB] text-white flex-1 py-3">Submit Report</button>
          </div>
        </form>
      </div>
    </div>`;
  document.body.style.overflow = 'hidden';

  const dateInput = document.querySelector('#lost-found-form input[name="date"]');
  if (dateInput) dateInput.value = new Date().toISOString().slice(0,10);
}

function closeModal() {
  const root = document.getElementById('modal-root');
  if (root) root.innerHTML = '';
  document.body.style.overflow = '';
}

function submitReport(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const dateValue = form.get('date');
  const displayDate = dateValue ? new Date(dateValue + 'T00:00:00').toLocaleDateString('en-US', {month:'short', day:'numeric'}) : 'Today';
  const nextId = lostFoundItems.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0) + 1;

  const item = {
    id: nextId,
    name: String(form.get('name') || '').trim(),
    status: String(form.get('status') || 'lost'),
    category: String(form.get('category') || 'Other'),
    date: displayDate,
    location: String(form.get('location') || '').trim(),
    desc: String(form.get('desc') || '').trim(),
    seed: 'gustohub' + Date.now(),
    userCreated: true
  };

  lostFoundItems.unshift(item);
  saveLostFoundItems();
  closeModal();
  renderLostFound('all');
  const allBtn = document.querySelector('#lf-filters [data-lf-filter="all"]');
  if (allBtn) {
    document.querySelectorAll('#lf-filters .filter-tag').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
  }
  updateLostFoundCounts();
  showToast('Item added to Lost & Found.', 'success');
}

function saveLostFoundItems() {
  try { localStorage.setItem('gustohubLostFound', JSON.stringify(lostFoundItems)); } catch(e) {}
}

function restoreLostFoundItems() {
  try {
    const saved = JSON.parse(localStorage.getItem('gustohubLostFound') || 'null');
    if (Array.isArray(saved) && saved.length) {
      saved.forEach(item => {
        if (Number(item.id) > 8 && item.userCreated === undefined) item.userCreated = true;
      });
      lostFoundItems.splice(0, lostFoundItems.length, ...saved);
    }
  } catch(e) {}
}

function updateLostFoundCounts() {
  const total = lostFoundItems.length;
  const lost = lostFoundItems.filter(i => i.status === 'lost').length;
  const found = lostFoundItems.filter(i => i.status === 'found').length;
  const claimed = lostFoundItems.filter(i => i.status === 'claimed').length;

  const countEl = document.getElementById('item-count');
  if (countEl) countEl.textContent = total;

  const map = {all:total, lost, found, claimed};
  document.querySelectorAll('#lf-filters [data-lf-filter]').forEach(btn => {
    const key = btn.dataset.lfFilter;
    const span = btn.querySelector('span');
    if (span) span.textContent = `(${map[key] ?? 0})`;
  });
}

function handleLostFoundAction(id) {
  const item = lostFoundItems.find(i => Number(i.id) === Number(id));
  if (!item) return;

  if (item.status === 'claimed') {
    openInfoModal('ITEM RESOLVED', `
      <p class="text-sm text-[#0F172A]/70">This item has already been marked as claimed and the report is closed.</p>
    `);
    return;
  }

  const actionText = item.status === 'lost' ? 'Mark as Found' : 'Claim This Item';
  openInfoModal(item.name.toUpperCase(), `
    <div class="space-y-3">
      <div class="font-mono text-xs text-[#0F172A]/60">${item.category} · ${item.date}</div>
      <div class="font-bold">${item.location}</div>
      <p class="text-sm text-[#0F172A]/70">${item.desc}</p>
      <button class="btn-brutal bg-[#84CC16] text-[#0F172A] px-4 py-2.5 text-sm" onclick="resolveLostFoundItem(${item.id})">${actionText}</button>
    </div>
  `);
}

function resolveLostFoundItem(id) {
  const item = lostFoundItems.find(i => Number(i.id) === Number(id));
  if (!item) return;
  item.status = 'claimed';
  saveLostFoundItems();
  closeModal();
  renderLostFound(document.querySelector('#lf-filters .active')?.dataset.lfFilter || 'all');
  updateLostFoundCounts();
  showToast('Item status updated to CLAIMED.', 'success');
}

// ============== TOAST ==============
let activeToastTimer = null;
function showToast(message, type='info') {
  const root = document.getElementById('toast-root');
  if (!root) return;

  // Important: never stack demo notifications on the right side.
  root.innerHTML = '';
  if (activeToastTimer) clearTimeout(activeToastTimer);

  const colors = {
    success: { bg:'#84CC16', text:'#0F172A', icon:'fa-check-circle' },
    info:    { bg:'#2563EB', text:'#fff', icon:'fa-circle-info' },
    error:   { bg:'#EC4899', text:'#fff', icon:'fa-circle-exclamation' },
  };
  const c = colors[type] || colors.info;
  const t = document.createElement('div');
  t.className = 'toast pointer-events-auto brutal-sm flex items-center gap-3 px-4 py-3 max-w-sm';
  t.style.background = c.bg;
  t.style.color = c.text;
  t.innerHTML = `<i class="fas ${c.icon}"></i><span class="font-bold text-sm">${message}</span>`;
  root.appendChild(t);

  activeToastTimer = setTimeout(() => {
    t.style.transition = 'all .25s ease';
    t.style.opacity = '0';
    t.style.transform = 'translateX(30px)';
    setTimeout(() => {
      if (t.parentNode) t.remove();
    }, 260);
  }, 2200);
}

// ============== FAQ ==============
function toggleFAQ(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('i');
  if (!content) return;

  const isOpening = content.classList.contains('hidden');

  // Keep FAQ clean: close other answers first.
  document.querySelectorAll('.faq-answer').forEach(answer => {
    if (answer !== content) {
      answer.classList.add('hidden');
      answer.classList.remove('open');
    }
  });

  document.querySelectorAll('.faq-item > button i').forEach(otherIcon => {
    if (otherIcon !== icon) {
      otherIcon.classList.remove('fa-minus');
      otherIcon.classList.add('fa-plus');
      otherIcon.style.transform = 'rotate(0deg)';
    }
  });

  if (isOpening) {
    content.classList.remove('hidden');
    content.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');

    if (icon) {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
      icon.style.transform = 'rotate(180deg)';
    }
  } else {
    content.classList.add('hidden');
    content.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');

    if (icon) {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
      icon.style.transform = 'rotate(0deg)';
    }
  }
}

// Backward-compatible alias in case an older page still calls this spelling.
function toggleFaq(btn) {
  toggleFAQ(btn);
}


// ============== WORKING BLOCKS & MODALS ==============
function openInfoModal(title, bodyHtml, accent='#2563EB') {
  const root = document.getElementById('modal-root');
  if (!root) return;
  root.innerHTML = `
    <div class="fixed inset-0 modal-backdrop z-[90] flex items-center justify-center p-4" onclick="if(event.target===this)closeModal()">
      <div class="brutal-lg bg-white w-full max-w-xl modal-panel" style="animation:pop-in .25s ease-out">
        <div class="text-white p-5 border-b-[4px] border-[#0F172A] flex items-center justify-between sticky top-0 z-10" style="background:${accent}">
          <h2 class="font-display text-2xl">${title}</h2>
          <button class="bg-white text-[#0F172A] w-9 h-9 border-[3px] border-[#0F172A] font-bold" onclick="closeModal()">×</button>
        </div>
        <div class="p-5">${bodyHtml}</div>
      </div>
    </div>`;
  document.body.style.overflow = 'hidden';
}

const portalNotifications = [
  {
    id:'assignment-deadline',
    title:'Assignment deadline',
    text:'Assignment 1 Report is due soon.',
    page:'academic',
    target:'assignment-sdlc-a1',
    tone:'warning'
  },
  {
    id:'campus-update',
    title:'Campus update',
    text:'Gusto LMS maintenance notice is available.',
    page:'campus',
    target:'campus-updates-section',
    tone:'info'
  },
  {
    id:'lost-found-update',
    title:'Lost & Found',
    text:'A new found item was reported on campus.',
    page:'campus',
    target:'lost-found-section',
    tone:'success'
  }
];

function getReadNotifications() {
  try { return JSON.parse(localStorage.getItem('gustohubReadNotifications') || '[]'); }
  catch(e) { return []; }
}

function updateNotificationCount() {
  const read = getReadNotifications();
  const unread = portalNotifications.filter(n => !read.includes(n.id)).length;
  document.querySelectorAll('.notification-count').forEach(el => {
    el.textContent = unread;
    el.classList.toggle('hidden', unread === 0);
  });
}

function markNotificationRead(id, refreshModal=true) {
  const read = getReadNotifications();
  if (!read.includes(id)) read.push(id);
  localStorage.setItem('gustohubReadNotifications', JSON.stringify(read));
  updateNotificationCount();
  if (refreshModal && document.getElementById('modal-root')?.innerHTML) openNotifications();
}

function markAllNotificationsRead() {
  localStorage.setItem(
    'gustohubReadNotifications',
    JSON.stringify(portalNotifications.map(n => n.id))
  );
  updateNotificationCount();
  closeModal();
  showToast('All notifications marked as read.', 'success');
}

function openNotifications() {
  const read = getReadNotifications();

  openInfoModal('NOTIFICATIONS', `
    <div class="space-y-3">
      ${portalNotifications.map(n => {
        const isRead = read.includes(n.id);
        return `
          <button class="notification-link ${isRead ? 'is-read' : ''}"
            onclick="navigateToTarget('${n.page}','${n.target}','${n.id}')">
            <div class="notification-link-content">
              <div class="flex items-center gap-2">
                <div class="font-bold">${n.title}</div>
                ${!isRead ? '<span class="notification-unread-dot"></span>' : ''}
              </div>
              <div class="text-sm text-[#0F172A]/65">${n.text}</div>
            </div>
            <i class="fas fa-arrow-right notification-arrow"></i>
          </button>`;
      }).join('')}

      <div class="flex items-center justify-between gap-3 pt-1">
        <span class="text-xs text-[#0F172A]/50">Select a notification to open the related section.</span>
        <button class="btn-secondary px-3 py-2 text-xs" onclick="markAllNotificationsRead()">Mark all as read</button>
      </div>
    </div>
  `, '#1E5AA8');
}

function openTimetableModal() {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const grouped = timetable.reduce((acc, c) => {
    (acc[c.day] ||= []).push(c);
    return acc;
  }, {});
  const rows = Object.keys(grouped).sort((a,b)=>a-b).map(day => `
    <div class="border-[3px] border-[#0F172A] p-4">
      <div class="font-display text-lg mb-2">${days[day]}</div>
      <div class="space-y-2">
        ${grouped[day].map(c => `<div class="flex justify-between gap-3 text-sm border-t-2 border-[#0F172A]/10 pt-2">
          <span><b>${c.code}</b> · ${c.name}</span><span class="font-mono">${c.start}–${c.end}</span>
        </div>`).join('')}
      </div>
    </div>`).join('');
  openInfoModal('FULL TIMETABLE', `<div class="space-y-3 timetable-scroll-content">${rows}</div>`, '#0F172A');
}

function openTaskModal() {
  openInfoModal('ADD A TASK', `
    <form onsubmit="addDashboardTask(event)" class="space-y-4">
      <div>
        <label class="font-mono text-xs uppercase block mb-2">Task</label>
        <input name="task" required class="w-full border-[3px] border-[#0F172A] px-3 py-2.5 font-bold" placeholder="e.g. Finish database diagram">
      </div>
      <div>
        <label class="font-mono text-xs uppercase block mb-2">Due</label>
        <input name="due" required class="w-full border-[3px] border-[#0F172A] px-3 py-2.5 font-bold" placeholder="e.g. Tomorrow 5:00 PM">
      </div>
      <button class="btn-brutal bg-[#84CC16] text-[#0F172A] w-full py-3">Add Task</button>
    </form>
  `, '#0F172A');
}

function addDashboardTask(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const task = {
    id: Date.now(),
    text: String(fd.get('task') || '').trim(),
    due: String(fd.get('due') || '').trim(),
    done: false
  };
  const custom = JSON.parse(localStorage.getItem('gustohubCustomTasks') || '[]');
  custom.push(task);
  localStorage.setItem('gustohubCustomTasks', JSON.stringify(custom));
  closeModal();
  renderCustomTasks();
  updateTaskProgress();
  showToast('Task added.', 'success');
}

function renderCustomTasks() {
  const list = document.getElementById('tasks-list');
  if (!list) return;
  list.querySelectorAll('[data-custom-task]').forEach(el => el.remove());
  let custom = [];
  try { custom = JSON.parse(localStorage.getItem('gustohubCustomTasks') || '[]'); } catch(e) {}
  custom.forEach(task => {
    const label = document.createElement('label');
    label.className = 'flex items-start gap-3 cursor-pointer group';
    label.dataset.customTask = task.id;
    label.innerHTML = `
      <input type="checkbox" class="mt-1 w-5 h-5 accent-[#84CC16]" ${task.done ? 'checked' : ''}>
      <div class="flex-1">
        <div class="font-semibold group-hover:text-[#84CC16] transition ${task.done ? 'line-through opacity-50' : ''}">${escapeHtml(task.text)}</div>
        <div class="text-xs text-white/60 font-mono">DUE ${escapeHtml(task.due).toUpperCase()}</div>
      </div>
      <button type="button" class="text-white/50 hover:text-[#EC4899]" title="Delete task">×</button>`;
    const cb = label.querySelector('input');
    cb.addEventListener('change', () => {
      task.done = cb.checked;
      localStorage.setItem('gustohubCustomTasks', JSON.stringify(custom));
      cb.nextElementSibling.querySelector('.font-semibold').classList.toggle('line-through', cb.checked);
      cb.nextElementSibling.querySelector('.font-semibold').classList.toggle('opacity-50', cb.checked);
      updateTaskProgress();
    });
    label.querySelector('button').addEventListener('click', (ev) => {
      ev.preventDefault(); ev.stopPropagation();
      custom = custom.filter(t => t.id !== task.id);
      localStorage.setItem('gustohubCustomTasks', JSON.stringify(custom));
      label.remove();
      updateTaskProgress();
    });
    list.appendChild(label);
  });
}

function initTaskManager() {
  const list = document.getElementById('tasks-list');
  if (!list) return;

  const saved = JSON.parse(localStorage.getItem('gustohubBaseTaskState') || '{}');
  [...list.querySelectorAll('label:not([data-custom-task]) input[type="checkbox"]')].forEach((cb, index) => {
    if (saved[index] !== undefined) cb.checked = !!saved[index];
    const text = cb.closest('label').querySelector('.font-semibold');
    text.classList.toggle('line-through', cb.checked);
    text.classList.toggle('opacity-50', cb.checked);
    cb.addEventListener('change', () => {
      const state = {};
      [...list.querySelectorAll('label:not([data-custom-task]) input[type="checkbox"]')].forEach((x,i)=>state[i]=x.checked);
      localStorage.setItem('gustohubBaseTaskState', JSON.stringify(state));
      text.classList.toggle('line-through', cb.checked);
      text.classList.toggle('opacity-50', cb.checked);
      updateTaskProgress();
    });
  });
  renderCustomTasks();
  updateTaskProgress();
}

function updateTaskProgress() {
  const list = document.getElementById('tasks-list');
  if (!list) return;
  const boxes = [...list.querySelectorAll('input[type="checkbox"]')];
  const done = boxes.filter(b => b.checked).length;
  const total = boxes.length || 1;
  const pct = Math.round(done / total * 100);
  const a = document.getElementById('task-progress-label');
  const b = document.getElementById('task-progress-percent');
  const fill = document.getElementById('task-progress-fill');
  if (a) a.textContent = `${done} OF ${boxes.length} DONE`;
  if (b) b.textContent = `${pct}% COMPLETE`;
  if (fill) {
    fill.style.width = pct + '%';
    fill.classList.toggle('has-progress', done > 0);
    fill.classList.toggle('is-complete', done === boxes.length && boxes.length > 0);
  }
}

function openModuleModal(code) {
  const m = modules.find(x => x.code === code);
  if (!m) return;

  const moduleBriefs = Object.values(realAssignmentBriefs).filter(b => b.moduleKey === m.key);

  openInfoModal(m.name.toUpperCase(), `
    <div class="space-y-4">
      <div class="grid sm:grid-cols-2 gap-3">
        <div class="info-box"><div class="info-label">MODULE</div><b>${m.code}</b></div>
        <div class="info-box"><div class="info-label">TEACHER</div><b>${escapeHtml(m.instructor)}</b></div>
      </div>

      <div>
        <div class="flex justify-between text-sm font-bold mb-2">
          <span>Module progress</span><span>${m.progress}%</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${m.progress}%"></div></div>
      </div>

      <div>
        <div class="info-label mb-2">OFFICIAL ASSIGNMENT BRIEFS</div>
        <div class="space-y-2">
          ${moduleBriefs.map(b => `
            <div class="real-brief-modal-card">
              <div>
                <div class="font-bold">${escapeHtml(b.title)}</div>
                <div class="text-xs text-[#0F172A]/60 mt-1">${escapeHtml(b.officialTitle)}</div>
                <div class="text-xs text-[#0F172A]/50 mt-1">Due: ${escapeHtml(b.due)}</div>
              </div>
              <button class="btn-primary px-3 py-2 text-xs" onclick="openRealBrief('${b.file}')">
                <i class="fas fa-file-pdf"></i> Open PDF
              </button>
            </div>`).join('')}
        </div>
      </div>

      <button class="btn-secondary w-full" onclick="closeModal();navigateToTarget('academic','assignment-submission-section')">
        Go to My Assignments
      </button>
    </div>
  `, '#1E5AA8');
}

const materialInfo = {"SDLC_Assignment_1_Brief_HND69.pdf": "Software Development Lifecycles - SDLC Assignment 1", "SDLC_Assignment_2_Brief_HND69.pdf": "Software Development Lifecycles - SDLC Assignment 2", "PACP_Assignment_Brief_HND69.pdf": "Planning a Computing Project - Planning a Computing Project Assignment Brief", "Security_Assignment_Brief_HND69.pdf": "Security - Security Assignment", "WDD_Assignment_1_Brief_HND69.pdf": "Website Design & Development - Website Design & Development Assignment 1", "WDD_Assignment_2_Brief_HND69.pdf": "Website Design & Development - Website Design & Development Assignment 2"};

function openRealBrief(filename) {
  window.open('assets/resources/' + filename, '_blank');
}

function downloadMaterial(filename) {
  const a = document.createElement('a');
  a.href = 'assets/resources/' + filename;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  showToast('Download started: ' + filename, 'success');
}

function openMaterialsModal() {
  const items = Object.values(realAssignmentBriefs);
  openInfoModal('OFFICIAL ASSIGNMENT BRIEFS', `
    <div class="space-y-3">
      ${items.map(b => `
        <div class="resource-modal-row">
          <div>
            <div class="font-bold">${escapeHtml(b.title)}</div>
            <div class="text-xs text-[#0F172A]/60">${escapeHtml(b.module)} · ${escapeHtml(b.teacher)}</div>
          </div>
          <div class="flex gap-2">
            <button class="btn-secondary px-3 py-2 text-xs" onclick="openRealBrief('${b.file}')">Open</button>
            <button class="btn-primary px-3 py-2 text-xs" onclick="downloadMaterial('${b.file}')">Download</button>
          </div>
        </div>`).join('')}
    </div>
  `, '#1E5AA8');
}

function openAssignmentCalendar() {
  openInfoModal('ASSIGNMENT CALENDAR', `
    <div class="space-y-3">
      <div class="info-box"><b>18 Aug 2026</b> · SDLC Assignment 1 · 11:55 PM</div>
      <div class="info-box"><b>22 Aug 2026</b> · Website Development Report · 11:55 PM</div>
      <div class="info-box"><b>26 Aug 2026</b> · Project Report & Presentation · 11:55 PM</div>
    </div>
  `, '#1E5AA8');
}

function openBuzzDetails(title) {
  const b = buzzItems.find(x => x.title === title);
  if (!b) {
    openInfoModal(title, '<p class="text-sm">Campus item details are available from the Campus Life page.</p>');
    return;
  }
  openInfoModal(b.title, `
    <div class="space-y-3">
      <div class="font-mono text-xs uppercase">${b.type}</div>
      <p class="text-base">${b.desc}</p>
      <div class="border-[3px] border-[#0F172A] p-3 font-mono text-sm">${b.meta}</div>
      ${b.type === 'event' ? `<button class="btn-brutal bg-[#84CC16] text-[#0F172A] px-4 py-2" onclick="toggleEventRegistration('${escapeJs(b.title)}', this)">Register</button>` : ''}
    </div>
  `);
}

function toggleEventRegistration(title, btn) {
  const key = 'gustohubEventRegistrations';
  let regs = [];
  try { regs = JSON.parse(localStorage.getItem(key) || '[]'); } catch(e) {}
  const exists = regs.includes(title);
  if (exists) regs = regs.filter(x => x !== title);
  else regs.push(title);
  localStorage.setItem(key, JSON.stringify(regs));
  btn.textContent = exists ? 'Register' : 'Registered ✓';
  showToast(exists ? 'Registration cancelled.' : 'Event registration saved.', exists ? 'info' : 'success');
}

const campusServiceData = {
  LMS: ['Gusto LMS', 'Open Gusto LMS to view module pages, announcements, reference books and official assignment areas.'],
  Library: ['Library Support', 'Access reference books and ask student services for available learning resources.'],
  IT: ['IT Help', 'Get support for LMS login, Wi-Fi and technical issues.'],
  'Student Services': ['Student Services', 'Get help with student information, forms and general academic administration.'],
  Timetable: ['Timetable', 'Check your class schedule from the GustoHub Dashboard.'],
  Enquiry: ['General Enquiry', 'Contact student support at 09-979387111 for general questions.']
};

function openCampusService(name) {
  const data = campusServiceData[name] || [name, 'Service information'];
  openInfoModal(data[0].toUpperCase(), `
    <p class="text-sm text-[#0F172A]/70 mb-4">${data[1]}</p>
    <button class="btn-brutal bg-[#84CC16] text-[#0F172A] px-4 py-2" onclick="saveServiceBookmark('${escapeJs(name)}')">Save to Quick Links</button>
  `);
}

function saveServiceBookmark(name) {
  let list = [];
  try { list = JSON.parse(localStorage.getItem('gustohubQuickLinks') || '[]'); } catch(e) {}
  if (!list.includes(name)) list.push(name);
  localStorage.setItem('gustohubQuickLinks', JSON.stringify(list));
  closeModal();
  showToast(name + ' saved to Quick Links.', 'success');
}

function openSecurityPanel() {
  openInfoModal('CAMPUS SECURITY', `
    <div class="space-y-3">
      <p class="text-sm text-[#0F172A]/70">For this website demo, the security button opens the contact panel instead of placing a real phone call.</p>
      <div class="border-[3px] border-[#0F172A] p-4">
        <div class="font-mono text-xs">DEMO CONTACT</div>
        <div class="font-display text-2xl">09-979387111</div>
        <div class="text-sm mt-1">Available 24/7</div>
      </div>
    </div>
  `, '#EC4899');
}

function selectSupportService(name) {
  const select = document.getElementById('appointment-service');
  if (select) {
    const option = [...select.options].find(o => o.textContent.trim() === name || name.includes(o.textContent.trim()) || o.textContent.trim().includes(name));
    if (option) select.value = option.value;
  }
  document.getElementById('quick-appointment')?.scrollIntoView({behavior:'smooth', block:'center'});
  showToast(name + ' selected.', 'success');
}

function submitAppointment() {
  const service = document.getElementById('appointment-service');
  const date = document.getElementById('appointment-date');
  const time = document.getElementById('appointment-time');
  const notes = document.getElementById('appointment-notes');
  if (!service || !date || !time) return;
  if (!date.value) {
    showToast('Choose a date first.', 'error');
    date.focus();
    return;
  }
  const appointment = {
    service: service.value, date: date.value, time: time.value,
    notes: notes?.value || '', createdAt: Date.now()
  };
  let list = [];
  try { list = JSON.parse(localStorage.getItem('gustohubAppointments') || '[]'); } catch(e) {}
  list.push(appointment);
  localStorage.setItem('gustohubAppointments', JSON.stringify(list));
  openInfoModal('APPOINTMENT REQUESTED', `
    <div class="space-y-3">
      <div class="border-[3px] border-[#0F172A] p-4"><b>${appointment.service}</b></div>
      <div class="grid grid-cols-2 gap-3">
        <div class="border-[3px] border-[#0F172A] p-3"><div class="font-mono text-xs">DATE</div>${appointment.date}</div>
        <div class="border-[3px] border-[#0F172A] p-3"><div class="font-mono text-xs">TIME</div>${appointment.time}</div>
      </div>
      <p class="text-sm text-[#0F172A]/60">Saved in this browser for the website demo.</p>
    </div>
  `, '#84CC16');
}

function getProfileInitials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);

  if (!parts.length) return 'ST';

  // Keep the demo name visually compact: Wera -> WR.
  if (parts.length === 1) {
    const word = parts[0];
    if (word.toLowerCase() === 'wera') return 'WR';
    if (word.length === 1) return word.toUpperCase();
    return word.slice(0, 2).toUpperCase();
  }

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function syncTopProfileAvatar(name) {
  const initials = getProfileInitials(name);
  const photo = localStorage.getItem('gustohubProfilePhoto') || '';

  document.querySelectorAll('.top-profile-initials').forEach(el => {
    el.textContent = initials;
    el.style.display = photo ? 'none' : '';
  });

  document.querySelectorAll('.top-profile-avatar').forEach(el => {
    if (photo) {
      el.style.backgroundImage = `url("${photo}")`;
      el.classList.add('has-photo');
    } else {
      el.style.backgroundImage = '';
      el.classList.remove('has-photo');
    }
  });
}

function triggerProfilePhotoUpload() {
  document.getElementById('profile-photo-input')?.click();
}

function handleProfilePhoto(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    showToast('Please choose an image file.', 'error');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const size = 240;
      const canvas = document.createElement('canvas');
      canvas.width = size; canvas.height = size;
      const ctx = canvas.getContext('2d');
      const scale = Math.max(size / img.width, size / img.height);
      const w = img.width * scale, h = img.height * scale;
      ctx.drawImage(img, (size-w)/2, (size-h)/2, w, h);
      const data = canvas.toDataURL('image/jpeg', .82);
      localStorage.setItem('gustohubProfilePhoto', data);
      applyProfilePhoto(data);
      showToast('Profile photo updated.', 'success');
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function applyProfilePhoto(data) {
  const avatar = document.getElementById('profile-avatar');
  const image = document.getElementById('profile-avatar-image');
  const initials = document.getElementById('profile-initials');

  if (avatar) {
    if (data) {
      avatar.classList.add('has-photo');
      if (image) {
        image.src = data;
        image.classList.remove('hidden');
      }
      if (initials) initials.style.display = 'none';
    } else {
      avatar.classList.remove('has-photo');
      if (image) {
        image.removeAttribute('src');
        image.classList.add('hidden');
      }
      if (initials) initials.style.display = '';
    }
  }

  let profileName = 'Student';
  try {
    const saved = JSON.parse(localStorage.getItem('gustohubProfile') || 'null');
    if (saved?.name) profileName = saved.name;
  } catch(e) {}
  syncTopProfileAvatar(profileName);
}

function startProfileEdit() {
  const accountTab = document.querySelector('#settings-tabs [data-tab="account"]');
  accountTab?.click();
  document.getElementById('settings-panel')?.scrollIntoView({behavior:'smooth', block:'center'});
  setTimeout(() => document.getElementById('profile-full-name')?.focus(), 350);
}

function saveProfile() {
  const name = document.getElementById('profile-full-name')?.value.trim() || '';
  const email = document.getElementById('profile-email')?.value.trim() || '';
  const phone = document.getElementById('profile-phone')?.value.trim() || '';

  if (!name) {
    showToast('Please enter your full name.', 'error');
    document.getElementById('profile-full-name')?.focus();
    return;
  }
  if (!email) {
    showToast('Please enter your email address.', 'error');
    document.getElementById('profile-email')?.focus();
    return;
  }

  const data = { name, email, phone };
  localStorage.setItem('gustohubProfile', JSON.stringify(data));
  applyProfileData(data);
  showToast('Profile saved successfully.', 'success');
}

function applyProfileData(data) {
  if (!data) return;

  const nameInput = document.getElementById('profile-full-name');
  const emailInput = document.getElementById('profile-email');
  const phoneInput = document.getElementById('profile-phone');

  if (nameInput) nameInput.value = data.name || '';
  if (emailInput) emailInput.value = data.email || '';
  if (phoneInput) phoneInput.value = data.phone || '';

  const cardName = document.getElementById('profile-card-name');
  if (cardName) cardName.textContent = data.name ? data.name.toUpperCase() : 'STUDENT';

  const initials = document.getElementById('profile-initials');
  if (initials) {
    initials.textContent = getProfileInitials(data.name);
  }

  syncTopProfileAvatar(data.name || 'Student');

  const handle = document.getElementById('profile-card-handle');
  if (handle) {
    const auth = window.gustoHubGetAuth ? window.gustoHubGetAuth() : null;
    const fallback = auth?.studentId || 'STUDENT';
    const username = data.email ? data.email.split('@')[0] : fallback;
    handle.textContent = '@' + username;
  }
}

function initProfileSettings() {
  let globalProfileName = 'Student';
  try {
    const globalProfile = JSON.parse(localStorage.getItem('gustohubProfile') || 'null');
    if (globalProfile?.name) globalProfileName = globalProfile.name;
  } catch(e) {}
  syncTopProfileAvatar(globalProfileName);

  const page = document.getElementById('page-profile');
  if (!page) return;

  // Student ID comes from the logged-in demo account.
  const auth = window.gustoHubGetAuth ? window.gustoHubGetAuth() : null;
  const studentIdInput = document.getElementById('profile-student-id');
  if (studentIdInput) studentIdInput.value = auth?.studentId || 'GK001';

  const savedProfile = (() => {
    try { return JSON.parse(localStorage.getItem('gustohubProfile') || 'null'); }
    catch(e) { return null; }
  })();

  if (savedProfile) {
    applyProfileData(savedProfile);
  } else {
    // First use stays intentionally blank until Save Changes.
    const cardName = document.getElementById('profile-card-name');
    const handle = document.getElementById('profile-card-handle');
    const initials = document.getElementById('profile-initials');
    if (cardName) cardName.textContent = 'STUDENT';
    if (handle) handle.textContent = '@' + (auth?.studentId || 'GK001');
    if (initials) initials.textContent = getProfileInitials('Student');
  }

  applyProfilePhoto(localStorage.getItem('gustohubProfilePhoto'));

  document.querySelectorAll('[data-pref]').forEach(input => {
    const key = 'gustohubPref_' + input.dataset.pref;
    const saved = localStorage.getItem(key);
    if (saved !== null) input.checked = saved === 'true';
    input.addEventListener('change', () => {
      localStorage.setItem(key, String(input.checked));
      showToast('Preference saved.', 'success');
    });
  });

  const vis = localStorage.getItem('gustohubVisibility') || 'public';
  document.querySelectorAll('.visibility-choice').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.visibility === vis);
  });

  const theme = localStorage.getItem('gustohubTheme') || 'cream';
  applyTheme(theme, document.querySelector(`.theme-choice[data-theme="${theme}"]`), false);

  const accent = localStorage.getItem('gustohubAccent');
  if (accent) document.documentElement.style.setProperty('--blue', accent);

  const reduced = localStorage.getItem('gustohubReduceMotion') === 'true';
  const reduce = document.getElementById('reduce-motion');
  if (reduce) reduce.checked = reduced;
  toggleReduceMotion(reduced, false);
}

function setProfileVisibility(btn) {
  document.querySelectorAll('.visibility-choice').forEach(x => x.classList.remove('active'));
  btn.classList.add('active');
  localStorage.setItem('gustohubVisibility', btn.dataset.visibility);
  showToast('Profile visibility saved.', 'success');
}

function applyTheme(theme, btn, notify=true) {
  document.body.dataset.theme = theme;
  localStorage.setItem('gustohubTheme', theme);
  document.querySelectorAll('.theme-choice').forEach(x => x.classList.remove('block-selected'));
  if (btn) btn.classList.add('block-selected');
  if (notify) showToast(theme[0].toUpperCase()+theme.slice(1)+' theme applied.', 'success');
}

function setAccentColor(btn) {
  const color = btn.dataset.accent;
  document.documentElement.style.setProperty('--blue', color);
  localStorage.setItem('gustohubAccent', color);
  document.querySelectorAll('.accent-choice').forEach(x => x.classList.remove('block-selected'));
  btn.classList.add('block-selected');
  showToast('Accent color changed.', 'success');
}

function toggleReduceMotion(enabled, notify=true) {
  document.body.classList.toggle('reduce-motion', !!enabled);
  localStorage.setItem('gustohubReduceMotion', String(!!enabled));
  if (notify) showToast(enabled ? 'Animations reduced.' : 'Animations restored.', 'success');
}

function escapeHtml(value='') {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}

function escapeJs(value='') {
  return String(value).replace(/\\/g,'\\\\').replace(/'/g,"\\'");
}


// ============== ASSIGNMENT SUBMISSION ==============
const pendingAssignmentFiles = {};

const lockedAssignmentResults = {
  'real-sdlc-a1': {
    status:'Graded',
    grade:'P',
    submittedFiles:['SDLC_Assignment1_Report.pdf','SDLC_Assignment1_Presentation.pdf'],
    submittedAt:'24 May 2026 · 10:42 PM'
  },
  'real-wdd-a1': {
    status:'Graded',
    grade:'M',
    submittedFiles:['WDD_Assignment1_Report.pdf'],
    submittedAt:'31 May 2026 · 9:18 PM'
  }
};

function loadAssignmentState() {
  try {
    const saved = JSON.parse(localStorage.getItem('gustohubAssignmentSubmissions') || '{}');

    assignments.forEach(a => {
      if (saved[a.id]) {
        const previous = saved[a.id];

        // Migrate the old single-file prototype format.
        if (!previous.submittedFiles && previous.submittedFile) {
          previous.submittedFiles = [previous.submittedFile];
        }

        Object.assign(a, previous);
      }

      if (!Array.isArray(a.submittedFiles)) a.submittedFiles = [];

      // Any assignment with P / M / D already issued is locked as graded.
      if (a.grade) a.status = 'Graded';

      // These completed Assignment 1 results are fixed demo records.
      if (lockedAssignmentResults[a.id]) {
        Object.assign(a, lockedAssignmentResults[a.id]);
      }
    });
  } catch(e) {
    assignments.forEach(a => {
      if (!Array.isArray(a.submittedFiles)) a.submittedFiles = [];
      if (a.grade) a.status = 'Graded';
      if (lockedAssignmentResults[a.id]) {
        Object.assign(a, lockedAssignmentResults[a.id]);
      }
    });
  }
}

function saveAssignmentState() {
  const state = {};
  assignments.forEach(a => {
    state[a.id] = {
      status: a.status,
      grade: a.grade,
      submittedFiles: Array.isArray(a.submittedFiles) ? a.submittedFiles : [],
      submittedAt: a.submittedAt || null
    };
  });
  localStorage.setItem('gustohubAssignmentSubmissions', JSON.stringify(state));
}

function gradeLabel(grade) {
  if (grade === 'P') return 'P · Pass';
  if (grade === 'M') return 'M · Merit';
  if (grade === 'D') return 'D · Distinction';
  return 'Pending';
}

function renderSubmittedFiles(a) {
  if (!Array.isArray(a.submittedFiles) || !a.submittedFiles.length) return '';

  return `
    <div class="submitted-files-box">
      <div class="submitted-files-heading">
        <span>Submitted Files (${a.submittedFiles.length})</span>
        ${a.submittedAt ? `<span>${escapeHtml(a.submittedAt)}</span>` : ''}
      </div>

      <div class="submitted-files-list">
        ${a.submittedFiles.map((file, index) => `
          <div class="submitted-file-row">
            <div class="submitted-file-name">
              <i class="fas fa-file-circle-check"></i>
              <span>${escapeHtml(file)}</span>
            </div>

            ${a.grade ? '' : `
              <button class="submitted-file-remove"
                title="Remove this submitted file"
                onclick="removeSubmittedAssignmentFile('${a.id}',${index})">
                <i class="fas fa-xmark"></i> Remove
              </button>`}
          </div>`).join('')}
      </div>
    </div>`;
}

function renderAssignmentSubmissions() {
  const grid = document.getElementById('assignment-submission-grid');
  if (!grid) return;
  grid.innerHTML = '';

  assignments.forEach(a => {
    const isGraded = !!a.grade || a.status === 'Graded';
    const submitted = isGraded || a.status === 'Submitted';
    const card = document.createElement('article');
    card.className = 'assignment-card';
    card.id = 'assignment-' + a.id;

    card.innerHTML = `
      <div class="assignment-card-top">
        <div>
          <div class="assignment-module">${escapeHtml(a.module)}</div>
          <h3>${escapeHtml(a.title)}</h3>
        </div>
        <span class="assignment-status ${submitted ? 'submitted' : 'not-submitted'}">${escapeHtml(isGraded ? 'Graded' : a.status)}</span>
      </div>

      <div class="assignment-meta-grid">
        <div><span>DUE DATE</span><strong>${escapeHtml(a.due)}</strong></div>
        <div><span>GRADE</span><strong class="grade-value grade-${(a.grade || 'pending').toLowerCase()}">${gradeLabel(a.grade)}</strong></div>
      </div>

      ${renderSubmittedFiles(a)}

      <div class="assignment-actions">
        <button class="btn-secondary" onclick="openRealBrief('${a.brief}')">
          <i class="fas fa-file-pdf"></i> View Brief
        </button>

        ${isGraded
          ? `<button class="btn-primary assignment-view-button" onclick="viewAssignmentSubmission('${a.id}')">
               <i class="fas fa-eye"></i> View Submission
             </button>`
          : `<button class="btn-primary" onclick="openAssignmentSubmitModal('${a.id}')">
               <i class="fas fa-upload"></i> ${submitted ? 'Update Submission' : 'Submit Assignment'}
             </button>`
        }
      </div>
    `;

    grid.appendChild(card);
  });

  updateResultsSummary();
}

function openAssignmentSubmitModal(id) {
  const a = assignments.find(x => x.id === id);
  if (!a) return;

  if (a.grade || a.status === 'Graded') {
    viewAssignmentSubmission(id);
    return;
  }

  pendingAssignmentFiles[id] = [];

  openInfoModal(a.status === 'Submitted' ? 'UPDATE SUBMISSION' : 'SUBMIT ASSIGNMENT', `
    <form onsubmit="submitAssignmentFiles(event,'${a.id}')" class="space-y-4">
      <div class="info-box">
        <div class="info-label">ASSIGNMENT</div>
        <b>${escapeHtml(a.title)}</b>
        <div class="text-xs text-[#0F172A]/60 mt-1">${escapeHtml(a.module)}</div>
      </div>

      ${Array.isArray(a.submittedFiles) && a.submittedFiles.length ? `
        <div>
          <label class="form-label">Current Submitted Files</label>
          <div class="modal-current-files">
            ${a.submittedFiles.map((file,index) => `
              <div class="modal-file-row">
                <span><i class="fas fa-file"></i> ${escapeHtml(file)}</span>
                <button type="button" onclick="removeSubmittedAssignmentFile('${a.id}',${index},true)">
                  <i class="fas fa-xmark"></i> Remove
                </button>
              </div>`).join('')}
          </div>
        </div>` : ''}

      <div>
        <label class="form-label">Add Files</label>
        <input id="assignment-file-${a.id}"
          name="assignmentFiles"
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,.zip"
          multiple
          class="file-upload-input"
          onchange="captureAssignmentFiles('${a.id}',this.files)">

        <p class="text-xs text-[#0F172A]/50 mt-2">
          You can select multiple files. Accepted: PDF, DOCX, PPTX and ZIP.
        </p>
      </div>

      <div id="pending-files-${a.id}" class="pending-files-list">
        <div class="text-xs text-[#0F172A]/45">No new files selected.</div>
      </div>

      <div class="flex gap-2">
        <button type="button" class="btn-secondary flex-1 py-2.5" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn-primary flex-1 py-2.5">
          ${a.status === 'Submitted' ? 'Save Submission' : 'Submit Assignment'}
        </button>
      </div>
    </form>
  `, '#1E5AA8');
}

function captureAssignmentFiles(id, fileList) {
  pendingAssignmentFiles[id] = Array.from(fileList || []);
  renderPendingAssignmentFiles(id);
}

function renderPendingAssignmentFiles(id) {
  const box = document.getElementById('pending-files-' + id);
  if (!box) return;

  const files = pendingAssignmentFiles[id] || [];
  if (!files.length) {
    box.innerHTML = '<div class="text-xs text-[#0F172A]/45">No new files selected.</div>';
    return;
  }

  box.innerHTML = `
    <div class="pending-files-heading">New Files (${files.length})</div>
    ${files.map((file,index) => `
      <div class="pending-file-row">
        <span><i class="fas fa-paperclip"></i> ${escapeHtml(file.name)}</span>
        <button type="button" onclick="removePendingAssignmentFile('${id}',${index})">
          <i class="fas fa-xmark"></i> Remove
        </button>
      </div>`).join('')}
  `;
}

function removePendingAssignmentFile(id, index) {
  const files = pendingAssignmentFiles[id] || [];
  files.splice(index, 1);
  pendingAssignmentFiles[id] = files;
  renderPendingAssignmentFiles(id);
}

function removeSubmittedAssignmentFile(id, index, refreshModal=false) {
  const a = assignments.find(x => x.id === id);
  if (!a || a.grade || a.status === 'Graded') return;

  if (!Array.isArray(a.submittedFiles)) a.submittedFiles = [];
  a.submittedFiles.splice(index, 1);

  if (!a.submittedFiles.length) {
    a.status = 'Not Submitted';
    a.submittedAt = null;
  }

  saveAssignmentState();
  renderAssignmentSubmissions();

  if (refreshModal) {
    closeModal();
    setTimeout(() => openAssignmentSubmitModal(id), 80);
  } else {
    showToast('Submitted file removed.', 'success');
  }
}

function submitAssignmentFiles(event, id) {
  event.preventDefault();
  const a = assignments.find(x => x.id === id);
  if (!a || a.grade || a.status === 'Graded') return;

  const newFiles = pendingAssignmentFiles[id] || [];
  const existing = Array.isArray(a.submittedFiles) ? a.submittedFiles : [];

  if (!newFiles.length && !existing.length) {
    showToast('Please add at least one file.', 'error');
    return;
  }

  const names = newFiles.map(file => file.name);

  // Append new files while avoiding exact duplicate names.
  a.submittedFiles = [...existing];
  names.forEach(name => {
    if (!a.submittedFiles.includes(name)) a.submittedFiles.push(name);
  });

  a.status = 'Submitted';
  a.submittedAt = new Date().toLocaleString('en-GB', {
    day:'2-digit',
    month:'short',
    year:'numeric',
    hour:'2-digit',
    minute:'2-digit'
  });

  pendingAssignmentFiles[id] = [];
  saveAssignmentState();
  closeModal();
  renderAssignmentSubmissions();

  setTimeout(() => {
    const card = document.getElementById('assignment-' + id);
    if (card) {
      card.scrollIntoView({behavior:'smooth',block:'center'});
      card.classList.add('target-highlight');
      setTimeout(() => card.classList.remove('target-highlight'), 1800);
    }
  }, 100);

  showToast('Assignment submission saved.', 'success');
}

function viewAssignmentSubmission(id) {
  const a = assignments.find(x => x.id === id);
  if (!a) return;

  const files = Array.isArray(a.submittedFiles) && a.submittedFiles.length
    ? a.submittedFiles
    : ['Submission recorded'];

  openInfoModal('VIEW SUBMISSION', `
    <div class="space-y-4">
      <div class="info-box">
        <div class="info-label">ASSIGNMENT</div>
        <b>${escapeHtml(a.title)}</b>
        <div class="text-xs text-[#0F172A]/60 mt-1">${escapeHtml(a.module)}</div>
      </div>

      <div class="grid sm:grid-cols-2 gap-3">
        <div class="info-box">
          <div class="info-label">STATUS</div>
          <b>${escapeHtml(a.grade ? 'Graded' : a.status)}</b>
        </div>
        <div class="info-box">
          <div class="info-label">GRADE</div>
          <b class="grade-value grade-${(a.grade || 'pending').toLowerCase()}">${gradeLabel(a.grade)}</b>
        </div>
      </div>

      <div>
        <div class="form-label">Submitted Files</div>
        <div class="modal-current-files">
          ${files.map(file => `
            <div class="modal-file-row locked">
              <span><i class="fas fa-file-circle-check"></i> ${escapeHtml(file)}</span>
            </div>`).join('')}
        </div>
      </div>

      ${a.grade
        ? '<div class="graded-lock-note"><i class="fas fa-lock"></i> This assignment has been graded, so the submission is locked.</div>'
        : ''}

      <button class="btn-primary w-full" onclick="closeModal()">Close</button>
    </div>
  `, '#1E5AA8');
}

function updateResultsSummary() {
  const counts = {P:0,M:0,D:0,pending:0};

  assignments.forEach(a => {
    if (a.grade === 'P') counts.P++;
    else if (a.grade === 'M') counts.M++;
    else if (a.grade === 'D') counts.D++;
    else counts.pending++;
  });

  const p = document.getElementById('result-pass');
  const m = document.getElementById('result-merit');
  const d = document.getElementById('result-distinction');
  const pending = document.getElementById('result-pending');

  if (p) p.textContent = counts.P;
  if (m) m.textContent = counts.M;
  if (d) d.textContent = counts.D;
  if (pending) pending.textContent = counts.pending;
}


// ============== TEACHER-GUIDED LESSON ASSISTANT ==============
const aiKnowledgeBase = {"sdlc": {"module": "Software Development Lifecycles", "teacher": "Tr. Win Sandar, Yi Yi Aung", "materials": [{"id": "real-sdlc-a1", "title": "SDLC Assignment 1", "officialTitle": "Software Development Lifecycles and Feasibility Study Analysis", "source": "SDLC_Assignment_1_Brief_HND69.pdf", "type": "brief", "issue": "27 Apr 2026", "due": "24 May 2026", "submission": "Report PDF + Presentation PDF", "brief": ["Describe at least two iterative and two sequential SDLC models and apply them to the Campus Shuttle System.", "Explain how risk is managed in software lifecycle models and suggest risk mitigation strategies.", "Explain the purpose of a feasibility study and why it is important before development.", "Describe feasibility types and explain how technical solutions can be compared for the Campus Shuttle System."], "criteria": {"P": ["P1: Describe two iterative and two sequential software lifecycle models.", "P2: Explain how risk is managed in software lifecycle models.", "P3: Explain the purpose of a feasibility report.", "P4: Describe how technical solutions can be compared."], "M": ["M1: Discuss why a particular lifecycle model is selected for a development environment.", "M2: Discuss the components of a feasibility report."], "D": ["D1: Assess the merits of applying the Waterfall lifecycle model to a large software development project.", "D2: Assess the impact of different feasibility criteria on a software investigation."]}}, {"id": "real-sdlc-a2", "title": "SDLC Assignment 2", "officialTitle": "Software Development Lifecycles and Software Behavioural Design Techniques Analysis", "source": "SDLC_Assignment_2_Brief_HND69.pdf", "type": "brief", "issue": "25 May 2026", "due": "27 Jun 2026", "submission": "Report PDF + Presentation PDF", "brief": ["Undertake an SDLC investigation for the Campus Shuttle System to meet a business need.", "Create requirements and design documentation such as use case, class, sequence and activity diagrams.", "Analyse requirements traceability and discuss approaches for improving software quality.", "Discuss and evaluate behavioural design techniques, including finite state machines and extended FSMs."], "criteria": {"P": ["P5: Undertake a software investigation to meet a business need.", "P6: Use appropriate software analysis tools/techniques and create supporting documentation.", "P7: Discuss the suitability of software behavioural design techniques using examples."], "M": ["M3: Analyse how software requirements can be traced throughout the lifecycle.", "M4: Discuss two approaches to improving software quality.", "M5: Analyse a range of software behavioural tools and techniques.", "M6: Differentiate between a finite state machine and an extended FSM, with an application for both."], "D": ["D3: Evaluate the systems investigation process and its effectiveness in improving software quality.", "D4: Justify how data-driven software can improve software reliability and effectiveness."]}}]}, "pacp": {"module": "Planning a Computing Project", "teacher": "Tr. Thiri Win", "materials": [{"id": "real-pacp-a1", "title": "Planning a Computing Project Assignment Brief", "officialTitle": "Produce Project Plans & Present Project Recommendations - Planning a Computing Project for Cyber Security", "source": "PACP_Assignment_Brief_HND69.pdf", "type": "brief", "issue": "15 May 2026", "due": "23 Jun 2026", "submission": "Formal report + data collection file + Gantt Chart + project charter + presentation", "brief": ["Use qualitative and quantitative research methods and examine secondary sources.", "Discuss business features, operational areas, stakeholders and business challenges.", "Produce a comprehensive project plan including a Gantt Chart and Work Breakdown Structure.", "Present project recommendations, justify planning decisions and evaluate research accuracy and reliability."], "criteria": {"P": ["P1-P2: Generate relevant primary data and examine secondary sources.", "P3-P4: Discuss business features/operational areas and stakeholder roles.", "P5: Devise comprehensive project plans.", "P6-P8: Communicate recommendations, justify planning decisions and discuss research accuracy/reliability."], "M": ["M1: Analyse primary and secondary data.", "M2: Analyse challenges to business success.", "M3: Produce comprehensive project plans considering aims, objectives, risks and benefits.", "M4: Assess how project recommendations meet organisational needs."], "D": ["D1: Interpret findings to show how the research theme supports business requirements.", "D2: Evaluate project planning recommendations and the accuracy/reliability of the research."]}}]}, "security": {"module": "Security", "teacher": "Sir. Aung Bo Bo Kyaw", "materials": [{"id": "real-security-a1", "title": "Security Assignment", "officialTitle": "Designing a Defense-in-Depth Security Posture and Access Control Architecture for MetroMart & StarLight Enterprise Group", "source": "Security_Assignment_Brief_HND69.pdf", "type": "brief", "issue": "21 May 2026", "due": "19 Jun 2026", "submission": "Technical report PDF + network simulation lab file + presentation", "brief": ["Prepare a group presentation covering security risks, risk management and network monitoring.", "Build a network prototype with departmental segregation and ACL rules.", "Explain configuration failures involving firewall policies and third-party VPNs, and show security improvements using DMZ, Static IP and NAT.", "Produce a technical report covering security policy, disaster recovery/business continuity, defense-in-depth and security audit/compliance."], "criteria": {"P": ["P1-P2: Discuss security risks and assess organisational security procedures.", "P3-P4: Discuss configuration risks and explain how DMZ, Static IP and NAT improve network security.", "P5-P6: Review risk assessment and data protection processes.", "P7-P8: Design a suitable security policy and discuss stakeholder roles in security audits."], "M": ["M1: Analyse benefits of network monitoring systems with supporting reasons.", "M2: Propose a method to assess and treat IT security risks.", "M3-M4: Summarise risk management and analyse security audit impacts.", "M5: Justify the developed security plan."], "D": ["D1: Evaluate physical and virtual security measures.", "D2: Recommend how IT security can align with organisational policy.", "D3: Evaluate the suitability of security tools used to meet business needs."]}}]}, "wdd": {"module": "Website Design & Development", "teacher": "Tr. Ei Po Po Aung", "materials": [{"id": "real-wdd-a1", "title": "Website Design & Development Assignment 1", "officialTitle": "Understanding Server Technologies and Website Development Tools", "source": "WDD_Assignment_1_Brief_HND69.pdf", "type": "brief", "issue": "5 May 2026", "due": "31 May 2026", "submission": "Individual written report PDF", "brief": ["Explain DNS purpose/types, domain names and how domain names are organised and managed.", "Explain relationships among communication protocols, server hardware, operating systems, web server software, development technologies/frameworks and SEO.", "Discuss front-end and back-end technologies and how they relate to presentation and application layers.", "Compare online website creation tools with custom-built websites."], "criteria": {"P": ["P1: Explain DNS purpose/types and domain name organisation/management.", "P2: Explain relationships among protocols, server hardware, operating systems and web server software.", "P3: Discuss front-end/back-end capabilities and relationships.", "P4: Compare online website creation tools and custom-built sites."], "M": ["M1: Analyse the impact of common web development technologies/frameworks.", "M2: Review search engine influence and support SEO improvements with evidence.", "M3: Analyse tools and techniques used to design and develop a custom-built website."], "D": ["D1: Justify the technologies, management services, tools and software chosen for a custom-built website."]}}, {"id": "real-wdd-a2", "title": "Website Design & Development Assignment 2", "officialTitle": "Designing, Developing and Testing the Multiple Page Website", "source": "WDD_Assignment_2_Brief_HND69.pdf", "type": "brief", "issue": "1 Jun 2026", "due": "30 Jun 2026", "submission": "Individual report PDF + program code ZIP", "brief": ["Create a design document for a branded multipage website with client/user requirements, sitemap and medium-fidelity wireframes.", "Build a responsive multipage website with consistent navigation and realistic content.", "Create and use a suitable test plan covering functionality, buttons, links, modals, content and responsive appearance.", "Use peer review and evaluate QA, implementation decisions, technical challenges and overall website success."], "criteria": {"P": ["P5: Create a design document with medium-fidelity wireframes and client/user requirements.", "P6: Use the design document to produce a branded multipage website with realistic content.", "P7: Create a suitable test plan identifying key performance areas."], "M": ["M4: Justify multipage website implementation decisions against the design document.", "M5: Analyse the QA process during website design and development."], "D": ["D2: Evaluate design/development against the design document, including technical challenges.", "D3: Evaluate Test Plan results and overall website success with recommendations."]}}]}};

function currentAIModule(){return document.getElementById('ai-module')?.value || 'sdlc';}
function currentAIMaterial(){const g=aiKnowledgeBase[currentAIModule()];const id=document.getElementById('ai-material')?.value;return g?.materials.find(m=>m.id===id)||g?.materials?.[0]||null;}
function updateAIMaterials(){const g=aiKnowledgeBase[currentAIModule()];const s=document.getElementById('ai-material');if(!s||!g)return;s.innerHTML=g.materials.map(m=>`<option value="${m.id}">${m.title}</option>`).join('');updateAIContextCard();}
function updateAIContextCard(){const g=aiKnowledgeBase[currentAIModule()];const m=currentAIMaterial();const c=document.getElementById('ai-context-card');if(!c||!g||!m)return;c.innerHTML=`<div class="ai-context-row"><span>Module</span><strong>${escapeHtml(g.module)}</strong></div><div class="ai-context-row"><span>Teacher</span><strong>${escapeHtml(g.teacher)}</strong></div><div class="ai-context-row"><span>Source</span><strong>${escapeHtml(m.source)}</strong></div>`;}
function addAIMessage(role,html,source=''){const l=document.getElementById('ai-chat-messages');if(!l)return;const w=document.createElement('div');w.className=`ai-message ${role}`;w.innerHTML=role==='assistant'?`<div class="ai-message-avatar"><i class="fas fa-graduation-cap"></i></div><div class="ai-message-bubble">${html}${source?`<div class="ai-message-source"><i class="fas fa-file-lines"></i> Source: ${escapeHtml(source)}</div>`:''}</div>`:`<div class="ai-message-bubble user-bubble">${html}</div><div class="ai-message-avatar user-avatar"><i class="fas fa-user"></i></div>`;l.appendChild(w);l.scrollTop=l.scrollHeight;}
function isAssignmentWritingRequest(q){const t=q.toLowerCase();return ['write my assignment','do my assignment','complete my assignment','write the assignment','write report for me','write my report','write 500 words','write 1000 words','give me the answer','make my assignment','do this criteria','answer this criteria','write distinction','write merit','write pass'].some(x=>t.includes(x));}
function explainMaterial(m, mode='summary') {
  if (!m) return '<p>No official assignment brief is selected.</p>';

  if (mode === 'brief' || mode === 'summary' || mode === 'today') {
    return `
      <p class="mb-2"><b>${escapeHtml(m.officialTitle || m.title)}</b></p>
      <p class="mb-2">In simple terms, this official brief asks you to:</p>
      <ul>${(m.brief || []).map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul>
      <div class="ai-brief-meta">
        <div><span>Issue</span><b>${escapeHtml(m.issue || '-')}</b></div>
        <div><span>Due</span><b>${escapeHtml(m.due || '-')}</b></div>
        <div><span>Submission</span><b>${escapeHtml(m.submission || '-')}</b></div>
      </div>
      <p class="mt-3"><b>Important:</b> I can explain the brief, but you should create the assessed work yourself.</p>`;
  }

  if (mode === 'criteria') {
    const groups = [['P','Pass','grade-p'],['M','Merit','grade-m'],['D','Distinction','grade-d']];
    return `
      <div class="ai-criteria-explain">
        ${groups.map(([key,label,cls]) => `
          <div>
            <span class="grade-chip ${cls}">${key}</span>
            <p><b>${label}</b><br>${(m.criteria?.[key] || []).map(x => escapeHtml(x)).join('<br>')}</p>
          </div>`).join('')}
      </div>`;
  }

  return '<p>I can explain the selected official assignment brief and its assessment criteria.</p>';
}

const aiBriefKeywords = {
  'real-sdlc-a1': {
    risk:['risk','mitigation'],
    feasibility:['feasibility','feasibility study','feasibility report'],
    waterfall:['waterfall','sequential'],
    iterative:['iterative'],
    lifecycle:['lifecycle','sdlc','model'],
    technical:['technical solution','technical']
  },
  'real-sdlc-a2': {
    requirements:['requirement','requirements','traceability','trace'],
    diagram:['diagram','use case','class diagram','sequence diagram','activity diagram'],
    quality:['quality','software quality'],
    fsm:['fsm','finite state machine','extended fsm','state machine'],
    investigation:['investigation','business need'],
    behavioural:['behavioural','behavioral','design technique']
  },
  'real-pacp-a1': {
    primary:['primary research','primary','survey'],
    secondary:['secondary research','secondary'],
    gantt:['gantt','gantt chart'],
    wbs:['wbs','work breakdown','work breakdown structure'],
    stakeholder:['stakeholder','stakeholders'],
    recommendation:['recommendation','recommendations'],
    reliability:['reliability','accuracy'],
    business:['business','operational','organisation','organization']
  },
  'real-security-a1': {
    risk:['risk','security risk'],
    acl:['acl','access control list'],
    firewall:['firewall'],
    vpn:['vpn'],
    dmz:['dmz'],
    nat:['nat'],
    monitoring:['monitoring','network monitoring'],
    audit:['audit','compliance'],
    policy:['policy','security policy'],
    defense:['defense-in-depth','defence-in-depth','defense in depth']
  },
  'real-wdd-a1': {
    dns:['dns','domain name'],
    protocol:['protocol','communication protocol'],
    server:['server','web server'],
    frontend:['front-end','frontend','front end'],
    backend:['back-end','backend','back end'],
    seo:['seo','search engine'],
    framework:['framework','technology','technologies'],
    custom:['custom-built','custom website','online website creation']
  },
  'real-wdd-a2': {
    wireframe:['wireframe','wireframes'],
    sitemap:['sitemap','site map'],
    responsive:['responsive','screen size'],
    testing:['test plan','testing','test'],
    qa:['qa','quality assurance'],
    peer:['peer review','peer feedback'],
    navigation:['navigation','multipage','multi-page'],
    evaluation:['evaluation','evaluate','recommendation']
  }
};

function normalizeAIText(text) {
  return String(text || '').toLowerCase()
    .replace(/[’']/g,'')
    .replace(/[^a-z0-9\s\/\-]/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function criterionEntries(material) {
  const list = [];
  ['P','M','D'].forEach(level => {
    (material.criteria?.[level] || []).forEach(text => list.push({level,text}));
  });
  return list;
}

function findExactCriterion(material, question) {
  const q = normalizeAIText(question);
  const match = q.match(/\b([pmd])\s*([0-9]+)\b/i);
  if (!match) return null;
  const target = (match[1] + match[2]).toUpperCase();
  return criterionEntries(material).find(entry => entry.text.toUpperCase().includes(target)) || null;
}

function findRelevantBriefLines(material, question) {
  const q = normalizeAIText(question);
  const groups = aiBriefKeywords[material.id] || {};
  const matchedWords = [];

  Object.values(groups).forEach(words => {
    if (words.some(w => q.includes(normalizeAIText(w)))) {
      matchedWords.push(...words);
    }
  });

  const lines = [
    ...(material.brief || []).map(text => ({kind:'Requirement',text})),
    ...criterionEntries(material).map(x => ({kind:x.level+' criterion',text:x.text}))
  ];

  if (matchedWords.length) {
    return lines.map(line => {
      const n = normalizeAIText(line.text);
      const score = matchedWords.reduce((s,w) => s + (n.includes(normalizeAIText(w)) ? 2 : 0), 0);
      return {...line,score};
    }).filter(x => x.score > 0).sort((a,b) => b.score-a.score).slice(0,5);
  }

  const stop = new Set(['what','does','this','brief','ask','explain','about','how','why','the','and','for','with','assignment','please','tell','give']);
  const words = q.split(' ').filter(w => w.length >= 4 && !stop.has(w));
  return lines.map(line => {
    const n = normalizeAIText(line.text);
    const score = words.reduce((s,w) => s + (n.includes(w) ? 1 : 0),0);
    return {...line,score};
  }).filter(x => x.score > 0).sort((a,b) => b.score-a.score).slice(0,4);
}

function answerAIQuestion(q) {
  const m = currentAIMaterial();
  const lower = normalizeAIText(q);
  if (!m) return {html:'<p>Please select an official assignment brief first.</p>',source:''};

  if (isAssignmentWritingRequest(q)) {
    return {
      html:`<p><b>I cannot write or complete the assessed assignment for you.</b></p>
            <p class="mt-2">I can explain a task, criterion, due date, submission format, or a topic that appears in this brief.</p>`,
      source:m.source
    };
  }

  const exact = findExactCriterion(m,q);
  if (exact) {
    return {
      html:`<p><b>${escapeHtml(exact.level)} criterion:</b></p>
            <p class="mt-2">${escapeHtml(exact.text)}</p>
            <p class="mt-3 text-sm text-[#0F172A]/65">This explains the criterion only; it does not generate your assessed answer.</p>`,
      source:m.source
    };
  }

  if (lower.includes('teacher') || lower.includes('lecturer')) {
    const group = aiKnowledgeBase[currentAIModule()];
    return {html:`<p><b>Teacher:</b> ${escapeHtml(group?.teacher || '-')}</p>`,source:m.source};
  }

  if (lower.includes('title') || lower.includes('assignment name')) {
    return {html:`<p><b>Assignment:</b> ${escapeHtml(m.officialTitle || m.title)}</p>`,source:m.source};
  }

  if (lower.includes('due') || lower.includes('deadline') || lower.includes('submission date') || lower.includes('when')) {
    return {html:`<p><b>Due date:</b> ${escapeHtml(m.due || '-')}</p>`,source:m.source};
  }

  if (lower.includes('submit') || lower.includes('file') || lower.includes('format') || lower.includes('deliverable')) {
    return {html:`<p><b>Submission / deliverables:</b></p><p class="mt-2">${escapeHtml(m.submission || '-')}</p>`,source:m.source};
  }

  if ((lower.includes('difference') || lower.includes('different')) &&
      (lower.includes('pass') || lower.includes('merit') || lower.includes('distinction'))) {
    return {
      html:`<p class="mb-2"><b>P / M / D requirements in this brief:</b></p>
        <div class="ai-criteria-explain">
          <div><span class="grade-chip grade-p">P</span><p>${(m.criteria?.P||[]).map(escapeHtml).join('<br>')}</p></div>
          <div><span class="grade-chip grade-m">M</span><p>${(m.criteria?.M||[]).map(escapeHtml).join('<br>')}</p></div>
          <div><span class="grade-chip grade-d">D</span><p>${(m.criteria?.D||[]).map(escapeHtml).join('<br>')}</p></div>
        </div>`,
      source:m.source
    };
  }

  if (lower.includes('pmd') || lower.includes('p / m / d') ||
      lower.includes('criteria') || lower.includes('criterion') ||
      lower === 'pass' || lower === 'merit' || lower === 'distinction') {
    return {html:explainMaterial(m,'criteria'),source:m.source};
  }

  const relevant = findRelevantBriefLines(m,q);
  if (relevant.length) {
    return {
      html:`<p class="mb-2"><b>The selected brief says:</b></p>
            <ul>${relevant.map(x => `<li>${escapeHtml(x.text)}</li>`).join('')}</ul>
            <p class="mt-3 text-sm text-[#0F172A]/65">Only the selected official brief is being used.</p>`,
      source:m.source
    };
  }

  if (lower.includes('brief') || lower.includes('overall') ||
      lower.includes('summary') || lower.includes('summarise') ||
      lower.includes('summarize') || lower.includes('main task') ||
      lower.includes('what do i need') || lower.includes('what does')) {
    return {html:explainMaterial(m,'brief'),source:m.source};
  }

  return {
    html:`<p>I could not find that specific point in the selected official brief.</p>
          <p class="mt-2">Try asking about a named topic, a P/M/D criterion, due date, submission format, or teacher.</p>`,
    source:m.source
  };
}

function submitAIQuestion(e){e.preventDefault();const input=document.getElementById('ai-question');const q=input?.value.trim();if(!q)return;addAIMessage('user',`<p>${escapeHtml(q)}</p>`);input.value='';setTimeout(()=>{const a=answerAIQuestion(q);addAIMessage('assistant',a.html,a.source);},180);}
function runAIQuickAction(action) {
  const m = currentAIMaterial();
  if (!m) return;

  const labels = {
    today:'Explain this assignment brief',
    summary:'Summarise only the main requirements',
    brief:'What does this brief ask me to do?',
    criteria:'Explain P / M / D criteria',
    quiz:'Check my understanding'
  };
  addAIMessage('user', `<p>${escapeHtml(labels[action] || 'Help me')}</p>`);

  setTimeout(() => {
    if (action === 'criteria') {
      addAIMessage('assistant', explainMaterial(m,'criteria'), m.source);
      return;
    }
    if (action === 'summary') {
      const items = (m.brief || []).slice(0,3);
      addAIMessage('assistant',
        `<p class="mb-2"><b>Main requirements:</b></p>
         <ul>${items.map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul>
         <p class="mt-3 text-sm text-[#0F172A]/65">This is the short version.</p>`,
        m.source);
      return;
    }
    if (action === 'quiz') {
      addAIMessage('assistant',
        `<p class="mb-2"><b>Check your understanding:</b></p>
         <ol>
           <li>What is the main purpose of this assignment?</li>
           <li>Name two required tasks.</li>
           <li>What is the due date and submission format?</li>
           <li>Choose one P/M/D criterion and explain it in your own words.</li>
         </ol>`,
        m.source);
      return;
    }
    addAIMessage('assistant', explainMaterial(m,'brief'), m.source);
  },160);
}

function initAIAssistant(){if(document.getElementById('page-ai'))updateAIMaterials();}

// ============== INIT ==============
function initFilters() {
  // Module filters
  document.querySelectorAll('#module-filters .filter-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#module-filters .filter-tag').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderModules(btn.dataset.filter);
    });
  });

  // Lost & Found filters
  document.querySelectorAll('#lf-filters .filter-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#lf-filters .filter-tag').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderLostFound(btn.dataset.lfFilter);
    });
  });

  // Buzz filters
  document.querySelectorAll('#buzz-filters .filter-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#buzz-filters .filter-tag').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBuzz(btn.dataset.buzzFilter);
    });
  });

  // Settings tabs
  document.querySelectorAll('#settings-tabs .filter-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#settings-tabs .filter-tag').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.settings-tab').forEach(t => t.classList.add('hidden'));
      document.getElementById('tab-' + btn.dataset.tab).classList.remove('hidden');
    });
  });
}

function init() {
  setActiveNavigation();
  restoreLostFoundItems();
  loadAssignmentState();
  renderModules();
  renderLostFound();
  updateLostFoundCounts();
  renderBuzz();
  renderServices();
  renderAssignmentSubmissions();
  initFilters();
  initTaskManager();
  initProfileSettings();
  updateNotificationCount();
  scrollToHashTarget();
  initAIAssistant();
  if (document.getElementById('timetable-card')) {
    updateTimetable();
    setInterval(updateTimetable, 1000);
  }
  // ESC closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

document.addEventListener('DOMContentLoaded', init);