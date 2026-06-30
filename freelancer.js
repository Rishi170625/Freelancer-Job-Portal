
// ─── DATA ───────────────────────────────────────────────────────
const JOBS=[
{id:1,
    title:'Senior Full-Stack Engineer',
    company:'Stripe',
    location:'San Francisco, CA',
    logo:'S',lc:'rgba(0,229,160,.1)',lf:'var(--accent)',
    type:'Full-time',
    remote:true,
    salary:'$140–180K',
    st:'/year',
    badges:['⭐ Featured','Remote'],
    skills:['React','Node.js','PostgreSQL','AWS'],
    posted:'2d ago',
    applicants:12,
    category:'Development & IT',
    level:'Senior',url:'https://stripe.com/jobs',
    desc:'<p>Stripe is looking for a Senior Full-Stack Engineer to join our Payments Infrastructure team. You\'ll build scalable systems that power millions of daily transactions globally.</p>',
    responsibilities:['Design and build APIs consumed by millions of developers','Lead architecture discussions and mentor junior engineers','Work closely with product and design teams to ship world-class features','Own reliability, performance, and observability of production systems'],
    requirements:['5+ years professional software engineering experience','Deep expertise in React and Node.js','Experience with large-scale distributed systems','Proficiency with PostgreSQL or similar relational databases'],
    benefits:['Competitive salary + meaningful equity','Fully remote with optional office access in 14 cities','Unlimited PTO + 16 weeks parental leave','$2,000/year learning & development budget','Top-tier health, dental, and vision insurance']},
 
{id:2,
    title:'Lead Product Designer',
    company:'Figma',
    location:'New York, NY',
    logo:'F',
    lc:'rgba(108,99,255,.1)',
    lf:'var(--accent2)',
    type:'Full-time',
    remote:true,
    salary:'$120–160K',
    st:'/year',
    badges:['🔥 Urgent','Remote'],
    skills:['Figma','UX Research','Design Systems'],
    posted:'1d ago',
    applicants:28,
    category:'Design & Creative',
    level:'Senior',
    url:'https://www.figma.com/careers',
    desc:'<p>Figma is hiring a Lead Product Designer to shape the future of collaborative design tools. You\'ll drive end-to-end design for core product experiences used by tens of millions of designers.</p>',
    responsibilities:['Own end-to-end product design for multiple features','Build and maintain our design system','Conduct user research and usability testing','Present design decisions to executive stakeholders'],
    requirements:['7+ years product design experience','Mastery of Figma','Experience building and scaling design systems','Strong portfolio showing shipped products'],
    benefits:['$120K–$160K salary + equity','Full remote flexibility','Annual offsites + team retreats','$3,000 design tools & education budget']},

{id:3,
    title:'ML Engineer (LLMs)',
    company:'Notion AI',
    location:'Remote',
    logo:'N',
    lc:'rgba(255,107,107,.1)',
    lf:'var(--accent3)',
    type:'Full-time',
    remote:true,
    salary:'$180–240K',
    st:'/year',
    badges:['Full-time','Remote'],
    skills:['Python','PyTorch','LangChain','RLHF'],
    posted:'4d ago',
    applicants:47,
    category:'Data Science & ML',
    level:'Senior',
    url:'https://www.notion.so/careers',
    desc:'<p>Notion AI is seeking an ML Engineer specializing in large language models to help build the next generation of AI-powered productivity tools used by millions.</p>',
    responsibilities:['Fine-tune and evaluate foundation models for productivity','Build robust ML pipelines for training and serving','Implement RLHF techniques to align model behavior','Monitor production model performance and drive improvements'],
    requirements:['PhD or MS in ML/CS or equivalent experience','3+ years working with LLMs in production','Expertise in PyTorch and HuggingFace ecosystem','Familiarity with RLHF, PEFT, and prompt engineering'],
    benefits:['$180K–$240K + substantial equity','Full remote with access to SF/NYC offices','Cutting-edge GPU compute resources','$5,000/year AI research budget']},
 
{id:4,
    title:'Brand Copywriter',
    company:'Linear',
    location:'Remote',
    logo:'L',
    lc:'rgba(255,209,102,.1)',
    lf:'var(--gold)',
    type:'Contract',
    remote:true,
    salary:'$75–95',
    st:'/hour',
    badges:['⭐ Featured'],
    skills:['Copywriting','Content Strategy','SEO'],
    posted:'3d ago',
    applicants:19,
    category:'Writing & Translation',
    level:'Mid',
    url:'https://linear.app/careers',
    desc:'<p>Linear is looking for a talented Brand Copywriter to tell the story of the world\'s most loved project management tool across web, email, social, and in-product surfaces.</p>',
    responsibilities:['Write and edit web copy, email campaigns, and marketing materials','Develop and maintain Linear\'s brand voice guidelines','Collaborate with design on compelling landing pages','Write SEO-optimized blog posts and thought leadership content'],
    requirements:['4+ years copywriting experience in SaaS or tech','Strong portfolio demonstrating a range of formats','Excellent grasp of SEO best practices','Ability to distill complex topics into clear, compelling language'],
    benefits:['$75–95/hr contract rate','Fully remote and async-friendly','Flexible schedule','Option to transition to full-time']},
 
{id:5,
    title:'DevOps / Cloud Architect',
    company:'Vercel',
    location:'San Francisco',
    logo:'V',
    lc:'rgba(0,229,160,.1)',
    lf:'var(--accent)',
    type:'Full-time',
    remote:true,
    salary:'$160–200K',
    st:'/year',
    badges:['Remote','🔥 Urgent'],
    skills:['Kubernetes','GCP','Terraform','CI/CD'],
    posted:'5d ago',
    applicants:33,
    category:'Development & IT',
    level:'Senior',
    url:'https://vercel.com/careers',
    desc:'<p>Vercel is seeking a DevOps / Cloud Architect to design and manage infrastructure that powers millions of frontend deployments. Build blazing-fast, globally distributed systems.</p>',
    responsibilities:['Architect multi-region cloud infrastructure on GCP','Design and implement Kubernetes-based orchestration','Build and maintain CI/CD pipelines for reliable deployments','Drive observability initiatives across the platform'],
    requirements:['6+ years in DevOps or infrastructure engineering','Expert-level Kubernetes and GCP knowledge','Experience with Terraform and infrastructure-as-code','Deep understanding of networking, security, and reliability'],
    benefits:['$160K–$200K + equity','Remote-first culture','Home office stipend + equipment','Unlimited PTO','Top-tier health benefits']},
 
{id:6,
    title:'Motion Graphics Designer',
    company:'Ramp',
    location:'New York',
    logo:'R',
    lc:'rgba(108,99,255,.1)',
    lf:'var(--accent2)',
    type:'Part-time',
    remote:true,
    salary:'$55–80',
    st:'/hour',
    badges:['Part-time','Remote'],
    skills:['After Effects','Cinema 4D','Blender'],
    posted:'Today',
    applicants:6,
    category:'Video & Animation',
    level:'Mid',
    url:'https://ramp.com/careers',
    desc:'<p>Ramp is looking for a Motion Graphics Designer to bring our brand to life through dynamic visuals across social, ads, product explainers, and presentations.</p>',
    responsibilities:['Create motion graphics for marketing campaigns','Design animated explainer videos for product features','Collaborate with marketing and product teams on briefs','Deliver production-ready assets for multiple platforms'],
    requirements:['3+ years motion graphics experience','Expert knowledge of After Effects','Proficiency in Cinema 4D or Blender','Portfolio showing diverse motion work across formats'],
    benefits:['$55–80/hr part-time','Flexible schedule (20–25 hrs/week)','Fully remote','Creative freedom and autonomy']},
  
{id:7,
    title:'iOS Engineer (Swift)',
    company:'Airbnb',
    location:'San Francisco, CA',
    logo:'A',
    lc:'rgba(255,107,107,.1)',
    lf:'var(--accent3)',
    type:'Full-time',
    remote:false,
    salary:'$155–195K',
    st:'/year',
    badges:['Full-time','On-site'],
    skills:['Swift','SwiftUI','Xcode','REST APIs'],
    posted:'1d ago',
    applicants:54,
    category:'Development & IT',
    level:'Senior',
    url:'https://careers.airbnb.com',
    desc:'<p>Airbnb\'s iOS team is looking for a skilled engineer to build and maintain the iOS app used by over 100 million travelers and hosts worldwide.</p>',
    responsibilities:['Build new features for the Airbnb iOS app','Write clean, testable Swift code','Collaborate with design and backend teams','Optimize app performance and reduce load times'],
    requirements:['4+ years iOS engineering experience','Strong proficiency in Swift and SwiftUI','Experience with CI/CD for mobile','Understanding of iOS HIG and platform conventions'],
    benefits:['$155K–$195K + RSUs','Relocation assistance available','Annual travel credit for Airbnb stays','Comprehensive healthcare + retirement plans']},

{id:8,
    title:'SEO & Content Strategist',
    company:'HubSpot',
    location:'Remote',
    logo:'H',lc:'rgba(255,209,102,.1)',
    lf:'var(--gold)',
    type:'Full-time',
    remote:true,
    salary:'$85–110K',
    st:'/year',
    badges:['Remote','⭐ Featured'],
    skills:['SEO','Ahrefs','Content Marketing','GA4'],
    posted:'6d ago',
    applicants:41,
    category:'Digital Marketing',
    level:'Mid',
    url:'https://www.hubspot.com/careers',
    desc:'<p>HubSpot is searching for an SEO & Content Strategist to grow organic presence and drive qualified traffic through strategic content initiatives.</p>',
    responsibilities:['Develop and execute SEO strategies to grow organic traffic','Conduct keyword research and competitive analysis','Plan and manage the editorial content calendar','Track and report on key SEO metrics and rankings'],
    requirements:['3+ years in SEO and content marketing','Hands-on experience with Ahrefs, SEMrush, or Moz','Strong writing and editing skills','Proficiency in Google Analytics 4 and Search Console'],
    benefits:['$85K–$110K salary','Fully remote','Generous PTO policy','Stock options + comprehensive benefits']},

{id:9,
    title:'Backend Engineer (Python)',
    company:'Slack',
    location:'Remote',
    logo:'S',
    lc:'rgba(0,229,160,.1)',
    lf:'var(--accent)',
    type:'Full-time',
    remote:true,
    salary:'$130–165K',
    st:'/year',
    badges:['Remote','Full-time'],
    skills:['Python','Django','Redis','Kafka'],
    posted:'3d ago',
    applicants:67,
    category:'Development & IT',
    level:'Mid',
    url:'https://slack.com/careers',
    desc:'<p>Slack is hiring a Backend Engineer to build scalable, reliable services that power real-time messaging for millions of users worldwide.</p>',
    responsibilities:['Design and implement backend services in Python','Optimize database queries and caching strategies','Collaborate with frontend engineers to define APIs','Ensure high availability and performance of production systems'],
    requirements:['3+ years backend development experience','Strong Python and Django skills','Experience with Redis, Kafka, or similar technologies','Familiarity with cloud platforms (AWS, GCP)'],
    benefits:['$130K–$165K + equity','Fully remote globally','Generous PTO and parental leave','Comprehensive health, dental, and vision coverage']},
  
{id:10,
    title:'UI Developer',
    company:'Shopify',
    location:'Remote',
    logo:'S',
    lc:'rgba(108,99,255,.1)',
    lf:'var(--accent2)',
    type:'Full-time',
    remote:true,
    salary:'$110–145K',
    st:'/year',
    badges:['Remote','Full-time'],
    skills:['React','TypeScript','Polaris Design System','Accessibility'],
    posted:'5d ago',
    desc:'<p>Shopify is hiring a UI Developer to craft beautiful, accessible interfaces helping millions of merchants run their businesses online.</p>',
    responsibilities:['Build pixel-perfect, accessible UI components','Maintain and extend Polaris, Shopify\'s design system','Collaborate closely with designers','Write well-tested TypeScript and React code'],
    requirements:['3+ years React development experience','Strong TypeScript skills','Experience working with design systems','Commitment to web accessibility standards (WCAG 2.1)'],
    benefits:['$110K–$145K + RSUs','Fully remote globally','$1,500 home office setup budget','Comprehensive health benefits']},
  
{id:11,
    title:'Cybersecurity Analyst',
    company:'CrowdStrike',
    location:'Remote',
    logo:'C',
    lc:'rgba(255,107,107,.1)',
    lf:'var(--accent3)',
    type:'Full-time',
    remote:true,
    salary:'$120–150K',
    st:'/year',
    badges:['Remote','Full-time'],
    skills:['SIEM','Threat Intel','Python','Incident Response'],
    posted:'4d ago',
    applicants:22,
    category:'Cybersecurity',
    level:'Mid',
    url:'https://www.crowdstrike.com/careers',
    desc:'<p>CrowdStrike is seeking a Cybersecurity Analyst to join our Threat Intelligence team, analyzing adversary behavior and protecting customers from emerging threats.</p>',
    responsibilities:['Monitor security events and triage alerts using SIEM','Conduct threat hunting and incident response','Develop detection rules and playbooks','Produce threat intelligence reports'],
    requirements:['3+ years in cybersecurity or SOC role','Experience with SIEM tools (Splunk, Chronicle)','Knowledge of MITRE ATT&CK framework','Python scripting for automation'],
    benefits:['$120K–$150K + equity','Remote-first','Certification reimbursement','Conference attendance budget']},

{id:12,
    title:'Data Analyst',
    company:'Coinbase',
    location:'Remote',
    logo:'C',lc:'rgba(255,209,102,.1)',
    lf:'var(--gold)',
    type:'Full-time',
    remote:true,
    salary:'$95–125K',
    st:'/year',
    badges:['Remote','⭐ Featured'],
    skills:['SQL','Python','Tableau','dbt'],
    posted:'Today',
    applicants:15,
    category:'Data Science & ML',
    level:'Mid',url:'https://www.coinbase.com/careers',
    desc:'<p>Coinbase is looking for a Data Analyst to turn complex data into actionable insights driving product and business decisions across the platform.</p>',
    responsibilities:['Build dashboards and reports to track business metrics','Write optimized SQL queries on large datasets','Partner with product and engineering on metrics','Conduct ad-hoc analysis to inform strategic decisions'],
    requirements:['2+ years as a data analyst','Expert SQL skills','Experience with Python for data analysis','Familiarity with BI tools like Tableau or Looker'],
    benefits:['$95K–$125K + meaningful equity','Fully remote','Crypto-native team culture','Top-tier health coverage']}
];

