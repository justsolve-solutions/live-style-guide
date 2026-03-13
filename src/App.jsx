import { useState } from "react";
import React from 'react'
import LOGO_WHITE from './assets/JS Primary Logo_White-Pink.png';
import LOGO_DEFAULT from './assets/JS Primary Logo GrapePink Default.png';

const sections = ["Colours", "Colour Usage & Tints", "Logo Guidelines", "Photography", "Typography", "Buttons", "Form Elements", "Icons & Imagery", "Components", "Website Patterns", "Design Tokens", "Data Table"];

// dark=true  → white+pink logo (for grape/dark backgrounds)
function Logo({ dark = false, height = 36 }) {
  return (
    <img
      src={dark ? LOGO_WHITE : LOGO_DEFAULT}
      alt="JustSolve"
      style={{ height, display: "block" }}
    />
  );
}

// ── Color Swatch ─────────────────────────────────────────────────────────────
function Swatch({ name, hex, textDark }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div
      onClick={copy}
      style={{
        background: hex,
        border: hex === "var(--color-white)" ? "1px solid var(--color-gray-200)" : "none",
        borderRadius: 16,
        padding: "28px 20px 20px",
        cursor: "pointer",
        transition: "transform .15s, box-shadow .15s",
        boxShadow: "0 4px 24px rgba(51,40,92,.10)",
        minWidth: 140,
        flex: "1 1 140px",
        userSelect: "none",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(51,40,92,.18)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 24px rgba(51,40,92,.10)"; }}
    >
      <div style={{ fontWeight: 700, fontSize: 13, color: textDark ? "var(--color-grape)" : "var(--color-white)", marginBottom: 6 }}>{name}</div>
      <div style={{ fontSize: 12, color: textDark ? "#33285C99" : "#ffffff99" }}>{hex}</div>
      <div style={{ marginTop: 10,fontSize: 11, color: textDark ? "#33285Ccc" : "#ffffffcc" }}>
        {copied ? "✓ Copied!" : "Click to copy"}
      </div>
    </div>
  );
}

// ── Section: Colors ───────────────────────────────────────────────────────────
function ColorsSection() {
  return (
    <div>
      <SectionLabel>Brand Colours</SectionLabel>
      <p style={descStyle}>Four core colours that bring the JustSolve visual identity to life across all touchpoints.</p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 24 }}>
        <Swatch name="Grape" hex="#33285C" />
        <Swatch name="Light Pink" hex="#FCABF6" textDark />
        <Swatch name="Bold Pink" hex="#E32475" />
        <Swatch name="White" hex="#FFFFFF" textDark />
      </div>

      <SectionLabel style={{ marginTop: 48 }}>Colour Pairings</SectionLabel>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 20 }}>
        {[
          { bg: "var(--color-grape)", fg: "var(--color-white)", label: "Grape + White" },
          { bg: "var(--color-bold-pink)", fg: "var(--color-white)", label: "Bold Pink + White" },
          { bg: "var(--color-light-pink)", fg: "var(--color-grape)", label: "Light Pink + Grape" },
          { bg: "var(--color-grape)", fg: "var(--color-light-pink)", label: "Grape + Light Pink" },
          { bg: "var(--color-bold-pink)", fg: "var(--color-light-pink)", label: "Bold Pink + Light Pink" },
        ].map(p => (
          <div key={p.label} style={{ background: p.bg, borderRadius: 12, padding: "16px 24px", fontWeight: 600, fontSize: 14, color: p.fg, flex: "1 1 160px", textAlign: "center", boxShadow: "0 2px 12px rgba(51,40,92,.12)" }}>
            {p.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: Typography ───────────────────────────────────────────────────────
function TypographySection() {
  const styles = [
    { label: "Heading / Black", weight: 900, size: 40, text: "Do more with less." },
    { label: "Heading / Bold", weight: 700, size: 32, text: "Solutions that scale." },
    { label: "Subheading / Medium", weight: 500, size: 22, text: "Simple. Smart. Solved." },
    { label: "Body / Regular", weight: 400, size: 16, text: "JustSolve helps teams do more with less — combining powerful tools with a simple experience that just works." },
    { label: "Body / Light", weight: 300, size: 16, text: "Body copy makes use of DM Sans Regular or Light, while headings use Black or Bold." },
    { label: "Caption / Thin", weight: 100, size: 13, text: "VISUAL LANGUAGE · TYPOGRAPHY · PAGE 28" },
  ];
  return (
    <div>
      <SectionLabel>DM Sans — Brand Typeface</SectionLabel>
      <p style={descStyle}>DM Sans is the sole typeface for JustSolve. Weight variations create hierarchy and visual interest.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: 28 }}>
        {styles.map(s => (
          <div key={s.label} style={{ borderBottom: "1px solid var(--bg-purple-lighter)", paddingBottom: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-bold-pink)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{s.label}</div>
            <div style={{ fontWeight: s.weight, fontSize: s.size, color: "var(--color-grape)", lineHeight: 1.2 }}>{s.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: Buttons ──────────────────────────────────────────────────────────
function ButtonsSection() {
  const btnBase = {
    fontWeight: 700, fontSize: 15,
    borderRadius: 50, border: "none", padding: "12px 28px", cursor: "pointer",
    transition: "transform .15s, box-shadow .15s",
  };

  return (
    <div>
      <SectionLabel>Button Variants</SectionLabel>
      <p style={descStyle}>Use pill-shaped buttons throughout the product. Primary actions use Bold Pink, secondary use Grape.</p>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 20 }}>
        {[
          { label: "Primary", bg: "var(--color-bold-pink)", color: "var(--color-white)" },
          { label: "Secondary", bg: "var(--color-grape)", color: "var(--color-white)" },
          { label: "Ghost / Grape", bg: "transparent", color: "var(--color-grape)", border: "2px solid var(--color-grape)" },
          { label: "Ghost / Pink", bg: "transparent", color: "var(--color-bold-pink)", border: "2px solid var(--color-bold-pink)" },
          { label: "Light Pink", bg: "var(--color-light-pink)", color: "var(--color-grape)" },
          { label: "Disabled", bg: "var(--color-gray-200)", color: "var(--color-gray-400)", cursor: "not-allowed" },
        ].map(b => (
          <button key={b.label} style={{ ...btnBase, background: b.bg, color: b.color, border: b.border || "none", cursor: b.cursor || "pointer" }}
            onMouseEnter={e => { if (!b.cursor) { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 6px 20px rgba(227,36,117,.25)"; } }}
            onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}>
            {b.label}
          </button>
        ))}
      </div>

      <SectionLabel style={{ marginTop: 44 }}>Button Sizes</SectionLabel>
      <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", marginTop: 20 }}>
        {[
          { label: "Large", pad: "16px 40px", fs: 17 },
          { label: "Medium", pad: "12px 28px", fs: 15 },
          { label: "Small", pad: "8px 18px", fs: 13 },
          { label: "XSmall", pad: "5px 14px", fs: 11 },
        ].map(s => (
          <button key={s.label} style={{ ...btnBase, background: "var(--color-bold-pink)", color: "var(--color-white)", padding: s.pad, fontSize: s.fs }}>
            {s.label}
          </button>
        ))}
      </div>

      <SectionLabel style={{ marginTop: 44 }}>With Icons</SectionLabel>
      <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", marginTop: 20 }}>
        {[
          { label: "✓  Confirm", bg: "var(--color-bold-pink)", color: "var(--color-white)" },
          { label: "+ Add New", bg: "var(--color-grape)", color: "var(--color-white)" },
          { label: "↗ Share", bg: "transparent", color: "var(--color-bold-pink)", border: "2px solid var(--color-bold-pink)" },
          { label: "🗑 Delete", bg: "var(--bg-pink-error)", color: "var(--color-bold-pink)", border: "1px solid var(--border-pink-light)" },
        ].map(b => (
          <button key={b.label} style={{ ...btnBase, background: b.bg, color: b.color, border: b.border || "none" }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 6px 20px rgba(227,36,117,.20)"; }}
            onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}>
            {b.label}
          </button>
        ))}
      </div>

      <SectionLabel style={{ marginTop: 44 }}>Loading State</SectionLabel>
      <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", marginTop: 20 }}>
        <button style={{ ...btnBase, background: "var(--color-bold-pink)", color: "var(--color-white)", display: "flex", alignItems: "center", gap: 10, opacity: 0.85, cursor: "not-allowed" }}>
          <span style={{ width: 14, height: 14, border: "2px solid #fff4", borderTop: "2px solid #fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />
          Processing…
        </button>
        <button style={{ ...btnBase, background: "var(--color-grape)", color: "var(--color-white)", display: "flex", alignItems: "center", gap: 10, opacity: 0.85, cursor: "not-allowed" }}>
          <span style={{ width: 14, height: 14, border: "2px solid #fff4", borderTop: "2px solid var(--color-light-pink)", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />
          Saving…
        </button>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ── Section: Form Elements ────────────────────────────────────────────────────
function FormsSection() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");
  const [url, setUrl] = useState("");
  const [search, setSearch] = useState("");
  const [textarea, setTextarea] = useState("");
  const [select, setSelect] = useState("");
  const [multiSelect, setMultiSelect] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [range, setRange] = useState(50);
  const [checks, setChecks] = useState({ ux: false, dev: false, pm: false, design: false });
  const [radio, setRadio] = useState("");
  const [toggle, setToggle] = useState({ notifications: true, darkMode: false, marketing: false });
  const [file, setFile] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [tags, setTags] = useState(["JustSolve", "Design"]);
  const [tagInput, setTagInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const inputStyle = (focused) => ({
    width: "100%", fontSize: 15,
    padding: "12px 16px", border: `2px solid ${focused ? "var(--color-bold-pink)" : "var(--color-light-pink)"}`,
    borderRadius: 10, outline: "none", color: "var(--color-grape)",
    background: "var(--color-white)", boxSizing: "border-box", transition: "border-color .2s",
  });

  const [focused, setFocused] = useState({});
  const focus = (k) => setFocused(f => ({ ...f, [k]: true }));
  const blur = (k) => setFocused(f => ({ ...f, [k]: false }));

  const multiOptions = ["Engineering", "Design", "Marketing", "Sales", "Support", "Operations"];
  const toggleMulti = (opt) => setMultiSelect(prev => prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt]);

  const addTag = (e) => {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };
  const removeTag = (t) => setTags(tags.filter(x => x !== t));

  const Field = ({ label, hint, error, children }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && <label style={labelStyle}>{label}</label>}
      {children}
      {hint && !error && <span style={{ fontSize: 12, color: "var(--color-gray-250)" }}>{hint}</span>}
      {error && <span style={{ fontSize: 12, color: "var(--color-bold-pink)" }}>⚠ {error}</span>}
    </div>
  );

  return (
    <div>
      {/* ── Text Inputs ── */}
      <SectionLabel>Text Inputs</SectionLabel>
      <p style={descStyle}>All inputs use a 2px Light Pink border at rest, Bold Pink on focus. Rounded corners (10px) keep the style soft and approachable.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginTop: 24 }}>
        <Field label="Full Name" hint="As it appears on your ID">
          <input value={text} onChange={e => setText(e.target.value)} placeholder="e.g. Alex Johnson"
            style={inputStyle(focused.text)} onFocus={() => focus("text")} onBlur={() => blur("text")} />
        </Field>
        <Field label="Email Address">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="alex@justsolve.com"
            style={inputStyle(focused.email)} onFocus={() => focus("email")} onBlur={() => blur("email")} />
        </Field>
        <Field label="Password" hint="Minimum 8 characters">
          <div style={{ position: "relative" }}>
            <input type={showPass ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••"
              style={{ ...inputStyle(focused.pass), paddingRight: 48 }} onFocus={() => focus("pass")} onBlur={() => blur("pass")} />
            <button onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--color-bold-pink)", fontSize: 13, fontWeight: 600 }}>
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
        </Field>
        <Field label="Phone Number">
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+27 11 000 0000"
            style={inputStyle(focused.phone)} onFocus={() => focus("phone")} onBlur={() => blur("phone")} />
        </Field>
        <Field label="Website URL">
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: "var(--color-gray-400)" }}>https://</span>
            <input type="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="yoursite.com"
              style={{ ...inputStyle(focused.url), paddingLeft: 72 }} onFocus={() => focus("url")} onBlur={() => blur("url")} />
          </div>
        </Field>
        <Field label="Quantity" hint="Numbers only">
          <input type="number" value={number} onChange={e => setNumber(e.target.value)} placeholder="0" min="0"
            style={inputStyle(focused.num)} onFocus={() => focus("num")} onBlur={() => blur("num")} />
        </Field>
        <Field label="Search" hint="Press Enter to search">
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search solutions…"
              style={{ ...inputStyle(focused.search), paddingLeft: 42 }} onFocus={() => focus("search")} onBlur={() => blur("search")} />
          </div>
        </Field>
        <Field label="Error State" error="This email is already registered.">
          <input placeholder="duplicate@email.com"
            style={{ ...inputStyle(true), borderColor: "var(--color-bold-pink)", background: "var(--bg-pink-error)" }} />
        </Field>
      </div>

      {/* ── Textarea ── */}
      <SectionLabel style={{ marginTop: 48 }}>Textarea</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginTop: 20 }}>
        <Field label="Description" hint={`${textarea.length}/300 characters`}>
          <textarea value={textarea} onChange={e => setTextarea(e.target.value.slice(0, 300))} rows={5} placeholder="Describe your challenge in detail…"
            style={{ ...inputStyle(focused.ta), resize: "vertical" }} onFocus={() => focus("ta")} onBlur={() => blur("ta")} />
        </Field>
        <Field label="Notes (Read Only)">
          <textarea rows={5} readOnly value="This field is read-only. Content here cannot be edited by the user but can be selected and copied."
            style={{ ...inputStyle(false), background: "var(--bg-purple-light)", color: "var(--color-gray-500)", cursor: "default" }} />
        </Field>
      </div>

      {/* ── Select & Multi-select ── */}
      <SectionLabel style={{ marginTop: 48 }}>Select & Multi-Select</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginTop: 20 }}>
        <Field label="Dropdown Select">
          <select value={select} onChange={e => setSelect(e.target.value)}
            style={{ ...inputStyle(focused.sel), appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23E32475' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
            onFocus={() => focus("sel")} onBlur={() => blur("sel")}>
            <option value="">Select a department…</option>
            {multiOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>
        <Field label="Multi-Select (toggle)" hint="Select all that apply">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {multiOptions.map(opt => (
              <button key={opt} onClick={() => toggleMulti(opt)} style={{
                fontWeight: 600, fontSize: 13,
                padding: "7px 16px", borderRadius: 50, cursor: "pointer", transition: "all .15s",
                background: multiSelect.includes(opt) ? "var(--color-bold-pink)" : "var(--color-white)",
                color: multiSelect.includes(opt) ? "var(--color-white)" : "var(--color-grape)",
                border: `2px solid ${multiSelect.includes(opt) ? "var(--color-bold-pink)" : "var(--color-light-pink)"}`,
              }}>{opt}</button>
            ))}
          </div>
        </Field>
      </div>

      {/* ── Tag Input ── */}
      <SectionLabel style={{ marginTop: 48 }}>Tag / Token Input</SectionLabel>
      <div style={{ marginTop: 20, maxWidth: 560 }}>
        <Field label="Tags" hint="Type and press Enter or comma to add a tag">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "10px 12px", border: `2px solid ${focused.tag ? "var(--color-bold-pink)" : "var(--color-light-pink)"}`, borderRadius: 10, background: "var(--color-white)", transition: "border-color .2s", cursor: "text" }}
            onClick={() => document.getElementById("tagInput").focus()}>
            {tags.map(t => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--bg-pink-light)", border: "1px solid var(--color-light-pink)", borderRadius: 50, padding: "4px 12px", fontSize: 13, color: "var(--color-grape)", fontWeight: 600 }}>
                {t}
                <button onClick={(e) => { e.stopPropagation(); removeTag(t); }} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-bold-pink)", fontSize: 14, lineHeight: 1, padding: 0 }}>×</button>
              </span>
            ))}
            <input id="tagInput" value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={addTag}
              placeholder={tags.length === 0 ? "Add tags…" : ""} onFocus={() => focus("tag")} onBlur={() => blur("tag")}
              style={{ border: "none", outline: "none", fontSize: 14, color: "var(--color-grape)", minWidth: 100, flex: 1 }} />
          </div>
        </Field>
      </div>

      {/* ── Date & Time ── */}
      <SectionLabel style={{ marginTop: 48 }}>Date & Time</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20, marginTop: 20 }}>
        <Field label="Date">
          <input type="date" value={date} onChange={e => setDate(e.target.value)}
            style={inputStyle(focused.date)} onFocus={() => focus("date")} onBlur={() => blur("date")} />
        </Field>
        <Field label="Time">
          <input type="time" value={time} onChange={e => setTime(e.target.value)}
            style={inputStyle(focused.time)} onFocus={() => focus("time")} onBlur={() => blur("time")} />
        </Field>
        <Field label="Date From">
          <input type="date" value={dateRange.from} onChange={e => setDateRange(r => ({ ...r, from: e.target.value }))}
            style={inputStyle(focused.dfrom)} onFocus={() => focus("dfrom")} onBlur={() => blur("dfrom")} />
        </Field>
        <Field label="Date To">
          <input type="date" value={dateRange.to} onChange={e => setDateRange(r => ({ ...r, to: e.target.value }))}
            style={inputStyle(focused.dto)} onFocus={() => focus("dto")} onBlur={() => blur("dto")} />
        </Field>
      </div>

      {/* ── Range Slider ── */}
      <SectionLabel style={{ marginTop: 48 }}>Range Slider</SectionLabel>
      <div style={{ maxWidth: 480, marginTop: 20 }}>
        <Field label={`Budget Allocation — ${range}%`}>
          <div style={{ position: "relative", padding: "8px 0" }}>
            <input type="range" min={0} max={100} value={range} onChange={e => setRange(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--color-bold-pink)", height: 4, cursor: "pointer" }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--color-gray-400)", marginTop: 6 }}>
              <span>0%</span><span>50%</span><span>100%</span>
            </div>
          </div>
        </Field>
      </div>

      {/* ── Checkboxes ── */}
      <SectionLabel style={{ marginTop: 48 }}>Checkboxes</SectionLabel>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
        <p style={descStyle}>Use checkboxes for multi-select options within a form group.</p>
        {Object.entries({ ux: "UX Design", dev: "Development", pm: "Product Management", design: "Visual Design" }).map(([k, v]) => (
          <label key={k} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", fontSize: 15, color: "var(--color-grape)" }}>
            <div style={{ width: 20, height: 20, borderRadius: 5, border: `2px solid ${checks[k] ? "var(--color-bold-pink)" : "var(--color-light-pink)"}`, background: checks[k] ? "var(--color-bold-pink)" : "var(--color-white)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .15s", flexShrink: 0, cursor: "pointer" }}
              onClick={() => setChecks(c => ({ ...c, [k]: !c[k] }))}>
              {checks[k] && <span style={{ color: "var(--color-white)", fontSize: 12, fontWeight: 900, lineHeight: 1 }}>✓</span>}
            </div>
            <span onClick={() => setChecks(c => ({ ...c, [k]: !c[k] }))}>{v}</span>
          </label>
        ))}
      </div>

      {/* ── Radio Buttons ── */}
      <SectionLabel style={{ marginTop: 48 }}>Radio Buttons</SectionLabel>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
        <p style={descStyle}>Radio buttons for single-choice selections within a group.</p>
        {["Starter — Free", "Growth — R499/mo", "Business — R1,299/mo", "Enterprise — Custom"].map(opt => (
          <label key={opt} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => setRadio(opt)}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${radio === opt ? "var(--color-bold-pink)" : "var(--color-light-pink)"}`, background: "var(--color-white)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "border-color .15s" }}>
              {radio === opt && <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-bold-pink)" }} />}
            </div>
            <span style={{ fontSize: 15, color: "var(--color-grape)", fontWeight: radio === opt ? 700 : 400 }}>{opt}</span>
          </label>
        ))}
      </div>

      {/* ── Toggle Switches ── */}
      <SectionLabel style={{ marginTop: 48 }}>Toggle Switches</SectionLabel>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 18, maxWidth: 400 }}>
        {Object.entries({ notifications: "Email Notifications", darkMode: "Dark Mode", marketing: "Marketing Emails" }).map(([k, label]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 15, color: "var(--color-grape)" }}>{label}</span>
            <div onClick={() => setToggle(t => ({ ...t, [k]: !t[k] }))} style={{ width: 48, height: 26, borderRadius: 13, background: toggle[k] ? "var(--color-bold-pink)" : "var(--color-gray-300)", cursor: "pointer", position: "relative", transition: "background .2s", flexShrink: 0 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--color-white)", position: "absolute", top: 3, left: toggle[k] ? 25 : 3, transition: "left .2s", boxShadow: "0 1px 4px rgba(0,0,0,.2)" }} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Star Rating ── */}
      <SectionLabel style={{ marginTop: 48 }}>Star Rating</SectionLabel>
      <div style={{ marginTop: 20 }}>
        <Field label="Rate your experience">
          <div style={{ display: "flex", gap: 6 }}>
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} onMouseEnter={() => setHoverRating(i)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(i)}
                style={{ fontSize: 32, cursor: "pointer", color: i <= (hoverRating || rating) ? "var(--color-bold-pink)" : "var(--color-light-pink)", transition: "color .1s, transform .1s", transform: i <= (hoverRating || rating) ? "scale(1.15)" : "scale(1)", display: "inline-block" }}>
                ★
              </span>
            ))}
            {rating > 0 && <span style={{ fontSize: 14, color: "var(--color-grape)", alignSelf: "center", marginLeft: 8 }}>{["", "Poor", "Fair", "Good", "Great", "Excellent!"][rating]}</span>}
          </div>
        </Field>
      </div>

      {/* ── File Upload ── */}
      <SectionLabel style={{ marginTop: 48 }}>File Upload</SectionLabel>
      <div style={{ marginTop: 20, maxWidth: 480 }}>
        <label style={{ display: "block", border: "2px dashed var(--color-light-pink)", borderRadius: 14, padding: "28px", textAlign: "center", cursor: "pointer", background: file ? "var(--bg-pink-light)" : "var(--color-white)", transition: "background .2s" }}>
          <input type="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
          <div style={{ fontSize: 32, marginBottom: 8 }}>📎</div>
          <div style={{ fontWeight: 700, fontSize: 15, color: "var(--color-grape)" }}>
            {file ? file.name : "Drop your file here"}
          </div>
          <div style={{ fontSize: 13, color: "var(--color-gray-400)", marginTop: 4 }}>
            {file ? `${(file.size / 1024).toFixed(1)} KB` : "or click to browse — PNG, JPG, PDF up to 10MB"}
          </div>
        </label>
      </div>

      {/* ── Complete Form Example ── */}
      <SectionLabel style={{ marginTop: 56 }}>Complete Form Example</SectionLabel>
      <p style={descStyle}>A real-world contact form using JustSolve's brand tokens.</p>
      {submitted ? (
        <div style={{ marginTop: 24, background: "var(--bg-green-success)", border: "1px solid var(--border-green-success)", borderRadius: 16, padding: "32px", textAlign: "center", maxWidth: 520 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
          <div style={{ fontWeight: 900, fontSize: 22, color: "var(--color-grape)", marginBottom: 8 }}>Message Sent!</div>
          <div style={{ fontSize: 15, color: "var(--color-gray-700)" }}>We'll get back to you within 24 hours.</div>
          <button onClick={() => setSubmitted(false)} style={{ marginTop: 20, fontWeight: 700, fontSize: 14, background: "var(--color-bold-pink)", color: "var(--color-white)", border: "none", borderRadius: 50, padding: "10px 24px", cursor: "pointer" }}>Send Another</button>
        </div>
      ) : (
        <div style={{ marginTop: 24, background: "var(--color-white)", border: "1px solid var(--bg-purple-lighter)", borderRadius: 20, padding: "36px 40px", maxWidth: 520, boxShadow: "0 4px 24px rgba(51,40,92,.07)" }}>
          <div style={{ fontWeight: 900, fontSize: 22, color: "var(--color-grape)", marginBottom: 24 }}>Get in Touch</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="First Name"><input placeholder="Alex" style={inputStyle(false)} /></Field>
              <Field label="Last Name"><input placeholder="Johnson" style={inputStyle(false)} /></Field>
            </div>
            <Field label="Work Email"><input type="email" placeholder="alex@company.com" style={inputStyle(false)} /></Field>
            <Field label="Department">
              <select style={{ ...inputStyle(false), appearance: "none" }}>
                <option value="">Select…</option>
                {multiOptions.map(o => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="Message"><textarea rows={4} placeholder="How can we help?" style={{ ...inputStyle(false), resize: "vertical" }} /></Field>
            <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", fontSize: 13, color: "var(--color-gray-700)", lineHeight: 1.5 }}>
              <input type="checkbox" style={{ accentColor: "var(--color-bold-pink)", marginTop: 2, flexShrink: 0 }} />
              I agree to the JustSolve Terms of Service and Privacy Policy.
            </label>
            <button onClick={() => setSubmitted(true)} style={{ fontWeight: 700, fontSize: 16, background: "var(--color-bold-pink)", color: "var(--color-white)", border: "none", borderRadius: 50, padding: "14px", cursor: "pointer", transition: "transform .15s, box-shadow .15s" }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px rgba(227,36,117,.35)"; }}
              onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}>
              Send Message →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Section: Icons & Imagery ──────────────────────────────────────────────────
function IconsSection() {
  const iconData = [
    { name: "Messaging", path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13 20 6H4zm0 2.24V18h16V8.24l-8 7-8-7z" },
    { name: "Code", path: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" },
    { name: "Settings", path: "M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96a7.01 7.01 0 00-1.62-.94l-.36-2.54A.484.484 0 0014 2h-4c-.25 0-.46.18-.49.42l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.37 1.04.7 1.62.94l.36 2.54c.05.24.26.42.5.42h4c.25 0 .46-.18.49-.42l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" },
    { name: "Search", path: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" },
    { name: "User", path: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" },
    { name: "Bell", path: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" },
    { name: "Check", path: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" },
    { name: "Arrow Right", path: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" },
    { name: "Close", path: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" },
  ];

  return (
    <div>
      <SectionLabel>Iconography</SectionLabel>
      <p style={descStyle}>Icons follow the outlined style with rounded strokes, always rendered in brand colours.</p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 24 }}>
        {iconData.map(icon => (
          <div key={icon.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, background: "var(--bg-purple-lightest)", borderRadius: 14, padding: "20px 18px", minWidth: 90, flex: "1 1 90px" }}>
            <svg viewBox="0 0 24 24" width={28} height={28} fill="var(--color-bold-pink)"><path d={icon.path} /></svg>
            <span style={{ fontSize: 11, color: "var(--color-grape)", fontWeight: 500, textAlign: "center" }}>{icon.name}</span>
          </div>
        ))}
      </div>

      <SectionLabel style={{ marginTop: 44 }}>Icon Sizes & Colour Variants</SectionLabel>
      <div style={{ display: "flex", gap: 20, alignItems: "flex-end", marginTop: 20, flexWrap: "wrap" }}>
        {[{ size: 16, label: "16px" }, { size: 20, label: "20px" }, { size: 24, label: "24px" }, { size: 32, label: "32px" }, { size: 48, label: "48px" }].map(s => (
          <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <svg viewBox="0 0 24 24" width={s.size} height={s.size} fill="var(--color-bold-pink)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <span style={{ fontSize: 11, color: "#33285C99" }}>{s.label}</span>
          </div>
        ))}
        <div style={{ width: 1, background: "var(--bg-purple-lighter)", height: 60, margin: "0 8px" }} />
        {["var(--color-bold-pink)", "var(--color-grape)", "var(--color-light-pink)", "var(--color-gray-400)"].map(c => (
          <div key={c} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <svg viewBox="0 0 24 24" width={28} height={28} fill={c}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <span style={{ fontSize: 11, color: "#33285C99" }}>{c}</span>
          </div>
        ))}
      </div>

      <SectionLabel style={{ marginTop: 44 }}>Photography Style</SectionLabel>
      <p style={descStyle}>Real people in authentic moments. Vibrant, high-contrast imagery with a bold pink/purple lighting style. Avoid stock-photo clichés.</p>
      <div style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}>
        {[
          { bg: "linear-gradient(135deg,var(--color-bold-pink),var(--color-grape))", label: "Lighting Style — Bold Pink/Grape" },
          { bg: "linear-gradient(135deg,var(--color-light-pink),var(--color-bold-pink))", label: "Lighting Style — Light Pink/Bold Pink" },
          { bg: "linear-gradient(135deg,var(--color-grape),var(--color-light-pink))", label: "Lighting Style — Grape/Light Pink" },
        ].map(s => (
          <div key={s.label} style={{ flex: "1 1 180px", height: 120, borderRadius: 14, background: s.bg, display: "flex", alignItems: "flex-end", padding: 14 }}>
            <span style={{ fontSize: 12, color: "var(--color-white)", fontWeight: 600 }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: Components ───────────────────────────────────────────────────────
function ComponentsSection() {
  const [modal, setModal] = useState(false);
  const [tab, setTab] = useState(0);
  const [toast, setToast] = useState(false);

  const showToast = () => { setToast(true); setTimeout(() => setToast(false), 2500); };

  return (
    <div>
      {/* Cards */}
      <SectionLabel>Cards</SectionLabel>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 20 }}>
        {[
          { title: "Feature Card", body: "Highlight a key product feature with bold pink accents and clean typography.", accent: "var(--color-bold-pink)" },
          { title: "Info Card", body: "Use light pink backgrounds for softer informational content blocks.", accent: "var(--color-light-pink)", bg: "var(--bg-pink-light)", textAccent: "var(--color-grape)" },
          { title: "Dark Card", body: "Grape backgrounds create high-impact moments and hero sections.", accent: "var(--color-light-pink)", bg: "var(--color-grape)", text: "var(--color-white)" },
        ].map(c => (
          <div key={c.title} style={{ flex: "1 1 220px", background: c.bg || "var(--color-white)", borderRadius: 18, padding: "24px", boxShadow: "0 4px 24px rgba(51,40,92,.10)", border: c.bg ? "none" : "1px solid var(--bg-purple-lighter)" }}>
            <div style={{ width: 36, height: 4, background: c.accent, borderRadius: 4, marginBottom: 16 }} />
            <div style={{ fontWeight: 700, fontSize: 17, color: c.text || "var(--color-grape)", marginBottom: 8 }}>{c.title}</div>
            <div style={{ fontSize: 14, color: c.text ? "#ffffffbb" : "var(--color-gray-700)", lineHeight: 1.6 }}>{c.body}</div>
          </div>
        ))}
      </div>

      {/* Badge / Tag */}
      <SectionLabel style={{ marginTop: 44 }}>Badges & Tags</SectionLabel>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
        {[
          { label: "New", bg: "var(--color-bold-pink)", color: "var(--color-white)" },
          { label: "Beta", bg: "var(--color-grape)", color: "var(--color-white)" },
          { label: "Live", bg: "var(--color-light-pink)", color: "var(--color-grape)" },
          { label: "Solved ✓", bg: "var(--bg-green-success)", color: "var(--color-success-alt)", border: "1px solid #aef" },
          { label: "Pending", bg: "var(--bg-yellow-warning)", color: "var(--color-warning)", border: "1px solid #ffd" },
          { label: "Archived", bg: "#F4F4F4", color: "var(--color-gray-500)" },
        ].map(b => (
          <span key={b.label} style={{ fontWeight: 700, fontSize: 12, background: b.bg, color: b.color, border: b.border || "none", borderRadius: 50, padding: "5px 14px", letterSpacing: .5 }}>{b.label}</span>
        ))}
      </div>

      {/* Tabs */}
      <SectionLabel style={{ marginTop: 44 }}>Tabs</SectionLabel>
      <div style={{ marginTop: 16 }}>
        <div style={{ display: "flex", borderBottom: "2px solid var(--bg-purple-lighter)", marginBottom: 20, gap: 0 }}>
          {["Overview", "Details", "Settings"].map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{
              fontWeight: tab === i ? 700 : 500, fontSize: 14,
              color: tab === i ? "var(--color-bold-pink)" : "#33285C99", background: "none", border: "none",
              borderBottom: tab === i ? "2px solid var(--color-bold-pink)" : "2px solid transparent",
              padding: "10px 22px", cursor: "pointer", marginBottom: -2, transition: "color .15s",
            }}>{t}</button>
          ))}
        </div>
        <div style={{ fontSize: 14, color: "var(--color-grape)", background: "var(--bg-pink-light)", borderRadius: 12, padding: "16px 20px" }}>
          {["Overview content: High-level summary of the solution.", "Details content: In-depth technical specifications.", "Settings content: Customise your preferences here."][tab]}
        </div>
      </div>

      {/* Alert / Notification */}
      <SectionLabel style={{ marginTop: 44 }}>Alerts</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16, maxWidth: 560 }}>
        {[
          { icon: "✓", label: "Success", bg: "var(--bg-green-success)", border: "var(--border-green-success)", color: "var(--color-success)", text: "Your solution was submitted successfully." },
          { icon: "!", label: "Warning", bg: "var(--bg-yellow-warning)", border: "var(--border-yellow-warning)", color: "var(--color-warning)", text: "This feature is currently in beta." },
          { icon: "✕", label: "Error", bg: "var(--bg-pink-error)", border: "var(--border-pink-light)", color: "var(--color-bold-pink)", text: "Something went wrong. Please try again." },
          { icon: "ℹ", label: "Info", bg: "var(--bg-purple-info)", border: "var(--border-purple-info)", color: "var(--color-grape)", text: "JustSolve is updating — you may experience brief interruptions." },
        ].map(a => (
          <div key={a.label} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: a.bg, border: `1px solid ${a.border}`, borderRadius: 10, padding: "12px 16px" }}>
            <span style={{ fontWeight: 700, color: a.color, fontSize: 16 }}>{a.icon}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: a.color }}>{a.label}</div>
              <div style={{ fontSize: 13, color: "var(--color-gray-700)", marginTop: 2 }}>{a.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal trigger */}
      <SectionLabel style={{ marginTop: 44 }}>Modal</SectionLabel>
      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <button onClick={() => setModal(true)} style={{ fontWeight: 700, fontSize: 15, background: "var(--color-bold-pink)", color: "var(--color-white)", border: "none", borderRadius: 50, padding: "12px 28px", cursor: "pointer" }}>
          Open Modal
        </button>
        <button onClick={showToast} style={{ fontWeight: 700, fontSize: 15, background: "var(--color-grape)", color: "var(--color-white)", border: "none", borderRadius: 50, padding: "12px 28px", cursor: "pointer" }}>
          Show Toast
        </button>
      </div>

      {/* Modal overlay */}
      {modal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(51,40,92,.55)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setModal(false)}>
          <div style={{ background: "var(--color-white)", borderRadius: 20, padding: "36px 40px", maxWidth: 440, width: "90%", boxShadow: "0 24px 80px rgba(51,40,92,.25)" }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontWeight: 900, fontSize: 22, color: "var(--color-grape)" }}>Confirm Action</span>
              <button onClick={() => setModal(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "var(--color-gray-400)" }}>✕</button>
            </div>
            <p style={{ fontSize: 15, color: "var(--color-gray-700)", lineHeight: 1.6, marginBottom: 28 }}>Are you sure you want to proceed? This will apply the JustSolve solution to your workflow.</p>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setModal(false)} style={{ flex: 1, fontWeight: 700, fontSize: 15, background: "var(--color-bold-pink)", color: "var(--color-white)", border: "none", borderRadius: 50, padding: "12px", cursor: "pointer" }}>Confirm</button>
              <button onClick={() => setModal(false)} style={{ flex: 1, fontWeight: 700, fontSize: 15, background: "transparent", color: "var(--color-grape)", border: "2px solid var(--color-grape)", borderRadius: 50, padding: "12px", cursor: "pointer" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div style={{ position: "fixed", bottom: 28, right: 28, background: "var(--color-grape)", color: "var(--color-white)", fontWeight: 600, fontSize: 14, borderRadius: 12, padding: "14px 24px", zIndex: 1001, boxShadow: "0 8px 32px rgba(51,40,92,.3)", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: "var(--color-light-pink)" }}>✓</span> Action completed successfully!
        </div>
      )}
    </div>
  );
}

// ── Section: Website Patterns ─────────────────────────────────────────────────
function WebsitePatternsSection() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [megaActive, setMegaActive] = useState("Services");
  const [filterTab, setFilterTab] = useState("All");
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const navItems = ["About Us", "Services", "Industries", "Our Work", "Partners", "Contact Us"];
  const megaMenu = {
    Services: {
      groups: [
        { heading: "Ideation", links: ["Discovery & Strategy", "Product Validation"] },
        { heading: "Experience Design", links: ["UX Design", "UI Design", "Product Design"] },
        { heading: "Product Development", links: ["Custom Software", "Low-Code", "Mobile Apps", "Web Apps"] },
        { heading: "AI, Data & Automation", links: ["Microsoft Power BI", "AI Agent Development", "Generative AI", "OutSystems"] },
      ]
    },
    Industries: {
      groups: [
        { heading: "Industries", links: ["Banking", "Financial Services", "Healthcare", "Insurance", "Mining", "Telecommunications"] },
        { heading: "By Business Stage", links: ["Established Start-up", "SMEs", "Large Enterprises"] },
      ]
    },
  };

  const filterTabs = ["All", "Healthcare", "Mining", "Fintech", "Telecommunications"];
  const caseStudies = [
    { tag: "Healthcare", title: "Employee Wellness App", desc: "Centralised mobile & web health risk assessments for a leading healthcare provider.", gradient: "linear-gradient(135deg,var(--color-bold-pink),var(--color-grape))" },
    { tag: "Mining", title: "Custom Mining Dashboard", desc: "Executive dashboard visualising the full platinum mining value stream.", gradient: "linear-gradient(135deg,var(--color-grape),var(--color-medium-purple))" },
    { tag: "Fintech", title: "Financial Adviser POC", desc: "Digitising the sales process for a leading insurance provider using biometrics.", gradient: "linear-gradient(135deg,var(--color-bold-pink),var(--color-light-pink))" },
    { tag: "Telecommunications", title: "BCX Wireless CPQ", desc: "Configure, Price & Quote solution integrating multiple Fibre Network Operators.", gradient: "linear-gradient(135deg,var(--color-medium-purple),var(--color-bold-pink))" },
  ];
  const filtered = filterTab === "All" ? caseStudies : caseStudies.filter(c => c.tag === filterTab);

  const testimonials = [
    { name: "John Biggs", role: "Founder", company: "Periopp", avatar: "JB", quote: "Working with JustSolve has been an incredibly satisfying experience. Their team, marked by both competence and enthusiasm, seamlessly handles tasks, ensuring a smooth process throughout." },
    { name: "Mike Ré", role: "CIO", company: "", avatar: "MR", quote: "The JustSolve team has always been very professional and I have always been completely satisfied with their performance. They do an excellent job, are always punctual and well organised." },
    { name: "Christo Venter", role: "Project Manager", company: "QLink", avatar: "CV", quote: "A huge thank you to JustSolve for the development of Qlink's Mobile application. Your team walked the extra mile, working late hours and on the weekends to finish the job." },
    { name: "Shamith Maharaj", role: "Executive Manager", company: "BCX", avatar: "SM", quote: "Through our partnership with JustSolve, we developed an application that allows the automatic creation of opportunities and tasks, speeding up the whole process." },
  ];

  const awards = [
    { year: "2017", title: "Cross-Channel Excellence", desc: "Awarded to the Centricity platform developed and implemented by JustSolve." },
    { year: "2019", title: "MTN App of the Year Finalist", desc: "A mobile and web app developed by JustSolve placed Top 3 in the Enterprise App category." },
    { year: "2021", title: "NSBC Top 20", desc: "Highlighting the triumphs, dedication, persistence, and hard work of the Solvers." },
    { year: "2022", title: "Business Impact Award", desc: "Awarded in partnership with Life Health Solutions for impact within the healthcare industry." },
    { year: "2023", title: "Most Foundation Teams", desc: "Awarded by OutSystems for having the most foundation teams in the MEA region." },
  ];

  const stats = [
    { value: "10+", label: "Years of Excellence" },
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "6", label: "Industries Served" },
    { value: "4", label: "Global Partners" },
  ];

  const partners = ["OutSystems", "Mendix", "Microsoft", "UnifyApps"];
  const clients = ["Sasol", "Woolworths FS", "MTN", "Mercedes-Benz", "Avis Fleet", "Life Holdings", "Mediclinic", "MultiChoice", "Anglo American", "BCX"];

  const featureCards = [
    { gradient: "linear-gradient(135deg,var(--color-grape) 60%,var(--color-medium-purple))", icon: "⚡", title: "Custom Software Development.", sub: "Tailored solutions for your unique needs.", cta: "Start Building Now" },
    { gradient: "linear-gradient(135deg,var(--color-bold-pink) 60%,var(--color-light-pink))", icon: "🤖", title: "Automate Repetitive Processes.", sub: "Streamline workflows with intelligent automation.", cta: "Explore Automation" },
    { gradient: "linear-gradient(135deg,var(--color-grape),var(--color-bold-pink))", icon: "👥", title: "Staff Augmentation.", sub: "Augment your team with top technical talent.", cta: "Unlock Skilled Talent" },
    { gradient: "linear-gradient(135deg,var(--color-medium-purple),var(--color-grape))", icon: "🚀", title: "Accelerated Development.", sub: "Build faster, innovate smarter, scale seamlessly.", cta: "Get Started Now" },
  ];

  return (
    <div>

      {/* ── Navigation & Mega Menu ── */}
      <SectionLabel>Navigation & Mega Menu</SectionLabel>
      <p style={descStyle}>Sticky top nav with Grape background, Bold Pink CTA, and a grouped mega menu dropdown for Services and Industries.</p>
      <div style={{ marginTop: 20, borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 40px rgba(51,40,92,.18)", position: "relative", zIndex: 10 }}>
        {/* Nav bar */}
        <div style={{ background: "var(--color-grape)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 60 }}>
          <img src={LOGO_WHITE} alt="JustSolve" style={{ height: 28, display: "block", mixBlendMode: "screen" }} />
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {navItems.map(item => {
              const hasMega = item === "Services" || item === "Industries";
              const isActive = megaOpen && megaActive === item;
              return (
                <button key={item} onClick={() => { if (hasMega) { setMegaOpen(o => !o || megaActive !== item); setMegaActive(item); } else setMegaOpen(false); }}
                  style={{ fontSize: 13, fontWeight: isActive ? 700 : 400, color: isActive ? "var(--color-light-pink)" : "#ffffffcc", background: "none", border: "none", cursor: "pointer", padding: "6px 10px", borderRadius: 6, display: "flex", alignItems: "center", gap: 4, transition: "color .15s" }}>
                  {item} {hasMega && <span style={{ fontSize: 9, opacity: .7 }}>{isActive ? "▲" : "▼"}</span>}
                </button>
              );
            })}
            <button style={{ fontWeight: 700, fontSize: 13, background: "var(--color-bold-pink)", color: "var(--color-white)", border: "none", borderRadius: 50, padding: "8px 18px", cursor: "pointer", marginLeft: 8 }}>
              Let's Solve Together
            </button>
          </div>
        </div>
        {/* Mega menu panel */}
        {megaOpen && megaMenu[megaActive] && (
          <div style={{ background: "var(--color-white)", borderTop: "3px solid var(--color-bold-pink)", padding: "28px 32px", display: "flex", gap: 40 }}>
            {megaMenu[megaActive].groups.map(g => (
              <div key={g.heading} style={{ minWidth: 140 }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: "var(--color-bold-pink)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>{g.heading}</div>
                {g.links.map(l => (
                  <div key={l} style={{ fontSize: 14, color: "var(--color-grape)", padding: "5px 0", cursor: "pointer", borderBottom: "1px solid #F8F0FC" }}
                    onMouseEnter={e => e.target.style.color = "var(--color-bold-pink)"} onMouseLeave={e => e.target.style.color = "var(--color-grape)"}>
                    {l}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <p style={{ ...descStyle, marginTop: 12, fontSize: 12 }}>↑ Click "Services" or "Industries" to toggle the mega menu.</p>

      {/* ── Breadcrumb ── */}
      <SectionLabel style={{ marginTop: 52 }}>Breadcrumb</SectionLabel>
      <p style={descStyle}>Used on all inner pages to show the user's location within the site hierarchy.</p>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          ["Home", "Services", "Experience Design", "UI Design"],
          ["Home", "Industries", "Healthcare"],
          ["Home", "Our Work", "Employee Wellness App"],
        ].map((crumbs, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", background: "var(--color-white)", padding: "12px 20px", borderRadius: 10, border: "1px solid var(--bg-purple-lighter)" }}>
            {crumbs.map((c, j) => (
              <span key={c} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 13, color: j === crumbs.length - 1 ? "var(--color-grape)" : "var(--color-bold-pink)", fontWeight: j === crumbs.length - 1 ? 700 : 400, cursor: j < crumbs.length - 1 ? "pointer" : "default" }}
                  onMouseEnter={e => { if (j < crumbs.length - 1) e.target.style.textDecoration = "underline"; }}
                  onMouseLeave={e => e.target.style.textDecoration = "none"}>
                  {c}
                </span>
                {j < crumbs.length - 1 && <span style={{ color: "var(--color-gray-150)", fontSize: 12 }}>›</span>}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* ── Feature Cards with CTA ── */}
      <SectionLabel style={{ marginTop: 52 }}>Feature Cards with CTA</SectionLabel>
      <p style={descStyle}>Large hero-style cards used in the homepage "Find Your Solution" section. Bold gradient backgrounds with icon, headline, sub-copy and a pill CTA.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20, marginTop: 24 }}>
        {featureCards.map(c => (
          <div key={c.title} style={{ background: c.gradient, borderRadius: 20, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 12, boxShadow: "0 8px 32px rgba(51,40,92,.18)", position: "relative", overflow: "hidden" }}>
            <div style={{ fontSize: 32 }}>{c.icon}</div>
            <div style={{ fontWeight: 900, fontSize: 20, color: "var(--color-white)", lineHeight: 1.2 }}>{c.title}</div>
            <div style={{ fontSize: 14, color: "#ffffffcc", lineHeight: 1.6, flex: 1 }}>{c.sub}</div>
            <button style={{ alignSelf: "flex-start", fontWeight: 700, fontSize: 13, background: "var(--color-white)", color: "var(--color-grape)", border: "none", borderRadius: 50, padding: "9px 20px", cursor: "pointer", marginTop: 8, transition: "transform .15s" }}
              onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.target.style.transform = ""}>
              {c.cta} →
            </button>
          </div>
        ))}
      </div>

      {/* ── Pill / Tab Filter ── */}
      <SectionLabel style={{ marginTop: 52 }}>Pill / Tab Filter</SectionLabel>
      <p style={descStyle}>Used in the case studies and testimonials sections to filter content by industry. Active pill uses Bold Pink fill; inactive uses ghost style.</p>
      <div style={{ marginTop: 20 }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
          {filterTabs.map(t => (
            <button key={t} onClick={() => setFilterTab(t)} style={{ fontWeight: 700, fontSize: 13, padding: "9px 20px", borderRadius: 50, border: `2px solid ${filterTab === t ? "var(--color-bold-pink)" : "var(--color-light-pink)"}`, background: filterTab === t ? "var(--color-bold-pink)" : "var(--color-white)", color: filterTab === t ? "var(--color-white)" : "var(--color-grape)", cursor: "pointer", transition: "all .15s" }}>
              {t}
            </button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
          {filtered.map(c => (
            <div key={c.title} style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(51,40,92,.12)" }}>
              <div style={{ background: c.gradient, height: 90, display: "flex", alignItems: "flex-end", padding: "12px 16px" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-white)", background: "rgba(255,255,255,.2)", borderRadius: 50, padding: "3px 10px" }}>{c.tag}</span>
              </div>
              <div style={{ background: "var(--color-white)", padding: "16px" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--color-grape)", marginBottom: 6 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: "var(--color-gray-600)", lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Testimonial / Quote Card ── */}
      <SectionLabel style={{ marginTop: 52 }}>Testimonial / Quote Card</SectionLabel>
      <p style={descStyle}>Portrait + name + role/company + blockquote. Carousel navigation with dot indicators. Used in the "Real-World Impact" section.</p>
      <div style={{ marginTop: 24 }}>
        {/* Single featured */}
        <div style={{ background: "var(--color-grape)", borderRadius: 20, padding: "36px 40px", maxWidth: 640, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: "rgba(252,171,246,.08)" }} />
          <div style={{ position: "absolute", bottom: -30, left: -10, width: 80, height: 80, borderRadius: "50%", background: "rgba(227,36,117,.12)" }} />
          <div style={{ fontSize: 48, color: "var(--color-bold-pink)", lineHeight: 1, marginBottom: 16 }}>"</div>
          <p style={{ fontSize: 16, color: "#ffffffdd", lineHeight: 1.8, marginBottom: 28, fontWeight: 300 }}>
            {testimonials[testimonialIdx].quote}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--color-bold-pink)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "var(--color-white)", flexShrink: 0 }}>
              {testimonials[testimonialIdx].avatar}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "var(--color-white)" }}>{testimonials[testimonialIdx].name}</div>
              <div style={{ fontSize: 13, color: "var(--color-light-pink)" }}>{testimonials[testimonialIdx].role}{testimonials[testimonialIdx].company ? ` · ${testimonials[testimonialIdx].company}` : ""}</div>
            </div>
          </div>
          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 24 }}>
            <button onClick={() => setTestimonialIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
              style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid var(--color-light-pink)", background: "none", color: "var(--color-light-pink)", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            {testimonials.map((_, i) => (
              <div key={i} onClick={() => setTestimonialIdx(i)} style={{ width: i === testimonialIdx ? 20 : 8, height: 8, borderRadius: 4, background: i === testimonialIdx ? "var(--color-bold-pink)" : "#ffffff44", cursor: "pointer", transition: "all .2s" }} />
            ))}
            <button onClick={() => setTestimonialIdx(i => (i + 1) % testimonials.length)}
              style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid var(--color-light-pink)", background: "none", color: "var(--color-light-pink)", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>
        </div>
        {/* Grid variant */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginTop: 20 }}>
          {testimonials.slice(0, 2).map(t => (
            <div key={t.name} style={{ background: "var(--color-white)", borderRadius: 16, padding: "24px", border: "1px solid var(--bg-purple-lighter)", boxShadow: "0 4px 20px rgba(51,40,92,.07)" }}>
              <div style={{ width: 4, height: 32, background: "var(--color-bold-pink)", borderRadius: 4, marginBottom: 16 }} />
              <p style={{ fontSize: 14, color: "var(--color-gray-700)", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>"{t.quote.slice(0, 100)}…"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--color-light-pink)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, color: "var(--color-grape)" }}>{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--color-grape)" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--color-bold-pink)" }}>{t.role}{t.company ? ` · ${t.company}` : ""}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Award / Timeline Card ── */}
      <SectionLabel style={{ marginTop: 52 }}>Award / Timeline Card</SectionLabel>
      <p style={descStyle}>Used in the Awards & Accolades section. Year badge + title + description. Two layout variants: vertical timeline and horizontal card strip.</p>
      <div style={{ marginTop: 24 }}>
        {/* Vertical timeline */}
        <div style={{ position: "relative", paddingLeft: 32 }}>
          <div style={{ position: "absolute", left: 10, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom, var(--color-bold-pink), var(--color-light-pink))" }} />
          {awards.map((a, i) => (
            <div key={a.year} style={{ position: "relative", marginBottom: 28 }}>
              <div style={{ position: "absolute", left: -26, top: 4, width: 14, height: 14, borderRadius: "50%", background: "var(--color-bold-pink)", border: "2px solid #fff", boxShadow: "0 0 0 3px var(--color-bold-pink)40" }} />
              <div style={{ background: "var(--color-white)", borderRadius: 14, padding: "18px 22px", border: "1px solid var(--bg-purple-lighter)", boxShadow: "0 2px 16px rgba(51,40,92,.07)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <span style={{ fontWeight: 900, fontSize: 12, background: "var(--color-grape)", color: "var(--color-light-pink)", borderRadius: 50, padding: "3px 12px", letterSpacing: 1 }}>{a.year}</span>
                  <span style={{ fontWeight: 700, fontSize: 15, color: "var(--color-grape)" }}>{a.title}</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--color-gray-600)", lineHeight: 1.6 }}>{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats & Metrics Block ── */}
      <SectionLabel style={{ marginTop: 52 }}>Stats & Metrics Block</SectionLabel>
      <p style={descStyle}>Big number callouts used across service pages and the homepage to convey credibility at a glance. Two variants: dark (Grape) and light.</p>
      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Dark variant */}
        <div style={{ background: "var(--color-grape)", borderRadius: 20, padding: "36px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 28 }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 900, fontSize: 40, color: "var(--color-bold-pink)", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "var(--color-light-pink)", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Light variant */}
        <div style={{ background: "var(--bg-pink-light)", borderRadius: 20, padding: "36px 40px", border: "1px solid var(--color-light-pink)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 28 }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 900, fontSize: 40, color: "var(--color-grape)", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "var(--color-bold-pink)", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Partner / Client Logo Strip ── */}
      <SectionLabel style={{ marginTop: 52 }}>Partner & Client Logo Strip</SectionLabel>
      <p style={descStyle}>Horizontal logo rows used to show tech partners (OutSystems, Mendix, Microsoft, UnifyApps) and enterprise clients. Light background with subtle border.</p>
      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Partners */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-bold-pink)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Technology Partners</div>
          <div style={{ background: "var(--color-white)", border: "1px solid var(--bg-purple-lighter)", borderRadius: 16, padding: "24px 32px", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }}>
            {partners.map(p => (
              <div key={p} style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-purple-alt)", borderRadius: 12, padding: "14px 28px", minWidth: 120, boxShadow: "0 2px 8px rgba(51,40,92,.06)" }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: "var(--color-grape)" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Clients */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-bold-pink)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Trusted Clients</div>
          <div style={{ background: "var(--color-white)", border: "1px solid var(--bg-purple-lighter)", borderRadius: 16, padding: "20px 32px", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "space-around" }}>
            {clients.map(c => (
              <div key={c} style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 20px", minWidth: 100 }}>
                <span style={{ fontWeight: 600, fontSize: 13, color: "var(--color-gray-250)" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Scrolling strip variant */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-bold-pink)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Scrolling Strip Variant</div>
          <div style={{ background: "var(--color-grape)", borderRadius: 14, padding: "16px 0", overflow: "hidden", position: "relative" }}>
            <div style={{ display: "flex", gap: 0, animation: "logoScroll 18s linear infinite", width: "max-content" }}>
              {[...clients, ...clients].map((c, i) => (
                <span key={i} style={{ fontWeight: 700, fontSize: 13, color: "var(--color-light-pink)", padding: "0 32px", borderRight: "1px solid rgba(252,171,246,.2)", whiteSpace: "nowrap" }}>{c}</span>
              ))}
            </div>
          </div>
          <style>{`@keyframes logoScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        </div>
      </div>

    </div>
  );
}

// ── Section: Colour Usage & Tints ─────────────────────────────────────────────
function ColourUsageSection() {
  const tints = [
    { name: "Grape", base: "var(--color-grape)", values: ["#29203A", "#4A3D7A", "#6b5a9e", "#9B8EC4", "#ccc5e1"] },
    { name: "Light Pink", base: "var(--color-light-pink)", values: ["#ca89c5", "#d49acf", "#e0b1da", "#eec8e8", "#f9e4f8"] },
    { name: "Bold Pink", base: "var(--color-bold-pink)", values: ["#b61d5e", "#cc2069", "#d93070", "#e85c95", "#f3a0c2"] },
  ];

  const pcts = ["100%", "80%", "60%", "40%", "20%"];

  return (
    <div>
      {/* ── Colour Tints ── */}
      <SectionLabel>Colour Tints</SectionLabel>
      <p style={descStyle}>Tints may be used where more colour variation is needed, for example on the website. Each brand colour has five tint steps from 100% down to 20%.</p>
      <div style={{ display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap" }}>
        {tints.map(t => (
          <div key={t.name} style={{ flex: "1 1 180px" }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: "var(--color-grape)", marginBottom: 10, letterSpacing: .5 }}>{t.name}</div>
            {t.values.map((hex, i) => (
              <div key={i} style={{ background: hex, height: 52, borderRadius: i === 0 ? "12px 12px 0 0" : i === t.values.length - 1 ? "0 0 12px 12px" : 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", transition: "transform .1s" }}>
                <span style={{ fontSize: 12, color: i < 2 ? "var(--color-white)" : "var(--color-grape)", fontWeight: 600 }}>{pcts[i]}</span>
                <span style={{ fontSize: 11, color: i < 2 ? "#ffffff99" : "#33285C88" }}>{hex}</span>
              </div>
            ))}
          </div>
        ))}
        {/* White */}
        <div style={{ flex: "1 1 180px" }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: "var(--color-grape)", marginBottom: 10 }}>White</div>
          <div style={{ background: "var(--color-white)", border: "1px solid var(--color-gray-200)", borderRadius: 12, height: 52, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px" }}>
            <span style={{ fontSize: 12, color: "var(--color-grape)", fontWeight: 600 }}>100%</span>
            <span style={{ fontSize: 11, color: "#33285C88" }}>#ffffff</span>
          </div>
        </div>
      </div>

      {/* ── Bold Pink Usage in Layout ── */}
      <SectionLabel style={{ marginTop: 52 }}>Bold Pink Usage in Layout</SectionLabel>
      <p style={descStyle}>Bold Pink is best used as an accent colour to draw attention to call-outs. It can appear in the Solve Molecule, as a heading, in clothing/objects, or occasionally as a full background.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
        {[
          { bg: "var(--color-light-pink)", label: "In the Solve Molecule", desc: "To add more colour to the background in the Solve Molecule.", accent: "var(--color-bold-pink)" },
          { bg: "var(--color-light-pink)", label: "As a Heading", desc: "Used as headings on light pink to help copy stand out.", accent: "var(--color-bold-pink)", headingDemo: true },
          { bg: "var(--color-bold-pink)", label: "As Background", desc: "As a background colour for layouts — use sparingly.", accent: "var(--color-light-pink)", dark: true },
        ].map(c => (
          <div key={c.label} style={{ background: c.bg, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(51,40,92,.12)" }}>
            <div style={{ padding: "28px 20px 16px", minHeight: 120, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              {c.headingDemo ? (
                <>
                  <div style={{ fontWeight: 900, fontSize: 22, color: "var(--color-bold-pink)", lineHeight: 1.1 }}>Do more</div>
                  <div style={{ fontWeight: 900, fontSize: 22, color: "var(--color-grape)", lineHeight: 1.1 }}>with less.</div>
                </>
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg viewBox="0 0 40 40" width={40} height={40}>
                    <circle cx="10" cy="20" r="7" fill={c.accent} />
                    <circle cx="26" cy="10" r="5" fill={c.accent} />
                    <circle cx="26" cy="30" r="5" fill={c.accent} />
                    <line x1="15" y1="16" x2="22" y2="13" stroke={c.accent} strokeWidth="2" strokeLinecap="round" />
                    <line x1="15" y1="24" x2="22" y2="27" stroke={c.accent} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontWeight: 700, fontSize: 16, color: c.dark ? "var(--color-white)" : "var(--color-grape)" }}>JustSolve.</span>
                </div>
              )}
            </div>
            <div style={{ background: "rgba(0,0,0,.08)", padding: "12px 20px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, color: c.dark ? "var(--color-light-pink)" : "var(--color-grape)", marginBottom: 4 }}>✓ {c.label}</div>
              <div style={{ fontSize: 12, color: c.dark ? "#ffffffcc" : "var(--color-gray-700)" }}>{c.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bold Pink: 20% Rule ── */}
      <SectionLabel style={{ marginTop: 52 }}>Bold Pink — The 20% Rule</SectionLabel>
      <p style={descStyle}>In longer format executions (brochures, presentations, websites), Bold Pink should feature in approximately 20% of the full palette. Light Pink and Grape should predominate.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 24, maxWidth: 680 }}>
        {/* Do */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-grape)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "var(--color-light-pink)", fontSize: 14 }}>✓</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 14, color: "var(--color-grape)" }}>~20% Bold Pink</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, borderRadius: 12, overflow: "hidden", border: "2px solid var(--color-grape)" }}>
            {["var(--color-grape)", "var(--color-light-pink)", "var(--color-white)", "var(--color-light-pink)", "var(--color-bold-pink)", "var(--color-light-pink)", "var(--color-light-pink)", "var(--color-grape)", "var(--color-white)"].map((c, i) => (
              <div key={i} style={{ background: c, height: 56, border: c === "var(--color-white)" ? "1px solid var(--border-light)" : "none" }} />
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--color-gray-700)", marginTop: 8, lineHeight: 1.5 }}>Grape and Light Pink dominate; Bold Pink appears as 1–2 accent touches.</p>
        </div>
        {/* Don't */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-bold-pink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "var(--color-white)", fontSize: 14 }}>✕</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 14, color: "var(--color-grape)" }}>More than 20% Bold Pink</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, borderRadius: 12, overflow: "hidden", border: "2px solid var(--color-bold-pink)" }}>
            {["var(--color-grape)", "var(--color-bold-pink)", "var(--color-bold-pink)", "var(--color-bold-pink)", "var(--color-bold-pink)", "var(--color-light-pink)", "var(--color-bold-pink)", "var(--color-grape)", "var(--color-light-pink)"].map((c, i) => (
              <div key={i} style={{ background: c, height: 56 }} />
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--color-bold-pink)", marginTop: 8, lineHeight: 1.5 }}>Bold Pink overused — loses its impact as an accent and feels overwhelming.</p>
        </div>
      </div>
    </div>
  );
}

// ── Section: Logo Guidelines ──────────────────────────────────────────────────
function LogoSection() {

  // Reusable cell wrapper
  const Cell = ({ bg, children, label, border }) => (
    <div style={{ background: bg, border: border || "none", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", height: 100, position: "relative", overflow: "hidden", padding: "0 20px" }}>
      {children}
      {label && <span style={{ position: "absolute", bottom: 8, left: 12, fontSize: 10, color: bg === "var(--color-white)" || bg === "var(--color-light-pink)" ? "#33285Caa" : "#ffffff88", fontWeight: 500 }}>{label}</span>}
    </div>
  );

  // DontCell — shows a numbered badge + red X overlay
  const DontCell = ({ bg, border, num, children }) => (
    <div style={{ background: bg, border: border || "none", borderRadius: 14, overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", top: 10, left: 12, width: 24, height: 24, borderRadius: "50%", background: "var(--color-bold-pink)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
        <span style={{ color: "var(--color-white)", fontSize: 13, fontWeight: 900 }}>✕</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 90, padding: "0 20px" }}>{children}</div>
    </div>
  );

  return (
    <div>
      {/* ── Primary vs Secondary ── */}
      <SectionLabel>Primary vs Secondary Logo</SectionLabel>
      <p style={descStyle}>The primary logo (with molecule icon) is used in the majority of collateral. For clean, minimal web layouts the secondary logo (wordmark only) can be used.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24, maxWidth: 700 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-grape)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>Primary Logo</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Cell bg="var(--color-white)" border="1px solid var(--bg-purple-lighter)" label="On White">
              <img src={LOGO_DEFAULT} alt="JustSolve" style={{ height: 36 }} />
            </Cell>
            <Cell bg="var(--color-grape)" label="On Grape">
              <img src={LOGO_WHITE} alt="JustSolve" style={{ height: 36 }} />
            </Cell>
            <Cell bg="var(--color-light-pink)" label="On Light Pink">
              <img src={LOGO_DEFAULT} alt="JustSolve" style={{ height: 36 }} />
            </Cell>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-grape)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>Secondary Logo (wordmark)</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Cell bg="var(--color-white)" border="1px solid var(--bg-purple-lighter)" label="On White">
              <span style={{ fontWeight: 700, fontSize: 26, color: "var(--color-grape)" }}>Just<span style={{ color: "var(--color-bold-pink)" }}>Solve.</span></span>
            </Cell>
            <Cell bg="var(--color-grape)" label="On Grape">
              <span style={{ fontWeight: 700, fontSize: 26, color: "var(--color-white)" }}>Just<span style={{ color: "var(--color-bold-pink)" }}>Solve.</span></span>
            </Cell>
            <Cell bg="var(--color-light-pink)" label="On Light Pink">
              <span style={{ fontWeight: 700, fontSize: 26, color: "var(--color-grape)" }}>Just<span style={{ color: "var(--color-bold-pink)" }}>Solve.</span></span>
            </Cell>
          </div>
        </div>
      </div>

      {/* ── Colour Background Usage ── */}
      <SectionLabel style={{ marginTop: 52 }}>Logo on Colour Backgrounds</SectionLabel>
      <p style={descStyle}>The full colour logo can be used on Grape, Light Pink and White. The white logo can be used on Bold Pink or Grape.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24, maxWidth: 700 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--color-grape)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ color: "var(--color-light-pink)", fontSize: 13 }}>✓</span></div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-grape)" }}>On light backgrounds</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Cell bg="var(--color-white)" border="1px solid var(--bg-purple-lighter)" label="White">
              <img src={LOGO_DEFAULT} alt="JustSolve" style={{ height: 36 }} />
            </Cell>
            <Cell bg="var(--color-light-pink)" label="Light Pink">
              <img src={LOGO_DEFAULT} alt="JustSolve" style={{ height: 36 }} />
            </Cell>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--color-grape)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ color: "var(--color-light-pink)", fontSize: 13 }}>✓</span></div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-grape)" }}>On dark backgrounds</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Cell bg="var(--color-grape)" label="Grape">
              <img src={LOGO_WHITE} alt="JustSolve" style={{ height: 36 }} />
            </Cell>
            <Cell bg="var(--color-deep-dark)" label="Deep dark">
              <img src={LOGO_WHITE} alt="JustSolve" style={{ height: 36 }} />
            </Cell>
          </div>
        </div>
      </div>

      {/* ── Logo Don'ts ── */}
      <SectionLabel style={{ marginTop: 52 }}>Logo — What NOT To Do</SectionLabel>
      <p style={descStyle}>The logo may not be manipulated in any of the following ways. These rules protect the integrity and recognisability of the JustSolve brand.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginTop: 24, maxWidth: 680 }}>
        <div style={{ borderRadius: 14, overflow: "hidden" }}>
          <DontCell bg="var(--color-grape)" num={1}>
            <img src={LOGO_WHITE} alt="" style={{ height: 36, opacity: 0.35 }} />
          </DontCell>
          <div style={{ background: "rgba(0,0,0,.06)", padding: "10px 14px", borderTop: "2px solid var(--color-bold-pink)" }}>
            <span style={{ fontSize: 12, color: "var(--color-grape)", fontWeight: 600 }}>1. Use a tint fill for the logo</span>
          </div>
        </div>
        <div style={{ borderRadius: 14, overflow: "hidden" }}>
          <DontCell bg="var(--color-light-pink)" num={2}>
            <span style={{ fontWeight: 700, fontSize: 22, color: "var(--color-grape)", letterSpacing: 8 }}>Just <span style={{ color: "var(--color-bold-pink)" }}>Solve.</span></span>
          </DontCell>
          <div style={{ background: "rgba(0,0,0,.06)", padding: "10px 14px", borderTop: "2px solid var(--color-bold-pink)" }}>
            <span style={{ fontSize: 12, color: "var(--color-grape)", fontWeight: 600 }}>2. Create a space between the words</span>
          </div>
        </div>
        <div style={{ borderRadius: 14, overflow: "hidden" }}>
          <DontCell bg="var(--color-bold-pink)" num={3}>
            <img src={LOGO_DEFAULT} alt="" style={{ height: 36 }} />
          </DontCell>
          <div style={{ background: "rgba(0,0,0,.06)", padding: "10px 14px", borderTop: "2px solid var(--color-bold-pink)" }}>
            <span style={{ fontSize: 12, color: "var(--color-grape)", fontWeight: 600 }}>3. Use the dark logo on Bold Pink</span>
          </div>
        </div>
        <div style={{ borderRadius: 14, overflow: "hidden" }}>
          <DontCell bg="var(--color-white)" border="1px solid var(--bg-purple-lighter)" num={4}>
            <span style={{ fontWeight: 700, fontSize: 22, color: "var(--color-bold-pink)" }}>Just<span style={{ color: "var(--color-grape)" }}>Solve.</span></span>
          </DontCell>
          <div style={{ background: "rgba(0,0,0,.06)", padding: "10px 14px", borderTop: "2px solid var(--color-bold-pink)" }}>
            <span style={{ fontSize: 12, color: "var(--color-grape)", fontWeight: 600 }}>4. Swap the colours around in the logo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Section: Photography ──────────────────────────────────────────────────────
