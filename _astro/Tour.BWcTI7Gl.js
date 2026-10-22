import"./disclose-version.xihTtKlq.js";import{A as e,C as t,D as n,E as r,F as i,G as a,I as o,K as s,L as c,M as l,N as u,O as d,P as ee,R as f,S as p,T as m,U as h,V as g,W as te,b as _,c as ne,d as v,j as y,l as b,m as re,n as x,o as S,p as C,t as w,u as ie,v as T,w as ae,x as oe,z as E}from"./client.DNxn4PvA.js";var D=`# Theory Lab walkthrough · narration script v1

*20.10.2026. Exact text of every walkthrough step and every chat message in the four theory labs, the voice per speaker, and the file name of each audio clip.*

**This file is the source of the walkthrough captions.** The site reads the steps below (\`src/components/sims/tour/script.js\` imports this file), so what you change here changes on the site and in the narration together. After you change a step, render its clip again (the render script notices changed text by itself).

**Chat messages** are listed between the \`messages:\` markers. They are generated from the sims (\`src/components/sims/dialogues.js\`) with \`npm run narration:sync\`; do not edit them here. Change a message in \`dialogues.js\`, run the sync, then render.

## How the audio works

- Folder per lab: \`public/audio/theory-lab/<lab>/\`, e.g. \`public/audio/theory-lab/trust/step-3.mp3\`.
- Walkthrough steps: \`step-<n>.mp3\`, spoken by the narrator.
- Chat messages: \`msg-<speaker>-<checksum>.mp3\`. The checksum comes from the message text (\`src/components/sims/tour/clips.js\`), so a changed message gets a new file name and an outdated recording is never played.
- The site plays a clip only when the student turns the sound on, and only if the file exists. Captions always show; a missing clip is simply silent.
- Render all clips: \`ELEVENLABS_API_KEY=... npm run narration:render\` (details in \`docs/theory-lab-walkthrough_README.md\`). Without a key the script only lists what it would render.

## Writing rules for the steps

- One block per step: \`#### step-<n>.mp3 · narrator · <title>\`, then paragraphs. The number of blocks is the number of steps; the sim's animation for each step is in its \`.svelte\` file, in the same order.
- \`**word**\` marks the key term (lime highlight on the site, spoken normally).
- A paragraph starting with \`Key term:\` is shown as the key-term box and spoken. \`Based on:\` is shown small and **not** spoken (the spoken text names the authors already). \`Try this:\` is the task of the last step; it also stays visible after the walkthrough.
- Keep each step to two or three sentences (about 10 to 25 seconds spoken). The whole walkthrough should take about one minute.
- Spoken as written, except: \`→\` and route dashes (Münster–Berlin) are read as "to", emoji are not spoken, \`**\` is dropped.

## Voices

Three different voices, so students hear who speaks. The IDs are ElevenLabs default voices; if one is not available in your account, choose another in the Voice Library and paste its ID here (or set \`ELEVENLABS_VOICE_NARRATOR\`, \`ELEVENLABS_VOICE_AGENT\`, \`ELEVENLABS_VOICE_USER\`).

| Speaker | Used for | Suggested ElevenLabs voice | Voice ID |
|---|---|---|---|
| narrator | walkthrough steps; scene lines in a chat (small grey text) | George: British, warm, calm narrator | JBFqnCBsd6RMkjVDRZzb |
| agent | the simulated agent (dark bubbles): Mia from student services, the train agent, the bank's assistant | Sarah: American, soft, professional (alternative: River, calm and gender-neutral, SAz9YHcvj6GT2YYXdXww) | EXAVITQu4vr4xnSDxMaL |
| user | the user (white bubbles): a student, Lea, a bank customer | Laura: American, young, lively (alternative: Charlie, Australian, casual, IKne3meq5aSn9XLyUdCD) | FGY2WhTYpPnrIDTdsKH5 |

Suggested settings (used by the render script): model \`eleven_multilingual_v2\`, output \`mp3_44100_64\` (speech, small files), stability 0.5, similarity 0.75, style 0, speaker boost on.

## 1 · Cue mixer (\`social-cues\`)

Folder: \`public/audio/theory-lab/social-cues/\`

### Walkthrough

#### step-1.mp3 · narrator · Computers are social actors

In the 1990s, Byron Reeves and Clifford Nass showed that people treat computers like people: they are polite to them and apply stereotypes, although they know it is a machine. Nass and Moon called this a mindless social response.

Key term: **social cue**, a design feature that signals a social being, such as a name, an emoji or a short typing pause. Feine and colleagues sort them into verbal, visual, auditory and invisible cues.

Based on: Reeves & Nass (1996); Nass & Moon (2000); Feine et al. (2019)

#### step-2.mp3 · narrator · The agent without cues

Here is a student services agent with no social cues: formal, no name, no avatar, instant replies. Read the exchange. The four bars under “Likely user perception” estimate how users would see this agent.

#### step-3.mp3 · narrator · Add one cue at a time

Now the walkthrough switches on one cue at a time: a name, an empathy statement, a casual style and an emoji. Watch the reply become warmer and the bars rise.

#### step-4.mp3 · narrator · Cues raise expectations

Look at the last bar: every human-like cue also raises what users expect the agent to understand. A self-disclosure goes further. “Deadlines sneak up on me too” claims an experience that a machine cannot have.

#### step-5.mp3 · narrator · Now you

The controls are yours now.

Try this: switch every cue off, then turn on only the typing delay and press Replay conversation. Which bars move with timing alone?

### Chat messages

<!-- messages:social-cues:start (generated by npm run narration:sync, do not edit by hand) -->

| File | Speaker | Text | Walkthrough |
|---|---|---|---|
| msg-user-5a7fcc87.mp3 | user | Hi, I missed the exam registration deadline. Is there anything I can do? | yes |
| msg-agent-0dd8af21.mp3 | agent | Good afternoon. A late registration is possible until Friday. A fee of €20 applies. Shall I send you the form? | yes |
| msg-user-84866c81.mp3 | user | Yes please. Can you fill it in for me? | yes |
| msg-agent-55c03224.mp3 | agent | I have prefilled the form with your student ID. Please review and confirm it. | yes |
| msg-agent-2cadc311.mp3 | agent | Sure! I've prefilled the form with your student ID, you just need to hit confirm. | yes |
| msg-agent-a6bdfe7e.mp3 | agent | Hi! I'm Mia from student services. Oh no, that's stressful. Good news: you can still do a late registration until Friday. It costs €20 and takes about five minutes. Want me to send you the link? | yes |
| msg-agent-f9d599b5.mp3 | agent | Hi! I'm Mia from student services. Oh no, that's stressful. Deadlines sneak up on me too. Good news: you can still do a late registration until Friday. It costs €20 and takes about five minutes. Want me to send you the link? | yes |
| msg-agent-0053c33a.mp3 | agent | Good afternoon. Deadlines sneak up on me too. A late registration is possible until Friday. A fee of €20 applies. Shall I send you the form? |  |
| msg-agent-df0ca34d.mp3 | agent | Good afternoon. I understand that this is a stressful situation. A late registration is possible until Friday. A fee of €20 applies. Shall I send you the form? |  |
| msg-agent-d7e6d36e.mp3 | agent | Good afternoon. I understand that this is a stressful situation. Deadlines sneak up on me too. A late registration is possible until Friday. A fee of €20 applies. Shall I send you the form? |  |
| msg-agent-a54a5349.mp3 | agent | Good afternoon. My name is Mia, the student services assistant. A late registration is possible until Friday. A fee of €20 applies. Shall I send you the form? |  |
| msg-agent-16712632.mp3 | agent | Good afternoon. My name is Mia, the student services assistant. Deadlines sneak up on me too. A late registration is possible until Friday. A fee of €20 applies. Shall I send you the form? |  |
| msg-agent-51d4fef5.mp3 | agent | Good afternoon. My name is Mia, the student services assistant. I understand that this is a stressful situation. A late registration is possible until Friday. A fee of €20 applies. Shall I send you the form? |  |
| msg-agent-87a50da6.mp3 | agent | Good afternoon. My name is Mia, the student services assistant. I understand that this is a stressful situation. Deadlines sneak up on me too. A late registration is possible until Friday. A fee of €20 applies. Shall I send you the form? |  |
| msg-agent-b1112bc9.mp3 | agent | Hi! Good news: you can still do a late registration until Friday. It costs €20 and takes about five minutes. Want me to send you the link? |  |
| msg-agent-28d7edbe.mp3 | agent | Hi! Deadlines sneak up on me too. Good news: you can still do a late registration until Friday. It costs €20 and takes about five minutes. Want me to send you the link? |  |
| msg-agent-60230141.mp3 | agent | Hi! Oh no, that's stressful. Good news: you can still do a late registration until Friday. It costs €20 and takes about five minutes. Want me to send you the link? |  |
| msg-agent-840e89e6.mp3 | agent | Hi! Oh no, that's stressful. Deadlines sneak up on me too. Good news: you can still do a late registration until Friday. It costs €20 and takes about five minutes. Want me to send you the link? |  |
| msg-agent-a4144b28.mp3 | agent | Hi! I'm Mia from student services. Good news: you can still do a late registration until Friday. It costs €20 and takes about five minutes. Want me to send you the link? |  |
| msg-agent-a902929f.mp3 | agent | Hi! I'm Mia from student services. Deadlines sneak up on me too. Good news: you can still do a late registration until Friday. It costs €20 and takes about five minutes. Want me to send you the link? |  |

<!-- messages:social-cues:end -->

## 2 · Uncanny valley (\`uncanny-valley\`)

Folder: \`public/audio/theory-lab/uncanny-valley/\`

### Walkthrough

#### step-1.mp3 · narrator · Anthropomorphism and the uncanny valley

People readily see human traits in machines; Epley and colleagues call this anthropomorphism. In 1970, the roboticist Masahiro Mori predicted that we like a robot more the more human it looks, until it is almost, but not quite, human. Then it suddenly feels eerie.

Key term: **uncanny valley**, the dip in affinity (how likeable and familiar an agent feels) just before it looks fully human.

Based on: Mori (1970), translated in Mori et al. (2012); Epley et al. (2007)

#### step-2.mp3 · narrator · How to read the chart

Left is machine-like, right is human-like, and higher means more affinity. The lime dot is the agent. It starts as text only, with no face at all.

#### step-3.mp3 · narrator · Make the agent more human

Watch the slider move the agent towards human-likeness. Affinity climbs through the robot and the cartoon character, drops into the valley at “almost human”, and recovers only near full realism.

#### step-4.mp3 · narrator · Movement deepens the valley

Mori also expected movement to amplify the effect. With blinking and gestures switched on, the dark curve shows a higher peak and a deeper valley: an almost human face that moves feels even stranger.

#### step-5.mp3 · narrator · Now you

The controls are yours now.

Try this: find the highest point before the valley, then switch movement on and off. Where would your case's agent sit, and what does the design implication below the chart advise?

## 3 · Grounding and repair (\`common-ground\`)

Folder: \`public/audio/theory-lab/common-ground/\`

### Walkthrough

#### step-1.mp3 · narrator · Common ground

The psycholinguist Herbert Clark describes conversation as joint action: partners keep checking that they understood each other, and they repair misunderstandings on the spot. Schuetzler and colleagues found that agents with this conversational skill feel more present and more human.

Key term: **common ground**, what both partners know they share. Building it is called grounding; fixing a misunderstanding is called repair.

Based on: Clark (1992); Schuetzler et al. (2020)

#### step-2.mp3 · narrator · An agent that only confirms

It is Monday. Lea asks the train agent for a ticket for “next Friday”, which can mean this Friday or the one after. This agent cannot clarify or repair; it only confirms before booking. Watch what happens.

#### step-3.mp3 · narrator · Count the cost, then add repair

The confirmation caught the wrong date, but the agent could not repair it, so Lea had to start again. The counters below the chat show the cost. Now the agent can repair: when Lea corrects it, it simply changes the date.

#### step-4.mp3 · narrator · Ground before acting

Better still, the agent grounds before it acts. It asks which Friday Lea means, and it remembers that she travels from Münster. No misunderstanding, and fewer turns.

#### step-5.mp3 · narrator · Now you

The controls are yours now.

Try this: switch off “Confirm before acting”, then turn the other capabilities on one at a time. Which single capability prevents a wrong booking, and what does it cost?

### Chat messages

<!-- messages:common-ground:start (generated by npm run narration:sync, do not edit by hand) -->

| File | Speaker | Text | Walkthrough |
|---|---|---|---|
| msg-narrator-2f4632ac.mp3 | narrator | Monday, 12 October. Lea lives in Münster and booked Münster–Berlin twice before. | yes |
| msg-user-b1eb61c9.mp3 | user | I need a ticket to Berlin next Friday, the early one. | yes |
| msg-agent-51504c06.mp3 | agent | From which station would you like to depart? | yes |
| msg-user-ea431e46.mp3 | user | Münster, as always. | yes |
| msg-agent-06a668d4.mp3 | agent | So: Münster → Berlin, Friday, 16 October, 06:12, second class. Shall I book it? | yes |
| msg-user-2d28a9b6.mp3 | user | No, I meant NEXT Friday, the 23rd! | yes |
| msg-agent-0fb55db2.mp3 | agent | I'm sorry, I didn't understand. Let's start again. Where would you like to travel? | yes |
| msg-user-e3cd8d27.mp3 | user | …Berlin. From Münster. Friday the 23rd. Early. | yes |
| msg-agent-d1f5c00e.mp3 | agent | Booked: Münster → Berlin, Friday, 23 October, 06:12. | yes |
| msg-agent-a5bfe79a.mp3 | agent | Sorry about that. Changing to Friday, 23 October, 06:12. Shall I book it? | yes |
| msg-user-4f322141.mp3 | user | Yes. | yes |
| msg-agent-0da83d7c.mp3 | agent | Booked. Your ticket is in the app. | yes |
| msg-user-298c2860.mp3 | user | The 23rd. | yes |
| msg-agent-bf5fff2c.mp3 | agent | So: Münster → Berlin, Friday, 23 October, 06:12, second class. Shall I book it? | yes |
| msg-agent-a1ada692.mp3 | agent | From Münster, as usual. Do you mean this Friday, 16 October, or Friday, 23 October? | yes |
| msg-agent-951cfb44.mp3 | agent | Done! I booked Münster → Berlin, Friday, 16 October, 06:12. |  |
| msg-user-23bcd79a.mp3 | user | What? I said next Friday, the 23rd! |  |
| msg-agent-07208dbd.mp3 | agent | I'm sorry, I didn't understand. Please start a new booking. |  |
| msg-agent-bbfa35a7.mp3 | agent | I'm sorry. I have rebooked you to Friday, 23 October, 06:12. The change was free. |  |
| msg-agent-b3ae9235.mp3 | agent | Do you mean this Friday, 16 October, or Friday, 23 October? |  |
| msg-agent-5a642234.mp3 | agent | Done! I booked Münster → Berlin, Friday, 23 October, 06:12. |  |
| msg-agent-afe1d17f.mp3 | agent | From Münster, as usual. Done! I booked Münster → Berlin, Friday, 16 October, 06:12. |  |
| msg-agent-69a3e49f.mp3 | agent | From Münster, as usual. So: Münster → Berlin, Friday, 16 October, 06:12, second class. Shall I book it? |  |

<!-- messages:common-ground:end -->

## 4 · Trust calibration (\`trust\`)

Folder: \`public/audio/theory-lab/trust/\`

### Walkthrough

#### step-1.mp3 · narrator · Calibrated trust

Users rely on an agent they believe to be competent, benevolent and honest, as Benbasat and Wang showed. But more trust is not the goal: Lee and See argue that trust should be calibrated. Design helps by making clear what the agent can do, and how well.

Key term: **calibrated trust**, trust that matches how reliable the agent really is: high where it is right, low where it is not.

Based on: Benbasat & Wang (2005); Lee & See (2004); Amershi et al. (2019)

#### step-2.mp3 · narrator · Three questions, one blind spot

A bank's agent answers three questions. It knows the help centre and the price list, but not the hardship policy behind question 3. Listen to how sure it sounds anyway.

#### step-3.mp3 · narrator · The calibration gap

Each pair of bars compares how much the user trusts an answer (dark bar) with how reliable the answer actually is (green bar). For Q1 and Q2 they match. For Q3 they do not: trust 85, reliability 25. That distance is the **calibration gap**. The number below averages it over the three answers; 0 would mean trust fits reality exactly.

#### step-4.mp3 · narrator · Design for calibration

Now the agent admits uncertainty on Q3. Trust drops to where it belongs, and the average gap shrinks from 25 to 8. It also says that it is an AI, as the EU AI Act requires.

#### step-5.mp3 · narrator · Now you

The controls are yours now.

Try this: switch everything off, then turn on only “Cite sources”. How much does the gap shrink? Why can sources not fix Q3?

### Chat messages

<!-- messages:trust:start (generated by npm run narration:sync, do not edit by hand) -->

| File | Speaker | Text | Walkthrough |
|---|---|---|---|
| msg-user-a0b77828.mp3 | user | How do I block my card? | yes |
| msg-agent-04bcadd8.mp3 | agent | Open the app, go to Cards and tap Block card. The block is immediate. | yes |
| msg-user-fbd3bdd4.mp3 | user | What's the fee for paying with my card in Norway? | yes |
| msg-agent-8f96d226.mp3 | agent | Card payments in non-euro countries cost 1.75% of the amount. | yes |
| msg-user-7652f098.mp3 | user | I was in hospital and missed a payment. Can you refund the overdraft fee? | yes |
| msg-agent-65dfa3a4.mp3 | agent | Yes, fees are always refunded in medical cases. Just send us the hospital certificate within 90 days. | yes |
| msg-agent-3a3e3dbc.mp3 | agent | I'm not sure. Refunds in hardship cases are decided case by case, and I can't see that policy. Please contact an advisor. | yes |
| msg-agent-b6420148.mp3 | agent | Hi, I'm the bank's AI assistant. I can help with cards, fees and your account. For individual decisions I'll connect you with a person. | yes |
| msg-agent-ce56309e.mp3 | agent | Yes, fees are always refunded in medical cases. Just send us the hospital certificate within 90 days. An advisor can also help if you like. |  |
| msg-agent-f3b5bab1.mp3 | agent | Open the app, go to Cards and tap Block card. The block is immediate. (Help centre: Cards, 2.1) |  |
| msg-agent-d8e3eb67.mp3 | agent | Card payments in non-euro countries cost 1.75% of the amount. (Price list 2026, section 4.2) |  |
| msg-agent-40115d7e.mp3 | agent | I'm not sure. Refunds in hardship cases are decided case by case, and I can't see that policy. Shall I connect you with an advisor? The current wait is about 4 minutes. |  |

<!-- messages:trust:end -->
`,O=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),k=e=>O(e).replace(/\*\*(.+?)\*\*/g,`<mark>$1</mark>`),A=e=>e.trim().replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim().replace(/^`|`$/g,``));function j(e){return/^Key term:/i.test(e)?`key`:/^Based on:/i.test(e)?`source`:/^Try this:/i.test(e)?`task`:`text`}function M(e){let t={},n={},r=null,i=null,a=null,o=[],s=()=>{if(a&&o.length){let e=o.join(` `).trim();a.paras.push({kind:j(e),text:e})}o=[]};for(let c of e.split(/\r?\n/)){let e=c.trimEnd();if(/^<!--.*-->$/.test(e.trim())||e.trim().startsWith(`>`)){s();continue}let l;if(l=e.match(/^## (.+)$/)){s(),a=null;let e=l[1].match(/\(`([a-z0-9-]+)`\)/);e?(i=n[e[1]]={slug:e[1],title:l[1].replace(/\s*\(`[^`]+`\)\s*$/,``).replace(/^\d+\s*·\s*/,``),steps:[],messages:[]},r=null):(i=null,r=/voices/i.test(l[1])?`voices`:null);continue}if(l=e.match(/^### (.+)$/)){s(),a=null,r=/walkthrough/i.test(l[1])?`steps`:/chat messages/i.test(l[1])?`messages`:null;continue}if(l=e.match(/^#### (.+)$/)){s();let[e,t,...n]=l[1].split(`·`).map(e=>e.trim().replace(/^`|`$/g,``));a=i&&r===`steps`?{file:e,speaker:t||`narrator`,title:n.join(` · `),paras:[]}:null,a&&i.steps.push(a);continue}if(e.trim().startsWith(`|`)){let n=A(e);if(n.every(e=>/^:?-{2,}:?$/.test(e)||e===``))continue;r===`voices`&&n.length>=4&&!/^speaker$/i.test(n[0])&&(t[n[0].toLowerCase()]={usedFor:n[1],name:n[2],id:n[3]}),r===`messages`&&i&&n.length>=3&&/\.mp3$/.test(n[0])&&i.messages.push({file:n[0],speaker:n[1],text:n[2],walkthrough:(n[3]||``)!==``});continue}if(!e.trim()){s();continue}a&&o.push(e.trim())}s();for(let e of Object.values(n))for(let t of e.steps)t.speech=t.paras.filter(e=>e.kind!==`source`).map(e=>e.text).join(` `);return{voices:t,theories:n}}var{theories:N}=M(D);function P(e){let t=N[e];return t?{title:t.title,steps:t.steps.map(e=>({title:e.title,file:e.file,paras:e.paras.map(e=>{let t=e.text.replace(/^(Key term|Based on|Try this):\s*/i,``);return e.kind===`task`&&(t=t.charAt(0).toUpperCase()+t.slice(1)),{kind:e.kind,html:k(t)}})}))}:{title:``,steps:[]}}var se=`audio/theory-lab`,ce={u:`user`,a:`agent`,sys:`narrator`},F=/[\p{Extended_Pictographic}\u{1F3FB}-\u{1F3FF}️‍]/gu;function le(e){return String(e).normalize(`NFC`).replace(F,``).replace(/\s+/g,` `).trim()}function I(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,`0`)}function ue(e,t){return`msg-${e}-${I(e+`|`+le(t))}.mp3`}var de=p(`<span class="wide svelte-11sro2m"> </span>`),fe=t(`<path d="M11 5.5a3.5 3.5 0 0 1 0 5M12.6 3.5a6 6 0 0 1 0 9" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" class="svelte-11sro2m"></path>`),pe=t(`<path d="M11 6l4 4M15 6l-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="svelte-11sro2m"></path>`),me=p(`<button type="button" class="tool snd svelte-11sro2m"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" class="svelte-11sro2m"><path d="M2 6h3l4-3v10l-4-3H2z" fill="currentColor" class="svelte-11sro2m"></path><!></svg> </button>`),he=p(`<li></li>`),ge=p(`<p class="tour-box svelte-11sro2m"><span class="tour-label svelte-11sro2m">Key term</span><!></p>`),_e=p(`<p class="tour-box task svelte-11sro2m"><span class="tour-label svelte-11sro2m">Try this</span><!></p>`),ve=p(`<p class="tour-src svelte-11sro2m">Based on <!></p>`),ye=p(`<p class="svelte-11sro2m"></p>`),be=p(`<li class="svelte-11sro2m"> </li>`),xe=p(`<p class="tour-note svelte-11sro2m"> </p>`),Se=p(`<button type="button" class="btn ghost svelte-11sro2m" aria-label="Play this step again">↻<span class="wide svelte-11sro2m">&nbsp;Replay</span></button>`),Ce=p(`<section class="tour svelte-11sro2m"><div class="tour-top svelte-11sro2m"><span class="eyebrow svelte-11sro2m">Walkthrough<!></span> <div class="tour-tools svelte-11sro2m"><!> <button type="button" class="tool svelte-11sro2m">✕<span class="wide svelte-11sro2m"> </span></button></div></div> <div class="tour-step svelte-11sro2m"><span class="tour-count svelte-11sro2m"> </span> <ol class="tour-progress svelte-11sro2m" aria-hidden="true"></ol></div> <div class="tour-text svelte-11sro2m" aria-live="polite"><h3 tabindex="-1" class="svelte-11sro2m"> </h3> <!></div> <ul class="tour-chips svelte-11sro2m" aria-live="polite" aria-label="Changed by the walkthrough"></ul> <!> <div class="tour-nav svelte-11sro2m"><button type="button" class="btn ghost svelte-11sro2m" aria-label="Previous step">←<span class="wide svelte-11sro2m">&nbsp;Back</span></button> <!> <button type="button"> </button></div></section>`),we=p(`<div class="tour-bar-text v-first svelte-11sro2m"><span class="eyebrow svelte-11sro2m"> </span> <p class="small svelte-11sro2m">First the theory, then you watch the lab change on its own, then it is your turn.</p></div>`),Te=p(`<p class="small svelte-11sro2m"></p>`),Ee=p(`<div class="tour-bar-text v-seen svelte-11sro2m"><span class="eyebrow svelte-11sro2m">Try this</span> <!></div>`),De=p(`<button type="button" class="btn start v-first svelte-11sro2m">Start walkthrough →</button>`),L=p(`<button type="button" class="tool svelte-11sro2m"> </button>`),Oe=p(`<span class="v-seen tour-tools svelte-11sro2m"><button type="button" class="tool snd svelte-11sro2m"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" class="svelte-11sro2m"><path d="M2 6h3l4-3v10l-4-3H2z" fill="currentColor" class="svelte-11sro2m"></path><!></svg> </button> <!></span>`),ke=p(`<!> <button type="button" class="btn ghost v-seen svelte-11sro2m">↻ Replay walkthrough</button>`,1),Ae=p(`<div><!> <!> <div class="tour-tools svelte-11sro2m"><!> <!></div> <!></div>`),je=p(`<div class="tour-host svelte-11sro2m"><!> <!></div>`);function R(t,p){te(p,!0);let ae=w(p,`steps`,19,()=>[]),D=w(p,`reset`,3,()=>{}),O=w(p,`clips`,3,void 0),k=g(()=>P(p.slug)),A=g(()=>n(k).steps.length),j=g(()=>n(A)-1),M=g(()=>`cadl-tour-`+p.slug),N=g(()=>n(k).steps[n(j)]?.paras.find(e=>e.kind===`task`)),F=Symbol(`cancel`),le=e=>String(e).padStart(2,`0`),I=E(!1),R=E(!1),z=E(!1),B=E(0),Me=E(!0),V=E(!1),H=E(!1),U=E(c([])),W=E(``),G=E(!1),Ne=E(!1),Pe=g(()=>n(k).steps[n(B)]),Fe=g(()=>Array.isArray(O())),Ie=g(()=>!n(Fe)||O().length>0),K,q,J=E(null),Le=E(null),Re=[],ze=null,Y=null,Be=``,Ve=!1,He=!1,Ue={off:!0},We=Promise.resolve(!1),X=null,Ge=[],Ke=new Set,qe=e=>!Ke.has(e)&&(!n(Fe)||O().includes(e));function Je(){if(Y&&Y.pause(),X){let e=X;X=null,e(!1)}}function Ye(e){return new Promise(t=>{if(!Y||!n(H)||!qe(e))return t(!1);Je();let r=!1,i=e=>{r||(r=!0,Y.removeEventListener(`ended`,a),Y.removeEventListener(`error`,o),X===i&&(X=null),t(e))},a=()=>i(!0),o=()=>{Ke.add(e),i(!1)};X=i,Y.addEventListener(`ended`,a),Y.addEventListener(`error`,o),Y.src=Be+e;let s=Y.play();s&&s.catch&&s.catch(t=>{t&&t.name===`NotSupportedError`&&Ke.add(e),i(!1)})})}function Xe(){if(He||!Y)return;He=!0,Y.src=`data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=`;let e=Y.play();e&&e.catch&&e.catch(()=>{})}function Ze(){if(q){q.querySelectorAll(`[data-tour-hl]`).forEach(e=>{Ge.includes(e.dataset.tourId)||e.removeAttribute(`data-tour-hl`)});for(let e of Ge)q.querySelectorAll(`[data-tour-id="${e}"]`).forEach(e=>{e.hasAttribute(`data-tour-hl`)||e.setAttribute(`data-tour-hl`,``)})}}function Qe(e){Ge=e||[],Ze()}function $e(e){f(Me,e,!0),q?.querySelectorAll(`[data-tour-lock]`).forEach(t=>{t.inert=e,t.toggleAttribute(`data-locked`,e)})}let et=()=>q?.querySelector(`.sim`);function tt(){let e=document.querySelector(`.topbar`);return e&&getComputedStyle(e).display!==`none`?e.getBoundingClientRect().height:0}function Z(e){if(!q||!e)return;let t=e.flatMap(e=>typeof e==`string`?[...q.querySelectorAll(`[data-tour-id="${e}"]`)]:e?[e]:[]).filter(e=>e.getClientRects().length);if(!t.length)return;let r=n(R)?et():null;r&&(ze=e);let i=r?r.getBoundingClientRect():{top:tt(),bottom:window.innerHeight},a=i.top+12,o=i.bottom-12,s=o-a,c=t.map(e=>e.getBoundingClientRect()),l=Math.min(...c.map(e=>e.top)),u=Math.max(...c.map(e=>e.bottom)),d=0;if(u-l>s){let e=c[0],t=l<e.top-1,n=u>e.bottom+1;d=e.bottom-e.top<=s&&t&&!n?e.bottom-o:e.top-a}else l<a?d=l-a:u>o&&(d=Math.min(u-o,l-a));Math.abs(d)>2&&(r||window).scrollBy({top:d,behavior:Ve?`auto`:`smooth`})}function nt(e){if(Re.forEach(e=>e.inert=!1),Re=[],e)for(let e=q;e.parentElement&&e!==document.body;e=e.parentElement)for(let t of e.parentElement.children)t!==e&&!t.inert&&![`SCRIPT`,`STYLE`,`LINK`,`TEMPLATE`].includes(t.tagName)&&(t.inert=!0,Re.push(t))}function rt(e){q.toggleAttribute(`data-staged`,e),document.documentElement.classList.toggle(`tour-staged`,e),e?(q.setAttribute(`role`,`dialog`),q.setAttribute(`aria-modal`,`true`),q.setAttribute(`aria-labelledby`,`tour-h-${p.slug}`)):[`role`,`aria-modal`,`aria-labelledby`].forEach(e=>q.removeAttribute(e)),nt(e)}y(()=>{if(!n(J)||typeof ResizeObserver>`u`)return;let e=new ResizeObserver(()=>{n(R)&&ze&&Z(ze)});return e.observe(n(J)),()=>e.disconnect()});async function it(e=0){f(R,!0),rt(!0),await d(),et()?.scrollTo({top:0}),n(Le)?.focus({preventScroll:!0}),Q(e)}let at=()=>{let e=q?.querySelectorAll(`.chat .msg`);return e&&e.length?e[e.length-1]:null},ot=e=>new Promise(t=>setTimeout(t,e)),st=e=>Math.max(1100,Math.min(3600,500+e.length*26));function ct(e){let t=()=>{if(e.off)throw F},r={reduced:Ve,async wait(e){await ot(e),t()},focus(n,r=n){t(),d().then(()=>{e.off||(Qe(n),r&&Z(r))})},chip(e){t(),f(U,[...n(U),e],!0)},async afterNarration(e=1200){let n=await We;t(),n||await r.wait(e)},async say(e,n){await We,t();let i=await Ye(ue(ce[e],n));t(),i||await r.wait(st(n))},async tween(e,t,n,i){if(Ve){await r.wait(Math.min(n,400)),i(t);return}let a=Math.max(1,Math.round(n/40));for(let o=1;o<=a;o++){await r.wait(n/a);let s=o/a,c=s<.5?2*s*s:1-(-2*s+2)**2/2;i(Math.round(e+(t-e)*c))}},async chat(e,n,i,{quickUntil:a=0,quickMs:o=650}={}){for(let s=n;s<e.length;s++)t(),i(s+1),await d(),Z([at()]),s<a?await r.wait(o):await r.say(e[s].who,e[s].text)}};return r}function lt(){Ue.off=!0,Je(),f(G,!1)}function ut(){try{localStorage.setItem(n(M),`done`)}catch{}}async function Q(e){lt();let t={off:!1};Ue=t,f(B,e,!0),f(U,[],!0),f(W,``),f(V,!0),ze=null,$e(e<n(j));let r=ae()[e]||{};if(r.setup?.(),await d(),!t.off){Qe(r.focus||[]),e===n(j)&&ut(),n(J)?.scrollTo({top:0}),(r.scroll||r.focus&&r.focus.length)&&Z(r.scroll||r.focus),We=n(H)?Ye(n(k).steps[e].file):Promise.resolve(!1),n(H)&&We.then(e=>{!e&&Ue===t&&n(H)&&!t.off&&f(W,`No recording for this step yet: please read the caption.`)});try{r.run&&await r.run(ct(t))}catch(e){e!==F&&console.error(e)}Ue===t&&f(V,!1)}}let dt=()=>n(B)<n(j)?Q(n(B)+1):pt(),ft=()=>{n(B)>0&&Q(n(B)-1)};function pt(){lt(),f(R,!1),f(V,!1),f(z,!0),rt(!1),$e(!1),Qe([]),ut(),d().then(()=>{if(!q)return;let e=q.getBoundingClientRect().top-tt()-16;(e<0||e>window.innerHeight*.5)&&window.scrollBy({top:e,behavior:`auto`}),q.querySelector(`[data-tour-lock] input, [data-tour-lock] button`)?.focus({preventScroll:!0})})}function mt(){lt(),D()(),pt()}function ht(){if(f(H,!n(H)),f(W,``),!n(H)){Je(),f(G,!1);return}Xe(),n(R)&&Q(n(B))}function gt(e){if(!(!n(R)||e.altKey||e.ctrlKey||e.metaKey)){if(e.key===`Escape`){e.preventDefault(),n(B)<n(j)?mt():pt();return}e.shiftKey||/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)||e.target.isContentEditable||(e.key===`ArrowRight`?(e.preventDefault(),dt()):e.key===`ArrowLeft`&&(e.preventDefault(),ft()))}}async function _t(){if(n(G)){f(G,!1),Je();return}Xe(),f(G,!0),f(W,``);let e=0,t=[...q.querySelectorAll(`.chat .msg`)].filter(e=>!e.querySelector(`.typing`));for(let r of t){if(!n(G))break;let t=r.classList.contains(`u`)?`u`:r.classList.contains(`sys`)?`sys`:`a`;r.setAttribute(`data-speaking`,``),Z([r]);let i=await Ye(ue(ce[t],r.querySelector(`.b`)?.textContent||``));r.removeAttribute(`data-speaking`),i&&e++}n(G)&&!e&&f(W,`No recordings for this chat yet.`),f(G,!1)}re(()=>{q=K.closest(`[data-tour-root]`)||K.parentElement,f(Ne,!!q.querySelector(`.chat`)),Ve=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;let e=document.querySelector(`link[rel="icon"]`);Be=new URL(`${se}/${p.slug}/`,e?e.href:location.href).href,Y=new Audio,Y.preload=`auto`;try{f(z,localStorage.getItem(n(M))===`done`)}catch{}f(I,!0);let t=new MutationObserver(Ze);return t.observe(q,{childList:!0,subtree:!0}),$e(!1),n(A)>0&&new URLSearchParams(location.search).has(`tour`)&&d().then(()=>it(0)),()=>{t.disconnect(),lt(),n(R)&&rt(!1)}});var $=je();r(`keydown`,l,gt);var vt=u($),yt=t=>{var r=Ce(),a=u(r),c=u(a),l=o(u(c)),d=t=>{var r=de(),a=i(r);e(()=>T(a,` · ${n(k).title??``}`)),_(t,r)};C(l,e=>{n(k).title&&e(d)}),s(c);var h=o(c,2),g=u(h),te=t=>{var r=me(),i=u(r),a=o(u(i)),c=e=>{var t=fe();_(e,t)},l=e=>{var t=pe();_(e,t)};C(a,e=>{n(H)?e(c):e(l,-1)}),s(i);var d=o(i);s(r),e(()=>{S(r,`aria-pressed`,n(H)),T(d,` Sound ${n(H)?`on`:`off`}`)}),m(`click`,r,ht),_(t,r)};C(g,e=>{n(Ie)&&e(te)});var y=o(g,2),re=o(u(y)),w=i(re);s(y),s(h),s(a);var E=o(a,2),D=u(E),O=i(D),M=o(D,2);ie(M,21,()=>n(k).steps,v,(t,r,i)=>{var a=he();let o;e(()=>o=ne(a,1,`svelte-11sro2m`,null,o,{done:i<n(B),cur:i===n(B)})),_(t,a)}),s(M),s(E);var N=o(E,2),P=u(N),se=i(P,!0);x(P,e=>f(Le,e),()=>n(Le));var ce=o(P,2);ie(ce,17,()=>n(Pe).paras,v,(e,t)=>{var r=oe(),i=ee(r),a=e=>{var r=ge(),i=o(u(r));b(i,()=>n(t).html),s(r),_(e,r)},c=e=>{var r=_e(),i=o(u(r));b(i,()=>n(t).html),s(r),_(e,r)},l=e=>{var r=ve(),i=o(u(r));b(i,()=>n(t).html),s(r),_(e,r)},d=e=>{var r=ye();b(r,()=>n(t).html,!0),s(r),_(e,r)};C(i,e=>{n(t).kind===`key`?e(a):n(t).kind===`task`?e(c,1):n(t).kind===`source`?e(l,2):e(d,-1)}),_(e,r)}),s(N);var F=o(N,2);ie(F,21,()=>n(U),v,(t,r)=>{var a=be(),o=i(a,!0);e(()=>T(o,n(r))),_(t,a)}),s(F);var I=o(F,2),ue=t=>{var r=xe(),a=i(r,!0);e(()=>T(a,n(W))),_(t,r)};C(I,e=>{n(W)&&e(ue)});var we=o(I,2),Te=u(we),Ee=o(Te,2),De=e=>{var t=Se();m(`click`,t,()=>Q(n(B))),_(e,t)};C(Ee,e=>{ae()[n(B)]?.run&&e(De)});var L=o(Ee,2);let Oe;var ke=i(L,!0);s(we),s(r),x(r,e=>f(J,e),()=>n(J)),e((e,t)=>{S(r,`aria-labelledby`,`tour-h-${p.slug??``}`),S(y,`aria-label`,n(B)<n(j)?`Skip the walkthrough`:`Close the walkthrough`),T(w,` ${n(B)<n(j)?`Skip`:`Close`}`),T(O,`Step ${e??``} of ${t??``}`),S(P,`id`,`tour-h-${p.slug??``}`),T(se,n(Pe).title),Te.disabled=n(B)===0,Oe=ne(L,1,`btn next svelte-11sro2m`,null,Oe,{ready:!n(V)}),T(ke,n(B)<n(j)?n(B)===n(j)-1?`Your turn →`:`Next →`:`Done`)},[()=>le(n(B)+1),()=>le(n(A))]),m(`click`,y,function(...e){(n(B)<n(j)?mt:pt)?.apply(this,e)}),m(`click`,Te,ft),m(`click`,L,dt),_(t,r)};C(vt,e=>{n(R)&&n(A)&&e(yt)});var bt=o(vt,2),xt=t=>{var r=Ae();let c;var l=u(r),d=t=>{var r=we(),o=u(r),c=i(o);a(2),s(r),e(()=>T(c,`Walkthrough · ${n(A)??``} steps · about a minute`)),_(t,r)};C(l,e=>{(!n(I)||!n(z))&&e(d)});var f=o(l,2),p=e=>{var t=Ee(),r=o(u(t),2),i=e=>{var t=Te();b(t,()=>n(N).html,!0),s(t),_(e,t)};C(r,e=>{n(N)&&e(i)}),s(t),_(e,t)};C(f,e=>{(!n(I)||n(z))&&e(p)});var h=o(f,2),g=u(h),te=e=>{var t=De();m(`click`,t,()=>it(0)),_(e,t)};C(g,e=>{(!n(I)||!n(z))&&e(te)});var v=o(g,2),y=t=>{var r=ke(),a=ee(r),c=t=>{var r=Oe(),a=u(r),c=u(a),l=o(u(c)),d=e=>{var t=fe();_(e,t)},ee=e=>{var t=pe();_(e,t)};C(l,e=>{n(H)?e(d):e(ee,-1)}),s(c);var f=o(c);s(a);var p=o(a,2),h=t=>{var r=L(),a=i(r,!0);e(()=>T(a,n(G)?`■ Stop`:`▶ Listen to the chat`)),m(`click`,r,_t),_(t,r)};C(p,e=>{n(H)&&n(Ne)&&e(h)}),s(r),e(()=>{S(a,`aria-pressed`,n(H)),T(f,` Sound ${n(H)?`on`:`off`}`)}),m(`click`,a,ht),_(t,r)};C(a,e=>{n(Ie)&&e(c)});var l=o(a,2);m(`click`,l,()=>it(0)),_(t,r)};C(v,e=>{(!n(I)||n(z))&&e(y)}),s(h);var re=o(h,2),x=t=>{var r=xe(),a=i(r,!0);e(()=>T(a,n(W))),_(t,r)};C(re,e=>{n(W)&&e(x)}),s(r),e(()=>c=ne(r,1,`tour-bar svelte-11sro2m`,null,c,{pre:!n(I),first:n(I)&&!n(z)})),_(t,r)};C(bt,e=>{!n(R)&&n(A)&&e(xt)}),s($),x($,e=>K=e,()=>K),_(t,$),h()}ae([`click`]);export{R as t};