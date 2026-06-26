<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Saira:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  html { scroll-behavior: smooth; }
  body { margin: 0; background: #060a14; }
  *::selection { background: rgba(63,200,224,0.25); color: #fff; }
  a.tl-link:hover { color: #fff !important; }
</style>
</helmet>

<div style="position:relative;min-height:100vh;background:#060a14;color:#eaf0f9;font-family:'IBM Plex Sans',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden;--ac:{{ accentVar }};">

  <div style="position:fixed;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(rgba(120,150,200,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(120,150,200,0.05) 1px,transparent 1px);background-size:64px 64px;mask-image:radial-gradient(ellipse 120% 80% at 50% 0%,#000 30%,transparent 80%);-webkit-mask-image:radial-gradient(ellipse 120% 80% at 50% 0%,#000 30%,transparent 80%);"></div>

  <!-- NAV -->
  <nav style="position:fixed;top:0;left:0;right:0;z-index:50;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);background:rgba(6,10,20,0.78);border-bottom:1px solid rgba(120,150,200,0.10);">
    <div style="max-width:1240px;margin:0 auto;padding:0 40px;height:70px;display:flex;align-items:center;justify-content:space-between;">
      <a href="Taliden.dc.html" style="display:flex;align-items:center;text-decoration:none;"><img src="taliden-logo.png" alt="Taliden" style="height:24px;width:auto;display:block;"></a>
      <div style="display:flex;align-items:center;gap:36px;">
        <a class="tl-link" href="Platform.dc.html" style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#9aa7bd;text-decoration:none;">Platform</a>
        <a class="tl-link" href="Solutions.dc.html" style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:var(--ac,#3fc8e0);text-decoration:none;">Solutions</a>
        <a class="tl-link" href="Why-Taliden.dc.html" style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#9aa7bd;text-decoration:none;">Why Taliden</a>
        <a class="tl-link" href="Governance.dc.html" style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#9aa7bd;text-decoration:none;">Governance</a>
        <a href="#contact" style="display:inline-flex;align-items:center;gap:8px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#06121a;background:var(--ac,#3fc8e0);text-decoration:none;padding:10px 18px;border-radius:2px;">Book a Demo</a>
      </div>
    </div>
  </nav>

  <!-- PAGE HEADER -->
  <section style="position:relative;z-index:1;padding:150px 0 60px;overflow:hidden;">
    <div style="position:absolute;top:-100px;left:50%;transform:translateX(-50%);width:900px;height:500px;background:radial-gradient(ellipse at center,rgba(63,200,224,0.08),transparent 70%);pointer-events:none;"></div>
    <div style="position:relative;max-width:1240px;margin:0 auto;padding:0 40px;">
      <div style="display:inline-flex;align-items:center;gap:11px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:var(--ac,#3fc8e0);margin-bottom:26px;"><svg width="13" height="9" viewBox="0 0 13 9"><path d="M1 8 L6.5 1.5 L12 8" fill="none" stroke="var(--ac,#3fc8e0)" stroke-width="1.5"></path></svg>Solutions</div>
      <h1 style="font-family:'Saira',sans-serif;font-size:clamp(38px,5vw,64px);font-weight:500;line-height:1.04;letter-spacing:-0.01em;margin:0 0 24px;max-width:920px;color:#f3f7fc;">The same patterns, grounded in <span style="color:var(--ac,#3fc8e0);font-weight:600;">your domain.</span></h1>
      <p style="font-size:19px;line-height:1.6;color:#9aa7bd;max-width:680px;margin:0;">The domain graph changes. The pattern stays reusable. That is what makes Taliden an agent factory — start with one high-value operational area and scale across the enterprise.</p>
    </div>
  </section>

  <!-- USE CASES -->
  <section style="position:relative;z-index:1;padding:60px 0 100px;">
    <div style="max-width:1240px;margin:0 auto;padding:0 40px;">
      <div style="display:grid;grid-template-columns:0.78fr 1.22fr;gap:0;border:1px solid rgba(120,150,200,0.12);border-radius:4px;overflow:hidden;">
        <div style="background:#080d18;border-right:1px solid rgba(120,150,200,0.1);">
          <sc-for list="{{ ucTabs }}" as="t" hint-placeholder-count="5">
            <button onClick="{{ t.onClick }}" style="{{ t.style }}">
              <span style="font-family:'IBM Plex Mono',monospace;font-size:12px;opacity:.6;">{{ t.num }}</span>{{ t.label }}
            </button>
          </sc-for>
        </div>
        <div style="background:#0a1120;padding:44px 46px;">
          <h2 style="font-family:'Saira',sans-serif;font-size:28px;font-weight:600;line-height:1.15;margin:0 0 28px;color:#f3f7fc;">{{ uc.headline }}</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:36px;">
            <div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#c98a3a;margin-bottom:16px;">Pain points</div>
              <div style="display:flex;flex-direction:column;gap:11px;">
                <sc-for list="{{ uc.pains }}" as="p" hint-placeholder-count="6">
                  <div style="display:flex;gap:10px;align-items:flex-start;font-size:14px;line-height:1.4;color:#9aa7bd;"><span style="color:#c98a3a;margin-top:1px;">&times;</span>{{ p }}</div>
                </sc-for>
              </div>
            </div>
            <div>
              <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6fd6a3;margin-bottom:16px;">Example agents</div>
              <div style="display:flex;flex-direction:column;gap:11px;">
                <sc-for list="{{ uc.examples }}" as="e" hint-placeholder-count="4">
                  <div style="display:flex;gap:10px;align-items:flex-start;font-size:14px;line-height:1.4;color:#cdd6e6;"><span style="color:#6fd6a3;margin-top:1px;">&#9663;</span>{{ e }}</div>
                </sc-for>
              </div>
            </div>
          </div>
          <div style="margin-top:32px;padding-top:24px;border-top:1px solid rgba(120,150,200,0.1);font-size:15px;line-height:1.6;color:#8190a8;">{{ uc.capability }}</div>
        </div>
      </div>

      <!-- Pattern reuse note -->
      <div style="margin-top:56px;display:grid;grid-template-columns:0.85fr 1.15fr;gap:48px;align-items:center;">
        <div>
          <div style="display:inline-flex;align-items:center;gap:10px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--ac,#3fc8e0);margin-bottom:20px;"><svg width="13" height="9" viewBox="0 0 13 9"><path d="M1 8 L6.5 1.5 L12 8" fill="none" stroke="var(--ac,#3fc8e0)" stroke-width="1.5"></path></svg>The agent factory</div>
          <h2 style="font-family:'Saira',sans-serif;font-size:32px;font-weight:500;line-height:1.12;letter-spacing:-0.01em;margin:0 0 16px;color:#f3f7fc;">One pattern. Many departments.</h2>
          <p style="font-size:16px;line-height:1.65;color:#9aa7bd;margin:0;">A scheduling pattern powers dock scheduling, crew scheduling, preventive maintenance, and delivery scheduling alike. The reusable pattern stays constant; only the domain graph changes.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:20px;background:rgba(255,255,255,0.012);"><div style="font-family:'Saira',sans-serif;font-size:16px;font-weight:600;color:#eaf0f9;margin-bottom:4px;">Planning</div><div style="font-size:12px;color:#6b7790;">production &middot; transport &middot; workforce</div></div>
          <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:20px;background:rgba(255,255,255,0.012);"><div style="font-family:'Saira',sans-serif;font-size:16px;font-weight:600;color:#eaf0f9;margin-bottom:4px;">Scheduling</div><div style="font-size:12px;color:#6b7790;">dock &middot; crew &middot; delivery</div></div>
          <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:20px;background:rgba(255,255,255,0.012);"><div style="font-family:'Saira',sans-serif;font-size:16px;font-weight:600;color:#eaf0f9;margin-bottom:4px;">Approval</div><div style="font-size:12px;color:#6b7790;">purchase &middot; budget &middot; override</div></div>
          <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:20px;background:rgba(255,255,255,0.012);"><div style="font-family:'Saira',sans-serif;font-size:16px;font-weight:600;color:#eaf0f9;margin-bottom:4px;">Assignment</div><div style="font-size:12px;color:#6b7790;">work orders &middot; tickets &middot; tasks</div></div>
          <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:20px;background:rgba(255,255,255,0.012);"><div style="font-family:'Saira',sans-serif;font-size:16px;font-weight:600;color:#eaf0f9;margin-bottom:4px;">Exception</div><div style="font-size:12px;color:#6b7790;">late &middot; overload &middot; high-risk</div></div>
          <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:20px;background:rgba(255,255,255,0.012);"><div style="font-family:'Saira',sans-serif;font-size:16px;font-weight:600;color:#eaf0f9;margin-bottom:4px;">Reconciliation</div><div style="font-size:12px;color:#6b7790;">inventory &middot; invoice &middot; ledger</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- OPERATIONS BENEFITS -->
  <section style="position:relative;z-index:1;padding:100px 0;border-top:1px solid rgba(120,150,200,0.08);background:linear-gradient(180deg,rgba(255,255,255,0.012),transparent);">
    <div style="max-width:1240px;margin:0 auto;padding:0 40px;">
      <div style="display:flex;align-items:center;gap:11px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--ac,#3fc8e0);margin-bottom:22px;"><span>01</span><span style="width:26px;height:1px;background:var(--ac,#3fc8e0);"></span>Operations benefits</div>
      <h2 style="font-family:'Saira',sans-serif;font-size:clamp(28px,3.4vw,44px);font-weight:500;line-height:1.1;letter-spacing:-0.01em;margin:0 0 18px;max-width:820px;color:#f3f7fc;">Agents that understand how operations actually work.</h2>
      <p style="font-size:18px;line-height:1.65;color:#9aa7bd;max-width:680px;margin:0 0 50px;">Operations are full of constraints, exceptions, tradeoffs, and coordination work. Taliden agents understand the domain, validate constraints, recommend actions, escalate exceptions, and support execution.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
        <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:28px;background:rgba(255,255,255,0.012);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--ac,#3fc8e0)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:16px;"><path d="M13 3 5 13h6l-1 8 8-10h-6z"></path></svg>
          <h3 style="font-family:'Saira',sans-serif;font-size:18px;font-weight:600;margin:0 0 9px;color:#eaf0f9;">Faster planning</h3>
          <p style="font-size:14px;line-height:1.6;color:#8190a8;margin:0;">Agents assemble context and surface viable plans in minutes, not days of manual coordination.</p>
        </div>
        <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:28px;background:rgba(255,255,255,0.012);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--ac,#3fc8e0)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:16px;"><rect x="4" y="5" width="16" height="15" rx="1"></rect><line x1="4" y1="9" x2="20" y2="9"></line><line x1="8" y1="3" x2="8" y2="6"></line><line x1="16" y1="3" x2="16" y2="6"></line></svg>
          <h3 style="font-family:'Saira',sans-serif;font-size:18px;font-weight:600;margin:0 0 9px;color:#eaf0f9;">Better scheduling</h3>
          <p style="font-size:14px;line-height:1.6;color:#8190a8;margin:0;">Capacity, windows, and dependencies are validated before a schedule is ever committed.</p>
        </div>
        <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:28px;background:rgba(255,255,255,0.012);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--ac,#3fc8e0)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:16px;"><circle cx="12" cy="6" r="2"></circle><circle cx="6" cy="17" r="2"></circle><circle cx="18" cy="17" r="2"></circle><line x1="12" y1="8" x2="7" y2="15.4"></line><line x1="12" y1="8" x2="17" y2="15.4"></line><line x1="8" y1="17" x2="16" y2="17"></line></svg>
          <h3 style="font-family:'Saira',sans-serif;font-size:18px;font-weight:600;margin:0 0 9px;color:#eaf0f9;">Fewer manual handoffs</h3>
          <p style="font-size:14px;line-height:1.6;color:#8190a8;margin:0;">Cross-functional coordination that once required meetings becomes governed agent workflow.</p>
        </div>
        <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:28px;background:rgba(255,255,255,0.012);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c98a3a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:16px;"><path d="M12 4 21 19H3Z"></path><line x1="12" y1="10" x2="12" y2="14"></line><line x1="12" y1="16.5" x2="12" y2="16.5"></line></svg>
          <h3 style="font-family:'Saira',sans-serif;font-size:18px;font-weight:600;margin:0 0 9px;color:#eaf0f9;">Earlier risk detection</h3>
          <p style="font-size:14px;line-height:1.6;color:#8190a8;margin:0;">Bottlenecks, SLA risks, and capacity conflicts are flagged before they become failures.</p>
        </div>
        <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:28px;background:rgba(255,255,255,0.012);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--ac,#3fc8e0)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:16px;"><path d="M12 3 19 6 19 11C19 16 15.5 19.5 12 21 8.5 19.5 5 16 5 11L5 6Z"></path><path d="M9 12l2 2 4-4"></path></svg>
          <h3 style="font-family:'Saira',sans-serif;font-size:18px;font-weight:600;margin:0 0 9px;color:#eaf0f9;">Better exception handling</h3>
          <p style="font-size:14px;line-height:1.6;color:#8190a8;margin:0;">Exceptions follow defined paths and escalate to the right human with full context attached.</p>
        </div>
        <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:28px;background:rgba(255,255,255,0.012);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--ac,#3fc8e0)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:16px;"><circle cx="6" cy="6" r="2"></circle><circle cx="18" cy="7" r="2"></circle><circle cx="9" cy="18" r="2"></circle><circle cx="13" cy="11" r="2"></circle><line x1="8" y1="6.4" x2="11" y2="10"></line><line x1="15" y1="10.2" x2="16.6" y2="8"></line><line x1="11.6" y1="12.8" x2="9.7" y2="16"></line></svg>
          <h3 style="font-family:'Saira',sans-serif;font-size:18px;font-weight:600;margin:0 0 9px;color:#eaf0f9;">Stronger coordination</h3>
          <p style="font-size:14px;line-height:1.6;color:#8190a8;margin:0;">Decisions stay consistent across sales, production, warehouse, and transportation.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PILOT TO ENTERPRISE -->
  <section style="position:relative;z-index:1;padding:100px 0;border-top:1px solid rgba(120,150,200,0.08);overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:radial-gradient(rgba(120,150,200,0.08) 1px,transparent 1px);background-size:24px 24px;mask-image:linear-gradient(180deg,transparent,#000 40%,#000 60%,transparent);-webkit-mask-image:linear-gradient(180deg,transparent,#000 40%,#000 60%,transparent);pointer-events:none;"></div>
    <div style="position:relative;max-width:1240px;margin:0 auto;padding:0 40px;">
      <div style="display:flex;align-items:center;gap:11px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--ac,#3fc8e0);margin-bottom:22px;"><span>02</span><span style="width:26px;height:1px;background:var(--ac,#3fc8e0);"></span>The path</div>
      <h2 style="font-family:'Saira',sans-serif;font-size:clamp(28px,3.4vw,44px);font-weight:500;line-height:1.1;letter-spacing:-0.01em;margin:0 0 44px;max-width:760px;color:#f3f7fc;">From one pilot domain to enterprise scale.</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
        <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:32px;background:rgba(255,255,255,0.012);">
          <div style="font-family:'Saira',sans-serif;font-size:30px;font-weight:600;color:rgba(63,200,224,0.45);margin-bottom:18px;">01</div>
          <h3 style="font-family:'Saira',sans-serif;font-size:20px;font-weight:600;margin:0 0 10px;color:#eaf0f9;">Start with one domain</h3>
          <p style="font-size:14px;line-height:1.6;color:#8190a8;margin:0;">Pick a high-value area. Capture its semantic graph and stand up the first governed agent in weeks.</p>
        </div>
        <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:32px;background:rgba(255,255,255,0.012);">
          <div style="font-family:'Saira',sans-serif;font-size:30px;font-weight:600;color:rgba(63,200,224,0.45);margin-bottom:18px;">02</div>
          <h3 style="font-family:'Saira',sans-serif;font-size:20px;font-weight:600;margin:0 0 10px;color:#eaf0f9;">Prove value</h3>
          <p style="font-size:14px;line-height:1.6;color:#8190a8;margin:0;">Measure accepted recommendations, faster cycles, and fewer exceptions in the Control Tower.</p>
        </div>
        <div style="border:1px solid rgba(120,150,200,0.12);border-radius:3px;padding:32px;background:rgba(255,255,255,0.012);">
          <div style="font-family:'Saira',sans-serif;font-size:30px;font-weight:600;color:rgba(63,200,224,0.45);margin-bottom:18px;">03</div>
          <h3 style="font-family:'Saira',sans-serif;font-size:20px;font-weight:600;margin:0 0 10px;color:#eaf0f9;">Scale across capabilities</h3>
          <p style="font-size:14px;line-height:1.6;color:#8190a8;margin:0;">Reuse the same patterns across new domains — the graph changes, the factory stays.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section id="contact" style="position:relative;z-index:1;padding:110px 0;border-top:1px solid rgba(120,150,200,0.08);">
    <div style="max-width:1240px;margin:0 auto;padding:0 40px;">
      <div style="position:relative;border:1px solid rgba(63,200,224,0.25);border-radius:4px;padding:64px 56px;background:linear-gradient(135deg,rgba(63,200,224,0.07),rgba(63,200,224,0.01));overflow:hidden;">
        <span style="position:absolute;top:-1px;left:-1px;width:18px;height:18px;border-top:1px solid var(--ac,#3fc8e0);border-left:1px solid var(--ac,#3fc8e0);"></span>
        <span style="position:absolute;bottom:-1px;right:-1px;width:18px;height:18px;border-bottom:1px solid var(--ac,#3fc8e0);border-right:1px solid var(--ac,#3fc8e0);"></span>
        <div style="position:relative;max-width:680px;">
          <h2 style="font-family:'Saira',sans-serif;font-size:clamp(30px,3.8vw,46px);font-weight:500;line-height:1.08;letter-spacing:-0.01em;margin:0 0 20px;color:#f7fafd;">Start with a pilot domain.</h2>
          <p style="font-size:18px;line-height:1.6;color:#9aa7bd;margin:0 0 34px;">Pick a high-value operational area and we will help you capture the knowledge, configure the agents, and govern execution.</p>
          <a href="#" style="display:inline-flex;align-items:center;gap:9px;font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#06121a;background:var(--ac,#3fc8e0);text-decoration:none;padding:16px 30px;border-radius:2px;box-shadow:0 0 36px rgba(63,200,224,0.3);">Book an AI Strategy Session <span style="font-size:15px;">&#8250;</span></a>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer style="position:relative;z-index:1;padding:64px 0 48px;border-top:1px solid rgba(120,150,200,0.1);">
    <div style="max-width:1240px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;">
      <div>
        <div style="display:flex;align-items:center;margin-bottom:18px;"><img src="taliden-logo.png" alt="Taliden" style="height:22px;width:auto;display:block;"></div>
        <p style="font-size:14px;line-height:1.6;color:#5f6d85;max-width:280px;margin:0;">The semantic agent platform for enterprises moving beyond AI pilots — turning business knowledge into governed execution.</p>
      </div>
      <div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#5f6d85;margin-bottom:16px;">Platform</div>
        <div style="display:flex;flex-direction:column;gap:11px;">
          <a class="tl-link" href="Platform.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Taliden Graph</a><a class="tl-link" href="Platform.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Taliden Studio</a><a class="tl-link" href="Platform.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Taliden Patterns</a><a class="tl-link" href="Platform.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Taliden Runtime</a><a class="tl-link" href="Platform.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Control Tower</a>
        </div>
      </div>
      <div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#5f6d85;margin-bottom:16px;">Solutions</div>
        <div style="display:flex;flex-direction:column;gap:11px;">
          <a class="tl-link" href="Solutions.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Production Planning</a><a class="tl-link" href="Solutions.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Transportation</a><a class="tl-link" href="Solutions.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Maintenance</a><a class="tl-link" href="Solutions.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Procurement</a><a class="tl-link" href="Solutions.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Workforce</a>
        </div>
      </div>
      <div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#5f6d85;margin-bottom:16px;">Company</div>
        <div style="display:flex;flex-direction:column;gap:11px;">
          <a class="tl-link" href="Why-Taliden.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Why Taliden</a><a class="tl-link" href="Governance.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Security &amp; Governance</a><a class="tl-link" href="Taliden.dc.html" style="font-size:14px;color:#9aa7bd;text-decoration:none;">Home</a>
        </div>
      </div>
    </div>
    <div style="max-width:1240px;margin:48px auto 0;padding:24px 40px 0;border-top:1px solid rgba(120,150,200,0.08);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5f6d85;">&copy; 2026 Taliden &mdash; Enterprise Semantic Agent Platform</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:0.04em;color:#5f6d85;text-transform:uppercase;">Graph-grounded &middot; Policy-governed &middot; Audit-ready</div>
    </div>
  </footer>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;$preview&quot;:{&quot;width&quot;:1280,&quot;height&quot;:900},&quot;accent&quot;:{&quot;editor&quot;:&quot;color&quot;,&quot;default&quot;:&quot;#3fc8e0&quot;,&quot;tsType&quot;:&quot;string&quot;,&quot;options&quot;:[&quot;#3fc8e0&quot;,&quot;#4a8af4&quot;,&quot;#5ad1b0&quot;,&quot;#9b8cff&quot;]},&quot;defaultSolution&quot;:{&quot;editor&quot;:&quot;int&quot;,&quot;default&quot;:0,&quot;min&quot;:0,&quot;max&quot;:4,&quot;tsType&quot;:&quot;number&quot;}}">
class Component extends DCLogic {
  state = { uc: 0 };

  componentDidMount() {
    if (typeof this.props.defaultSolution === 'number') this.setState({ uc: this.props.defaultSolution });
  }

  useCaseData() {
    return [
      { tab: 'Production Planning',
        headline: 'AI agents that understand production constraints.',
        pains: ['Manual planning cycles', 'Grade transitions', 'Capacity conflicts', 'Late order changes', 'Unplanned downtime', 'Poor cross-team visibility'],
        examples: ['Grade grouping recommendations', 'Order-to-inventory binding', 'Capacity risk alerts', 'Maintenance-aware planning'],
        capability: 'Taliden creates production planning agents grounded in production rules, capacity constraints, product relationships, order priorities, inventory status, and operational exceptions.' },
      { tab: 'Transportation',
        headline: 'Governed transportation planning and appointment execution.',
        pains: ['Carrier appointment misalignment', 'Live load vs preload confusion', 'Yard vs dock capacity', 'Ship date vs ready date conflicts', 'Overbooking risk', 'Preload starvation'],
        examples: ['Live load vs preload validation', 'Dock capacity monitoring', 'Ship date alignment', 'Preload starvation detection'],
        capability: 'Taliden models transportation rules and instantiates agents that assist with appointment scheduling, capacity validation, carrier coordination, preload planning, and exception escalation.' },
      { tab: 'Maintenance',
        headline: 'Assign the right work to the right people at the right time.',
        pains: ['Manual work assignment', 'PM schedule conflicts', 'Skill availability gaps', 'Asset criticality risk', 'Work order backlog', 'Opaque assignment rationale'],
        examples: ['Work order triage', 'Assignment recommendations', 'Critical asset escalation', 'Supervisor approval routing'],
        capability: 'Taliden combines asset knowledge, workforce availability, skill requirements, priority rules, maintenance windows, and approval constraints to support governed maintenance assignments.' },
      { tab: 'Procurement',
        headline: 'Agents that understand authority, policy, and financial control.',
        pains: ['Approval delays', 'Policy ambiguity', 'Manual routing', 'Missing documentation', 'Budget conflicts', 'Unauthorized commitments'],
        examples: ['Requisition validation', 'Approval routing', 'Policy exception detection', 'Budget authority checks'],
        capability: 'Taliden instantiates approval agents that validate requests against authority rules, policy thresholds, budget context, documentation requirements, and approval workflows.' },
      { tab: 'Workforce',
        headline: 'Redesign work across humans, agents, and systems.',
        pains: ['Unclear human-vs-agent boundaries', 'Reskilling gaps', 'Change resistance', 'Fragmented automation', 'Low AI trust', 'Accountability ambiguity'],
        examples: ['Human-agent-system mapping', 'Capability redesign', 'Reskilling pathways', 'Accountability modeling'],
        capability: 'Taliden helps separate what humans should decide, what agents can assist with, and what systems can automate — then redesign roles around governed collaboration.' }
    ];
  }

  ucTabStyle(active) {
    const a = this.props.accent || '#3fc8e0';
    return "display:flex;align-items:center;gap:12px;width:100%;text-align:left;font-family:'Saira',sans-serif;font-size:17px;font-weight:500;padding:22px 26px;border:0;border-left:3px solid " +
      (active ? a : 'transparent') + ";background:" +
      (active ? 'rgba(255,255,255,0.035)' : 'transparent') + ";color:" +
      (active ? '#f3f7fc' : '#8190a8') + ";cursor:pointer;transition:all .2s;";
  }

  renderVals() {
    const ucs = this.useCaseData();
    const uci = this.state.uc || 0;
    const uc = ucs[uci];
    const ucTabs = ucs.map((u, i) => ({
      label: u.tab, num: '0' + (i + 1), active: i === uci,
      onClick: () => this.setState({ uc: i }),
      style: this.ucTabStyle(i === uci)
    }));
    return { accentVar: this.props.accent || '#3fc8e0', uc, ucTabs };
  }
}
</script>
</body>
</html>