function PhotographySection() {
  const styleGuides = [
    { bg: "linear-gradient(135deg,var(--color-grape),var(--color-medium-purple))", label: "Dynamic angle, Grape tones", tag: "Style Reference" },
    { bg: "linear-gradient(135deg,var(--color-light-pink),var(--color-bold-pink))", label: "Light pink background, bold pink clothing", tag: "Style Reference" },
    { bg: "linear-gradient(135deg,var(--color-bold-pink),var(--color-light-pink))", label: "Colour-matched studio background", tag: "Style Reference" },
    { bg: "linear-gradient(135deg,var(--color-medium-purple),var(--color-grape))", label: "Dynamic foreground object — hand/device", tag: "Style Reference" },
    { bg: "linear-gradient(135deg,var(--color-grape),var(--color-bold-pink))", label: "Movement captured from low angle", tag: "Style Reference" },
    { bg: "linear-gradient(135deg,var(--color-light-pink),var(--color-grape))", label: "Expressive, energetic portrait", tag: "Style Reference" },
  ];

  const b2b = [
    { bg: "linear-gradient(135deg,var(--color-grape),var(--color-medium-purple))", industry: "Healthcare", icon: "🩺", label: "Medical professional with tablet" },
    { bg: "linear-gradient(135deg,var(--color-light-pink),var(--color-bold-pink))", industry: "Financial Services", icon: "💼", label: "Corporate collaboration with device" },
    { bg: "linear-gradient(135deg,var(--color-bold-pink),var(--color-grape))", industry: "Mining", icon: "⛏", label: "Field workers with hard hats & tech" },
  ];

  const doList = [
    "People-focussed visuals that capture movement and connection",
    "Dynamic angles — objects or hands in the foreground",
    "Shot in studio with simple or brand-coloured backgrounds",
    "Clothing/objects in pinks, purples or blues matching the palette",
    "Always include an element of technology or digital solutions",
    "Industry-specific visual cues (stethoscope, hard hat, etc.)",
  ];

  const dontList = [
    "Avoid imagery with colours far from palette (yellow, green, orange)",
    "Avoid flat, lifeless or overly staged corporate stock photos",
    "Avoid imagery without people or human connection",
    "Avoid backgrounds that clash with brand colours",
    "Avoid logos or branding from other companies visible in frame",
    "Avoid imagery that doesn't reference technology or digital work",
  ];

  return (
    <div>
      {/* ── Style Reference ── */}
      <SectionLabel>Photography Style Reference</SectionLabel>
      <p style={descStyle}>People-focussed visuals that capture movement and have a connected feel. Shot with extremely simple or colour backgrounds in studio. A 'stretch' quality — dynamic angles, objects or hands in the foreground.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 24 }}>
        {styleGuides.map((s, i) => (
          <div key={i} style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(51,40,92,.12)" }}>
            <div style={{ background: s.bg, height: 160, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: "rgba(51,40,92,.15)" }} />
              <span style={{ fontSize: 40, position: "relative" }}>👤</span>
              <span style={{ position: "absolute", top: 10, right: 10, fontSize: 10, fontWeight: 700, background: "rgba(255,255,255,.2)", color: "var(--color-white)", borderRadius: 50, padding: "3px 10px", letterSpacing: 1 }}>{s.tag}</span>
            </div>
            <div style={{ background: "var(--color-white)", padding: "12px 14px", borderTop: "3px solid var(--color-bold-pink)" }}>
              <div style={{ fontSize: 12, color: "var(--color-grape)", lineHeight: 1.5 }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>
      <p style={{ ...descStyle, fontSize: 11, marginTop: 8, color: "var(--color-gray-400)" }}>* Visuals above are brand palette colour references only. Use real photography following these style principles.</p>

      {/* ── B2B Photography ── */}
      <SectionLabel style={{ marginTop: 52 }}>B2B Photography</SectionLabel>
      <p style={descStyle}>B2B photography should represent the industries JustSolve assists. Visual cues speak to each industry — stethoscopes for healthcare, hard hats for mining. Always include an element of technology and digital solutions.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
        {b2b.map((b, i) => (
          <div key={i} style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 6px 24px rgba(51,40,92,.14)" }}>
            <div style={{ background: b.bg, height: 180, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: "rgba(51,40,92,.1)" }} />
              <span style={{ fontSize: 48, position: "relative" }}>{b.icon}</span>
              <span style={{ fontWeight: 700, fontSize: 13, color: "var(--color-white)", position: "relative" }}>{b.industry}</span>
            </div>
            <div style={{ background: "var(--color-white)", padding: "14px 16px" }}>
              <div style={{ fontSize: 13, color: "var(--color-grape)", lineHeight: 1.5 }}>{b.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Do's and Don'ts ── */}
      <SectionLabel style={{ marginTop: 52 }}>Photography Do's & Don'ts</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 24 }}>
        <div style={{ background: "var(--color-white)", border: "1px solid var(--bg-purple-lighter)", borderRadius: 16, padding: "24px", boxShadow: "0 2px 16px rgba(51,40,92,.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-grape)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ color: "var(--color-light-pink)", fontSize: 13 }}>✓</span></div>
            <span style={{ fontWeight: 900, fontSize: 16, color: "var(--color-grape)" }}>Do</span>
          </div>
          {doList.map((d, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
              <span style={{ color: "var(--color-bold-pink)", fontSize: 14, marginTop: 1, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 13, color: "var(--color-text-dark)", lineHeight: 1.5 }}>{d}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--bg-pink-error)", border: "1px solid var(--border-pink-light)", borderRadius: 16, padding: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-bold-pink)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ color: "var(--color-white)", fontSize: 13 }}>✕</span></div>
            <span style={{ fontWeight: 900, fontSize: 16, color: "var(--color-bold-pink)" }}>Don't</span>
          </div>
          {dontList.map((d, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
              <span style={{ color: "var(--color-bold-pink)", fontSize: 14, marginTop: 1, flexShrink: 0 }}>✕</span>
              <span style={{ fontSize: 13, color: "var(--color-gray-700)", lineHeight: 1.5 }}>{d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Colour in Photography ── */}
      <SectionLabel style={{ marginTop: 52 }}>Colour Palette in Photography</SectionLabel>
      <p style={descStyle}>Clothing, objects, and backgrounds should reference the JustSolve colour spectrum. Avoid colours too far from the palette.</p>
      <div style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}>
        {[
          { label: "✓ Use", colors: ["var(--color-grape)", "var(--color-medium-purple)", "var(--color-light-pink)", "var(--color-bold-pink)", "var(--color-grape-light)", "#d49acf"], approved: true },
          { label: "✕ Avoid", colors: ["#f5c518", "#4caf50", "#ff6600", "#00bcd4", "#8bc34a", "#ff9800"], approved: false },
        ].map(g => (
          <div key={g.label}>
            <div style={{ fontWeight: 700, fontSize: 13, color: g.approved ? "var(--color-grape)" : "var(--color-bold-pink)", marginBottom: 10 }}>{g.label}</div>
            <div style={{ display: "flex", gap: 8 }}>
              {g.colors.map((c, i) => (
                <div key={i} style={{ width: 40, height: 40, borderRadius: 10, background: c, boxShadow: "0 2px 8px rgba(0,0,0,.12)", border: g.approved ? "2px solid transparent" : "2px solid var(--color-bold-pink)44" }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: Design Tokens ───────────────────────────────────────────────────
function DesignTokensSection() {
  const [spacingDir, setSpacingDir] = useState("Uniform");
  const [typoDevice, setTypoDevice] = useState("Desktop");

  // ── Token table component ────────────────────────────────────────────────
  const TokenTable = ({ headers, rows }) => (
    <div style={{ overflowX: "auto", marginTop: 16 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: "var(--bg-purple-alt)" }}>
            {headers.map(h => (
              <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, color: "var(--color-grape)", borderBottom: "2px solid var(--bg-purple-lighter)", whiteSpace: "nowrap" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--bg-purple-lighter)", background: i % 2 === 0 ? "var(--color-white)" : "var(--bg-purple-stripe)" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "10px 14px", color: typeof cell === "string" && cell.startsWith(".") ? "var(--color-medium-purple)" : typeof cell === "string" && cell.startsWith("--") ? "var(--color-bold-pink)" : "var(--color-grape)", fontSize: typeof cell === "string" && (cell.startsWith(".") || cell.startsWith("--")) ? 12 : 13, verticalAlign: "middle" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // ── BORDER RADIUS ─────────────────────────────────────────────────────────
  const radiusShapes = [
    { label: "None", r: 0, w: 80, h: 52 },
    { label: "Soft", r: 4, w: 80, h: 52 },
    { label: "Rounded", r: 100, w: 80, h: 52 },
    { label: "Circle", r: "50%", w: 52, h: 52 },
  ];
  const radiusRows = [
    [<div style={{ width: 32, height: 20, background: "var(--color-light-pink)", borderRadius: 0 }} />, "None", "0", ".border-radius-none", "--border-radius-none"],
    [<div style={{ width: 32, height: 20, background: "var(--color-light-pink)", borderRadius: 4 }} />, "Soft", "4px", ".border-radius-soft", "--border-radius-soft"],
    [<div style={{ width: 32, height: 12, background: "var(--color-light-pink)", borderRadius: 100 }} />, "Rounded", "100px", ".border-radius-rounded", "--border-radius-rounded"],
    [<div style={{ width: 20, height: 20, background: "var(--color-light-pink)", borderRadius: "50%" }} />, "Circle", "100%", ".border-radius-circle", "--border-radius-circle"],
  ];

  // ── BORDER SIZES ─────────────────────────────────────────────────────────
  const borderSizes = [
    { label: "None", size: "0", border: "none" },
    { label: "S", size: "1px", border: "1px solid var(--color-light-pink)" },
    { label: "M", size: "2px", border: "2px solid var(--color-light-pink)" },
    { label: "L", size: "3px", border: "3px solid var(--color-light-pink)" },
  ];
  const borderRows = [
    ["None", "0", ".border-size-none", "--border-size-none"],
    [<div style={{ width: 28, height: 28, border: "1px solid var(--color-light-pink)", borderRadius: 4 }} />, "S — 1px", "1px", ".border-size-s", "--border-size-s"],
    [<div style={{ width: 28, height: 28, border: "2px solid var(--color-light-pink)", borderRadius: 4 }} />, "M — 2px", "2px", ".border-size-m", "--border-size-m"],
    [<div style={{ width: 28, height: 28, border: "3px solid var(--color-light-pink)", borderRadius: 4 }} />, "L — 3px", "3px", ".border-size-l", "--border-size-l"],
  ];

  // ── SPACING ───────────────────────────────────────────────────────────────
  const spacingScale = [
    { label: "None", t: "0", size: 0, cls: "none" },
    { label: "XS", t: "4px", size: 4, cls: "xs" },
    { label: "S", t: "8px", size: 8, cls: "s" },
    { label: "Base", t: "16px", size: 16, cls: "base" },
    { label: "M", t: "24px", size: 24, cls: "m" },
    { label: "L", t: "32px", size: 32, cls: "l" },
    { label: "XL", t: "40px", size: 40, cls: "xl" },
    { label: "XXL", t: "48px", size: 48, cls: "xxl" },
  ];
  const dirTabs = ["Uniform", "Top", "Right", "Bottom", "Left", "Vertical", "Horizontal"];
  const dirKey = spacingDir === "Uniform" ? "" : `-${spacingDir.toLowerCase()}`;
  const uniformRows = spacingScale.map(s => [
    <div style={{ width: Math.max(s.size, 4), height: Math.max(s.size, 4), background: s.size === 0 ? "transparent" : "var(--color-light-pink)", border: s.size === 0 ? "1px dashed var(--color-gray-150)" : "none", borderRadius: 2 }} />,
    s.t,
    `.padding-${s.cls === "base" ? "base" : s.cls}`,
    `.margin-${s.cls === "base" ? "base" : s.cls}`,
    `--space-${s.cls === "base" ? "base" : s.cls}`,
  ]);
  const dirRows = spacingScale.map(s => {
    const prop = spacingDir.toLowerCase();
    return [
      <div style={{ width: 24, height: Math.max(s.size, 4), background: s.size === 0 ? "transparent" : "var(--color-light-pink)", border: s.size === 0 ? "1px dashed var(--color-gray-150)" : "none", borderRadius: 2 }} />,
      s.t,
      `.padding-${prop}-${s.cls === "base" ? "base" : s.cls}`,
      `.margin-${prop}-${s.cls === "base" ? "base" : s.cls}`,
      `--space-${s.cls === "base" ? "base" : s.cls}`,
    ];
  });

  // ── SHADOW ────────────────────────────────────────────────────────────────
  const shadows = [
    { label: "None", css: "none", cls: "none" },
    { label: "XS", css: "0 1px 2px rgba(0,0,0,.06)", cls: "xs" },
    { label: "S", css: "0 2px 6px rgba(0,0,0,.08)", cls: "s" },
    { label: "M", css: "0 4px 12px rgba(0,0,0,.1)", cls: "m" },
    { label: "L", css: "0 8px 24px rgba(0,0,0,.12)", cls: "l" },
    { label: "XL", css: "0 16px 48px rgba(0,0,0,.16)", cls: "xl" },
  ];

  // ── TYPOGRAPHY SCALE ──────────────────────────────────────────────────────
  const typoScale = {
    Desktop: [
      { label: "Display", size: "35px", lh: "1.25", cls: ".font-size-display", var: "--font-size-display" },
      { label: "Heading 1", size: "40px", lh: "1.25", cls: ".heading1", var: "--font-size-h1" },
      { label: "Heading 2", size: "35px", lh: "1.25", cls: ".heading2", var: "--font-size-h2" },
      { label: "Heading 3", size: "30px", lh: "1.25", cls: ".heading3", var: "--font-size-h3" },
      { label: "Heading 4", size: "25px", lh: "1.25", cls: ".heading4", var: "--font-size-h4" },
      { label: "Heading 5", size: "20px", lh: "1.25", cls: ".heading5", var: "--font-size-h5" },
      { label: "Heading 6", size: "16px", lh: "1.25", cls: ".heading6", var: "--font-size-h6" },
      { label: "Body", size: "16px", lh: "1.5", cls: ".body", var: "--font-size-body" },
      { label: "Body Small", size: "14px", lh: "1.5", cls: ".body-s", var: "--font-size-body-s" },
      { label: "Body XS", size: "12px", lh: "1.5", cls: ".body-xs", var: "--font-size-body-xs" },
    ],
    Tablet: [
      { label: "Display", size: "30px", lh: "1.25", cls: ".font-size-display", var: "--font-size-display" },
      { label: "Heading 1", size: "32px", lh: "1.25", cls: ".heading1", var: "--font-size-h1" },
      { label: "Heading 2", size: "28px", lh: "1.25", cls: ".heading2", var: "--font-size-h2" },
      { label: "Heading 3", size: "24px", lh: "1.25", cls: ".heading3", var: "--font-size-h3" },
      { label: "Heading 4", size: "20px", lh: "1.25", cls: ".heading4", var: "--font-size-h4" },
      { label: "Heading 5", size: "18px", lh: "1.25", cls: ".heading5", var: "--font-size-h5" },
      { label: "Heading 6", size: "14px", lh: "1.25", cls: ".heading6", var: "--font-size-h6" },
      { label: "Body", size: "15px", lh: "1.5", cls: ".body", var: "--font-size-body" },
      { label: "Body Small", size: "13px", lh: "1.5", cls: ".body-s", var: "--font-size-body-s" },
      { label: "Body XS", size: "11px", lh: "1.5", cls: ".body-xs", var: "--font-size-body-xs" },
    ],
    Phone: [
      { label: "Display", size: "26px", lh: "1.25", cls: ".font-size-display", var: "--font-size-display" },
      { label: "Heading 1", size: "28px", lh: "1.25", cls: ".heading1", var: "--font-size-h1" },
      { label: "Heading 2", size: "24px", lh: "1.25", cls: ".heading2", var: "--font-size-h2" },
      { label: "Heading 3", size: "20px", lh: "1.25", cls: ".heading3", var: "--font-size-h3" },
      { label: "Heading 4", size: "18px", lh: "1.25", cls: ".heading4", var: "--font-size-h4" },
      { label: "Heading 5", size: "16px", lh: "1.25", cls: ".heading5", var: "--font-size-h5" },
      { label: "Heading 6", size: "13px", lh: "1.25", cls: ".heading6", var: "--font-size-h6" },
      { label: "Body", size: "14px", lh: "1.5", cls: ".body", var: "--font-size-body" },
      { label: "Body Small", size: "12px", lh: "1.5", cls: ".body-s", var: "--font-size-body-s" },
      { label: "Body XS", size: "11px", lh: "1.5", cls: ".body-xs", var: "--font-size-body-xs" },
    ],
  };
  const fontWeights = [
    { weight: 300, label: "Light", cls: ".font-light" },
    { weight: 400, label: "Regular", cls: ".font-regular" },
    { weight: 600, label: "Semi-bold", cls: ".font-semi-bold" },
    { weight: 700, label: "Bold", cls: ".font-bold" },
  ];
  const textTransforms = [
    { example: "lowercased text", transform: "lowercase", label: "Lowercase", cls: ".text-lowercase" },
    { example: "UPPERCASED TEXT", transform: "uppercase", label: "Uppercase", cls: ".text-uppercase" },
    { example: "Capitalized Text", transform: "capitalize", label: "Capitalize", cls: ".text-capitalize" },
    { example: "Ellipsis…", transform: "none", label: "Ellipsis", cls: ".text-ellipsis" },
  ];

  // ── NEUTRAL PALETTE ───────────────────────────────────────────────────────
  const neutrals = [
    { n: 10, hex: "#111827" }, { n: 9, hex: "#1F2937" }, { n: 8, hex: "#374151" },
    { n: 7, hex: "#4B5768" }, { n: 6, hex: "#57667A" }, { n: 5, hex: "#9ca3af" },
    { n: 4, hex: "#C0C7D2" }, { n: 3, hex: "#D8DCE8" }, { n: 2, hex: "#F3F4F6" },
    { n: 1, hex: "#F9FAFB" }, { n: 0, hex: "#FFFFFF" },
  ];

  // ── SEMANTIC PALETTE ──────────────────────────────────────────────────────
  const semanticGroups = [
    { group: "Info", colors: [{ label: "Info Base", hex: "#017aad", bg: "#017aad" }, { label: "Info Light", hex: "#e5f5fc", bg: "#e5f5fc" }] },
    { group: "Success", colors: [{ label: "Success Base", hex: "#34d399", bg: "#34d399" }, { label: "Success Light", hex: "#EAF3EB", bg: "var(--bg-green-active)" }] },
    { group: "Warning", colors: [{ label: "Warning Base", hex: "#e9a100", bg: "#e9a100" }, { label: "Warning Light", hex: "#fdf6e5", bg: "#fdf6e5" }] },
    { group: "Error", colors: [{ label: "Error Base", hex: "#dc2020", bg: "#dc2020" }, { label: "Error Light", hex: "#fceaea", bg: "#fceaea" }] },
  ];

  const Tab = ({ label, active, onClick }) => (
    <button onClick={onClick} style={{ fontWeight: active ? 700 : 400, fontSize: 14, color: active ? "var(--color-grape)" : "var(--color-gray-500)", background: "none", border: "none", borderBottom: active ? "2px solid var(--color-bold-pink)" : "2px solid transparent", padding: "8px 16px", cursor: "pointer", transition: "all .15s" }}>
      {label}
    </button>
  );

  const SubLabel = ({ children, mt = 40 }) => (
    <div style={{ fontWeight: 900, fontSize: 18, color: "var(--color-grape)", marginTop: mt, marginBottom: 6 }}>{children}</div>
  );
  const SubDesc = ({ children }) => (
    <p style={{ fontSize: 14, color: "var(--color-gray-350)", lineHeight: 1.7, marginBottom: 4 }}>{children}</p>
  );

  return (
    <div>

      {/* ══ BORDER ══════════════════════════════════════════════════════════ */}
      <SectionLabel>Border</SectionLabel>
      <p style={descStyle}>Reference to the styles that can be applied to the borders of any UI element.</p>

      <SubLabel mt={32}>Border Radius</SubLabel>
      <SubDesc>4 options from none (0px) to a full circle (100%), used to round the corners of an element's outer edges.</SubDesc>
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 20, alignItems: "flex-end" }}>
        {radiusShapes.map(s => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ width: s.w, height: s.h, background: "var(--color-light-pink)", borderRadius: s.r, margin: "0 auto 10px" }} />
            <div style={{ fontSize: 13, color: "var(--color-grape)", fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <TokenTable
        headers={["Preview", "Name", "Size", "Class", "CSS Variable"]}
        rows={radiusRows}
      />

      <SubLabel>Border Sizes</SubLabel>
      <SubDesc>4 sizes applied to all corners — None (0px), S (1px), M (2px) and L (3px).</SubDesc>
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 20, alignItems: "center" }}>
        {borderSizes.map(b => (
          <div key={b.label} style={{ textAlign: "center" }}>
            <div style={{ width: 64, height: 64, border: b.border, borderRadius: 4, margin: "0 auto 10px", background: "transparent" }} />
            <div style={{ fontSize: 13, color: "var(--color-grape)", fontWeight: 600 }}>{b.label}</div>
          </div>
        ))}
      </div>
      <TokenTable
        headers={["Preview", "Name", "Size", "Class", "CSS Variable"]}
        rows={[
          ["—", "None", "0", ".border-size-none", "--border-size-none"],
          [<div style={{ width: 24, height: 24, border: "1px solid var(--color-light-pink)", borderRadius: 3 }} />, "S", "1px", ".border-size-s", "--border-size-s"],
          [<div style={{ width: 24, height: 24, border: "2px solid var(--color-light-pink)", borderRadius: 3 }} />, "M", "2px", ".border-size-m", "--border-size-m"],
          [<div style={{ width: 24, height: 24, border: "3px solid var(--color-light-pink)", borderRadius: 3 }} />, "L", "3px", ".border-size-l", "--border-size-l"],
        ]}
      />

      {/* ══ SPACING ═════════════════════════════════════════════════════════ */}
      <SectionLabel style={{ marginTop: 52 }}>Spacing</SectionLabel>
      <p style={descStyle}>Reference scale for the construction and positioning of UI elements. Based on 8px multiples, with an exception of 4px (XS) for elements that are intrinsically closer.</p>

      <SubLabel mt={32}>Spacing Scale</SubLabel>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 20, alignItems: "flex-end" }}>
        {spacingScale.map(s => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ width: Math.max(s.size, 2), height: Math.max(s.size, 2), background: s.size === 0 ? "transparent" : "var(--color-light-pink)", border: s.size === 0 ? "1px dashed var(--color-gray-150)" : "none", margin: "0 auto 8px", borderRadius: 2 }} />
            <div style={{ fontSize: 11, color: "var(--color-bold-pink)", fontWeight: 700 }}>{s.t}</div>
            <div style={{ fontSize: 11, color: "var(--color-grape)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <SubLabel>Uniform Spacing</SubLabel>
      <SubDesc>Applied to all sides of an element. Margin and Padding share the same scale.</SubDesc>
      <TokenTable
        headers={["Preview", "Size", "Padding Class", "Margin Class", "CSS Variable"]}
        rows={uniformRows}
      />

      <SubLabel>Directional Spacing</SubLabel>
      <SubDesc>Applied to an individual side. Select a direction to see the relevant classes.</SubDesc>
      <div style={{ display: "flex", gap: 0, marginTop: 16, marginBottom: 0, borderBottom: "2px solid var(--bg-purple-lighter)" }}>
        {dirTabs.map(t => <Tab key={t} label={t} active={spacingDir === t} onClick={() => setSpacingDir(t)} />)}
      </div>
      <TokenTable
        headers={["Preview", "Size", "Padding Class", "Margin Class", "CSS Variable"]}
        rows={dirRows}
      />

      {/* ══ SHADOW ══════════════════════════════════════════════════════════ */}
      <SectionLabel style={{ marginTop: 52 }}>Shadow</SectionLabel>
      <p style={descStyle}>5 elevation levels. Larger shadows increase the prominence of an element; lower elevations use smaller shadows.</p>

      <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginTop: 28, alignItems: "flex-end" }}>
        {shadows.map(s => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ width: 64, height: 64, background: "var(--color-white)", boxShadow: s.css, borderRadius: 10, margin: "0 auto 10px", border: s.label === "None" ? "1px solid var(--border-light)" : "none" }} />
            <div style={{ fontSize: 13, color: "var(--color-grape)", fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <TokenTable
        headers={["Preview", "Name", "Class", "CSS Variable"]}
        rows={shadows.map(s => [
          <div style={{ width: 32, height: 32, background: "var(--color-white)", boxShadow: s.css, borderRadius: 6, border: s.label === "None" ? "1px solid var(--border-light)" : "none" }} />,
          s.label,
          `.shadow-${s.cls}`,
          `--shadow-${s.cls}`,
        ])}
      />

      {/* ══ TYPOGRAPHY TOKENS ═══════════════════════════════════════════════ */}
      <SectionLabel style={{ marginTop: 52 }}>Typography Tokens</SectionLabel>
      <p style={descStyle}>Full type scale — Display for large sizes, Headings for important text, Body for long-form content. Responsive values for Desktop, Tablet and Phone.</p>

      <SubLabel mt={32}>Font Size Scale</SubLabel>
      <div style={{ display: "flex", gap: 0, marginTop: 16, borderBottom: "2px solid var(--bg-purple-lighter)" }}>
        {["Desktop", "Tablet", "Phone"].map(t => <Tab key={t} label={t} active={typoDevice === t} onClick={() => setTypoDevice(t)} />)}
      </div>
      <TokenTable
        headers={["Example", "Size", "Line Height", "Class", "CSS Variable"]}
        rows={typoScale[typoDevice].map(r => [
          <span style={{ fontWeight: 700, fontSize: r.size, color: "var(--color-grape)", lineHeight: 1.25 }}>{r.label}</span>,
          r.size, r.lh, r.cls, r.var,
        ])}
      />

      <SubLabel>Font Weight</SubLabel>
      <SubDesc>4 font weights — Light, Regular, Semi-bold and Bold.</SubDesc>
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 20 }}>
        {fontWeights.map(w => (
          <div key={w.weight}>
            <div style={{ fontWeight: w.weight, fontSize: 48, color: "var(--color-grape)", lineHeight: 1 }}>Aa</div>
            <div style={{ fontSize: 12, color: "var(--color-gray-500)", marginTop: 8 }}>{w.weight}</div>
            <div style={{ fontSize: 12, color: "var(--color-medium-purple)", marginTop: 2 }}>{w.cls}</div>
          </div>
        ))}
      </div>

      <SubLabel>Text Transform</SubLabel>
      <SubDesc>Transform text with lowercase, uppercase, capitalize and ellipsis utility classes.</SubDesc>
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 20 }}>
        {textTransforms.map(t => (
          <div key={t.label}>
            <div style={{ fontSize: 15, color: "var(--color-grape)", textTransform: t.transform, marginBottom: 8 }}>{t.example}</div>
            <div style={{ fontSize: 12, color: "var(--color-gray-500)" }}>{t.label}</div>
            <div style={{  fontSize: 12, color: "var(--color-medium-purple)", marginTop: 2 }}>{t.cls}</div>
          </div>
        ))}
      </div>

      {/* ══ NEUTRAL PALETTE ═════════════════════════════════════════════════ */}
      <SectionLabel style={{ marginTop: 52 }}>Neutral Palette</SectionLabel>
      <p style={descStyle}>11-step greyscale from near-black (#111827) to white (#FFF), used for text, borders, backgrounds and UI surfaces.</p>
      <TokenTable
        headers={["Colour", "Name", "Hex", "Background Class", "Text Class", "CSS Variable"]}
        rows={neutrals.map(n => [
          <div style={{ width: 28, height: 28, background: n.hex, borderRadius: 6, border: n.n <= 1 ? "1px solid var(--border-light)" : "none" }} />,
          `Neutral ${n.n}`,
          n.hex.toUpperCase(),
          `.background-neutral-${n.n}`,
          `.text-neutral-${n.n}`,
          `--color-neutral-${n.n}`,
        ])}
      />

      {/* ══ SEMANTIC PALETTE ════════════════════════════════════════════════ */}
      <SectionLabel style={{ marginTop: 52 }}>Semantic Palette</SectionLabel>
      <p style={descStyle}>Functional colours for Info, Success, Warning and Error states — each with a full-strength base and a light tint for backgrounds.</p>
      {semanticGroups.map(g => (
        <div key={g.group} style={{ marginTop: 28 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "var(--color-grape)", marginBottom: 8 }}>{g.group}</div>
          <TokenTable
            headers={["Colour", "Name", "Hex", "Background Class", "Text Class", "CSS Variable"]}
            rows={g.colors.map(c => {
              const key = g.group.toLowerCase();
              const variant = c.label.includes("Light") ? "light" : "base";
              return [
                <div style={{ width: 28, height: 28, background: c.hex, borderRadius: 6, border: variant === "light" ? "1px solid var(--border-light)" : "none" }} />,
                c.label,
                c.hex.toUpperCase(),
                `.background-${key}${variant === "light" ? "-light" : ""}`,
                `.text-${key}${variant === "light" ? "-light" : ""}`,
                `--color-${key}${variant === "light" ? "-light" : ""}`,
              ];
            })}
          />
        </div>
      ))}

      {/* ══ BRAND PALETTE ═══════════════════════════════════════════════════ */}
      <SectionLabel style={{ marginTop: 52 }}>Brand Palette</SectionLabel>
      <p style={descStyle}>Semantic token mappings for the JustSolve brand colours — Primary (Grape) and Secondary (Bold Pink). Use these CSS classes and variables when building UI components to ensure brand consistency across all touchpoints.</p>

      {/* Primary */}
      <div style={{ marginTop: 28 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: "var(--color-grape)", marginBottom: 8 }}>Primary</div>
        <TokenTable
          headers={["Colour", "Name", "Hex", "Background Class", "Text Class", "CSS Variable"]}
          rows={[
            [
              <div style={{ width: 28, height: 28, background: "var(--color-grape)", borderRadius: 6 }} />,
              "Primary Base",
              "#33285C",
              ".background-primary",
              ".text-primary",
              "--color-primary",
            ],
            [
              <div style={{ width: 28, height: 28, background: "var(--color-grape-dark)", borderRadius: 6 }} />,
              "Primary Dark",
              "#4a3d7a",
              ".background-primary-dark",
              ".text-primary-dark",
              "--color-primary-dark",
            ],
            [
              <div style={{ width: 28, height: 28, background: "var(--bg-purple-info)", borderRadius: 6, border: "1px solid var(--border-purple-light)" }} />,
              "Primary Light",
              "#F4F0FF",
              ".background-primary-light",
              ".text-primary-light",
              "--color-primary-light",
            ],
          ]}
        />
      </div>

      {/* Secondary */}
      <div style={{ marginTop: 28 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: "var(--color-grape)", marginBottom: 8 }}>Secondary</div>
        <TokenTable
          headers={["Colour", "Name", "Hex", "Background Class", "Text Class", "CSS Variable"]}
          rows={[
            [
              <div style={{ width: 28, height: 28, background: "var(--color-bold-pink)", borderRadius: 6 }} />,
              "Secondary Base",
              "#E32475",
              ".background-secondary",
              ".text-secondary",
              "--color-secondary",
            ],
            [
              <div style={{ width: 28, height: 28, background: "var(--color-bold-pink-dark)", borderRadius: 6 }} />,
              "Secondary Dark",
              "#b81d5e",
              ".background-secondary-dark",
              ".text-secondary-dark",
              "--color-secondary-dark",
            ],
            [
              <div style={{ width: 28, height: 28, background: "var(--bg-pink-lighter)", borderRadius: 6, border: "1px solid var(--border-pink-lighter)" }} />,
              "Secondary Light",
              "#FFF0F8",
              ".background-secondary-light",
              ".text-secondary-light",
              "--color-secondary-light",
            ],
          ]}
        />
      </div>

      {/* Tertiary / Accent */}
      <div style={{ marginTop: 28 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: "var(--color-grape)", marginBottom: 8 }}>Tertiary / Accent</div>
        <TokenTable
          headers={["Colour", "Name", "Hex", "Background Class", "Text Class", "CSS Variable"]}
          rows={[
            [
              <div style={{ width: 28, height: 28, background: "var(--color-light-pink)", borderRadius: 6 }} />,
              "Accent Base",
              "#FCABF6",
              ".background-accent",
              ".text-accent",
              "--color-accent",
            ],
            [
              <div style={{ width: 28, height: 28, background: "var(--bg-pink-light)", borderRadius: 6, border: "1px solid var(--border-pink-lightest)" }} />,
              "Accent Light",
              "#FFF0FE",
              ".background-accent-light",
              ".text-accent-light",
              "--color-accent-light",
            ],
          ]}
        />
      </div>

      {/* Swatch visual summary */}
      <SubLabel mt={40}>Brand Token Quick Reference</SubLabel>
      <SubDesc>Visual overview of all brand tokens at a glance.</SubDesc>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
        {[
          { label: "Primary", hex: "#33285C", cls: "--color-primary" },
          { label: "Primary Dark", hex: "#4a3d7a", cls: "--color-primary-dark" },
          { label: "Primary Light", hex: "#F4F0FF", cls: "--color-primary-light", dark: true },
          { label: "Secondary", hex: "#E32475", cls: "--color-secondary" },
          { label: "Secondary Dark", hex: "#b81d5e", cls: "--color-secondary-dark" },
          { label: "Secondary Light", hex: "#FFF0F8", cls: "--color-secondary-light", dark: true },
          { label: "Accent", hex: "#FCABF6", cls: "--color-accent", dark: true },
          { label: "Accent Light", hex: "#FFF0FE", cls: "--color-accent-light", dark: true },
        ].map(t => (
          <div key={t.label} style={{
            flex: "1 1 140px", background: t.hex,
            border: t.dark ? "1px solid var(--border-light)" : "none",
            borderRadius: 14, padding: "18px 16px",
            boxShadow: "0 2px 12px rgba(51,40,92,.10)"
          }}>
            <div style={{ fontWeight: 700, fontSize: 12, color: t.dark ? "var(--color-grape)" : "var(--color-white)", marginBottom: 4 }}>{t.label}</div>
            <div style={{ fontSize: 11, color: t.dark ? "#33285C99" : "#ffffff99", marginBottom: 6 }}>{t.hex}</div>
            <div style={{ fontSize: 10, color: t.dark ? "var(--color-bold-pink)" : "var(--color-light-pink)" }}>{t.cls}</div>
          </div>
        ))}
      </div>

      {/* ══ OPACITY ═════════════════════════════════════════════════════════ */}
      <SectionLabel style={{ marginTop: 52 }}>Opacity</SectionLabel>
      <p style={descStyle}>A consistent opacity scale for overlays, disabled states, hover effects and layered UI elements. Applied via utility classes or CSS variables.</p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 24, alignItems: "flex-end" }}>
        {[
          { label: "0", val: 0, cls: ".opacity-0", var: "--opacity-0" },
          { label: "10", val: 0.1, cls: ".opacity-10", var: "--opacity-10" },
          { label: "20", val: 0.2, cls: ".opacity-20", var: "--opacity-20" },
          { label: "25", val: 0.25, cls: ".opacity-25", var: "--opacity-25" },
          { label: "40", val: 0.4, cls: ".opacity-40", var: "--opacity-40" },
          { label: "50", val: 0.5, cls: ".opacity-50", var: "--opacity-50" },
          { label: "60", val: 0.6, cls: ".opacity-60", var: "--opacity-60" },
          { label: "75", val: 0.75, cls: ".opacity-75", var: "--opacity-75" },
          { label: "90", val: 0.9, cls: ".opacity-90", var: "--opacity-90" },
          { label: "100", val: 1, cls: ".opacity-100", var: "--opacity-100" },
        ].map(o => (
          <div key={o.label} style={{ textAlign: "center", flex: "1 1 60px" }}>
            <div style={{ width: 48, height: 48, background: "var(--color-bold-pink)", borderRadius: 10, opacity: o.val, margin: "0 auto 8px", border: o.val === 0 ? "1px dashed var(--color-gray-150)" : "none" }} />
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-grape)" }}>{o.label}%</div>
            <div style={{ fontSize: 10, color: "var(--color-medium-purple)", marginTop: 2 }}>{o.cls}</div>
          </div>
        ))}
      </div>
      <TokenTable
        headers={["Preview", "Name", "Value", "Class", "CSS Variable"]}
        rows={[
          { label: "0", val: 0, cls: ".opacity-0", var: "--opacity-0" },
          { label: "10", val: 0.1, cls: ".opacity-10", var: "--opacity-10" },
          { label: "20", val: 0.2, cls: ".opacity-20", var: "--opacity-20" },
          { label: "25", val: 0.25, cls: ".opacity-25", var: "--opacity-25" },
          { label: "40", val: 0.4, cls: ".opacity-40", var: "--opacity-40" },
          { label: "50", val: 0.5, cls: ".opacity-50", var: "--opacity-50" },
          { label: "60", val: 0.6, cls: ".opacity-60", var: "--opacity-60" },
          { label: "75", val: 0.75, cls: ".opacity-75", var: "--opacity-75" },
          { label: "90", val: 0.9, cls: ".opacity-90", var: "--opacity-90" },
          { label: "100", val: 1, cls: ".opacity-100", var: "--opacity-100" },
        ].map(o => [
          <div style={{ width: 28, height: 28, background: "var(--color-bold-pink)", borderRadius: 6, opacity: o.val, border: o.val === 0 ? "1px dashed var(--color-gray-150)" : "none" }} />,
          `Opacity ${o.label}`,
          o.val,
          o.cls,
          o.var,
        ])}
      />

      {/* Use cases */}
      <SubLabel mt={32}>Common Use Cases</SubLabel>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
        {[
          { label: "Disabled state", opacity: 0.4, bg: "var(--color-grape)", text: "Button" },
          { label: "Hover overlay", opacity: 0.1, bg: "var(--color-grape)", text: "Card hover" },
          { label: "Modal backdrop", opacity: 0.5, bg: "var(--color-grape)", text: "Overlay" },
          { label: "Subtle tint", opacity: 0.25, bg: "var(--color-bold-pink)", text: "Tint layer" },
        ].map(u => (
          <div key={u.label} style={{ flex: "1 1 140px" }}>
            <div style={{ background: "var(--bg-purple-ultra-light)", borderRadius: 12, padding: 16, position: "relative", overflow: "hidden", height: 64, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: 0, background: u.bg, opacity: u.opacity }} />
              <span style={{ fontWeight: 700, fontSize: 13, color: "var(--color-grape)", position: "relative" }}>{u.text}</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--color-gray-500)", marginTop: 8, textAlign: "center" }}>{u.label}</div>
            <div style={{ fontSize: 11, color: "var(--color-medium-purple)", textAlign: "center" }}>.opacity-{Math.round(u.opacity * 100)}</div>
          </div>
        ))}
      </div>

      {/* ══ GRID & LAYOUT ═══════════════════════════════════════════════════ */}
      <SectionLabel style={{ marginTop: 52 }}>Grid & Layout</SectionLabel>
      <p style={descStyle}>A 12-column grid system with standardised breakpoints, container widths, gutter sizes and column span utilities for consistent page layouts.</p>

      <SubLabel mt={32}>Breakpoints</SubLabel>
      <SubDesc>Five responsive breakpoints defining when layouts adapt across device sizes.</SubDesc>
      <TokenTable
        headers={["Breakpoint", "Prefix", "Min Width", "Class", "CSS Variable"]}
        rows={[
          ["📱 Phone", "xs", "< 576px", ".container-xs", "--breakpoint-xs"],
          ["📱 Phone L", "sm", "≥ 576px", ".container-sm", "--breakpoint-sm"],
          ["💻 Tablet", "md", "≥ 768px", ".container-md", "--breakpoint-md"],
          ["🖥 Desktop", "lg", "≥ 1024px", ".container-lg", "--breakpoint-lg"],
          ["🖥 Wide", "xl", "≥ 1280px", ".container-xl", "--breakpoint-xl"],
        ]}
      />

      <SubLabel>Container Widths</SubLabel>
      <SubDesc>Max-width containers that centre content at each breakpoint.</SubDesc>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
        {[
          { label: "XS", max: "100%", w: "100%", cls: ".container-xs" },
          { label: "SM", max: "576px", w: "45%", cls: ".container-sm" },
          { label: "MD", max: "768px", w: "60%", cls: ".container-md" },
          { label: "LG", max: "1024px", w: "80%", cls: ".container-lg" },
          { label: "XL", max: "1280px", w: "100%", cls: ".container-xl" },
        ].map(c => (
          <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 48, fontSize: 12, fontWeight: 700, color: "var(--color-grape)" }}>{c.label}</div>
            <div style={{ flex: 1, background: "var(--bg-purple-lighter)", borderRadius: 6, height: 28, position: "relative" }}>
              <div style={{ width: c.w, background: "var(--color-light-pink)", borderRadius: 6, height: "100%", display: "flex", alignItems: "center", paddingLeft: 10 }}>
                <span style={{ fontSize: 11, color: "var(--color-grape)" }}>{c.max}</span>
              </div>
            </div>
            <div style={{ fontSize: 11, color: "var(--color-medium-purple)", width: 120 }}>{c.cls}</div>
          </div>
        ))}
      </div>

      <SubLabel>12-Column Grid</SubLabel>
      <SubDesc>Standard 12-column grid. Use column span classes to define element widths. Gutter is 16px (Base spacing).</SubDesc>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 4, marginTop: 16 }}>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} style={{ background: "var(--color-light-pink)", borderRadius: 4, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "var(--color-grape)" }}>{i + 1}</span>
          </div>
        ))}
      </div>
      <TokenTable
        headers={["Span", "Columns", "Width %", "Class", "CSS Variable"]}
        rows={[
          ["Full", "12 / 12", "100%", ".col-12", "--col-12"],
          ["Three-quarter", "9 / 12", "75%", ".col-9", "--col-9"],
          ["Two-thirds", "8 / 12", "66.6%", ".col-8", "--col-8"],
          ["Half", "6 / 12", "50%", ".col-6", "--col-6"],
          ["Third", "4 / 12", "33.3%", ".col-4", "--col-4"],
          ["Quarter", "3 / 12", "25%", ".col-3", "--col-3"],
          ["Sixth", "2 / 12", "16.6%", ".col-2", "--col-2"],
          ["Twelfth", "1 / 12", "8.3%", ".col-1", "--col-1"],
        ]}
      />

      <SubLabel>Column Span Visualiser</SubLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
        {[
          { label: ".col-12", cols: 12 },
          { label: ".col-9", cols: 9 },
          { label: ".col-8", cols: 8 },
          { label: ".col-6", cols: 6 },
          { label: ".col-4", cols: 4 },
          { label: ".col-3", cols: 3 },
        ].map(c => (
          <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 80, fontSize: 11, color: "var(--color-medium-purple)", flexShrink: 0 }}>{c.label}</div>
            <div style={{ flex: 1, background: "var(--bg-purple-lighter)", borderRadius: 6, height: 28 }}>
              <div style={{ width: `${(c.cols / 12) * 100}%`, background: "linear-gradient(90deg, var(--color-grape), var(--color-bold-pink))", borderRadius: 6, height: "100%" }} />
            </div>
            <div style={{ width: 40, fontSize: 11, color: "var(--color-gray-500)", flexShrink: 0 }}>{Math.round((c.cols / 12) * 100)}%</div>
          </div>
        ))}
      </div>

      <SubLabel>Gutter / Gap Scale</SubLabel>
      <SubDesc>Gap sizes for grid and flex layouts — aligned to the spacing scale.</SubDesc>
      <TokenTable
        headers={["Name", "Size", "Class", "CSS Variable"]}
        rows={[
          ["None", "0px", ".gap-none", "--gap-none"],
          ["XS", "4px", ".gap-xs", "--gap-xs"],
          ["S", "8px", ".gap-s", "--gap-s"],
          ["Base", "16px", ".gap-base", "--gap-base"],
          ["M", "24px", ".gap-m", "--gap-m"],
          ["L", "32px", ".gap-l", "--gap-l"],
          ["XL", "40px", ".gap-xl", "--gap-xl"],
          ["XXL", "48px", ".gap-xxl", "--gap-xxl"],
        ]}
      />

      {/* ══ ICON SIZES ══════════════════════════════════════════════════════ */}
      <SectionLabel style={{ marginTop: 52 }}>Icon Sizes</SectionLabel>
      <p style={descStyle}>A standardised icon size scale ensuring consistent iconography across all UI elements. Icons should always be rendered at one of these defined sizes.</p>

      <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginTop: 28, alignItems: "flex-end" }}>
        {[
          { label: "XS", size: 12, cls: ".icon-xs", var: "--icon-xs", use: "Inline / badge" },
          { label: "S", size: 16, cls: ".icon-s", var: "--icon-s", use: "Input fields" },
          { label: "M", size: 20, cls: ".icon-m", var: "--icon-m", use: "Buttons" },
          { label: "Base", size: 24, cls: ".icon-base", var: "--icon-base", use: "Default UI" },
          { label: "L", size: 32, cls: ".icon-l", var: "--icon-l", use: "Section headers" },
          { label: "XL", size: 40, cls: ".icon-xl", var: "--icon-xl", use: "Feature cards" },
          { label: "XXL", size: 48, cls: ".icon-xxl", var: "--icon-xxl", use: "Hero / empty states" },
        ].map(ic => (
          <div key={ic.label} style={{ textAlign: "center" }}>
            <div style={{ width: ic.size, height: ic.size, margin: "0 auto 8px", position: "relative" }}>
              <svg viewBox="0 0 24 24" width={ic.size} height={ic.size} fill="none">
                <circle cx="12" cy="12" r="10" stroke="var(--color-bold-pink)" strokeWidth="1.5" />
                <path d="M8 12h8M12 8v8" stroke="var(--color-grape)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-grape)" }}>{ic.label}</div>
            <div style={{ fontSize: 10, color: "var(--color-gray-500)" }}>{ic.size}px</div>
          </div>
        ))}
      </div>

      <TokenTable
        headers={["Preview", "Name", "Size", "Class", "CSS Variable", "Recommended Use"]}
        rows={[
          { label: "XS", size: 12, cls: ".icon-xs", var: "--icon-xs", use: "Inline text / badges" },
          { label: "S", size: 16, cls: ".icon-s", var: "--icon-s", use: "Input fields, dense lists" },
          { label: "M", size: 20, cls: ".icon-m", var: "--icon-m", use: "Buttons, navigation" },
          { label: "Base", size: 24, cls: ".icon-base", var: "--icon-base", use: "Default UI icons" },
          { label: "L", size: 32, cls: ".icon-l", var: "--icon-l", use: "Section headers, cards" },
          { label: "XL", size: 40, cls: ".icon-xl", var: "--icon-xl", use: "Feature cards, callouts" },
          { label: "XXL", size: 48, cls: ".icon-xxl", var: "--icon-xxl", use: "Hero sections, empty states" },
        ].map(ic => [
          <svg viewBox="0 0 24 24" width={24} height={24} fill="none">
            <circle cx="12" cy="12" r="10" stroke="var(--color-bold-pink)" strokeWidth="1.5" />
            <path d="M8 12h8M12 8v8" stroke="var(--color-grape)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>,
          ic.label,
          `${ic.size}px`,
          ic.cls,
          ic.var,
          ic.use,
        ])}
      />

      <SubLabel mt={32}>Icon + Text Pairing</SubLabel>
      <SubDesc>Icons should be optically aligned to their accompanying text. Use the matching size to the text's line height.</SubDesc>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16, maxWidth: 480 }}>
        {[
          { iconSize: 12, fontSize: 12, weight: 400, label: "Caption / XS icon", text: "Supporting caption text" },
          { iconSize: 16, fontSize: 14, weight: 400, label: "Body S / S icon", text: "Secondary body text with icon" },
          { iconSize: 20, fontSize: 16, weight: 600, label: "Body / M icon", text: "Standard button or body text" },
          { iconSize: 24, fontSize: 20, weight: 700, label: "Heading 5 / Base icon", text: "Section heading with icon" },
          { iconSize: 32, fontSize: 25, weight: 700, label: "Heading 4 / L icon", text: "Feature heading" },
        ].map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--color-white)", border: "1px solid var(--bg-purple-lighter)", borderRadius: 10, padding: "12px 16px" }}>
            <svg viewBox="0 0 24 24" width={p.iconSize} height={p.iconSize} fill="none" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" stroke="var(--color-bold-pink)" strokeWidth="1.5" />
              <path d="M8 12h8M12 8v8" stroke="var(--color-grape)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div>
              <div style={{ fontWeight: p.weight, fontSize: p.fontSize, color: "var(--color-grape)", lineHeight: 1.2 }}>{p.text}</div>
              <div style={{ fontSize: 10, color: "var(--color-grape-light)", marginTop: 2 }}>{p.label}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