const CATS=[
  {icon:'💻',name:'Development & IT',count:'142,830',bg:'rgba(0,229,160,.1)'},
  {icon:'🎨',name:'Design & Creative',count:'98,450',bg:'rgba(108,99,255,.1)'},
  {icon:'✍️',name:'Writing & Translation',count:'67,200',bg:'rgba(255,107,107,.1)'},
  {icon:'📱',name:'Digital Marketing',count:'54,110',bg:'rgba(255,209,102,.1)'},
  {icon:'🎬',name:'Video & Animation',count:'43,780',bg:'rgba(0,229,160,.1)'},
  {icon:'📊',name:'Data Science & ML',count:'38,620',bg:'rgba(108,99,255,.1)'},
  {icon:'🔐',name:'Cybersecurity',count:'21,440',bg:'rgba(255,107,107,.1)'},
  {icon:'📷',name:'Photography',count:'18,900',bg:'rgba(255,209,102,.1)'},
  {icon:'🎵',name:'Music & Audio',count:'14,230',bg:'rgba(0,229,160,.1)'},
  {icon:'📚',name:'Education & Training',count:'22,100',bg:'rgba(108,99,255,.1)'},
  {icon:'⚖️',name:'Legal',count:'9,870',bg:'rgba(255,107,107,.1)'},
  {icon:'💰',name:'Finance & Accounting',count:'17,540',bg:'rgba(255,209,102,.1)'},
  {icon:'🏗️',name:'Engineering',count:'31,200',bg:'rgba(0,229,160,.1)'},
  {icon:'🧠',name:'Consulting',count:'12,680',bg:'rgba(108,99,255,.1)'},
  {icon:'🎮',name:'Gaming & AR/VR',count:'8,430',bg:'rgba(255,107,107,.1)'},
  {icon:'🌐',name:'Translation',count:'11,200',bg:'rgba(255,209,102,.1)'}
];