// ── Section: Data Table ──────────────────────────────────────────────────────
function DataTableSection() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Aisha Patel", role: "UX Designer", dept: "Design", status: "Active", joined: "12 Jan 2022", avatar: "AP" },
    { id: 2, name: "Marcus Louw", role: "Senior Developer", dept: "Engineering", status: "Active", joined: "3 Mar 2021", avatar: "ML" },
    { id: 3, name: "Priya Naidoo", role: "Product Manager", dept: "Product", status: "Active", joined: "8 Jun 2023", avatar: "PN" },
    { id: 4, name: "James Fourie", role: "DevOps Engineer", dept: "Engineering", status: "On Leave", joined: "19 Nov 2020", avatar: "JF" },
    { id: 5, name: "Lerato Dlamini", role: "Data Analyst", dept: "Data", status: "Active", joined: "25 Feb 2024", avatar: "LD" },
    { id: 6, name: "Sipho Khumalo", role: "UI Developer", dept: "Design", status: "Inactive", joined: "1 Aug 2019", avatar: "SK" },
    { id: 7, name: "Taryn Meyer", role: "Scrum Master", dept: "Product", status: "Active", joined: "14 May 2022", avatar: "TM" },
  ]);

  const [search, setSearch] = useState("");
  const [sortCol, setSortCol] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [filterDept, setFilterDept] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [newEmp, setNewEmp] = useState({ name: "", role: "", dept: "Engineering", status: "Active" });
  const [toast, setToast] = useState(null);

  const depts = ["All", "Engineering", "Design", "Product", "Data"];
  const statusColors = {
    "Active":   { bg: "var(--bg-green-active)", color: "var(--color-success)" },
    "On Leave": { bg: "var(--bg-yellow-warning)", color: "var(--color-warning)" },
    "Inactive": { bg: "var(--bg-pink-error)", color: "var(--color-bold-pink)" },
  };

  const avatarColors = ["var(--color-grape)","var(--color-bold-pink)","var(--color-medium-purple)","var(--color-grape-light)","var(--color-bold-pink-dark)","var(--color-grape-dark)","var(--color-light-pink)"];

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  const filtered = employees
    .filter(e => filterDept === "All" || e.dept === filterDept)
    .filter(e =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase()) ||
      e.dept.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const av = a[sortCol] || ""; const bv = b[sortCol] || "";
      return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });

  const toggleSort = (col) => {
    if (sortCol === col) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortCol(col); setSortDir("asc"); }
  };

  const toggleAll = () => setSelected(selected.length === filtered.length ? [] : filtered.map(e => e.id));
  const toggleOne = (id) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  const addEmployee = () => {
    if (!newEmp.name || !newEmp.role) return;
    const initials = newEmp.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0,2);
    setEmployees(prev => [...prev, {
      id: Date.now(), avatar: initials,
      name: newEmp.name, role: newEmp.role,
      dept: newEmp.dept, status: newEmp.status,
      joined: new Date().toLocaleDateString("en-GB", { day:"2-digit", month:"short", year:"numeric" }),
    }]);
    setNewEmp({ name: "", role: "", dept: "Engineering", status: "Active" });
    setShowModal(false);
    showToast(`${newEmp.name} added successfully`);
  };

  const deleteSelected = () => {
    setEmployees(prev => prev.filter(e => !selected.includes(e.id)));
    const count = selected.length;
    setSelected([]);
    setShowDeleteConfirm(false);
    showToast(`${count} employee${count > 1 ? "s" : ""} removed`, "error");
  };

  const SortIcon = ({ col }) => {
    if (sortCol !== col) return <span style={{ color: "var(--color-gray-150)", marginLeft: 4 }}>↕</span>;
    return <span style={{ color: "var(--color-bold-pink)", marginLeft: 4 }}>{sortDir === "asc" ? "↑" : "↓"}</span>;
  };

  const inputStyle = {
    fontSize: 14, color: "var(--color-grape)",
    border: "1.5px solid var(--bg-purple-lighter)", borderRadius: 8, padding: "8px 12px",
    outline: "none", width: "100%", background: "var(--color-white)",
  };

  return (
    <div>
      <SectionLabel>Employee Data Table</SectionLabel>
      <p style={descStyle}>A fully interactive data table pattern — sortable columns, multi-select with bulk delete, search filtering, department tabs, and an "Add New" modal. All styled to the JustSolve design system.</p>

      {/* ── Toolbar ── */}
      <div style={{ marginTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        {/* Left: search + dept filter */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          {/* Search */}
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "var(--color-gray-400)", fontSize: 14 }}>🔍</span>
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search employees…"
              style={{ ...inputStyle, paddingLeft: 32, width: 220 }}
            />
          </div>
          {/* Dept filter pills */}
          <div style={{ display: "flex", gap: 6 }}>
            {depts.map(d => (
              <button key={d} onClick={() => setFilterDept(d)} style={{
                fontWeight: 600, fontSize: 12,
                padding: "6px 14px", borderRadius: 50,
                border: `1.5px solid ${filterDept === d ? "var(--color-bold-pink)" : "var(--bg-purple-lighter)"}`,
                background: filterDept === d ? "var(--color-bold-pink)" : "var(--color-white)",
                color: filterDept === d ? "var(--color-white)" : "var(--color-grape)",
                cursor: "pointer", transition: "all .15s",
              }}>{d}</button>
            ))}
          </div>
        </div>

        {/* Right: bulk delete + add new */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {selected.length > 0 && (
            <button onClick={() => setShowDeleteConfirm(true)} style={{
              fontWeight: 700, fontSize: 13,
              background: "var(--bg-pink-error)", color: "var(--color-bold-pink)",
              border: "1.5px solid var(--color-bold-pink)", borderRadius: 50, padding: "9px 18px", cursor: "pointer",
            }}>
              🗑 Delete {selected.length} selected
            </button>
          )}
          <button onClick={() => setShowModal(true)} style={{
            fontWeight: 700, fontSize: 14,
            background: "var(--color-bold-pink)", color: "var(--color-white)", border: "none",
            borderRadius: 50, padding: "10px 22px", cursor: "pointer",
            boxShadow: "0 4px 14px rgba(227,36,117,.3)", display: "flex", alignItems: "center", gap: 6,
          }}>
            <span style={{ fontSize: 16, lineHeight: 1 }}>+</span> Add Employee
          </button>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
        {[
          { label: "Total", val: employees.length, color: "var(--color-grape)" },
          { label: "Active", val: employees.filter(e => e.status === "Active").length, color: "var(--color-success)" },
          { label: "On Leave", val: employees.filter(e => e.status === "On Leave").length, color: "var(--color-warning)" },
          { label: "Inactive", val: employees.filter(e => e.status === "Inactive").length, color: "var(--color-bold-pink)" },
        ].map(s => (
          <div key={s.label} style={{ background: "var(--color-white)", border: "1px solid var(--bg-purple-lighter)", borderRadius: 10, padding: "10px 20px", display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ fontWeight: 900, fontSize: 22, color: s.color }}>{s.val}</span>
            <span style={{ fontSize: 13, color: "var(--color-gray-500)" }}>{s.label}</span>
          </div>
        ))}
        {selected.length > 0 && (
          <div style={{ background: "var(--bg-purple-info)", border: "1px solid var(--border-purple-info)", borderRadius: 10, padding: "10px 20px", display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ fontWeight: 900, fontSize: 22, color: "var(--color-grape)" }}>{selected.length}</span>
            <span style={{ fontSize: 13, color: "var(--color-medium-purple)" }}>Selected</span>
          </div>
        )}
      </div>

      {/* ── Table ── */}
      <div style={{ marginTop: 16, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(51,40,92,.08)", border: "1px solid var(--bg-purple-lighter)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "var(--color-grape)" }}>
              {/* Checkbox all */}
              <th style={{ padding: "14px 16px", width: 40 }}>
                <input type="checkbox" checked={selected.length === filtered.length && filtered.length > 0}
                  onChange={toggleAll} style={{ cursor: "pointer", accentColor: "var(--color-bold-pink)" }} />
              </th>
              {[
                { label: "Employee", col: "name" },
                { label: "Role", col: "role" },
                { label: "Department", col: "dept" },
                { label: "Status", col: "status" },
                { label: "Joined", col: "joined" },
              ].map(h => (
                <th key={h.col} onClick={() => toggleSort(h.col)} style={{
                  padding: "14px 16px", textAlign: "left", cursor: "pointer",
                  fontWeight: 700, fontSize: 12,
                  color: "var(--color-light-pink)", letterSpacing: 1, textTransform: "uppercase",
                  userSelect: "none", whiteSpace: "nowrap",
                }}>
                  {h.label}<SortIcon col={h.col} />
                </th>
              ))}
              <th style={{ padding: "14px 16px", color: "var(--color-light-pink)", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ padding: "48px 24px", textAlign: "center", color: "var(--color-gray-400)", fontSize: 14 }}>
                  No employees found matching your search.
                </td>
              </tr>
            ) : filtered.map((emp, i) => {
              const isSelected = selected.includes(emp.id);
              const sc = statusColors[emp.status] || {};
              return (
                <tr key={emp.id} style={{
                  background: isSelected ? "var(--bg-pink-light)" : i % 2 === 0 ? "var(--color-white)" : "var(--bg-purple-stripe)",
                  borderBottom: "1px solid var(--bg-purple-lighter)",
                  transition: "background .12s",
                }}
                  onMouseEnter={e => { if (!isSelected) e.currentTarget.style.background = "var(--bg-purple-alt)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = isSelected ? "var(--bg-pink-light)" : i % 2 === 0 ? "var(--color-white)" : "var(--bg-purple-stripe)"; }}
                >
                  <td style={{ padding: "12px 16px" }}>
                    <input type="checkbox" checked={isSelected} onChange={() => toggleOne(emp.id)}
                      style={{ cursor: "pointer", accentColor: "var(--color-bold-pink)" }} />
                  </td>
                  {/* Avatar + name */}
                  <td style={{ padding: "12px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                        background: avatarColors[emp.id % avatarColors.length],
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 700, fontSize: 13, color: "var(--color-white)",
                      }}>{emp.avatar}</div>
                      <span style={{ fontWeight: 600, fontSize: 14, color: "var(--color-grape)" }}>{emp.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "12px 16px", fontSize: 14, color: "var(--color-gray-700)" }}>{emp.role}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-medium-purple)", background: "var(--bg-purple-info)", borderRadius: 50, padding: "4px 12px" }}>{emp.dept}</span>
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: sc.color, background: sc.bg, borderRadius: 50, padding: "4px 12px" }}>{emp.status}</span>
                  </td>
                  <td style={{ padding: "12px 16px", fontSize: 13, color: "var(--color-gray-500)" }}>{emp.joined}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        onClick={() => showToast(`Editing ${emp.name}…`, "info")}
                        style={{ fontSize: 12, fontWeight: 700, background: "var(--bg-purple-info)", color: "var(--color-grape)", border: "none", borderRadius: 6, padding: "5px 12px", cursor: "pointer" }}>
                        Edit
                      </button>
                      <button
                        onClick={() => { setSelected([emp.id]); setShowDeleteConfirm(true); }}
                        style={{ fontSize: 12, fontWeight: 700, background: "var(--bg-pink-error)", color: "var(--color-bold-pink)", border: "none", borderRadius: 6, padding: "5px 12px", cursor: "pointer" }}>
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* ── Pagination ── */}
        <div style={{ background: "var(--color-white)", borderTop: "1px solid var(--bg-purple-lighter)", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, color: "var(--color-gray-500)" }}>
            Showing <b style={{ color: "var(--color-grape)" }}>{filtered.length}</b> of <b style={{ color: "var(--color-grape)" }}>{employees.length}</b> employees
          </span>
          <div style={{ display: "flex", gap: 6 }}>
            {["←", "1", "2", "3", "→"].map((p, i) => (
              <button key={i} style={{
                fontSize: 13, fontWeight: p === "1" ? 700 : 400,
                width: 32, height: 32, borderRadius: 8,
                border: p === "1" ? "none" : "1px solid var(--bg-purple-lighter)",
                background: p === "1" ? "var(--color-grape)" : "var(--color-white)",
                color: p === "1" ? "var(--color-white)" : "var(--color-grape)",
                cursor: "pointer",
              }}>{p}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Add Employee Modal ── */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(51,40,92,.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}
          onClick={() => setShowModal(false)}>
          <div style={{ background: "var(--color-white)", borderRadius: 20, padding: "36px 40px", width: 440, boxShadow: "0 24px 80px rgba(51,40,92,.25)" }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <span style={{ fontWeight: 900, fontSize: 22, color: "var(--color-grape)" }}>Add New Employee</span>
              <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "var(--color-gray-400)" }}>✕</button>
            </div>
            {[
              { label: "Full Name", key: "name", placeholder: "e.g. Aisha Patel", type: "text" },
              { label: "Job Title", key: "role", placeholder: "e.g. UX Designer", type: "text" },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: "var(--color-grape)", display: "block", marginBottom: 6, letterSpacing: .5 }}>{f.label}</label>
                <input
                  value={newEmp[f.key]} onChange={e => setNewEmp(p => ({ ...p, [f.key]: e.target.value }))}
                  placeholder={f.placeholder} type={f.type}
                  style={{ ...inputStyle, border: "1.5px solid var(--bg-purple-lighter)" }}
                />
              </div>
            ))}
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: "var(--color-grape)", display: "block", marginBottom: 6, letterSpacing: .5 }}>Department</label>
              <select value={newEmp.dept} onChange={e => setNewEmp(p => ({ ...p, dept: e.target.value }))}
                style={{ ...inputStyle, appearance: "none" }}>
                {["Engineering", "Design", "Product", "Data"].map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: "var(--color-grape)", display: "block", marginBottom: 6, letterSpacing: .5 }}>Status</label>
              <div style={{ display: "flex", gap: 8 }}>
                {["Active", "On Leave", "Inactive"].map(s => (
                  <button key={s} onClick={() => setNewEmp(p => ({ ...p, status: s }))} style={{
                    flex: 1, fontWeight: 600, fontSize: 13,
                    padding: "8px 0", borderRadius: 8, cursor: "pointer", transition: "all .15s",
                    border: `1.5px solid ${newEmp.status === s ? "var(--color-bold-pink)" : "var(--bg-purple-lighter)"}`,
                    background: newEmp.status === s ? "var(--bg-pink-lighter)" : "var(--color-white)",
                    color: newEmp.status === s ? "var(--color-bold-pink)" : "var(--color-gray-500)",
                  }}>{s}</button>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={addEmployee} style={{
                flex: 1, fontWeight: 700, fontSize: 15,
                background: "var(--color-bold-pink)", color: "var(--color-white)", border: "none", borderRadius: 50, padding: 14, cursor: "pointer",
              }}>Add Employee</button>
              <button onClick={() => setShowModal(false)} style={{
                flex: 1, fontWeight: 700, fontSize: 15,
                background: "transparent", color: "var(--color-grape)", border: "2px solid var(--color-grape)", borderRadius: 50, padding: 14, cursor: "pointer",
              }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirm Modal ── */}
      {showDeleteConfirm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(51,40,92,.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}
          onClick={() => setShowDeleteConfirm(false)}>
          <div style={{ background: "var(--color-white)", borderRadius: 20, padding: "36px 40px", width: 400, boxShadow: "0 24px 80px rgba(51,40,92,.25)" }}
            onClick={e => e.stopPropagation()}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--bg-pink-error)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 24 }}>🗑</div>
              <div style={{ fontWeight: 900, fontSize: 20, color: "var(--color-grape)", marginBottom: 8 }}>Remove {selected.length} Employee{selected.length > 1 ? "s" : ""}?</div>
              <p style={{ fontSize: 14, color: "var(--color-gray-500)", lineHeight: 1.6 }}>This action cannot be undone. The selected employee records will be permanently removed.</p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={deleteSelected} style={{ flex: 1, fontWeight: 700, fontSize: 15, background: "var(--color-bold-pink)", color: "var(--color-white)", border: "none", borderRadius: 50, padding: 14, cursor: "pointer" }}>Yes, Remove</button>
              <button onClick={() => setShowDeleteConfirm(false)} style={{ flex: 1, fontWeight: 700, fontSize: 15, background: "transparent", color: "var(--color-grape)", border: "2px solid var(--color-grape)", borderRadius: 50, padding: 14, cursor: "pointer" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toast && (
        <div style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 1001,
          background: toast.type === "error" ? "var(--bg-pink-error)" : toast.type === "info" ? "var(--bg-purple-info)" : "var(--color-grape)",
          color: toast.type === "error" ? "var(--color-bold-pink)" : toast.type === "info" ? "var(--color-grape)" : "var(--color-white)",
          border: toast.type !== "success" ? `1.5px solid ${toast.type === "error" ? "var(--color-bold-pink)" : "var(--border-purple-info)"}` : "none",
          fontWeight: 600, fontSize: 14,
          borderRadius: 12, padding: "14px 24px",
          boxShadow: "0 8px 32px rgba(51,40,92,.2)",
          display: "flex", alignItems: "center", gap: 10,
          animation: "slideUp .2s ease",
        }}>
          <span>{toast.type === "error" ? "🗑" : toast.type === "info" ? "✏️" : "✓"}</span>
          {toast.msg}
        </div>
      )}
      <style>{`@keyframes slideUp { from { transform: translateY(16px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }`}</style>

    </div>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────
const descStyle = { fontSize: 15, color: "var(--color-gray-350)", lineHeight: 1.7, marginTop: 6 };
const labelStyle = { fontSize: 12, fontWeight: 700, color: "var(--color-bold-pink)", letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 };

function SectionLabel({ children, style }) {
  return (
    <div style={{ fontWeight: 900, fontSize: 20, color: "var(--color-grape)", marginTop: 8, letterSpacing: -.3, ...style }}>
      {children}
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function StyleGuide() {
  const [active, setActive] = useState(0);

  const renderSection = () => {
    switch (active) {
      case 0: return <ColorsSection />;
      case 1: return <ColourUsageSection />;
      case 2: return <LogoSection />;
      case 3: return <PhotographySection />;
      case 4: return <TypographySection />;
      case 5: return <ButtonsSection />;
      case 6: return <FormsSection />;
      case 7: return <IconsSection />;
      case 8: return <ComponentsSection />;
      case 9: return <WebsitePatternsSection />;
      case 10: return <DesignTokensSection />;
      case 11: return <DataTableSection />;
      default: return null;
    }
  };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@100;300;400;500;700;900&display=swap');*{box-sizing:border-box;margin:0;padding:0}`}</style>
      <div style={{ minHeight: "100vh", background: "var(--bg-purple-page)" }}>

        {/* Header */}
        <div style={{ background: "var(--color-grape)", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 20px rgba(51,40,92,.3)" }}>
          <img src={LOGO_WHITE} alt="JustSolve" style={{ height: 32, display: "block", mixBlendMode: "screen" }} />
          <span style={{ fontSize: 12, fontWeight: 500, color: "var(--color-light-pink)", letterSpacing: 2.5, textTransform: "uppercase" }}>Live Style Guide · {new Date().getFullYear()}</span>
        </div>

        <div style={{ display: "flex", minHeight: "calc(100vh - 64px)" }}>
          {/* Sidebar */}
          <aside style={{ width: 220, background: "var(--color-white)", borderRight: "1px solid var(--bg-purple-lighter)", padding: "32px 0", position: "sticky", top: 64, height: "calc(100vh - 64px)", flexShrink: 0 }}>
            <div style={{ padding: "0 20px 20px", fontSize: 11, fontWeight: 700, color: "var(--color-bold-pink)", letterSpacing: 2, textTransform: "uppercase" }}>Sections</div>
            {sections.map((s, i) => (
              <button key={s} onClick={() => setActive(i)} style={{
                display: "block", width: "100%", textAlign: "left",
                fontWeight: active === i ? 700 : 400, fontSize: 14,
                color: active === i ? "var(--color-bold-pink)" : "var(--color-grape)",
                background: active === i ? "var(--bg-pink-light)" : "none",
                border: "none", borderLeft: active === i ? "3px solid var(--color-bold-pink)" : "3px solid transparent",
                padding: "12px 20px", cursor: "pointer", transition: "all .15s",
              }}>
                {s}
              </button>
            ))}

            <div style={{ margin: "32px 20px 12px", height: 1, background: "var(--bg-purple-lighter)" }} />
            <div style={{ padding: "0 20px", fontSize: 11, fontWeight: 700, color: "#33285C99", letterSpacing: 1.5 }}>BRAND COLOURS</div>
            <div style={{ display: "flex", gap: 8, padding: "12px 20px", flexWrap: "wrap" }}>
              <div title="grape: var(--color-grape)" style={{ width: 22, height: 22, borderRadius: 6, background: "var(--color-grape)", boxShadow: "0 1px 4px rgba(0,0,0,.1)" }} />
              <div title="lightPink: var(--color-light-pink)" style={{ width: 22, height: 22, borderRadius: 6, background: "var(--color-light-pink)", boxShadow: "0 1px 4px rgba(0,0,0,.1)" }} />
              <div title="boldPink: var(--color-bold-pink)" style={{ width: 22, height: 22, borderRadius: 6, background: "var(--color-bold-pink)", boxShadow: "0 1px 4px rgba(0,0,0,.1)" }} />
              <div title="white: var(--color-white)" style={{ width: 22, height: 22, borderRadius: 6, background: "var(--color-white)", border: "1px solid var(--border-light)", boxShadow: "0 1px 4px rgba(0,0,0,.1)" }} />
            </div>
          </aside>

          {/* Main content */}
          <main style={{ flex: 1, padding: "40px 48px" }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-bold-pink)", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 8 }}>JustSolve Brand Guidelines</div>
              <h1 style={{ fontWeight: 900, fontSize: 36, color: "var(--color-grape)", lineHeight: 1.1 }}>{sections[active]}</h1>
            </div>
            {renderSection()}
          </main>
        </div>
      </div>
    </>
  );
}