// ─── HELPERS ────────────────────────────────────────────────────
let currentJob=null;
let fromPage='home';

function bClass(b){
  if(b.includes('Remote'))return'badge-remote';
  if(b.includes('Featured'))return'badge-featured';
  if(b.includes('Urgent')||b.includes('🔥'))return'badge-urgent';
  return'badge-fulltime';
}

// ─── PAGES ──────────────────────────────────────────────────────
function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=document.getElementById('page-'+name);
  if(pg){pg.classList.add('active');window.scrollTo(0,0);}
  if(name==='browse')renderBrowse(JOBS);
  if(name==='categories')renderCats();
}

// ─── HOME JOBS ───────────────────────────────────────────────────
function renderHomeJobs(){
  document.getElementById('homeJobsGrid').innerHTML=JOBS.slice(0,6).map(j=>`
  <div class="job-card" onclick="goApply(${j.id},'home')">
    <div class="job-top">
      <div class="company-logo" style="background:${j.lc};color:${j.lf}">${j.logo}</div>
      <div class="job-badges">${j.badges.map(b=>`<span class="badge ${bClass(b)}">${b}</span>`).join('')}</div>
    </div>
    <div class="job-title">${j.title}</div>
    <div class="job-company">${j.company} · ${j.location}</div>
    <div class="job-meta"><span class="job-meta-item">⏱ ${j.type}</span><span class="job-meta-item">📅 ${j.posted}</span><span class="job-meta-item">👥 ${j.applicants}</span></div>
    <div class="job-skills">${j.skills.map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div>
    <div class="job-footer">
      <div class="job-salary">${j.salary}<span> ${j.st}</span></div>
      <button class="apply-btn" onclick="event.stopPropagation();window.open('${j.url}','_blank')">Apply Now ↗</button>
    </div>
  </div>`).join('');
}

// ─── BROWSE ──────────────────────────────────────────────────────
function renderBrowse(jobs){
  document.getElementById('resultsCount').textContent=`Showing ${jobs.length} of ${JOBS.length} jobs`;
  document.getElementById('jobsResults').innerHTML=jobs.map(j=>`
  <div class="job-list-card" onclick="goApply(${j.id},'browse')">
    <div class="company-logo" style="background:${j.lc};color:${j.lf};width:48px;height:48px;border-radius:12px;flex-shrink:0">${j.logo}</div>
    <div>
      <div class="job-title" style="margin-bottom:4px">${j.title}</div>
      <div class="job-company" style="margin-bottom:9px">${j.company} · ${j.location}</div>
      <div class="job-meta" style="margin-bottom:9px">
        <span class="job-meta-item">⏱ ${j.type}</span>
        <span class="job-meta-item">${j.remote?'🌍 Remote':'🏢 On-site'}</span>
        <span class="job-meta-item">📅 ${j.posted}</span>
        <span class="job-meta-item">👥 ${j.applicants} applicants</span>
      </div>
      <div class="job-skills" style="margin-bottom:0">${j.skills.map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div>
    </div>
    <div class="jl-right">
      <div class="jl-salary">${j.salary}<span> ${j.st}</span></div>
      <div class="job-badges" style="justify-content:flex-end;margin-bottom:10px">${j.badges.map(b=>`<span class="badge ${bClass(b)}">${b}</span>`).join('')}</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <button class="apply-btn" onclick="event.stopPropagation();window.open('${j.url}','_blank')">Apply Now ↗</button>
        <button class="apply-btn" style="background:var(--surface2);font-size:.74rem;padding:6px 12px" onclick="event.stopPropagation();goApply(${j.id},'browse')">View Details</button>
      </div>
    </div>
  </div>`).join('');
}

function filterJobs(){
  const q=(document.getElementById('browseQ').value||'').toLowerCase().trim();
  const cat=(document.getElementById('browseCat').value||'').toLowerCase();
  const filtered=JOBS.filter(j=>{
    const mq=!q||j.title.toLowerCase().includes(q)||j.company.toLowerCase().includes(q)||j.skills.some(s=>s.toLowerCase().includes(q));
    const mc=!cat||j.category.toLowerCase().includes(cat.split('&')[0].trim());
    return mq&&mc;
  });
  renderBrowse(filtered);
}

function resetFilters(){
  document.querySelectorAll('.filter-panel input[type=checkbox]').forEach(c=>c.checked=true);
  document.getElementById('browseQ').value='';
  document.getElementById('browseCat').value='';
  document.getElementById('salaryRange').value=300;
  document.getElementById('salaryLabel').textContent='Up to $300/hr';
  renderBrowse(JOBS);
}

// ─── CATEGORIES ──────────────────────────────────────────────────
function renderCats(){
  document.getElementById('allCatsGrid').innerHTML=CATS.map(c=>`
  <div class="cat-card" onclick="bc('${c.name}')">
    <div class="cat-icon" style="background:${c.bg}">${c.icon}</div>
    <div class="cat-name">${c.name}</div>
    <div class="cat-count">${c.count} jobs</div>
  </div>`).join('');
}

function bc(name){
  showPage('browse');
  document.getElementById('browseCat').value=name;
  filterJobs();
}

// ─── APPLY PAGE ──────────────────────────────────────────────────
function goApply(id, from){
  currentJob=JOBS.find(j=>j.id===id);
  fromPage=from||'browse';
  const j=currentJob;
  if(!j)return;
  document.getElementById('applyBackLink').setAttribute('onclick',`showPage('${fromPage}');return false;`);
  document.getElementById('applyBackLink').textContent=`← Back to ${fromPage==='home'?'Home':'Jobs'}`;
  document.getElementById('applyContent').innerHTML=`
    <div class="apply-header">
      <div class="apply-logo-big" style="background:${j.lc}">${j.logo}</div>
      <div style="flex:1">
        <div class="apply-title">${j.title}</div>
        <div class="apply-company-name">${j.company} · ${j.location}</div>
        <div class="apply-badges-row" style="margin-bottom:12px">
          ${j.badges.map(b=>`<span class="badge ${bClass(b)}">${b}</span>`).join('')}
          <span class="badge badge-fulltime">⏱ ${j.type}</span>
          <span class="badge badge-remote">👥 ${j.applicants} applicants</span>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <a href="${j.url}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:var(--accent2);color:#fff;padding:9px 18px;border-radius:9px;font-size:.84rem;font-weight:600;text-decoration:none;transition:all .2s;cursor:none;" onmouseover="this.style.boxShadow='0 6px 18px rgba(91,82,232,.4)'" onmouseout="this.style.boxShadow='none'">🌐 Visit ${j.company} Careers</a>
          <a href="${j.url}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:transparent;color:var(--accent2);padding:9px 18px;border-radius:9px;font-size:.84rem;font-weight:600;text-decoration:none;border:1.5px solid var(--accent2);transition:all .2s;cursor:none;">↗ Apply on Company Site</a>
        </div>
      </div>
    </div>
    <div class="job-info-grid">
      <div class="info-item"><div class="info-label">Salary</div><div class="info-val" style="color:var(--accent)">${j.salary} ${j.st}</div></div>
      <div class="info-item"><div class="info-label">Job Type</div><div class="info-val">${j.type}</div></div>
      <div class="info-item"><div class="info-label">Location</div><div class="info-val">${j.remote?'🌍 Remote':'🏢 '+j.location}</div></div>
      <div class="info-item"><div class="info-label">Experience</div><div class="info-val">${j.level} Level</div></div>
      <div class="info-item"><div class="info-label">Category</div><div class="info-val">${j.category}</div></div>
      <div class="info-item"><div class="info-label">Posted</div><div class="info-val">${j.posted}</div></div>
    </div>
    <div class="job-detail-section"><h3>About the Role</h3>${j.desc}</div>
    <div class="job-detail-section"><h3>What You'll Do</h3><ul>${j.responsibilities.map(r=>`<li>${r}</li>`).join('')}</ul></div>
    <div class="job-detail-section"><h3>What We're Looking For</h3><ul>${j.requirements.map(r=>`<li>${r}</li>`).join('')}</ul></div>
    <div class="job-detail-section"><h3>Benefits & Perks</h3><ul>${j.benefits.map(b=>`<li>${b}</li>`).join('')}</ul></div>
    <div class="job-detail-section"><h3>Required Skills</h3><div class="job-skills" style="margin-bottom:0">${j.skills.map(s=>`<span class="skill-tag" style="padding:5px 13px;font-size:.82rem">${s}</span>`).join('')}</div></div>`;
  const sim=JOBS.filter(x=>x.id!==id&&x.category===j.category).slice(0,3);
  document.getElementById('similarJobsPanel').innerHTML=sim.length?`
  <div class="similar-card-wrap">
    <h4>Similar Jobs</h4>
    ${sim.map(s=>`<div class="sim-job" onclick="goApply(${s.id},'browse')"><div class="sim-job-title">${s.title}</div><div class="sim-job-co">${s.company} · ${s.location}</div><div class="sim-job-pay">${s.salary} ${s.st}</div></div>`).join('')}
  </div>`:'';
  showPage('apply');
}

function doSubmitApply(){
  const n=document.getElementById('applyName').value;
  const e=document.getElementById('applyEmail').value;
  if(!n||!e){showToast('⚠️','Missing Info','Please fill in your name and email.','err');return;}
  const j=currentJob;
  showToast('🚀','Application Submitted!',`Redirecting you to ${j?j.company:'company'} careers...`,'ok');
  document.getElementById('applyName').value='';
  document.getElementById('applyEmail').value='';
  // Open the real careers page
  setTimeout(()=>{ if(j&&j.url) window.open(j.url,'_blank'); }, 1200);
}

// ─── HERO SEARCH ─────────────────────────────────────────────────
function doHeroSearch(){
  const q=document.getElementById('heroSearch').value;
  const cat=document.getElementById('heroCat').value;
  showPage('browse');
  if(q)document.getElementById('browseQ').value=q;
  if(cat&&cat!=='All Categories')document.getElementById('browseCat').value=cat;
  filterJobs();
}
function qs(t){document.getElementById('heroSearch').value=t;doHeroSearch();}

// ─── MODALS ──────────────────────────────────────────────────────
function openModal(n){document.getElementById(n+'Modal').classList.add('open');}
function closeModal(n){document.getElementById(n+'Modal').classList.remove('open');}
function switchModal(a,b){closeModal(a);openModal(b);}
document.querySelectorAll('.modal-overlay').forEach(m=>{
  m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open');});
});

function doLogin(){
  const e=document.getElementById('loginEmail').value;
  if(!e){showToast('⚠️','Missing Info','Please enter your email address.','err');return;}
  closeModal('login');
  document.getElementById('navActions').innerHTML=`<div class="user-nav"><div class="user-avatar-nav">AR</div><span style="font-size:.85rem;font-weight:500">Alex Rivera</span><button class="btn-ghost" onclick="doLogout()">Log Out</button></div>`;
  showToast('✅','Welcome back!','You have been successfully logged in.','ok');
}
function doLogout(){
  document.getElementById('navActions').innerHTML=`<button class="btn-ghost" onclick="openModal('login')">Log In</button><button class="btn-primary" onclick="openModal('signup')">Get Started</button>`;
  showToast('👋','Logged out','You have been signed out.','ok');
}
function doSignup(){
  closeModal('signup');
  document.getElementById('navActions').innerHTML=`<div class="user-nav"><div class="user-avatar-nav">YO</div><span style="font-size:.85rem;font-weight:500">New User</span><button class="btn-ghost" onclick="doLogout()">Log Out</button></div>`;
  showToast('🎉','Account created!','Welcome to Freelancer! Start exploring jobs.','ok');
}

// ─── TOAST ───────────────────────────────────────────────────────
function showToast(icon,title,sub,type){
  const t=document.getElementById('toast');
  document.getElementById('toastIcon').textContent=icon;
  document.getElementById('toastIcon').style.background=type==='ok'?'rgba(0,229,160,.12)':'rgba(255,107,107,.12)';
  document.getElementById('toastTitle').textContent=title;
  document.getElementById('toastSub').textContent=sub;
  t.style.borderColor=type==='ok'?'rgba(0,229,160,.3)':'rgba(255,107,107,.3)';
  t.classList.add('show');
  clearTimeout(t._t);
  t._t=setTimeout(()=>t.classList.remove('show'),4200);
}

// ─── CURSOR ──────────────────────────────────────────────────────
const cur=document.getElementById('cursor');
const ring=document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.transform=`translate(${mx-6}px,${my-6}px)`;});
(function ar(){rx+=(mx-rx-18)*.12;ry+=(my-ry-18)*.12;ring.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(ar);})();
document.addEventListener('mouseover',e=>{if(e.target.matches('button,a,.cat-card,.job-card,.freelancer-card,.job-list-card,.sim-job')){ring.style.width='50px';ring.style.height='50px';}});
document.addEventListener('mouseout',e=>{if(e.target.matches('button,a,.cat-card,.job-card,.freelancer-card,.job-list-card,.sim-job')){ring.style.width='36px';ring.style.height='36px';}});

// ─── SCROLL REVEAL ───────────────────────────────────────────────
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// ─── INIT ─────────────────────────────────────────────────────────
renderHomeJobs();
renderBrowse(JOBS);
renderCats();
