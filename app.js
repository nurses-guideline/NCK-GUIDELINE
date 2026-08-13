// DATA - 2 questions each
const codes = { "1251":"p1k","2272":"p1k","5712":"p1k", "2029":"p2k","4537":"p2k","8835":"p2k","1675":"p2k","1273":"p2k", "3333":"p1b", "4444":"p2b","2945":"t1k","5535":"t1k", "3535":"t1k","6866":"t2k","7651":"t2k","4096":"t2k","6610":"t2k","6104":"t1b","8517":"t1b","7063":"t1b","4309":"t1b","4917":"t2b","3643":"t2b","3063":"t2b","8561":"t2b" };
const banks = {
  revision: {
    "Med-Surg": [
      // MED-SURG RESPIRATORY - 20 QUESTIONS NCK FORMAT
{
  q: "1. A patient with pneumonia develops a respiratory rate of 32, SpO2 88% on room air, and restlessness. What is the nurse's FIRST priority action?",
  options: [
    "Administer oxygen via nasal cannula at 2L/min",
    "Notify the physician immediately",
    "Assess lung sounds and obtain vital signs",
    "Encourage coughing and deep breathing"
  ],
  ans: 0,
  rationale: "NCK tests 'first action' in emergencies. This patient shows hypoxia: RR>30, SpO2<90%, AMS. The ABC principle applies: Airway/Breathing first. Giving O2 addresses the immediate life threat of hypoxia before calling the doctor. Assessing first wastes time when SpO2 is critical. Option B comes after stabilizing."
},
{
  q: "2. Which assessment finding requires IMMEDIATE intervention in a patient with COPD?",
  options: [
    "Barrel chest",
    "Pursed-lip breathing",
    "Cherry-red lips and confusion",
    "Use of accessory muscles"
  ],
  ans: 2,
  rationale: "This is the 'TRIAD TRICKY ONE'. Cherry-red lips + confusion = CO2 narcosis/respiratory failure in COPD patients. COPD patients are CO2 retainers. O2 can worsen CO2 retention, but hypoxia + AMS is more dangerous. Barrel chest, pursed-lip, accessory muscles are expected chronic findings. Cherry-red + confusion signals acute deterioration needing immediate O2 titration and ABGs."
},
{
  q: "3. A nurse is caring for a patient post-thoracotomy with chest tubes. Which finding indicates the chest tube is functioning properly?",
  options: [
    "Continuous bubbling in water seal chamber",
    "Fluctuation in water seal chamber with respiration",
    "Clamping the tube every 2 hours",
    "No drainage in collection chamber"
  ],
  ans: 1,
  rationale: "Tidal fluctuation/waterseal fluctuation = patent system and negative pressure. Continuous bubbling in water seal = AIR LEAK. Intermittent bubbling in suction chamber is normal. Never clamp routinely. No drainage can occur but fluctuation is the key sign of patency. NCK loves chest tube mechanics."
},
{
  q: "4. The best position to promote drainage of lower lobe secretions is:",
  options: [
    "Supine",
    "Prone",
    "Semi-Fowler's with turn to affected side",
    "Trendelenburg with affected side up"
  ],
  ans: 3,
  rationale: "Postural drainage principle: 'drainage by gravity'. For lower lobes, use Trendelenburg 15-30 degrees. Affected side up drains the lower lobe. Supine drains upper lobes. NCK often tests postural drainage positions. Remember: Upper lobes = semi-fowler, Lower lobes = trendelenburg."
},
{
  q: "5. A patient with TB is started on RIPE therapy. Which medication requires monitoring for orange discoloration of body fluids?",
  options: [
    "Isoniazid",
    "Rifampin",
    "Pyrazinamide", 
    "Ethambutol"
  ],
  ans: 1,
  rationale: "RIPE = Rifampin, Isoniazid, Pyrazinamide, Ethambutol. Rifampin stains tears, urine, sweat, sputum orange-red. This is harmless but patients must be warned to avoid contact lenses. Isoniazid causes hepatotoxicity/peripheral neuropathy. Ethambutol causes optic neuritis. Pyrazinamide causes gout. NCK tests patient teaching."
},
{
  q: "6. Which ABG result is expected in a patient with uncompensated respiratory acidosis?",
  options: [
    "pH 7.30, PaCO2 50, HCO3 24",
    "pH 7.50, PaCO2 30, HCO3 24", 
    "pH 7.30, PaCO2 40, HCO3 18",
    "pH 7.50, PaCO2 40, HCO3 30"
  ],
  ans: 0,
  rationale: "Resp Acidosis = CO2 retention. Rule: pH opposite CO2, CO2 opposite HCO3 in compensation. Here pH low 7.30, CO2 high 50, HCO3 normal 24 = uncompensated. Option C is metabolic acidosis. Option B/D is alkalosis. NCK expects you to interpret ABGs for respiratory failure in COPD/pneumonia."
},
{
  q: "7. The priority nursing diagnosis for a patient with asthma during an acute attack is:",
  options: [
    "Risk for infection",
    "Ineffective airway clearance", 
    "Anxiety",
    "Imbalanced nutrition"
  ],
  ans: 1,
  rationale: "During acute attack, airway obstruction from bronchospasm + mucus is the immediate threat. While anxiety is present, it is secondary. Use ABC: Airway first. Ineffective airway clearance covers bronchospasm, mucus, and impaired gas exchange. NCK prioritizes physiological needs over psychosocial in acute phase."
},
{
  q: "8. A patient is on mechanical ventilation. High pressure alarm sounds. Which is the FIRST action?",
  options: [
    "Suction the patient",
    "Check for kinked tubing",
    "Administer PRN bronchodilator",
    "Call respiratory therapy"
  ],
  ans: 1,
  rationale: "High pressure = obstruction. Check easiest/most common causes first: kinked tubing, patient biting tube, coughing. Before suctioning, rule out external causes. This follows 'assess before intervene' but in vent alarms, immediate safety check of circuit comes first. NCK tests vent troubleshooting."
},
{
  q: "9. Which statement by a patient with emphysema indicates understanding of pursed-lip breathing?",
  options: [
    "I will inhale through my mouth and exhale through my nose",
    "I will inhale through my nose and exhale through pursed lips",
    "I will take short rapid breaths",
    "I will hold my breath for 10 seconds"
  ],
  ans: 1,
  rationale: "Pursed-lip breathing: Inhale through nose 2 counts, exhale slowly through pursed lips 4 counts. It prevents airway collapse, prolongs expiration, reduces air trapping in COPD. Option A is reverse. NCK tests patient education for chronic disease self-management."
},
{
  q: "10. A patient with pleural effusion is scheduled for thoracentesis. What is the most important post-procedure assessment?",
  options: [
    "Monitor for bleeding at puncture site",
    "Assess for signs of pneumothorax",
    "Encourage fluid intake",
    "Keep patient NPO for 4 hours"
  ],
  ans: 1,
  rationale: "Most common complication of thoracentesis is pneumothorax from lung puncture. Monitor RR, SpO2, lung sounds, chest pain, dyspnea for 24hrs. Bleeding is less common. No NPO needed. NCK loves procedure complications. Think 'what can kill the patient first'."
},
{
  q: "11. Which medication is the drug of choice for acute bronchospasm in asthma?",
  options: [
    "Albuterol",
    "Fluticasone",
    "Montelukast",
    "Prednisone"
  ],
  ans: 0,
  rationale: "SABA = Short Acting Beta Agonist. Albuterol is rescue inhaler for acute bronchospasm. Works in 5min. Fluticasone = controller steroid. Montelukast = leukotriene inhibitor for prevention. Prednisone = systemic steroid for severe attacks but not first line. NCK distinguishes rescue vs controller."
},
{
  q: "12. The nurse auscultates crackles in a patient with pneumonia. These sounds indicate:",
  options: [
    "Bronchospasm",
    "Fluid in alveoli",
    "Pleural friction",
    "Airway collapse"
  ],
  ans: 1,
  rationale: "Crackles = discontinuous, popping sounds. Cause: air passing through fluid-filled alveoli or opening of collapsed alveoli. Common in pneumonia, CHF, pulmonary edema. Wheezes = bronchospasm. Friction rub = pleura inflamed. NCK tests lung sound interpretation."
},
{
  q: "13. A patient with cystic fibrosis is at risk for which respiratory complication?",
  options: [
    "Pulmonary embolism",
    "Thick mucus plugging airways",
    "Lung cancer",
    "Pulmonary hypertension"
  ],
  ans: 1,
  rationale: "CF = defective CFTR gene → thick viscous secretions. Leads to chronic infection, bronchiectasis, airway obstruction. While PE and PH can occur later, the primary respiratory issue is mucus plugging. NCK tests pathophysiology links."
},
{
  q: "14. Which intervention is most effective in preventing hospital-acquired pneumonia?",
  options: [
    "Hand hygiene",
    "Head of bed elevated 30-45 degrees",
    "Incentive spirometry q1hr",
    "Oral care q4hr"
  ],
  ans: 1,
  rationale: "For ventilated patients, VAP bundle: HOB 30-45° prevents aspiration. For non-ventilated, this also reduces aspiration risk. Hand hygiene prevents transmission. Incentive spirometry prevents atelectasis. Oral care reduces colonization. NCK prioritizes: in bedridden patients, aspiration prevention is #1."
},
{
  q: "15. A patient presents with sudden sharp chest pain, dyspnea, and tachycardia after long flight. What should the nurse suspect?",
  options: [
    "Pneumonia",
    "Pulmonary embolism",
    "Asthma attack",
    "Pneumothorax"
  ],
  ans: 1,
  rationale: "Classic triad for PE: sudden pleuritic chest pain + dyspnea + tachycardia + risk factors. Long flight = stasis = DVT risk. Pneumothorax has sudden pain + dyspnea but no tachycardia as prominent. NCK tests clinical judgment and risk factors."
},
{
  q: "16. The nurse is teaching a patient to use a metered-dose inhaler. Which instruction is correct?",
  options: [
    "Exhale fully, then inhale while pressing canister",
    "Press canister then inhale",
    "Inhale rapidly and hold 2 seconds",
    "Use spacer only for children"
  ],
  ans: 0,
  rationale: "Proper MDI technique: 1. Exhale fully away from device 2. Seal lips 3. Start slow deep inhalation and ACTUATE 4. Hold breath 10 seconds. Coordinating actuation with inhalation is key. Spacer benefits all ages. NCK tests patient teaching."
},
{
  q: "17. Which finding indicates a patient with COPD is retaining CO2?",
  options: [
    "Respiratory alkalosis on ABG",
    "Bounding pulses",
    "Headache and drowsiness",
    "Tachypnea"
  ],
  ans: 2,
  rationale: "CO2 narcosis signs: headache, confusion, drowsiness, flushed warm skin. COPD patients hypoventilate → CO2 retention → respiratory acidosis. Tachypnea is early. Bounding pulses are from increased CO. NCK tests chronic CO2 retainer assessment."
},
{
  q: "18. A patient with lung cancer has a malignant pleural effusion. The primary goal of nursing care is to:",
  options: [
    "Cure the cancer",
    "Relieve dyspnea and improve breathing",
    "Prevent metastasis",
    "Administer chemotherapy"
  ],
  ans: 1,
  rationale: "Palliative care focus. Malignant effusion causes severe dyspnea. Nursing role: thoracentesis, chest tube, positioning, oxygen, comfort. We cannot cure or prevent metastasis. NCK tests nursing scope vs medical treatment."
},
{
  q: "19. Which lab value should be monitored in a patient taking long-term corticosteroids for COPD?",
  options: [
    "Potassium",
    "Glucose",
    "Sodium",
    "Calcium"
  ],
  ans: 1,
  rationale: "Steroids cause hyperglycemia by increasing gluconeogenesis and insulin resistance. Also cause hypokalemia, sodium retention, and osteoporosis. But glucose monitoring is most critical for acute safety. NCK tests medication side effects."
},
{
  q: "20. The nurse notes subcutaneous emphysema in a patient with chest tubes. What does this indicate?",
  options: [
    "Normal finding",
    "Air leak in the system",
    "Infection",
    "Hemorrhage"
  ],
  ans: 1,
  rationale: "Subcutaneous emphysema = crackling under skin. Air has escaped from lung/pleural space into subcutaneous tissue. Indicates air leak, tube dislodgement, or improper seal. Palpate and notify provider. Not normal. NCK tests chest tube complications."
},
// MED-SURG GIT - QUESTIONS 21-40
{
  q: "21. A patient with liver cirrhosis develops confusion, asterixis, and fetor hepaticus. The nurse recognizes these as signs of:",
  options: [
    "Hepatic encephalopathy",
    "Portal hypertension",
    "Esophageal varices",
    "Hepatorenal syndrome"
  ],
  ans: 0,
  rationale: "TRIAD TRICKY ONE. Hepatic encephalopathy triad: AMS + asterixis 'liver flap' + fetor hepaticus 'musty breath'. Caused by ammonia buildup due to liver failure. Portal HTN causes varices/ascites. Hepatorenal = kidney failure. NCK tests liver complication recognition."
},
{
  q: "22. Which laboratory finding is most indicative of acute pancreatitis?",
  options: [
    "Elevated ALT and AST",
    "Elevated amylase and lipase",
    "Elevated bilirubin",
    "Elevated BUN and Creatinine"
  ],
  ans: 1,
  rationale: "Pancreatitis = autodigestion of pancreas. Lipase is more specific than amylase. Both rise 3x normal. ALT/AST = liver. Bilirubin = biliary obstruction. BUN/Cr = kidney. NCK tests lab interpretation."
},
{
  q: "23. The priority nursing action for a patient with upper GI bleeding is to:",
  options: [
    "Assess vital signs and establish 2 large bore IVs",
    "Insert NG tube",
    "Administer antacids",
    "Keep patient NPO"
  ],
  ans: 0,
  rationale: "ABC. Upper GI bleed = hypovolemia risk. First: assess circulation, 2 large bore IVs for fluids/blood. NG tube helps diagnose but not first. NPO and antacids come after stabilization. NCK tests 'first action' in hemorrhage."
},
{
  q: "24. A patient with cholecystitis reports pain after eating fatty foods. The nurse explains this occurs because:",
  options: [
    "Fat stimulates CCK which causes gallbladder contraction",
    "Fat decreases bile production",
    "Fat causes gastric acid secretion",
    "Fat blocks the common bile duct"
  ],
  ans: 0,
  rationale: "Fat in duodenum → releases Cholecystokinin CCK → gallbladder contracts → pushes bile → pain if stones/inflamed. This is why low-fat diet is ordered. NCK tests pathophysiology."
},
{
  q: "25. Which finding requires immediate reporting in a patient with ulcerative colitis?",
  options: [
    "4-6 loose stools per day",
    "Abdominal cramping",
    "Rigid, board-like abdomen with fever",
    "Mild rectal bleeding"
  ],
  ans: 2,
  rationale: "Rigid board-like abdomen + fever = perforation or toxic megacolon. Surgical emergency. 4-6 stools and mild bleeding are expected in UC flare. NCK tests complication recognition."
},
{
  q: "26. The nurse is teaching a patient with GERD. Which instruction is most important?",
  options: [
    "Lie down 30 minutes after meals",
    "Eat 3 large meals per day",
    "Elevate head of bed 30 degrees",
    "Drink coffee with meals"
  ],
  ans: 2,
  rationale: "GERD = LES incompetence. HOB elevation uses gravity to prevent reflux. Avoid lying down 2-3hr after meals, small frequent meals, avoid caffeine/alcohol/fat. NCK tests patient education."
},
{
  q: "27. Which medication should be administered 30 minutes before meals for a patient with PUD?",
  options: [
    "Ranitidine",
    "Sucralfate",
    "Omeprazole",
    "Antacids"
  ],
  ans: 1,
  rationale: "Sucralfate forms protective barrier over ulcer. Must be given 1hr before meals and at bedtime on empty stomach. PPIs like omeprazole before breakfast. H2 blockers can be with/without food. NCK tests drug timing."
},
{
  q: "28. A patient with ascites has a fluid wave present. The nurse understands this indicates:",
  options: [
    "Mild ascites",
    "Moderate to large amount of ascitic fluid",
    "Portal hypertension",
    "Peritonitis"
  ],
  ans: 1,
  rationale: "Fluid wave test: positive when moderate-large ascites present. Shifting dullness = mild. Portal HTN causes ascites but wave tests volume. Peritonitis = rebound tenderness. NCK tests physical assessment."
},
{
  q: "29. Which diet is recommended for a patient during acute phase of Crohn's disease?",
  options: [
    "High fiber, high residue",
    "Low fiber, low residue",
    "High fat, high protein",
    "Regular diet with dairy"
  ],
  ans: 1,
  rationale: "Acute Crohn's = inflamed, narrowed bowel. Low residue reduces bulk and prevents obstruction. During remission: high protein, high calorie. High fiber during flare worsens symptoms. NCK tests diet in IBD."
},
{
  q: "30. The nurse notes black tarry stools in a patient with peptic ulcer disease. This indicates:",
  options: [
    "Upper GI bleeding",
    "Lower GI bleeding",
    "Side effect of iron",
    "Diverticulitis"
  ],
  ans: 0,
  rationale: "Melena = black tarry stool from digested blood. Indicates upper GI bleed. Bright red = lower GI. Iron also causes black but not tarry. NCK tests assessment findings."
},
{
  q: "31. A patient with hepatitis A asks how it is transmitted. The nurse responds:",
  options: [
    "Blood and blood products",
    "Fecal-oral route",
    "Sexual contact only",
    "Respiratory droplets"
  ],
  ans: 1,
  rationale: "Hep A = fecal-oral, contaminated food/water. Hep B/C = blood/sexual. No vaccine needed after infection because it’s self-limiting. NCK tests infection control."
},
{
  q: "32. Which complication should the nurse monitor for after abdominal surgery?",
  options: [
    "Paralytic ileus",
    "Hyperactive bowel sounds",
    "Increased appetite",
    "Weight gain"
  ],
  ans: 0,
  rationale: "Post-op ileus is common 24-48hrs due to anesthesia and manipulation. S/S: absent bowel sounds, distention, N/V. Not hyperactive. NCK tests post-op complications."
},
{
  q: "33. A patient with cirrhosis is prescribed lactulose. The nurse monitors for which therapeutic effect?",
  options: [
    "Increased urine output",
    "2-3 soft stools per day",
    "Decreased abdominal pain",
    "Improved appetite"
  ],
  ans: 1,
  rationale: "Lactulose traps ammonia in gut and pulls water in → laxative effect. Goal in hepatic encephalopathy: 2-3 soft stools to excrete ammonia. Too many = dehydration. NCK tests drug purpose."
},
{
  q: "34. Which assessment finding is expected in a patient with Cushing's ulcer?",
  options: [
    "Bleeding after NSAID use",
    "Ulcer due to increased ICP from head trauma",
    "Ulcer from H. pylori",
    "Ulcer from alcohol"
  ],
  ans: 1,
  rationale: "Cushing ulcer = stress ulcer from increased ICP, burns, head trauma. Curling ulcer = burns. NSAID/H.pylori/alcohol = regular PUD. NCK tests stress ulcer types."
},
{
  q: "35. The nurse is caring for a patient with an NG tube to low intermittent suction. Which intervention is important?",
  options: [
    "Irrigate with 30mL tap water q4hr",
    "Clamp tube during meals",
    "Keep HOB flat",
    "Measure drainage and replace electrolytes"
  ],
  ans: 3,
  rationale: "NG suction causes fluid and electrolyte loss, especially K+ and HCl. Must I&O and replace. Irrigate with sterile water or NS. HOB elevated to prevent aspiration. NCK tests NG tube management."
},
{
  q: "36. Which symptom is most characteristic of irritable bowel syndrome?",
  options: [
    "Weight loss and fever",
    "Abdominal pain relieved by defecation",
    "Rectal bleeding",
    "Anemia"
  ],
  ans: 1,
  rationale: "IBS = functional disorder. Key: pain relieved by BM, alternating diarrhea/constipation, no fever, bleeding, or weight loss. Those indicate IBD. NCK tests differentiating IBS vs IBD."
},
{
  q: "37. A patient with colorectal cancer is scheduled for colostomy. Pre-op teaching should include:",
  options: [
    "Colostomy will be permanent",
    "Stoma should be beefy red and moist",
    "Avoid all fruits and vegetables",
    "Irrigate colostomy daily"
  ],
  ans: 1,
  rationale: "Healthy stoma = beefy red, moist. Not all colostomies are permanent. Diet: avoid gas-producing foods initially, not all fruits/veg. Irrigation only for descending/sigmoid. NCK tests ostomy care."
},
{
  q: "38. Which lab value should be monitored in a patient receiving TPN?",
  options: [
    "Hemoglobin",
    "Blood glucose",
    "Sodium",
    "Platelets"
  ],
  ans: 1,
  rationale: "TPN is high in dextrose. Risk for hyperglycemia, especially first 48hrs. Must monitor blood glucose q6h. Also monitor electrolytes, LFTs. NCK tests high-risk nutrition."
},
{
  q: "39. A patient with peritonitis is likely to exhibit:",
  options: [
    "Rebound tenderness and guarding",
    "Hyperactive bowel sounds",
    "Decreased temperature",
    "Increased appetite"
  ],
  ans: 0,
  rationale: "Peritonitis = inflammation of peritoneum. Classic: severe pain, rebound tenderness, guarding, rigid abdomen, fever, decreased/absent bowel sounds. NCK tests acute abdomen signs."
},
{
  q: "40. The priority nursing diagnosis for a patient with vomiting and diarrhea is:",
  options: [
    "Risk for infection",
    "Deficient fluid volume",
    "Imbalanced nutrition",
    "Acute pain"
  ],
  ans: 1,
  rationale: "Vomiting + diarrhea = fluid and electrolyte loss. Use ABC and Maslow. Fluid volume deficit is priority over nutrition and pain. NCK tests nursing diagnosis prioritization."
},
// MED-SURG CARDIOVASCULAR - QUESTIONS 41-50
{
  q: "41. A patient is having an acute MI. Which assessment finding requires IMMEDIATE intervention?",
  options: [
    "Chest pain radiating to jaw",
    "Ventricular fibrillation on monitor",
    "Diaphoresis",
    "Nausea"
  ],
  ans: 1,
  rationale: "V-Fib = lethal arrhythmia, no cardiac output. Immediate defibrillation per ACLS. Chest pain, diaphoresis, nausea are MI symptoms but V-Fib is life-threatening. NCK tests cardiac emergency prioritization."
},
{
  q: "42. Which medication is given first to a patient with suspected MI?",
  options: [
    "Morphine",
    "Nitroglycerin",
    "Aspirin",
    "Oxygen"
  ],
  ans: 2,
  rationale: "MONA: Morphine, Oxygen, Nitroglycerin, Aspirin. But current AHA guidelines: Aspirin 325mg chewable FIRST to inhibit platelet aggregation. Then O2 if SpO2<90, then Nitro, then Morphine. NCK updated protocols."
},
{
  q: "43. A patient with heart failure develops crackles, dyspnea, and pink frothy sputum. The nurse recognizes this as:",
  options: [
    "Left-sided heart failure",
    "Right-sided heart failure",
    "Cardiogenic shock",
    "Pulmonary embolism"
  ],
  ans: 0,
  rationale: "Left HF = fluid backs up to lungs. S/S: dyspnea, crackles, S3, pink frothy sputum = pulmonary edema. Right HF = JVD, edema, ascites. NCK tests L vs R HF."
},
{
  q: "44. The nurse is monitoring a patient on heparin therapy. Which lab should be checked?",
  options: [
    "PT/INR",
    "aPTT",
    "Platelet count",
    "D-dimer"
  ],
  ans: 1,
  rationale: "Heparin monitored by aPTT. Goal 1.5-2.5x normal. Warfarin = PT/INR. Platelets for HIT. NCK tests anticoagulant monitoring."
},
{
  q: "45. Which position is best for a patient experiencing angina?",
  options: [
    "Supine",
    "Prone",
    "Semi-Fowler's",
    "Trendelenburg"
  ],
  ans: 2,
  rationale: "Semi-Fowler's decreases cardiac workload and improves ventilation. Also give Nitro, O2. Supine increases preload. NCK tests comfort + physiology."
},
{
  q: "46. A patient with hypertension is prescribed Lisinopril. The nurse monitors for which side effect?",
  options: [
    "Dry hacking cough",
    "Tachycardia",
    "Hypoglycemia",
    "Constipation"
  ],
  ans: 0,
  rationale: "ACE inhibitors: -pril drugs cause bradykinin buildup → dry persistent cough. Also angioedema, hyperkalemia. Beta blockers cause bradycardia. NCK tests drug side effects."
},
{
  q: "47. Which pulse assessment finding is expected in peripheral arterial disease?",
  options: [
    "Bounding pulses",
    "Absent or diminished pulses",
    "Irregular pulses",
    "Bilateral equal pulses"
  ],
  ans: 1,
  rationale: "PAD = decreased arterial blood flow. S/S: diminished pulses, claudication, cool pale extremity, hair loss. Bounding = fluid overload. NCK tests vascular assessment."
},
{
  q: "48. A patient with pericarditis reports chest pain that improves when leaning forward. The nurse auscultates:",
  options: [
    "S3 gallop",
    "Pericardial friction rub",
    "Crackles",
    "Murmur"
  ],
  ans: 1,
  rationale: "Pericarditis triad: pleuritic chest pain relieved by leaning forward + pericardial friction rub + ECG changes. Rub = sandpaper sound. NCK tests classic signs."
},
{
  q: "49. The priority nursing action for a patient with BP 80/50 after cardiac catheterization is to:",
  options: [
    "Assess puncture site for bleeding",
    "Administer antihypertensive",
    "Increase IV fluids",
    "Recheck BP in 30 minutes"
  ],
  ans: 0,
  rationale: "Hypotension post-cath = bleeding/hemorrhage at femoral/radial site. First: check site, pressure, vitals. This is a complication. NCK tests post-procedure care."
},
{
  q: "50. Which diet modification is most important for a patient with heart failure?",
  options: [
    "Low cholesterol",
    "Low sodium 2g/day",
    "High potassium",
    "High protein"
  ],
  ans: 1,
  rationale: "HF = fluid retention. Sodium restriction 2g prevents fluid overload and edema. Also fluid restriction 1500-2000mL. Low cholesterol for CAD. NCK tests patient teaching."

},

// MIXED SYSTEMS - QUESTIONS 51-70
{
  q: "51. A patient with increased ICP exhibits Cushing's Triad. Which is included?",
  options: [
    "Tachycardia, hypotension, tachypnea",
    "Bradycardia, hypertension, irregular respirations",
    "Fever, bradycardia, hypotension",
    "Tachypnea, hypertension, bradycardia"
  ],
  ans: 1,
  rationale: "TRIAD TRICKY ONE. Cushing's Triad = Late sign of increased ICP: Hypertension + Bradycardia + Irregular respirations. Due to brainstem compression. NCK loves neuro emergencies."
},
{
  q: "52. Which finding indicates diabetic ketoacidosis rather than HHNS?",
  options: [
    "Blood glucose >600",
    "Presence of ketones in urine",
    "Gradual onset over days",
    "Severe dehydration"
  ],
  ans: 1,
  rationale: "DKA = insulin deficiency + ketosis. HHNS = relative insulin, no ketones, glucose >600. DKA: rapid onset, fruity breath, Kussmaul. NCK tests DM complications."
},
{
  q: "53. The nurse is caring for a patient on peritoneal dialysis. Cloudy outflow indicates:",
  options: [
    "Normal finding",
    "Peritonitis",
    "Catheter obstruction",
    "Fluid overload"
  ],
  ans: 1,
  rationale: "Cloudy dialysate = hallmark of peritonitis. Other signs: fever, abdominal pain. Must culture and give intraperitoneal antibiotics. NCK tests dialysis complications."
},
{
  q: "54. Which assessment is priority for a patient with spinal cord injury at T4?",
  options: [
    "Bowel sounds",
    "Respiratory status",
    "Skin integrity",
    "Pain level"
  ],
  ans: 1,
  rationale: "T4 and above affects intercostal muscles and can affect diaphragm. Risk for respiratory failure. Airway/Breathing first. NCK tests SCI prioritization."
},
{
  q: "55. A patient with hypothyroidism is at risk for:",
  options: [
    "Tachycardia",
    "Heat intolerance",
    "Bradycardia and cold intolerance",
    "Weight loss"
  ],
  ans: 2,
  rationale: "Hypothyroid = metabolism slows. S/S: bradycardia, cold intolerance, weight gain, fatigue, constipation. Hyperthyroid = opposite. NCK tests endocrine."
},
{
  q: "56. Which intervention prevents contractures in a patient with CVA?",
  options: [
    "Passive ROM exercises",
    "Bed rest",
    "Heat therapy",
    "Massage"
  ],
  ans: 0,
  rationale: "CVA patients have paralysis. Passive ROM maintains joint mobility and prevents contractures. Start early. NCK tests neuro rehab."
},
{
  q: "57. A patient with acute renal failure has K+ of 6.8. The nurse prepares for:",
  options: [
    "Kayexalate administration",
    "Potassium supplement",
    "Increased oral intake",
    "Dialysis"
  ],
  ans: 0,
  rationale: "Hyperkalemia >6.5 = cardiac risk. Kayexalate binds K in GI. If EKG changes or >7, may need dialysis. Never give K+. NCK tests renal emergencies."
},
{
  q: "58. Which statement indicates understanding of rheumatoid arthritis management?",
  options: [
    "I will exercise during acute flares",
    "I will apply heat during flares and cold for chronic pain",
    "I will rest the joint during acute inflammation",
    "I should avoid all activity"
  ],
  ans: 2,
  rationale: "RA: Rest during acute flare to reduce inflammation. Heat for chronic stiffness, cold for acute. Exercise during remission. NCK tests patient teaching."
},
{
  q: "59. A patient with myasthenia gravis reports increased muscle weakness. The nurse assesses for:",
  options: [
    "Myasthenic crisis",
    "Medication effectiveness",
    "Infection",
    "All of the above"
  ],
  ans: 3,
  rationale: "Weakness can be myasthenic crisis, need more meds, or infection triggering exacerbation. Check respiratory status first. Tensilon test confirms. NCK tests neuro disease."
},
{
  q: "60. The nurse notes a patient with hypocalcemia has carpopedal spasm. This is a positive:",
  options: [
    "Trousseau's sign",
    "Chvostek's sign",
    "Homan's sign",
    "Murphy's sign"
  ],
  ans: 0,
  rationale: "Hypocalcemia signs: Trousseau = BP cuff inflation causes carpopedal spasm. Chvostek = tapping facial nerve causes twitching. NCK tests electrolyte assessment."
},
{
  q: "61. Which medication requires monitoring for ototoxicity?",
  options: [
    "Penicillin",
    "Gentamicin",
    "Amoxicillin",
    "Cephalexin"
  ],
  ans: 1,
  rationale: "Aminoglycosides: Gentamicin, Tobramycin = ototoxic + nephrotoxic. Monitor hearing, peak/trough levels. NCK tests drug toxicity."
},
{
  q: "62. A patient with burns has fluid shift in the first 24 hours. The nurse understands this is due to:",
  options: [
    "Increased capillary permeability",
    "Decreased cardiac output",
    "Fluid overload",
    "Kidney failure"
  ],
  ans: 0,
  rationale: "Burn shock phase: massive capillary leak → fluid shifts to interstitial space → hypovolemia. Parkland formula used. NCK tests burn pathophysiology."
},
{
  q: "63. Which finding requires immediate intervention in a patient with DVT?",
  options: [
    "Calf pain",
    "Unilateral leg swelling",
    "Positive Homan's sign",
    "Sudden dyspnea and chest pain"
  ],
  ans: 3,
  rationale: "Sudden dyspnea + chest pain = PE. This is the most dangerous complication of DVT. Call MD, O2, prepare for heparin. NCK tests complication recognition."
},
{
  q: "64. A patient with SLE asks about flares. The nurse teaches to avoid:",
  options: [
    "Sun exposure",
    "Dairy products",
    "Exercise",
    "Protein"
  ],
  ans: 0,
  rationale: "UV light triggers SLE flares. Also stress, infection. Teach sunscreen, protective clothing. NCK tests autoimmune patient education."
},
{
  q: "65. The priority action for a patient with anaphylaxis is to:",
  options: [
    "Administer antihistamine",
    "Administer epinephrine IM",
    "Start IV fluids",
    "Apply oxygen"
  ],
  ans: 1,
  rationale: "Anaphylaxis = airway compromise. Epinephrine IM 1:1000 is first to reverse bronchospasm and vasodilation. Then O2, fluids, antihistamine. NCK tests emergency."
},
{
  q: "66. Which assessment finding is expected in Cushing's syndrome?",
  options: [
    "Weight loss",
    "Moon face and buffalo hump",
    "Hypotension",
    "Hypoglycemia"
  ],
  ans: 1,
  rationale: "Cushing's = excess cortisol. S/S: moon face, buffalo hump, truncal obesity, hypertension, hyperglycemia, thin skin. NCK tests endocrine."
},
{
  q: "67. A patient with glaucoma asks about medication. The nurse explains beta-blocker eye drops work by:",
  options: [
    "Decreasing aqueous humor production",
    "Increasing outflow",
    "Dilating pupil",
    "Constricting pupil"
  ],
  ans: 0,
  rationale: "Timol, Betoptic = decrease aqueous humor production → lowers IOP. Pilocarpine increases outflow. NCK tests eye medications."
},
{
  q: "68. Which lab value indicates iron deficiency anemia?",
  options: [
    "High MCV",
    "Low serum ferritin",
    "High B12",
    "High folate"
  ],
  ans: 1,
  rationale: "Iron deficiency: Low Hgb, Low MCV microcytic, Low ferritin, High TIBC. B12/Folate deficiency = High MCV macrocytic. NCK tests labs."
},
{
  q: "69. A patient with Parkinson's disease has pill-rolling tremor. The nurse expects medication to be:",
  options: [
    "Levodopa/Carbidopa",
    "Propranolol",
    "Diazepam",
    "Haloperidol"
  ],
  ans: 0,
  rationale: "Parkinson's = dopamine deficiency. Levodopa/Carbidopa is drug of choice. Propranolol for essential tremor. NCK tests neuro meds."
},
{
  q: "70. The nurse is teaching a patient with osteoporosis. Which statement indicates need for more teaching?",
  options: [
    "I will take calcium and vitamin D",
    "I will do weight-bearing exercises",
    "I will avoid smoking and alcohol",
    "I will limit sun exposure"
  ],
  ans: 3,
  rationale: "Sun exposure = Vitamin D which helps calcium absorption. Limiting sun worsens osteoporosis. All others are correct. NCK tests patient teaching."
}
    ],
    "Maternal and Newborn Health": [
      // MCH - 50 QUESTIONS NCK FORMAT
{
  q: "1. A primigravida at 32 weeks gestation reports sudden gush of fluid from vagina. FHR 140. Next nursing action?",
  options: [
    "Check FHR and assess fluid for nitrazine",
    "Perform sterile vaginal exam",
    "Administer tocolytics",
    "Prepare for immediate delivery"
  ],
  ans: 0,
  rationale: "PROM suspected. First: confirm rupture with nitrazine/ferning + assess fetal well-being. Never do sterile VE before confirming because it increases infection risk. Tocolytics not for PROM. NCK tests ROM management."
},
{
  q: "2. Which finding in a newborn requires immediate intervention?",
  options: [
    "Mongolian spots",
    "Respiratory rate 60 with nasal flaring",
    "Acrocyanosis",
    "Vernix caseosa"
  ],
  ans: 1,
  rationale: "Nasal flaring + RR>60 = respiratory distress. Normal newborn RR 30-60. Mongolian spots and acrocyanosis are normal. Vernix is protective. NCK tests newborn assessment."
},
{
  q: "3. A pregnant woman at 28 weeks has BP 150/96, 2+ proteinuria, and headache. Priority diagnosis?",
  options: [
    "Gestational hypertension",
    "Preeclampsia",
    "Chronic hypertension",
    "HELLP syndrome"
  ],
  ans: 1,
  rationale: "Preeclampsia = HTN >140/90 after 20 weeks + proteinuria + symptoms. Headache is warning sign. HELLP is severe form with labs. NCK tests PIH recognition."
},
{
  q: "4. CASE SCENARIO: A G2P1 at 38 weeks is admitted. Contractions q3min, 60sec, cervix 7cm 80% -2. FHR 160 with late decelerations. Priority action?",
  options: [
    "Administer O2, position left lateral, notify MD",
    "Start oxytocin",
    "Encourage ambulation",
    "Prepare for vaginal delivery"
  ],
  ans: 0,
  rationale: "Late decels = uteroplacental insufficiency. Emergency: O2, left side to increase perfusion, stop oxytocin if running, IV fluids, notify. FHR 160 is tachycardia. NCK tests FHR pattern management."
},
{
  q: "5. Which vaccine is contraindicated in pregnancy?",
  options: [
    "Tetanus",
    "Influenza inactivated",
    "MMR",
    "Tdap"
  ],
  ans: 2,
  rationale: "MMR is live attenuated - contraindicated in pregnancy. Give 1 month before conception. Inactivated flu and Tdap are recommended. NCK tests immunizations."
},
{
  q: "6. The nurse teaches a postpartum woman with Rh- blood. She delivered an Rh+ baby. Next action?",
  options: [
    "Administer RhoGAM within 72 hours",
    "Administer RhoGAM immediately after delivery",
    "No RhoGAM needed",
    "Wait for antibody titer"
  ],
  ans: 1,
  rationale: "RhoGAM given within 72hr of delivery, abortion, or any bleeding to prevent sensitization. If >72hr but <28 days can still give. NCK tests Rh incompatibility."
},
{
  q: "7. A newborn with blood glucose 35 mg/dL. First nursing action?",
  options: [
    "Notify pediatrician immediately",
    "Feed with formula or breastfeed",
    "Start IV dextrose",
    "Recheck in 1 hour"
  ],
  ans: 1,
  rationale: "Hypoglycemia <40. First: feed to raise glucose. If unable to feed or no improvement then IV. Breastfeeding stimulates and provides glucose. NCK tests newborn hypoglycemia."
},
{
  q: "8. Which position is best to prevent supine hypotensive syndrome?",
  options: [
    "Supine",
    "Prone",
    "Left lateral",
    "Trendelenburg"
  ],
  ans: 2,
  rationale: "After 20 weeks, uterus compresses IVC in supine → decreased CO. Left lateral displaces uterus off IVC. NCK tests antepartum comfort."
},
{
  q: "9. CASE SCENARIO: A postpartum woman 2 hours after delivery has boggy uterus, BP 90/60, HR 110, and saturating 2 pads in 15min. Priority action?",
  options: [
    "Massage uterus and express clots",
    "Administer oxytocin",
    "Call physician",
    "Increase IV fluids"
  ],
  ans: 0,
  rationale: "S/S of uterine atony + hemorrhage. First: massage uterus to contract and expel clots. Then meds, call MD, fluids. 4 T's: Tone, Trauma, Tissue, Thrombin. NCK tests PPH emergency."
},
{
  q: "10. A pregnant woman asks about foods to avoid. Which should the nurse emphasize?",
  options: [
    "Pasteurized cheese",
    "Well-done meat",
    "Deli meats and unpasteurized cheese",
    "Cooked fish"
  ],
  ans: 2,
  rationale: "Avoid listeria: deli meats, unpasteurized dairy, raw fish. Also avoid high mercury fish. Cook meat well. NCK tests patient teaching."
},
{
  q: "11. The APGAR score at 1 minute is 6. Which component is most likely 0-1?",
  options: [
    "Heart rate",
    "Respiratory effort",
    "Muscle tone",
    "Color"
  ],
  ans: 3,
  rationale: "Most newborns have acrocyanosis at 1min = 1 point for color. HR and resp usually 2. APGAR 8-10 normal, 4-7 needs intervention. NCK tests newborn assessment."
},
{
  q: "12. A woman with gestational diabetes should monitor glucose when?",
  options: [
    "Fasting and 2 hours after meals",
    "Only in morning",
    "Once daily",
    "Before bed only"
  ],
  ans: 0,
  rationale: "GDM monitoring: FBS <95 and 2hr PP <120. 4 times daily typically. Prevents macrosomia and birth trauma. NCK tests GDM management."
},
{
  q: "13. Which sign indicates placenta previa rather than abruptio placenta?",
  options: [
    "Painless bright red bleeding",
    "Painful dark bleeding with rigid uterus",
    "Hypertension",
    "Fetal distress"
  ],
  ans: 0,
  rationale: "Placenta previa = painless bleeding. Abruption = painful, dark, rigid uterus, concealed. Never do VE with previa. NCK tests 3rd trimester bleeding."
},
{
  q: "14. CASE SCENARIO: Newborn with jaundice at 24 hours, bilirubin 15. Mother O+, baby A+. Likely cause?",
  options: [
    "Physiologic jaundice",
    "ABO incompatibility",
    "Rh incompatibility",
    "Breastfeeding jaundice"
  ],
  ans: 1,
  rationale: "Early jaundice <24hr + O mom + A baby = ABO incompatibility. Rh usually causes hydrops. Physiologic occurs day 2-3. NCK tests hemolytic disease."
},
{
  q: "15. The nurse teaches Kegel exercises for:",
  options: [
    "Prevent varicose veins",
    "Strengthen pelvic floor muscles",
    "Reduce back pain",
    "Increase milk production"
  ],
  ans: 1,
  rationale: "Kegels = pelvic floor. Prevents incontinence, supports uterus, improves postpartum recovery. NCK tests antepartum education."
},
{
  q: "16. A patient in labor has meconium-stained fluid. Priority action?",
  options: [
    "Notify pediatric team for delivery",
    "Start internal fetal monitoring",
    "Administer analgesia",
    "Increase IV rate"
  ],
  ans: 0,
  rationale: "Meconium = fetal distress, risk for MAS. Need pediatric team + suction at delivery. Amnioinfusion may be ordered. NCK tests FHR + meconium."
},
{
  q: "17. Which finding in postpartum assessment is abnormal at day 3?",
  options: [
    "Lochia rubra",
    "Fundus at umbilicus",
    "Temperature 38.5C",
    "Afterpains with breastfeeding"
  ],
  ans: 2,
  rationale: "Fever >38C after 24hr = endometritis. Lochia rubra day 1-3 normal. Fundus descends 1cm/day. Afterpains normal. NCK tests postpartum complications."
},
{
  q: "18. A pregnant woman with hyperemesis gravidarum is at risk for:",
  options: [
    "Hyperkalemia",
    "Metabolic alkalosis",
    "Metabolic acidosis",
    "Hypernatremia"
  ],
  ans: 1,
  rationale: "Vomiting = loss of HCl → metabolic alkalosis + hypokalemia + dehydration. Monitor electrolytes. NCK tests pregnancy complications."
},
{
  q: "19. The nurse observes caput succedaneum. This indicates:",
  options: [
    "Subdural hemorrhage",
    "Edema of scalp from pressure",
    "Skull fracture",
    "Cephalohematoma"
  ],
  ans: 1,
  rationale: "Caput = edema crossing suture lines, resolves in days. Cephalohematoma = bleeding under periosteum, does NOT cross sutures. NCK tests newborn head findings."
},
{
  q: "20. CASE SCENARIO: G1P0 at 40 weeks, contractions q2min, urge to push, crowning. FHR 100. Action?",
  options: [
    "Have patient pant and call MD",
    "Encourage to push hard",
    "Apply fundal pressure",
    "Administer oxygen"
  ],
  ans: 0,
  rationale: "FHR 100 = bradycardia. Stop pushing, pant, O2, left side, call MD. Pushing worsens hypoxia. This is emergency. NCK tests intrapartum emergency."
},
{
  q: "21. Which statement indicates understanding of breastfeeding?",
  options: [
    "I will wash nipples with soap before each feeding",
    "I will feed every 2-3 hours on demand",
    "I will limit feeding to 5 minutes per side",
    "I will pump and dump after drinking coffee"
  ],
  ans: 1,
  rationale: "On demand q2-3hr, 10-15min per side. Soap dries nipples. Caffeine okay in moderation. NCK tests postpartum teaching."
},
{
  q: "22. A newborn with Down syndrome is at risk for:",
  options: [
    "Hypoglycemia",
    "Congenital heart defects",
    "Neural tube defects",
    "Cystic fibrosis"
  ],
  ans: 1,
  rationale: "Downs = trisomy 21. Associated with AV canal defects, duodenal atresia, leukemia. Screen for cardiac. NCK tests congenital disorders."
},
{
  q: "23. The nurse assesses a pregnant woman for anemia. Most common type?",
  options: [
    "Sickle cell",
    "Iron deficiency",
    "Folate deficiency",
    "Pernicious"
  ],
  ans: 1,
  rationale: "Pregnancy increases iron needs 2-3x. Iron deficiency most common. Give ferrous sulfate + vitamin C. NCK tests prenatal labs."
},
{
  q: "24. Which medication is given to promote fetal lung maturity?",
  options: [
    "Magnesium sulfate",
    "Betamethasone",
    "Ritodrine",
    "Oxytocin"
  ],
  ans: 1,
  rationale: "Betamethasone IM x2 doses 24hr apart if <34 weeks. Matures lungs, reduces RDS. Mag = for seizure prophylaxis. Tocolytics stop labor. NCK tests preterm labor."
},
{
  q: "25. A postpartum woman reports severe calf pain and positive Homan's sign. Nurse suspects:",
  options: [
    "Muscle strain",
    "Deep vein thrombosis",
    "Nerve compression",
    "Normal postpartum finding"
  ],
  ans: 1,
  rationale: "Postpartum = hypercoagulable. DVT risk. Homan's sign unreliable but calf pain + swelling needs Doppler. NCK tests postpartum complications."
},
{
  q: "26. CASE SCENARIO: Preterm newborn 32 weeks, grunting, nasal flaring, retractions. Likely diagnosis?",
  options: [
    "Meconium aspiration",
    "Respiratory distress syndrome",
    "Pneumonia",
    "Transient tachypnea"
  ],
  ans: 1,
  rationale: "RDS = lack of surfactant in preterm. S/S: grunting, flaring, retractions, cyanosis. Needs surfactant and CPAP. NCK tests preterm complications."
},
{
  q: "27. The nurse teaches about fertilization. It occurs in the:",
  options: [
    "Uterus",
    "Ovary",
    "Ampulla of fallopian tube",
    "Cervix"
  ],
  ans: 2,
  rationale: "Fertilization in ampulla of fallopian tube. Implantation in uterus 6-10 days later. NCK tests reproductive physiology."
},
{
  q: "28. Which lab value is expected in pregnancy?",
  options: [
    "Increased hemoglobin",
    "Decreased WBC",
    "Increased blood volume",
    "Decreased GFR"
  ],
  ans: 2,
  rationale: "Pregnancy: blood volume ↑ 40-50%, HR ↑10-15, GFR ↑, WBC ↑. Hgb diluted → physiologic anemia. NCK tests maternal physiologic changes."
},
{
  q: "29. A woman with mastitis should be taught to:",
  options: [
    "Stop breastfeeding",
    "Apply cold compresses",
    "Continue breastfeeding and apply warm compresses",
    "Take antibiotics only"
  ],
  ans: 2,
  rationale: "Mastitis: continue breastfeeding to drain, warm compress before, cold after, antibiotics, rest. Stopping worsens. NCK tests postpartum education."
},
{
  q: "30. The priority nursing action for a newborn with omphalocele is:",
  options: [
    "Feed immediately",
    "Cover with sterile saline gauze",
    "Bathe newborn",
    "Place in supine position"
  ],
  ans: 1,
  rationale: "Omphalocele = abdominal organs outside. Risk infection + fluid loss. Cover with sterile saline gauze and plastic wrap. NPO, IV. NCK tests congenital defect."
},
{
  q: "31. A woman at 12 weeks reports nausea. Best recommendation?",
  options: [
    "Eat 3 large meals",
    "Eat dry crackers before getting up",
    "Drink fluids with meals",
    "Take ibuprofen"
  ],
  ans: 1,
  rationale: "Morning sickness: small frequent meals, dry crackers, ginger, avoid empty stomach. No NSAIDs. NCK tests first trimester discomforts."
},
{
  q: "32. CASE SCENARIO: Newborn born to diabetic mother. Most likely complication?",
  options: [
    "Hypoglycemia",
    "Hyperglycemia",
    "Hypocalcemia",
    "Polycythemia"
  ],
  ans: 0,
  rationale: "IDM = infant of diabetic mother. High insulin → hypoglycemia after birth when cord cut. Also macrosomia, RDS. NCK tests maternal DM effects."
},
{
  q: "33. The nurse assesses lochia. Which is abnormal on day 5?",
  options: [
    "Lochia serosa, pink-brown",
    "Lochia rubra, bright red",
    "Small clots",
    "Foul odor"
  ],
  ans: 3,
  rationale: "Day 3-10 = serosa. Rubra day 1-3. Foul odor = endometritis. Small clots okay. NCK tests postpartum assessment."
},
{
  q: "34. Which finding requires reporting in a patient with preeclampsia?",
  options: [
    "BP 140/90",
    "1+ proteinuria",
    "Epigastric pain and visual changes",
    "Edema of feet"
  ],
  ans: 2,
  rationale: "Epigastric pain = liver involvement. Visual changes = cerebral edema. Signs of severe preeclampsia → seizure risk. NCK tests PIH severity."
},
{
  q: "35. A newborn needs vitamin K injection. Purpose is to:",
  options: [
    "Prevent infection",
    "Prevent hemorrhagic disease",
    "Promote bone growth",
    "Prevent jaundice"
  ],
  ans: 1,
  rationale: "Newborns lack gut flora to make vitamin K. Given IM to prevent bleeding. Given within 1 hour of birth. NCK tests newborn meds."
},
{
  q: "36. CASE SCENARIO: 16 year old, G1P0, 30 weeks, BP 170/110, 3+ protein, seizures. Diagnosis?",
  options: [
    "Eclampsia",
    "Preeclampsia",
    "Gestational HTN",
    "Chronic HTN"
  ],
  ans: 0,
  rationale: "Eclampsia = preeclampsia + seizures. Medical emergency. MgSO4, antihypertensives, prepare for delivery. NCK tests obstetric emergency."
},
{
  q: "37. The nurse teaches about SIDS prevention. Most important?",
  options: [
    "Use soft bedding",
    "Place baby on back to sleep",
    "Keep room warm",
    "Use bumper pads"
  ],
  ans: 1,
  rationale: "Back to sleep campaign. Reduces SIDS risk 50%. Avoid soft bedding, bumpers, overheating. NCK tests newborn safety."
},
{
  q: "38. Which contraction pattern requires intervention?",
  options: [
    "q5min, 50sec",
    "q2min, 90sec lasting 3 contractions",
    "q10min, 30sec",
    "Irregular contractions"
  ],
  ans: 1,
  rationale: "Tachysystole = >5 contractions in 10min or lasting >90sec. Risk uterine rupture, fetal hypoxia. Stop oxytocin, O2, left side. NCK tests labor management."
},
{
  q: "39. A pregnant woman asks about travel. Best advice?",
  options: [
    "Avoid all travel",
    "Travel okay until 36 weeks with precautions",
    "Fly only in first trimester",
    "No seatbelt needed"
  ],
  ans: 1,
  rationale: "Travel okay until 36 weeks. Walk q1hr, hydration, seatbelt low on hips. Avoid Zika areas. NCK tests antepartum education."
},
{
  q: "40. Newborn has persistent cyanosis with crying. Likely cause?",
  options: [
    "Acrocyanosis",
    "Tetralogy of Fallot",
    "Cold stress",
    "Normal finding"
  ],
  ans: 1,
  rationale: "Acrocyanosis = hands/feet only. Central cyanosis = TOF, heart defect. Needs immediate evaluation. NCK tests congenital heart."
},
{
  q: "41. The nurse explains quickening occurs at:",
  options: [
    "8-10 weeks",
    "16-20 weeks primigravida",
    "24 weeks",
    "36 weeks"
  ],
  ans: 1,
  rationale: "Quickening = first fetal movement. Primigravida 18-20 weeks, multigravida 16-18 weeks. NCK tests pregnancy milestones."
},
{
  q: "42. CASE SCENARIO: Postpartum woman with BP 160/100, HR 100, severe headache, 2+ protein. Priority medication?",
  options: [
    "Oxytocin",
    "Magnesium sulfate",
    "Methylergonovine",
    "Iron supplement"
  ],
  ans: 1,
  rationale: "Postpartum preeclampsia with severe features. MgSO4 for seizure prophylaxis. Monitor RR, reflexes, urine output. NCK tests postpartum PIH."
},
{
  q: "43. Which is a presumptive sign of pregnancy?",
  options: [
    "Fetal heartbeat",
    "Ultrasound",
    "Nausea and breast tenderness",
    "Fetal movement felt by examiner"
  ],
  ans: 2,
  rationale: "Presumptive = subjective: nausea, breast changes, amenorrhea. Probable = objective: HCG, uterine enlargement. Positive = fetal HR, movement felt by examiner. NCK tests diagnosis."
},
{
  q: "44. A newborn with cleft palate is at risk for:",
  options: [
    "Hypothermia",
    "Aspiration",
    "Hyperbilirubinemia",
    "Sepsis"
  ],
  ans: 1,
  rationale: "Cleft palate = feeding difficulty, cannot create suction → aspiration risk. Use special feeder, upright position. NCK tests congenital defect."
},
{
  q: "45. The nurse assesses a woman in labor. Which indicates active labor?",
  options: [
    "Cervix 2cm",
    "Cervix 4-5cm",
    "Cervix 1cm",
    "Bloody show only"
  ],
  ans: 1,
  rationale: "Latent 0-3cm, Active 4-7cm, Transition 8-10cm. Active labor = regular, stronger contractions. NCK tests stages of labor."
},
{
  q: "46. CASE SCENARIO: Term newborn, temp 35.8C, lethargic, poor feeding. Action?",
  options: [
    "Wrap in warm blanket and monitor",
    "Place in radiant warmer",
    "Give glucose water",
    "Bathe immediately"
  ],
  ans: 1,
  rationale: "Hypothermia <36.5 in newborn = emergency. Place in warmer to prevent cold stress, metabolic acidosis. Check glucose. NCK tests newborn thermoregulation."
},
{
  q: "47. Which contraceptive is contraindicated in breastfeeding?",
  options: [
    "Condoms",
    "Progestin-only pill",
    "Combined oral contraceptives",
    "IUD"
  ],
  ans: 2,
  rationale: "Estrogen decreases milk supply. Progestin-only 'mini-pill' safe. Condoms and IUD also safe. NCK tests postpartum contraception."
},
{
  q: "48. A pregnant woman with UTI is at risk for:",
  options: [
    "Gestational diabetes",
    "Preterm labor",
    "Placenta previa",
    "Hyperemesis"
  ],
  ans: 1,
  rationale: "UTI can ascend → pyelonephritis → uterine irritability → preterm labor. Treat with antibiotics safe in pregnancy. NCK tests pregnancy risks."
},
{
  q: "49. The nurse teaches about episiotomy care. Important instruction?",
  options: [
    "Apply heat for first 24 hours",
    "Use sitz baths after 24 hours",
    "Avoid perineal care",
    "Take aspirin for pain"
  ],
  ans: 1,
  rationale: "Sitz baths after 24hr promote healing. Ice first 24hr. Perineal hygiene essential. Acetaminophen preferred over aspirin. NCK tests postpartum care."
},
{
  q: "50. CASE SCENARIO: Newborn 2 days old, not voiding, distended bladder, cries with palpation. Likely?",
  options: [
    "Dehydration",
    "Urinary tract obstruction",
    "Normal newborn finding",
    "Sepsis"
  ],
  ans: 1,
  rationale: "Newborn should void within 24hr. No void + distended bladder = obstruction or renal issue. Needs immediate evaluation. NCK tests newborn assessment."
}
    ],
    "Community Health ": [
      // COMMUNITY HEALTH NURSING - 50 QUESTIONS NCK FORMAT
{
  q: "1. The primary goal of community health nursing is to:",
  options: [
    "Treat acute illnesses in the hospital",
    "Promote health and prevent disease in populations",
    "Provide curative care only",
    "Focus on individual patient care"
  ],
  ans: 1,
  rationale: "Community health focuses on population, not just individuals. Levels of prevention: Primary, Secondary, Tertiary. NCK tests core philosophy."
},
{
  q: "2. Which level of prevention is immunization?",
  options: [
    "Primary prevention",
    "Secondary prevention",
    "Tertiary prevention",
    "Primordial prevention"
  ],
  ans: 0,
  rationale: "Primary = prevent disease before it occurs. Immunization, health education, sanitation. Secondary = early detection. Tertiary = rehab. NCK tests prevention levels."
},
{
  q: "3. CASE SCENARIO: A CHN finds 5 children in a village with severe malnutrition. First action?",
  options: [
    "Refer to hospital immediately",
    "Conduct community assessment and identify causes",
    "Start feeding program",
    "Educate mothers only"
  ],
  ans: 1,
  rationale: "Nursing process: Assess first. Need to identify if it's poverty, drought, lack of knowledge, etc before intervention. NCK tests community assessment."
},
{
  q: "4. The most reliable indicator of community health status is:",
  options: [
    "Morbidity rate",
    "Infant mortality rate",
    "Hospital admissions",
    "Number of nurses"
  ],
  ans: 1,
  rationale: "IMR reflects sanitation, nutrition, maternal care, socioeconomic status. Gold standard for community health. NCK tests indicators."
},
{
  q: "5. Which is a principle of primary health care according to Alma-Ata?",
  options: [
    "Hospital-based care",
    "Community participation",
    "Curative services only",
    "Specialist care"
  ],
  ans: 1,
  rationale: "PHC 8 elements: Community participation, Equity, Intersectoral collaboration, Appropriate technology. NCK loves Alma-Ata."
},
{
  q: "6. A community has high cases of diarrhea. The most appropriate intervention is:",
  options: [
    "Distribute ORS",
    "Improve water and sanitation",
    "Give antibiotics",
    "Health education only"
  ],
  ans: 1,
  rationale: "Root cause approach. Diarrhea = fecal-oral. Long term solution is clean water + latrines. ORS is treatment. NCK tests public health approach."
},
{
  q: "7. The nurse is doing contact tracing for TB. This is an example of:",
  options: [
    "Primary prevention",
    "Secondary prevention",
    "Tertiary prevention",
    "Health promotion"
  ],
  ans: 1,
  rationale: "Secondary = early detection + treatment to prevent spread. Contact tracing finds cases early. NCK tests epidemiology."
},
{
  q: "8. CASE SCENARIO: During a measles outbreak, which group should be prioritized for vaccination?",
  options: [
    "Adults 18-45 years",
    "Children 9 months - 5 years",
    "Elderly >65 years",
    "Pregnant women"
  ],
  ans: 1,
  rationale: "Measles most severe in under 5. In outbreak, do mass campaign 6 months - 15 years. NCK tests outbreak management per KE EPI."
},
{
  q: "9. Which is the best method for health education in a rural community?",
  options: [
    "Lectures",
    "Posters",
    "Demonstration and group discussion",
    "Radio only"
  ],
  ans: 2,
  rationale: "Adult learning: active participation. Demonstration + discussion = behavior change. Consider literacy levels. NCK tests teaching methods."
},
{
  q: "10. A family has a malnourished child. The nurse visits and finds no latrine. This is assessment of:",
  options: [
    "Biological factors",
    "Environmental factors",
    "Social factors",
    "Genetic factors"
  ],
  ans: 1,
  rationale: "Environmental = housing, water, sanitation, waste. Social = income, education. NCK tests determinants of health."
},
{
  q: "11. The Kenya Essential Package for Health KEHP includes:",
  options: [
    "Only curative services",
    "Community health services and referral services",
    "Specialist hospital care",
    "Private hospital services"
  ],
  ans: 1,
  rationale: "KEHP 6 packages: Community, Primary care, Referral, etc. Focus on primary care and community. NCK tests Kenya health system."
},
{
  q: "12. Which is a key role of Community Health Volunteers CHVs in Kenya?",
  options: [
    "Prescribe medications",
    "Health promotion and data collection",
    "Perform surgeries",
    "Manage hospitals"
  ],
  ans: 1,
  rationale: "CHVs do household visits, health education, referrals, data. They don't prescribe. Part of Community Health Strategy. NCK tests Kenya context."
},
{
  q: "13. The best way to assess nutritional status of a community is:",
  options: [
    "24-hour recall",
    "Growth monitoring of under 5s",
    "Food frequency questionnaire",
    "Asking adults"
  ],
  ans: 1,
  rationale: "Growth monitoring using growth charts detects trends early. Under 5 most vulnerable. NCK tests nutrition surveillance."
},
{
  q: "14. CASE SCENARIO: A school has high cases of jiggers. Priority intervention?",
  options: [
    "Treat affected children",
    "Health education on footwear and hygiene",
    "Close the school",
    "Give deworming tablets"
  ],
  ans: 1,
  rationale: "Tertiary = treat. Primary = prevention: shoes, clean floors, hygiene. Address cause. NCK tests school health."
},
{
  q: "15. Which is an example of active immunity?",
  options: [
    "Placental transfer of IgG",
    "Vaccination",
    "Antiserum injection",
    "Breast milk antibodies"
  ],
  ans: 1,
  rationale: "Active = body makes own antibodies. Natural = infection, Artificial = vaccine. Passive = antibodies given. NCK tests immunology."
},
{
  q: "16. The nurse calculates crude death rate. Formula is:",
  options: [
    "Deaths/1000 population",
    "Deaths/100 population",
    "Births/1000 population",
    "Cases/100 population"
  ],
  ans: 0,
  rationale: "CDR = Total deaths / Total population x 1000. NCK tests biostatistics."
},
{
  q: "17. Which disease is under surveillance in Kenya due to eradication efforts?",
  options: [
    "Malaria",
    "Polio",
    "Typhoid",
    "Cholera"
  ],
  ans: 1,
  rationale: "Polio eradication program. AFP surveillance. Kenya is polio-free but still surveilling. NCK tests national programs."
},
{
  q: "18. A community has high teenage pregnancies. Best long-term strategy?",
  options: [
    "Provide contraceptives in school",
    "Comprehensive sexuality education + youth friendly services",
    "Punish offenders",
    "Ignore it"
  ],
  ans: 1,
  rationale: "Multi-sectoral approach. Education + access + empowerment. NCK tests adolescent health."
},
{
  q: "19. The principle 'equity' in PHC means:",
  options: [
    "Everyone gets same service",
    "Resources distributed based on need",
    "Only rich get services",
    "Services in urban areas only"
  ],
  ans: 1,
  rationale: "Equity ≠ equality. Vulnerable get more resources. NCK tests PHC principles."
},
{
  q: "20. CASE SCENARIO: Floods hit a village. First priority?",
  options: [
    "Start reconstruction",
    "Assess water, sanitation and disease risk",
    "Give blankets",
    "Health education"
  ],
  ans: 1,
  rationale: "Disaster nursing: Assess needs, prevent communicable diseases from contaminated water. NCK tests disaster management."
},
{
  q: "21. Which is a characteristic of a communicable disease?",
  options: [
    "Caused by lifestyle",
    "Can be transmitted from person to person",
    "Genetic in origin",
    "Not preventable"
  ],
  ans: 1,
  rationale: "Communicable = infectious agent + transmission. NCDs = lifestyle. NCK tests epidemiology basics."
},
{
  q: "22. The Expanded Program on Immunization EPI in Kenya gives BCG at:",
  options: [
    "6 weeks",
    "Birth",
    "10 weeks",
    "14 weeks"
  ],
  ans: 1,
  rationale: "KEPI schedule: BCG + OPV0 at birth. 6wks = Penta1, OPV1, PCV1, Rota1. NCK tests KEPI schedule."
},
{
  q: "23. Which is the most important factor in community diagnosis?",
  options: [
    "Hospital data",
    "Community participation",
    "Nurse's opinion",
    "Government data only"
  ],
  ans: 1,
  rationale: "Community must be involved to identify felt needs. NCK tests community assessment."
},
{
  q: "24. A nurse doing home visits is practicing:",
  options: [
    "Hospital nursing",
    "Community health nursing",
    "ICU nursing",
    "Theater nursing"
  ],
  ans: 1,
  rationale: "Home visiting = core of CHN. Focus on family and environment. NCK tests CHN roles."
},
{
  q: "25. CASE SCENARIO: High maternal deaths in a county. Most likely cause in Kenya?",
  options: [
    "Cancer",
    "Hemorrhage",
    "Diabetes",
    "Accidents"
  ],
  ans: 1,
  rationale: "MMR in KE: Hemorrhage, sepsis, hypertensive disorders, obstructed labor. NCK tests maternal health."
},
{
  q: "26. Which is tertiary prevention for a diabetic patient?",
  options: [
    "Health education",
    "Foot care to prevent amputation",
    "Screening for diabetes",
    "Vaccination"
  ],
  ans: 1,
  rationale: "Tertiary = prevent complications and rehab. Foot care prevents ulcers/amputation. NCK tests prevention."
},
{
  q: "27. The best indicator for family planning program success is:",
  options: [
    "Number of clinics",
    "Contraceptive prevalence rate",
    "Number of nurses",
    "Population size"
  ],
  ans: 1,
  rationale: "CPR = % of women using contraception. NCK tests FP indicators."
},
{
  q: "28. Which is a barrier to health care access in rural areas?",
  options: [
    "Too many hospitals",
    "Distance and transport costs",
    "Overstaffing",
    "Too much health education"
  ],
  ans: 1,
  rationale: "Access barriers: distance, cost, cultural, lack of staff. NCK tests community factors."
},
{
  q: "29. CASE SCENARIO: A child has MUAC <11.5cm. Classification?",
  options: [
    "Normal",
    "Moderate acute malnutrition",
    "Severe acute malnutrition",
    "Overweight"
  ],
  ans: 2,
  rationale: "MUAC: <11.5cm = SAM, 11.5-12.5 = MAM, >12.5 = normal. NCK tests nutrition assessment."
},
{
  q: "30. The role of intersectoral collaboration in PHC is to:",
  options: [
    "Work only with health sector",
    "Involve education, agriculture, water sectors",
    "Exclude community",
    "Focus on hospitals"
  ],
  ans: 1,
  rationale: "Health is affected by water, education, agriculture. PHC requires all sectors. NCK tests PHC."
},
{
  q: "31. Which is an example of primordial prevention?",
  options: [
    "Treating hypertension",
    "Preventing risk factors like obesity in children",
    "Rehabilitation after stroke",
    "Screening for cancer"
  ],
  ans: 1,
  rationale: "Primordial = prevent development of risk factors. Before primary. NCK tests prevention levels."
},
{
  q: "32. CASE SCENARIO: A community refuses vaccination due to myths. Best approach?",
  options: [
    "Force them",
    "Community dialogue and involve elders",
    "Ignore them",
    "Close clinic"
  ],
  ans: 1,
  rationale: "Cultural sensitivity + community leaders = trust. NCK tests health education and communication."
},
{
  q: "33. The purpose of epidemiological surveillance is to:",
  options: [
    "Treat patients",
    "Detect and monitor disease trends",
    "Build hospitals",
    "Give drugs"
  ],
  ans: 1,
  rationale: "Surveillance = collect, analyze, interpret data for action. NCK tests epidemiology."
},
{
  q: "34. Which vitamin deficiency causes night blindness?",
  options: [
    "Vitamin A",
    "Vitamin D",
    "Vitamin C",
    "Vitamin B1"
  ],
  ans: 0,
  rationale: "Vit A deficiency = xerophthalmia, night blindness. Supplemented in children 6-59 months in Kenya. NCK tests nutrition."
},
{
  q: "35. A community health nurse is an advocate. This means:",
  options: [
    "Do everything for client",
    "Speak on behalf of community needs",
    "Ignore community",
    "Work alone"
  ],
  ans: 1,
  rationale: "Advocacy = voice for vulnerable populations, link to resources. NCK tests CHN roles."
},
{
  q: "36. CASE SCENARIO: High cases of malaria in rainy season. Best preventive measure?",
  options: [
    "Mass drug administration",
    "Use of ITNs and IRS",
    "Health education only",
    "Close swamps"
  ],
  ans: 1,
  rationale: "Malaria prevention: ITNs, IRS, larviciding. Kenya strategy. NCK tests communicable disease control."
},
{
  q: "37. Which is a function of a dispensary in Kenya?",
  options: [
    "Perform major surgery",
    "Provide outpatient and basic services",
    "Train specialists",
    "Research only"
  ],
  ans: 1,
  rationale: "Health facility levels: Dispensary = Level 2, outpatient, ANC, FP. NCK tests Kenya health system."
},
{
  q: "38. The most important component of ORT is:",
  options: [
    "Antibiotics",
    "Zinc and fluids",
    "Hospital admission",
    "IV fluids only"
  ],
  ans: 1,
  rationale: "ORT = ORS + Zinc for 10 days. Prevents dehydration and reduces duration. NCK tests child health."
},
{
  q: "39. CASE SCENARIO: A woman delivers at home. Priority postnatal visit?",
  options: [
    "After 6 weeks",
    "Within 24-48 hours",
    "After 1 month",
    "No need"
  ],
  ans: 1,
  rationale: "WHO/KE guidelines: PNC visits at 24-48hr, 6-7 days, 6 weeks. Most deaths occur in first week. NCK tests maternal health."
},
{
  q: "40. Which is a social determinant of health?",
  options: [
    "Blood type",
    "Education level",
    "Age",
    "Gender only"
  ],
  ans: 1,
  rationale: "Social determinants: education, income, housing, employment. NCK tests public health."
},
{
  q: "41. The purpose of growth monitoring is:",
  options: [
    "To weigh children only",
    "Early detection of growth faltering",
    "To give food",
    "To punish mothers"
  ],
  ans: 1,
  rationale: "Plot weight monthly to detect faltering early and intervene. NCK tests MCH."
},
{
  q: "42. CASE SCENARIO: Community has high HIV stigma. Best intervention?",
  options: [
    "Test everyone forcefully",
    "Health education and support groups",
    "Isolate patients",
    "Do nothing"
  ],
  ans: 1,
  rationale: "Reduce stigma through education, peer support, confidentiality. NCK tests HIV programming."
},
{
  q: "43. Which is an objective of school health program?",
  options: [
    "Treat all diseases",
    "Promote health and prevent illness in school children",
    "Close schools",
    "Give exams"
  ],
  ans: 1,
  rationale: "School health: deworming, immunization, health education, screening. NCK tests school health."
},
{
  q: "44. The best way to dispose of sharps in community is:",
  options: [
    "Burn in open",
    "Safety box and incinerate",
    "Throw in pit latrine",
    "Bury in shallow hole"
  ],
  ans: 1,
  rationale: "Infection control: safety box → incineration. Prevent needle stick. NCK tests waste management."
},
{
  q: "45. CASE SCENARIO: A village has no clean water. Priority nursing diagnosis?",
  options: [
    "Risk for infection",
    "Deficient knowledge",
    "Risk for imbalanced nutrition",
    "All of the above"
  ],
  ans: 3,
  rationale: "No water affects infection, nutrition, knowledge. Community diagnosis is multi-factorial. NCK tests nursing process."
},
{
  q: "46. Which is a principle of community organization?",
  options: [
    "Top-down approach",
    "Self-determination",
    "Ignore local leaders",
    "One solution for all"
  ],
  ans: 1,
  rationale: "Community organization: people identify own problems and solutions. NCK tests community development."
},
{
  q: "47. The nurse uses epidemiological triad. Components are:",
  options: [
    "Agent, host, environment",
    "Doctor, nurse, patient",
    "Prevention, treatment, rehab",
    "Hospital, clinic, home"
  ],
  ans: 0,
  rationale: "Disease occurs due to interaction of agent + susceptible host + environment. NCK tests epidemiology."
},
{
  q: "48. CASE SCENARIO: High neonatal deaths. Most effective intervention?",
  options: [
    "More ambulances",
    "Skilled birth attendance and essential newborn care",
    "Health education only",
    "Build more hospitals"
  ],
  ans: 1,
  rationale: "Majority of neonatal deaths preventable with skilled care, resuscitation, thermal care, breastfeeding. NCK tests newborn health."
},
{
  q: "49. Which is a characteristic of a healthy community?",
  options: [
    "High mortality",
    "Access to clean water and sanitation",
    "No health services",
    "High disease burden"
  ],
  ans: 1,
  rationale: "Healthy community has resources, low disease, participation. NCK tests community health concepts."
},
{
  q: "50. The nurse's role in disaster preparedness is to:",
  options: [
    "Wait for disaster",
    "Participate in planning and education",
    "Ignore it",
    "Only treat injuries"
  ],
  ans: 1,
  rationale: "CHN role: planning, drills, education, coordination. NCK tests disaster nursing."
}
    ],
    "Pediatric Nursing ": [
      // PEDIATRIC NURSING - 50 QUESTIONS NCK FORMAT
{
  q: "1. A 6-month old infant weighs 7kg. Expected weight gain from birth weight is:",
  options: [
    "Double birth weight",
    "Triple birth weight",
    "50% more than birth weight",
    "Same as birth weight"
  ],
  ans: 0,
  rationale: "Growth rule: Birth weight doubles by 6 months, triples by 1 year. Average gain 25-30g/day first 3 months. NCK tests growth and development."
},
{
  q: "2. CASE SCENARIO: A 2-year old with fever, barking cough, and inspiratory stridor at night. Most likely diagnosis?",
  options: [
    "Bronchiolitis",
    "Croup/Laryngotracheobronchitis",
    "Asthma",
    "Pneumonia"
  ],
  ans: 1,
  rationale: "Croup triad: barking cough + stridor + hoarseness. Worse at night. Due to subglottic edema. Bronchiolitis = wheezing in <2y. NCK tests respiratory emergencies."
},
{
  q: "3. The priority nursing action for a child with febrile seizures is to:",
  options: [
    "Restrain the child",
    "Place child on side and protect from injury",
    "Give cold bath immediately",
    "Insert airway"
  ],
  ans: 1,
  rationale: "Seizure safety: Side-lying to prevent aspiration, protect head, don't restrain. Time seizure. Antipyretics after. NCK tests neurological emergency."
},
{
  q: "4. Which finding is expected in a 3-month old infant?",
  options: [
    "Sits without support",
    "Follows objects with eyes",
    "Walks with support",
    "Says 2 words"
  ],
  ans: 1,
  rationale: "3 months: head control, follows with eyes, coos. 6 months = sits. 9 months = crawls. 12 months = walks. NCK tests developmental milestones."
},
{
  q: "5. A child with dehydration has sunken fontanelle, dry mucous membranes, and poor skin turgor. This indicates:",
  options: [
    "Mild dehydration",
    "Moderate dehydration",
    "Severe dehydration",
    "Normal finding"
  ],
  ans: 2,
  rationale: "Severe dehydration signs: lethargy, sunken eyes/fontanelle, skin pinch >2sec, unable to drink. Moderate = thirsty, restless. NCK tests IMCI."
},
{
  q: "6. CASE SCENARIO: A 4-year old ingested iron tablets 30min ago. First action?",
  options: [
    "Induce vomiting",
    "Call poison control and give milk",
    "Give activated charcoal",
    "Wait and observe"
  ],
  ans: 1,
  rationale: "Iron is corrosive + cardiotoxic. Don't induce vomiting. Call poison control, give milk to bind iron. NCK tests poisoning management."
},
{
  q: "7. The best position for a child with epiglottitis is:",
  options: [
    "Supine",
    "Prone",
    "Tripod position, leaning forward",
    "Side-lying"
  ],
  ans: 2,
  rationale: "Epiglottitis = airway emergency. Child sits up, leans forward 'tripod' to maintain airway. No throat exam. NCK tests airway management."
},
{
  q: "8. Which immunization is given at 6 weeks in Kenya KEPI schedule?",
  options: [
    "BCG",
    "Penta 1, OPV1, PCV1, Rota1",
    "Measles",
    "Tetanus"
  ],
  ans: 1,
  rationale: "KEPI: Birth = BCG, OPV0. 6 weeks = Penta1, OPV1, PCV1, Rota1. 10 weeks = Penta2. 14 weeks = Penta3. 9 months = Measles. NCK tests KEPI."
},
{
  q: "9. A child with celiac disease should avoid:",
  options: [
    "Rice and potatoes",
    "Wheat, barley, rye",
    "Milk and cheese",
    "Fruits and vegetables"
  ],
  ans: 1,
  rationale: "Celiac = gluten intolerance. Gluten in wheat, barley, rye. Causes villous atrophy and malabsorption. NCK tests GI disorders."
},
{
  q: "10. CASE SCENARIO: Newborn with down-turned mouth, low-set ears, single palmar crease. Nurse suspects:",
  options: [
    "Turner syndrome",
    "Down syndrome",
    "Cystic fibrosis",
    "Tay-Sachs"
  ],
  ans: 1,
  rationale: "Down syndrome features: hypotonia, flat face, epicanthal folds, single palmar crease, CHD risk. NCK tests congenital disorders."
},
{
  q: "11. The priority for a child with meningitis is to:",
  options: [
    "Administer antibiotics as soon as possible",
    "Give fluids",
    "Reduce fever",
    "Isolate patient"
  ],
  ans: 0,
  rationale: "Bacterial meningitis = medical emergency. Antibiotics within 1 hour reduces mortality. Also droplet isolation. NCK tests infectious disease."
},
{
  q: "12. Which is a sign of increased ICP in an infant?",
  options: [
    "Bulging fontanelle",
    "Bradycardia",
    "Hypertension",
    "All of the above"
  ],
  ans: 3,
  rationale: "Cushing's triad in children: HTN, bradycardia, irregular respirations. Infant specific: bulging fontanelle, high-pitched cry. NCK tests neuro."
},
{
  q: "13. A toddler is in the 'autonomy vs shame and doubt' stage according to Erikson. Age?",
  options: [
    "0-1 year",
    "1-3 years",
    "3-6 years",
    "6-12 years"
  ],
  ans: 1,
  rationale: "Erikson: 0-1 Trust, 1-3 Autonomy, 3-6 Initiative, 6-12 Industry. Toddlers need choices to develop autonomy. NCK tests developmental theory."
},
{
  q: "14. CASE SCENARIO: 8-year old with diabetes type 1 has fruity breath, vomiting, Kussmaul respirations. Likely?",
  options: [
    "Hypoglycemia",
    "Diabetic ketoacidosis",
    "Hyperosmolar state",
    "Normal"
  ],
  ans: 1,
  rationale: "DKA triad: hyperglycemia + ketosis + acidosis. S/S: polyuria, polydipsia, fruity breath, Kussmaul, vomiting. Emergency. NCK tests endocrine."
},
{
  q: "15. The nurse teaches parents about SIDS prevention. Most important?",
  options: [
    "Use soft pillows",
    "Place infant on back to sleep",
    "Keep room warm",
    "Use bumper pads"
  ],
  ans: 1,
  rationale: "Back to sleep reduces SIDS 50%. Avoid soft bedding, overheating, smoking. NCK tests newborn safety."
},
{
  q: "16. Which fluid is used for a child with severe dehydration and shock?",
  options: [
    "D5W",
    "Normal saline bolus 20ml/kg",
    "Dextrose 50%",
    "Half normal saline"
  ],
  ans: 1,
  rationale: "Pediatric shock: NS or LR 20ml/kg bolus, repeat up to 3x. Then reassess. Avoid hypotonic fluids initially. NCK tests emergency care."
},
{
  q: "17. CASE SCENARIO: 5-year old with leukemia has fever 39C and ANC 200. Priority action?",
  options: [
    "Give antipyretic",
    "Initiate neutropenic precautions and notify MD",
    "Encourage visitors",
    "Give oral fluids"
  ],
  ans: 1,
  rationale: "ANC <500 = severe neutropenia. Risk sepsis. Reverse isolation, no fresh flowers/fruits, antibiotics. NCK tests oncology."
},
{
  q: "18. A child with otitis media will likely report:",
  options: [
    "Ear pain and tugging ear",
    "Nasal congestion only",
    "Cough",
    "Rash"
  ],
  ans: 0,
  rationale: "OM common in <5y due to short eustachian tube. S/S: ear pain, fever, irritability, tugging ear. NCK tests common childhood illness."
},
{
  q: "19. The nurse assesses a newborn. Acrocyanosis is:",
  options: [
    "Normal for first 24-48 hours",
    "Sign of hypoxia",
    "Sign of infection",
    "Abnormal always"
  ],
  ans: 0,
  rationale: "Acrocyanosis = blue hands/feet only. Normal due to circulation. Central cyanosis = abnormal. NCK tests newborn assessment."
},
{
  q: "20. CASE SCENARIO: 3-year old with burns 15% TBSA. First priority?",
  options: [
    "Apply cream",
    "Assess airway and fluid resuscitation",
    "Give pain meds",
    "Cover with blanket"
  ],
  ans: 1,
  rationale: "ABC. Inhalation injury risk. Fluid resuscitation per Parkland. Then wound care. NCK tests pediatric burns."
},
{
  q: "21. Which is a complication of measles in children?",
  options: [
    "Otitis media and pneumonia",
    "Diabetes",
    "Asthma",
    "Epilepsy"
  ],
  ans: 0,
  rationale: "Measles complications: pneumonia, otitis, encephalitis, vitamin A deficiency. Give vitamin A per WHO. NCK tests communicable disease."
},
{
  q: "22. A child with Wilms tumor should avoid:",
  options: [
    "IV fluids",
    "Abdominal palpation",
    "Oral feeding",
    "Antibiotics"
  ],
  ans: 1,
  rationale: "Wilms = kidney tumor. Risk rupture. No palpation, no contact sports. Mass is painless. NCK tests pediatric cancer."
},
{
  q: "23. The nurse teaches about introduction of solid foods. Best age?",
  options: [
    "2 months",
    "4 months",
    "6 months",
    "12 months"
  ],
  ans: 2,
  rationale: "WHO/KE guidelines: Exclusive breastfeeding 6 months, then introduce solids. Before 6 months risk aspiration, allergy. NCK tests nutrition."
},
{
  q: "24. CASE SCENARIO: 10-year old with appendicitis has rebound tenderness. This indicates:",
  options: [
    "Peritonitis",
    "Constipation",
    "Gastritis",
    "Normal finding"
  ],
  ans: 0,
  rationale: "Rebound tenderness = peritoneal irritation. Appendicitis emergency. Monitor for rupture. NCK tests surgical abdomen."
},
{
  q: "25. Which medication is contraindicated in children with viral illness due to Reye's syndrome?",
  options: [
    "Paracetamol",
    "Aspirin",
    "Ibuprofen",
    "Amoxicillin"
  ],
  ans: 1,
  rationale: "Aspirin + viral illness = Reye's syndrome: liver failure + encephalopathy. Use paracetamol instead. NCK tests drug safety."
},
{
  q: "26. A premature infant is at risk for:",
  options: [
    "Retinopathy of prematurity",
    "Diabetes",
    "Hypertension",
    "Arthritis"
  ],
  ans: 0,
  rationale: "ROP from O2 therapy + prematurity. Screen all <32 weeks or <1500g. Also RDS, NEC, IVH. NCK tests neonatal complications."
},
{
  q: "27. CASE SCENARIO: 7-year old with nephrotic syndrome has edema and proteinuria. Diet should be:",
  options: [
    "High protein, low sodium",
    "Low protein, high sodium",
    "High sodium, high fluid",
    "Normal diet"
  ],
  ans: 0,
  rationale: "Nephrotic: protein loss → edema. Diet: moderate-high protein, sodium restriction, fluid restriction if severe edema. NCK tests renal."
},
{
  q: "28. The nurse assesses a child with sickle cell disease. Priority during crisis?",
  options: [
    "Hydration and pain management",
    "Restrict fluids",
    "Apply heat only",
    "Give iron"
  ],
  ans: 0,
  rationale: "Sickle crisis: vaso-occlusion + pain. Hydration to decrease sickling, opioids for pain, O2. Avoid cold. NCK tests hematology."
},
{
  q: "29. Which is a characteristic of autism spectrum disorder?",
  options: [
    "Poor eye contact and delayed speech",
    "Hyperactivity only",
    "Advanced language",
    "Normal social skills"
  ],
  ans: 0,
  rationale: "ASD: impaired social interaction, communication delays, repetitive behaviors. Early intervention key. NCK tests developmental disorders."
},
{
  q: "30. CASE SCENARIO: 2-month old with projectile vomiting after feeding. Likely diagnosis?",
  options: [
    "Gastroenteritis",
    "Pyloric stenosis",
    "GERD",
    "Intussusception"
  ],
  ans: 1,
  rationale: "Pyloric stenosis: 2-8 weeks, projectile non-bilious vomiting, olive-shaped mass. Dehydration + alkalosis. NCK tests GI surgery."
},
{
  q: "31. The nurse teaches parents of a child with asthma. Trigger to avoid?",
  options: [
    "Cold air and allergens",
    "Exercise",
    "Fluids",
    "Sleep"
  ],
  ans: 0,
  rationale: "Asthma triggers: allergens, cold air, smoke, infection, exercise. Teach inhaler use, action plan. NCK tests respiratory."
},
{
  q: "32. A child with spina bifida is at risk for:",
  options: [
    "Latex allergy",
    "Diabetes",
    "Hypertension",
    "Asthma"
  ],
  ans: 0,
  rationale: "Spina bifida patients have high risk of latex allergy due to repeated surgeries. Use latex-free environment. NCK tests neuro defect."
},
{
  q: "33. CASE SCENARIO: 6-month old with diarrhea, 6 watery stools/day. First home management?",
  options: [
    "Stop breastfeeding",
    "Give ORS and continue feeding",
    "Give antibiotics",
    "Give anti-diarrheal"
  ],
  ans: 1,
  rationale: "IMCI: Continue breastfeeding, give ORS 10ml/kg after each stool, zinc 10-20mg for 10 days. No anti-diarrheals. NCK tests diarrhea management."
},
{
  q: "34. Which vaccine is live attenuated?",
  options: [
    "DPT",
    "Hepatitis B",
    "MMR",
    "Pneumococcal"
  ],
  ans: 2,
  rationale: "Live vaccines: MMR, Varicella, Rotavirus, OPV, Yellow fever. Contraindicated in immunocompromised. NCK tests immunization."
},
{
  q: "35. A toddler says 'no' to everything. This is:",
  options: [
    "Sign of autism",
    "Normal development of autonomy",
    "Sign of abuse",
    "Delayed development"
  ],
  ans: 1,
  rationale: "1-3 years: negativism is normal as they assert independence. Offer choices. NCK tests developmental behavior."
},
{
  q: "36. CASE SCENARIO: 9-year old with osteomyelitis has fever and bone pain. Priority nursing care?",
  options: [
    "Immobilize affected limb",
    "Massage area",
    "Apply cold compress",
    "Encourage weight bearing"
  ],
  ans: 0,
  rationale: "Osteomyelitis = bone infection. Immobilize to reduce pain and prevent pathologic fracture. Long-term antibiotics. NCK tests MSK."
},
{
  q: "37. The nurse assesses a newborn for congenital hip dysplasia. Positive test?",
  options: [
    "Barlow and Ortolani test",
    "Babinski reflex",
    "Moro reflex",
    "Rooting reflex"
  ],
  ans: 0,
  rationale: "DDH screening: Barlow = dislocate, Ortolani = relocate. Asymmetric gluteal folds. NCK tests newborn screening."
},
{
  q: "38. A child with cystic fibrosis needs:",
  options: [
    "Low fat diet",
    "High calorie, high protein diet + enzymes",
    "Fluid restriction",
    "Sodium restriction"
  ],
  ans: 1,
  rationale: "CF = pancreatic insufficiency + malabsorption. Need high calorie, fat-soluble vitamins, pancreatic enzymes. NCK tests chronic illness."
},
{
  q: "39. CASE SCENARIO: 4-year old ingested kerosene. First action?",
  options: [
    "Induce vomiting",
    "Do not induce vomiting, position on side",
    "Give milk",
    "Give activated charcoal"
  ],
  ans: 1,
  rationale: "Hydrocarbon ingestion: risk aspiration pneumonia. Don't induce vomiting. Keep airway, monitor for respiratory distress. NCK tests poisoning."
},
{
  q: "40. Which is expected in a 12-month old?",
  options: [
    "Walks alone",
    "Sits without support",
    "Rolls over",
    "Newborn reflexes present"
  ],
  ans: 0,
  rationale: "12 months: walks, says 2-3 words, pincer grasp. Primitive reflexes gone. NCK tests milestones."
},
{
  q: "41. A child with thalassemia requires:",
  options: [
    "Regular blood transfusions",
    "Iron supplements",
    "Antibiotics only",
    "Surgery"
  ],
  ans: 0,
  rationale: "Thalassemia = defective hemoglobin. Needs transfusions + chelation for iron overload. Not iron supplements. NCK tests hematology."
},
{
  q: "42. CASE SCENARIO: 3-year old with foreign body aspiration. Child is coughing forcefully. Action?",
  options: [
    "Perform abdominal thrusts",
    "Encourage coughing",
    "Blind finger sweep",
    "Give water"
  ],
  ans: 1,
  rationale: "If child coughing and air exchange, encourage cough. If cannot cough/breathe → back blows + abdominal thrusts. NCK tests emergency."
},
{
  q: "43. The nurse teaches about fever management. Antipyretic dose is based on:",
  options: [
    "Age",
    "Weight",
    "Height",
    "Temperature"
  ],
  ans: 1,
  rationale: "Pediatric dosing is weight-based. 10-15mg/kg paracetamol q4-6h. Never exceed max. NCK tests medication safety."
},
{
  q: "44. A child with Hirschsprung disease presents with:",
  options: [
    "Ribbon-like stools and abdominal distention",
    "Watery diarrhea",
    "Constipation only",
    "Vomiting only"
  ],
  ans: 0,
  rationale: "Hirschsprung = no ganglion cells → megacolon. S/S: failure to pass meconium, ribbon stools, distention. NCK tests GI."
},
{
  q: "45. CASE SCENARIO: 5-year old with chickenpox. Most important nursing action?",
  options: [
    "Apply calamine and prevent scratching",
    "Give aspirin",
    "Isolate for 1 day",
    "Encourage strenuous activity"
  ],
  ans: 0,
  rationale: "Chickenpox: airborne + contact isolation until lesions crusted. Calamine, keep nails short. No aspirin = Reye's. NCK tests infection control."
},
{
  q: "46. Which is a sign of child abuse?",
  options: [
    "Bruises in various stages of healing",
    "Frequent colds",
    "Normal growth",
    "Good school performance"
  ],
  ans: 0,
  rationale: "Red flags: inconsistent history, bruises on trunk/ears, burns, fear. Nurse must report. NCK tests legal/ethical."
},
{
  q: "47. A child with congenital heart disease and clubbing fingers has:",
  options: [
    "Acute infection",
    "Chronic hypoxia",
    "Anemia",
    "Allergy"
  ],
  ans: 1,
  rationale: "Clubbing = chronic hypoxia. Seen in cyanotic CHD like Tetralogy. NCK tests cardiac."
},
{
  q: "48. CASE SCENARIO: 8-month old not sitting, no babbling. Nurse suspects:",
  options: [
    "Normal variation",
    "Developmental delay",
    "Autism",
    "ADHD"
  ],
  ans: 1,
  rationale: "8 months should sit, babble. Delay in 2+ milestones = refer for evaluation. Early intervention critical. NCK tests developmental screening."
},
{
  q: "49. The nurse administers digoxin to an infant. Before giving, check:",
  options: [
    "Blood pressure",
    "Apical pulse for 1 minute",
    "Temperature",
    "Respirations"
  ],
  ans: 1,
  rationale: "Digoxin: hold if apical pulse <90 in infant, <70 in child. Check for toxicity: vomiting, bradycardia. NCK tests cardiac meds."
},
{
  q: "50. A school-age child is in 'industry vs inferiority' stage. Nurse encourages:",
  options: [
    "Independence",
    "School activities and achievement",
    "Trust",
    "Identity"
  ],
  ans: 1,
  rationale: "Erikson 6-12: Industry. Encourage school, hobbies, mastery. Failure leads to inferiority. NCK tests developmental theory."
}
    ],
    "Mental Health and Psychiatry": [
      // MENTAL HEALTH & PSYCHIATRY - 30 QUESTIONS NCK FORMAT
{
  q: "1. A client drinks 6 beers daily and becomes shaky, anxious when he stops. This indicates:",
  options: [
    "Alcohol abuse",
    "Alcohol dependence with physiological dependence",
    "Alcohol intoxication",
    "Alcohol tolerance"
  ],
  ans: 1,
  rationale: "DSM-5 SUD: Physiological dependence = tolerance + withdrawal. Shaking = withdrawal. 6/day = pattern of use. NCK loves differentiating abuse vs dependence."
},
{
  q: "2. CASE SCENARIO: A client says 'The FBI is following me through the TV'. This is an example of:",
  options: [
    "Hallucination",
    "Delusion of persecution",
    "Illusion",
    "Flight of ideas"
  ],
  ans: 1,
  rationale: "Delusion = fixed false belief. Persecutory = someone out to harm. Hallucination = false sensory perception. NCK tests psychosis symptoms."
},
{
  q: "3. Which is the priority nursing diagnosis for a client with suicidal ideation?",
  options: [
    "Disturbed thought process",
    "Risk for self-directed violence",
    "Social isolation",
    "Impaired coping"
  ],
  ans: 1,
  rationale: "ABC. Safety first. Any suicidal ideation = Risk for self-directed violence is priority. Then therapeutic communication. NCK tests prioritization."
},
{
  q: "4. A client with Major Depressive Disorder vs Bipolar Disorder. Key differentiating factor?",
  options: [
    "Sadness",
    "History of manic or hypomanic episode",
    "Insomnia",
    "Poor appetite"
  ],
  ans: 1,
  rationale: "MDD = only depressive episodes. Bipolar = at least 1 manic/hypomanic episode. Both have depression. NCK repeats this every year."
},
{
  q: "5. The nurse uses therapeutic communication. Which response is best for a client who says 'I feel worthless'?",
  options: [
    "You shouldn't feel that way",
    "Everyone feels that way sometimes",
    "Tell me more about what makes you feel worthless",
    "You have a lot to be proud of"
  ],
  ans: 2,
  rationale: "Open-ended, non-judgmental, encourages expression. Avoid false reassurance and clichés. NCK tests therapeutic vs non-therapeutic."
},
{
  q: "6. CASE SCENARIO: Client with schizophrenia stops medication because 'it makes me feel controlled'. Nurse response?",
  options: [
    "You must take it or you'll relapse",
    "Tell me what concerns you about the medication",
    "If you don't take it, you will be restrained",
    "Your doctor knows best"
  ],
  ans: 1,
  rationale: "Therapeutic: explore concerns, build alliance. Address side effects. Non-adherence is common in schizophrenia. NCK tests therapeutic comm."
},
{
  q: "7. Which defense mechanism is 'I don't have cancer, the lab made a mistake'?",
  options: [
    "Denial",
    "Projection",
    "Rationalization",
    "Sublimation"
  ],
  ans: 0,
  rationale: "Denial = refusal to accept reality. Projection = blaming others. Rationalization = excuses. NCK loves defense mechanisms."
},
{
  q: "8. A client with OCD washes hands 50 times/day. Underlying need is:",
  options: [
    "Attention seeking",
    "Anxiety reduction",
    "Manipulation",
    "Boredom"
  ],
  ans: 1,
  rationale: "OCD compulsions reduce anxiety from obsessions. Rituals are not for attention. NCK tests anxiety disorders."
},
{
  q: "9. CASE SCENARIO: Client admitted voluntarily says 'I want to leave now'. Nurse should:",
  options: [
    "Restrain the client",
    "Notify physician and process discharge",
    "Hide the client's clothes",
    "Give sedatives"
  ],
  ans: 1,
  rationale: "Voluntary admission = can leave anytime unless becomes danger. Must follow legal procedure. Involuntary needs court/MD order. NCK tests legal/ethical."
},
{
  q: "10. Which medication requires monitoring for agranulocytosis?",
  options: [
    "Lithium",
    "Clozapine",
    "Fluoxetine",
    "Haloperidol"
  ],
  ans: 1,
  rationale: "Clozapine = atypical antipsychotic. Risk agranulocytosis. Needs weekly CBC. Lithium = kidney/thyroid. NCK tests psychotropic side effects."
},
{
  q: "11. A client with anorexia nervosa says 'I'm fat'. Nurse recognizes this as:",
  options: [
    "Body image disturbance",
    "Attention seeking",
    "Normal teen behavior",
    "Manipulation"
  ],
  ans: 0,
  rationale: "Anorexia = distorted body image + fear of weight gain + refusal to maintain weight. NCK tests eating disorders."
},
{
  q: "12. CASE SCENARIO: Client with mania hasn't slept in 3 days, spending excessively, talking rapidly. Priority intervention?",
  options: [
    "Encourage sleep hygiene",
    "Provide quiet, low-stimulation environment",
    "Give high calorie snacks",
    "All of the above"
  ],
  ans: 3,
  rationale: "Mania = decreased need for sleep, poor judgment, increased energy. Needs safety, decreased stimuli, nutrition. NCK tests bipolar management."
},
{
  q: "13. Which is an example of reaction formation?",
  options: [
    "I hate my boss so I quit",
    "I hate my boss so I am overly nice to him",
    "I hate my boss so I blame coworkers",
    "I hate my boss so I work harder"
  ],
  ans: 1,
  rationale: "Reaction formation = expressing opposite of true feeling. NCK repeats defense mechanisms."
},
{
  q: "14. Lithium toxicity is likely when level is:",
  options: [
    "0.5 mEq/L",
    "1.0 mEq/L",
    "1.5 mEq/L",
    "2.5 mEq/L"
  ],
  ans: 2,
  rationale: "Therapeutic: 0.6-1.2. Toxic >1.5. S/S: N/V, tremors, confusion. Monitor levels q3-6months. NCK tests lithium."
},
{
  q: "15. CASE SCENARIO: Client with PTSD has flashbacks and avoids crowds. Best nursing intervention?",
  options: [
    "Force client to face crowds",
    "Teach grounding techniques and provide safe environment",
    "Ignore the flashbacks",
    "Tell client to forget it"
  ],
  ans: 1,
  rationale: "PTSD = re-experiencing + avoidance. Treatment: safety, grounding, CBT. Don't force exposure. NCK tests trauma."
},
{
  q: "16. Which is a positive symptom of schizophrenia?",
  options: [
    "Flat affect",
    "Social withdrawal",
    "Hallucinations",
    "Alogia"
  ],
  ans: 2,
  rationale: "Positive = added: delusions, hallucinations, disorganized speech. Negative = lost: flat affect, alogia, avolition. NCK tests schizophrenia."
},
{
  q: "17. A client with borderline personality disorder threatens self-harm when staff leaves. This is:",
  options: [
    "Manipulation",
    "Fear of abandonment",
    "Attention seeking",
    "Normal behavior"
  ],
  ans: 1,
  rationale: "BPD hallmark: fear of abandonment, unstable relationships, self-harm. Need consistent boundaries + validation. NCK tests personality disorders."
},
{
  q: "18. CASE SCENARIO: Client withdrawing from alcohol has BP 180/110, HR 120, hallucinations. Priority?",
  options: [
    "Give antipsychotic",
    "Assess for delirium tremens and give benzodiazepines",
    "Restrain client",
    "Send home"
  ],
  ans: 1,
  rationale: "DTs = life-threatening withdrawal 48-96hr. S/S: autonomic hyperactivity + hallucinations + seizures. BZDs first line. NCK tests SUD emergency."
},
{
  q: "19. Which is appropriate for a client with depression and psychomotor retardation?",
  options: [
    "Complex group activities",
    "Simple, structured activities",
    "No activities",
    "Competitive sports"
  ],
  ans: 1,
  rationale: "Depression with retardation = low energy. Start with simple tasks, build success. Avoid overwhelming. NCK tests MDD interventions."
},
{
  q: "20. The nurse suspects child abuse. Legal responsibility is to:",
  options: [
    "Confront parents",
    "Report to authorities",
    "Ignore it",
    "Wait for proof"
  ],
  ans: 1,
  rationale: "Mandatory reporting. Suspected abuse must be reported. Don't investigate yourself. NCK tests legal/ethical."
},
{
  q: "21. CASE SCENARIO: Client says 'I hear voices telling me to hurt myself'. First action?",
  options: [
    "Tell client voices aren't real",
    "Assess for suicidal and homicidal ideation",
    "Increase medication",
    "Leave client alone"
  ],
  ans: 1,
  rationale: "Safety first. Assess command hallucinations + plan + intent. Then reality orientation. NCK tests psychotic emergency."
},
{
  q: "22. Which is a side effect of SSRIs?",
  options: [
    "Weight gain and sedation",
    "Sexual dysfunction and GI upset",
    "Tremors",
    "Agranulocytosis"
  ],
  ans: 1,
  rationale: "SSRIs: sexual dysfunction, nausea, headache. TCAs = weight gain, sedation. Antipsychotics = tremors, EPS. NCK tests antidepressants."
},
{
  q: "23. A client with ADHD is most likely to exhibit:",
  options: [
    "Inattention, hyperactivity, impulsivity",
    "Depression",
    "Delusions",
    "Compulsions"
  ],
  ans: 0,
  rationale: "ADHD triad: inattention + hyperactivity + impulsivity. NCK tests childhood disorders."
},
{
  q: "24. CASE SCENARIO: Client with alcohol use disorder is in denial. Best approach?",
  options: [
    "Argue that client has a problem",
    "Use motivational interviewing and express concern",
    "Ignore the denial",
    "Threaten client"
  ],
  ans: 1,
  rationale: "Motivational interviewing: meet client where they are. Confrontation increases resistance. NCK tests SUD treatment."
},
{
  q: "25. Which is true about ECT?",
  options: [
    "Causes brain damage",
    "Used for severe depression not responding to meds",
    "Client must be awake",
    "Done daily"
  ],
  ans: 1,
  rationale: "ECT: severe MDD, catatonia, suicidal. Done 2-3x/week under anesthesia. Side effect: memory loss. NCK tests ECT."
},
{
  q: "26. A client with antisocial personality disorder is likely to:",
  options: [
    "Follow rules",
    "Disregard rights of others",
    "Have stable relationships",
    "Seek treatment voluntarily"
  ],
  ans: 1,
  rationale: "ASPD: disregard for rights, deceitful, no remorse. Difficult to treat. NCK tests personality disorders."
},
{
  q: "27. CASE SCENARIO: Client with bulimia binges and purges. Priority nursing concern?",
  options: [
    "Obesity",
    "Electrolyte imbalance",
    "Diabetes",
    "Hypertension"
  ],
  ans: 1,
  rationale: "Purging → hypokalemia, metabolic alkalosis, cardiac arrhythmias. Monitor K+. NCK tests eating disorders."
},
{
  q: "28. Therapeutic communication technique 'reflecting' is:",
  options: [
    "Giving advice",
    "Restating client's feelings",
    "Changing subject",
    "Asking why"
  ],
  ans: 1,
  rationale: "Reflecting: 'You seem angry'. Validates feelings. NCK tests communication techniques."
},
{
  q: "29. A client with dementia and sundowning is worst at:",
  options: [
    "Morning",
    "Afternoon",
    "Evening/night",
    "Noon"
  ],
  ans: 2,
  rationale: "Sundowning = increased confusion, agitation in late afternoon/evening. Provide structured routine, lighting. NCK tests geriatric psych."
},
{
  q: "30. CASE SCENARIO: Client with bipolar disorder on lithium reports severe diarrhea and tremors. Nurse should:",
  options: [
    "Increase lithium dose",
    "Hold lithium and notify MD",
    "Give antidiarrheal",
    "Ignore symptoms"
  ],
  ans: 1,
  rationale: "GI symptoms + tremors = lithium toxicity. Hold drug, check level, hydrate. NCK tests lithium monitoring."
}
    ],
    " Pharmacology ": [
      // PHARMACOLOGY - 30 QUESTIONS NCK FORMAT
{
  q: "1. Omeprazole treats gastric ulcers by:",
  options: [
    "Neutralizing stomach acid",
    "Forming protective barrier over ulcer",
    "Inhibiting H+/K+ ATPase proton pump",
    "Blocking H2 receptors"
  ],
  ans: 2,
  rationale: "PPI: Omeprazole irreversibly blocks H+/K+ ATPase pump = final step of acid secretion. Give 30min before breakfast. H2 blockers = ranitidine. Sucralfate = barrier. NCK repeats this."
},
{
  q: "2. Digoxin increases cardiac function by:",
  options: [
    "Beta-adrenergic stimulation",
    "Inhibiting Na+/K+ ATPase causing increased Ca++",
    "Vasodilation",
    "Diuretic effect"
  ],
  ans: 1,
  rationale: "Digoxin: Inhibits Na/K pump → more Na inside → Ca++ stays in cell → stronger contraction + negative chronotropic. Check apical pulse 1min before giving. Hold if <60 adult <90 infant. NCK loves digoxin."
},
{
  q: "3. The loading dose of MgSO4 for eclampsia is:",
  options: [
    "2g IV over 20min",
    "4g IV over 5-20min then 1-2g/hr infusion",
    "10g IM",
    "500mg IV"
  ],
  ans: 1,
  rationale: "NCK FAVORITE. Eclampsia/Severe preeclampsia: 4-6g IV loading over 20min, then 1-2g/hr maintenance. Therapeutic level: 4-7 mEq/L. Toxic >9. Antidote: Calcium gluconate. Monitor RR, reflexes, UO >30ml/hr. NCK repeats dose every year."
},
{
  q: "4. Which is a side effect of Furosemide?",
  options: [
    "Hyperkalemia",
    "Hypokalemia and ototoxicity",
    "Bradycardia",
    "Constipation"
  ],
  ans: 1,
  rationale: "Loop diuretic: K+ wasting, ototoxicity, hypotension. Monitor K+, BP, I&O. Give in morning. NCK tests diuretics."
},
{
  q: "5. Insulin Lispro is different from Regular insulin because:",
  options: [
    "Longer duration",
    "Rapid onset 15min, given right before meals",
    "IM only",
    "No peak"
  ],
  ans: 1,
  rationale: "Lispro = rapid acting. Onset 15min, peak 1hr, duration 3-4hr. Regular = onset 30min. Lispro prevents hypoglycemia between meals. NCK tests DM drugs."
},
{
  q: "6. CASE SCENARIO: Patient on Warfarin has INR 4.5. Nurse anticipates:",
  options: [
    "Increase Warfarin dose",
    "Administer Vitamin K",
    "Give Heparin",
    "No action needed"
  ],
  ans: 1,
  rationale: "Therapeutic INR 2-3. >3.5 = bleeding risk. Vitamin K reverses. Heparin monitored by aPTT. NCK tests anticoagulants."
},
{
  q: "7. Metformin is contraindicated in patients with:",
  options: [
    "Hypertension",
    "Renal failure",
    "Asthma",
    "Anemia"
  ],
  ans: 1,
  rationale: "Metformin risk lactic acidosis. Contraindicated in renal failure, liver disease, CHF. Hold before contrast. Monitor creatinine. NCK tests DM."
},
{
  q: "8. The antidote for Acetaminophen overdose is:",
  options: [
    "Naloxone",
    "Flumazenil",
    "N-acetylcysteine",
    "Protamine sulfate"
  ],
  ans: 2,
  rationale: "N-acetylcysteine within 8-10hrs prevents liver toxicity. Naloxone = opioids. Flumazenil = benzos. Protamine = heparin. NCK loves antidotes."
},
{
  q: "9. A patient on Lisinopril reports dry cough. This is due to:",
  options: [
    "Allergy",
    "Increased bradykinin levels",
    "Infection",
    "Asthma"
  ],
  ans: 1,
  rationale: "ACE inhibitors block breakdown of bradykinin → dry persistent cough. Also angioedema, hyperkalemia. ARBs don't cause cough. NCK tests HTN drugs."
},
{
  q: "10. CASE SCENARIO: Child with fever. Which medication is contraindicated due to Reye's syndrome?",
  options: [
    "Paracetamol",
    "Ibuprofen",
    "Aspirin",
    "Amoxicillin"
  ],
  ans: 2,
  rationale: "Aspirin + viral illness = Reye's: liver failure + encephalopathy. Use paracetamol instead. NCK repeats peds pharm."
},
{
  q: "11. Gentamicin requires monitoring for:",
  options: [
    "Hepatotoxicity",
    "Ototoxicity and nephrotoxicity",
    "Cardiotoxicity",
    "Bone marrow suppression"
  ],
  ans: 1,
  rationale: "Aminoglycoside: peak and trough levels. Ototoxic + nephrotoxic. Assess hearing, I&O, BUN/Cr. NCK tests antibiotics."
},
{
  q: "12. The main action of Albuterol is:",
  options: [
    "Decrease inflammation",
    "Bronchodilation via beta-2 agonist",
    "Decrease mucus",
    "Antibiotic effect"
  ],
  ans: 1,
  rationale: "Albuterol = SABA. Beta-2 agonist → bronchodilation. Onset 5min. For acute asthma. Steroids = anti-inflammatory. NCK tests respiratory."
},
{
  q: "13. CASE SCENARIO: Patient with gout. Which drug prevents uric acid formation?",
  options: [
    "Colchicine",
    "Allopurinol",
    "Ibuprofen",
    "Prednisone"
  ],
  ans: 1,
  rationale: "Allopurinol = xanthine oxidase inhibitor, prevents uric acid formation. Colchicine = acute attack. NSAIDs for pain. NCK tests gout."
},
{
  q: "14. Which is a nursing consideration for Phenytoin?",
  options: [
    "Monitor blood glucose",
    "Monitor for gingival hyperplasia",
    "Take with dairy",
    "Causes hypertension"
  ],
  ans: 1,
  rationale: "Phenytoin: gingival hyperplasia, nystagmus, rash. IV must be given slowly to prevent purple glove syndrome. Monitor levels 10-20 mcg/mL. NCK tests anticonvulsants."
},
{
  q: "15. Morphine is contraindicated in:",
  options: [
    "MI",
    "Head injury with increased ICP",
    "Fracture",
    "Cancer pain"
  ],
  ans: 1,
  rationale: "Morphine causes respiratory depression + CO2 retention → increased ICP. Also hypotension. Use with caution. NCK tests pain management."
},
{
  q: "16. The therapeutic level for Digoxin is:",
  options: [
    "0.5-2.0 ng/mL",
    "10-20 mcg/mL",
    "150-300 mcg/mL",
    "4-7 mEq/L"
  ],
  ans: 0,
  rationale: "Digoxin: 0.5-2.0 ng/mL. Toxic >2. S/S toxicity: N/V, blurred vision 'yellow halos', bradycardia. Check K+ before giving. NCK tests cardiac drugs."
},
{
  q: "17. CASE SCENARIO: Patient with Parkinson's. Drug of choice to replace dopamine?",
  options: [
    "Propranolol",
    "Levodopa/Carbidopa",
    "Diazepam",
    "Haloperidol"
  ],
  ans: 1,
  rationale: "Parkinson's = dopamine deficiency. Levodopa converted to dopamine. Carbidopa prevents peripheral breakdown. NCK tests neuro drugs."
},
{
  q: "18. Which is a side effect of Prednisone?",
  options: [
    "Hypoglycemia",
    "Hyperglycemia, moon face, immunosuppression",
    "Hypotension",
    "Weight loss"
  ],
  ans: 1,
  rationale: "Steroids: Cushingoid features, hyperglycemia, infection risk, osteoporosis. Taper don't stop abruptly. Take with food. NCK tests steroids."
},
{
  q: "19. The antidote for Heparin overdose is:",
  options: [
    "Vitamin K",
    "Protamine sulfate",
    "Calcium gluconate",
    "N-acetylcysteine"
  ],
  ans: 1,
  rationale: "Protamine sulfate reverses heparin. Vitamin K reverses warfarin. Calcium gluconate = MgSO4. NCK tests antidotes."
},
{
  q: "20. CASE SCENARIO: Patient on Tetracycline should be taught to avoid:",
  options: [
    "Milk and antacids",
    "Grapefruit juice",
    "Alcohol",
    "Green leafy vegetables"
  ],
  ans: 0,
  rationale: "Tetracycline chelates with Ca++, Fe++, Mg++ → decreased absorption. Give 2hr before/after dairy. Also causes photosensitivity. NCK tests antibiotic teaching."
},
{
  q: "21. Which is a priority assessment before giving Potassium chloride IV?",
  options: [
    "Blood pressure",
    "Urine output >30ml/hr and renal function",
    "Temperature",
    "Respiratory rate"
  ],
  ans: 1,
  rationale: "K+ cannot be excreted if kidneys fail → hyperkalemia, cardiac arrest. Never give IV push. Max 10mEq/hr. NCK tests electrolytes."
},
{
  q: "22. Atropine is used to treat:",
  options: [
    "Hypertension",
    "Bradycardia",
    "Hyperkalemia",
    "Asthma"
  ],
  ans: 1,
  rationale: "Atropine = anticholinergic. Blocks vagus → increases HR. Also for organophosphate poisoning. Side effects: dry mouth, blurred vision. NCK tests emergency drugs."
},
{
  q: "23. CASE SCENARIO: Patient with TB. Which drug causes orange discoloration of urine?",
  options: [
    "Isoniazid",
    "Rifampin",
    "Pyrazinamide",
    "Ethambutol"
  ],
  ans: 1,
  rationale: "Rifampin = orange body fluids. Also hepatotoxic. INH = peripheral neuropathy, give pyridoxine. Ethambutol = vision changes. NCK tests TB drugs."
},
{
  q: "24. The mechanism of Action of Nitroglycerin is:",
  options: [
    "Beta blocker",
    "Vasodilation via nitric oxide",
    "Calcium channel blocker",
    "Diuretic"
  ],
  ans: 1,
  rationale: "Nitro: releases NO → vasodilation → decreased preload and afterload → relieves angina. Give SL, sit down. Headache side effect. NCK tests cardiac."
},
{
  q: "25. Which is contraindicated with MAO inhibitors?",
  options: [
    "Dairy products",
    "Foods high in tyramine like aged cheese",
    "Citrus fruits",
    "Whole grains"
  ],
  ans: 1,
  rationale: "MAOI + tyramine = hypertensive crisis. Avoid aged cheese, wine, cured meats. Also drug interactions. NCK tests psych pharm."
},
{
  q: "26. CASE SCENARIO: Patient with septic shock. Drug to increase BP?",
  options: [
    "Furosemide",
    "Dopamine",
    "Morphine",
    "Digoxin"
  ],
  ans: 1,
  rationale: "Dopamine = inotrope and vasopressor. Increases BP and CO. Used in shock. Furosemide = diuretic. NCK tests critical care."
},
{
  q: "27. The nursing action for a patient receiving IV Vancomycin is to:",
  options: [
    "Give IV push rapidly",
    "Infuse slowly over 90min to prevent Red Man Syndrome",
    "Give with food",
    "Monitor blood glucose"
  ],
  ans: 1,
  rationale: "Vanco: infuse slowly to prevent 'Red Man Syndrome' = flushing, hypotension. Monitor peak/trough, renal function. NCK tests antibiotics."
},
{
  q: "28. Which is a side effect of Amiodarone?",
  options: [
    "Pulmonary fibrosis",
    "Hypotension",
    "Hyperkalemia",
    "Tinnitus"
  ],
  ans: 0,
  rationale: "Amiodarone: pulmonary toxicity, thyroid problems, photosensitivity, blue-gray skin. Used for V-Fib/V-Tach. NCK tests antiarrhythmics."
},
{
  q: "29. CASE SCENARIO: Patient with peptic ulcer. Which drug promotes mucosal protection?",
  options: [
    "Omeprazole",
    "Ranitidine",
    "Sucralfate",
    "Metoclopramide"
  ],
  ans: 2,
  rationale: "Sucralfate forms paste over ulcer. Given 1hr before meals. Not absorbed. Omeprazole = PPI, Ranitidine = H2 blocker. NCK tests GI drugs."
},
{
  q: "30. The nurse teaches a patient on Iron sulfate to:",
  options: [
    "Take with milk",
    "Take with vitamin C and expect black stools",
    "Take at bedtime",
    "Avoid constipation"
  ],
  ans: 1,
  rationale: "Iron: Vit C increases absorption. Causes black tarry stools and constipation. Take with juice, not milk/tea. NCK tests hematinics."
}
],
"Professional Practice ": [
  // PROFESSIONAL PRACTICE & LEADERSHIP - 30 QUESTIONS NCK FORMAT
{
  q: "1. The highest authority regulating nursing practice in Kenya is:",
  options: [
    "Ministry of Health",
    "Nursing Council of Kenya",
    "WHO",
    "Hospital Administrator"
  ],
  ans: 1,
  rationale: "NCK = statutory body under Cap 257 Laws of Kenya. Mandate: registration, licensure, discipline, set standards. NCK repeats this every year."
},
{
  q: "2. Which is the first step in the nursing process?",
  options: [
    "Diagnosis",
    "Assessment",
    "Planning",
    "Evaluation"
  ],
  ans: 1,
  rationale: "ADPIE: Assess, Diagnose, Plan, Implement, Evaluate. Without assessment you can't diagnose. NCK foundation question."
},
{
  q: "3. CASE SCENARIO: A nurse delegates medication administration to a nursing student. This is:",
  options: [
    "Appropriate delegation",
    "Unethical and illegal",
    "Good teamwork",
    "Acceptable if supervised"
  ],
  ans: 1,
  rationale: "RN cannot delegate tasks requiring nursing judgment to unlicensed personnel. Meds = RN/LPN scope only. Student must be supervised by RN. NCK tests delegation."
},
{
  q: "4. Informed consent must be obtained by:",
  options: [
    "The nurse",
    "The physician performing the procedure",
    "Hospital administrator",
    "Family member"
  ],
  ans: 1,
  rationale: "MD explains risks, benefits, alternatives. Nurse witnesses signature and ensures patient understands. NCK tests legal concepts."
},
{
  q: "5. Which leadership style involves the leader making all decisions?",
  options: [
    "Democratic",
    "Laissez-faire",
    "Autocratic",
    "Transformational"
  ],
  ans: 2,
  rationale: "Autocratic = leader decides, tells. Democratic = team input. Laissez-faire = hands off. NCK tests management styles."
},
{
  q: "6. A nurse accidentally gives wrong medication. First action?",
  options: [
    "Blame the pharmacist",
    "Assess patient, notify MD, document, fill incident report",
    "Hide the error",
    "Wait and see"
  ],
  ans: 1,
  rationale: "Safety first. ABC. Then report. Incident report is for quality improvement, not punishment. NCK tests ethics + safety."
},
{
  q: "7. The principle of 'Do no harm' is:",
  options: [
    "Beneficence",
    "Non-maleficence",
    "Autonomy",
    "Justice"
  ],
  ans: 1,
  rationale: "4 Ethics: Autonomy, Beneficence, Non-maleficence, Justice. NCK loves ethics questions."
},
{
  q: "8. CASE SCENARIO: A client refuses treatment. Nurse should:",
  options: [
    "Force the treatment",
    "Respect autonomy and document refusal",
    "Call police",
    "Ignore the client"
  ],
  ans: 1,
  rationale: "Autonomy = right to refuse. Nurse educates, documents, notifies MD. Competent adult can refuse. NCK tests legal/ethical."
},
{
  q: "9. Which is a function of Nursing Council of Kenya?",
  options: [
    "Hiring nurses",
    "Maintaining register and disciplining nurses",
    "Managing hospitals",
    "Buying drugs"
  ],
  ans: 1,
  rationale: "NCK functions: Register nurses, set syllabus, exams, discipline, CPD. Not employer. NCK direct question."
},
{
  q: "10. Documentation that is late, inaccurate is considered:",
  options: [
    "Good practice",
    "Legal protection",
    "Negligence",
    "Teamwork"
  ],
  ans: 2,
  rationale: "Poor documentation = negligence. 'If not documented, not done'. Must be timely, accurate, objective. NCK tests legal."
},
{
  q: "11. The nurse manager using 'management by walking around' is using:",
  options: [
    "Autocratic style",
    "Participative management",
    "Avoidance",
    "Bureaucratic style"
  ],
  ans: 1,
  rationale: "Participative = leader involved, visible, communicates. Improves morale. NCK tests leadership."
},
{
  q: "12. CASE SCENARIO: Nurse witnesses colleague stealing drugs. Legal duty is to:",
  options: [
    "Ignore it",
    "Report to supervisor/NCK",
    "Confront and keep secret",
    "Take drugs too"
  ],
  ans: 1,
  rationale: "Duty to report unprofessional conduct. Protects patients and profession. NCK Code of Conduct. NCK repeats this."
},
{
  q: "13. Which is NOT in the scope of practice of a Registered Community Health Nurse?",
  options: [
    "Health education",
    "Prescribing all medications",
    "Home visits",
    "Maternal and child health"
  ],
  ans: 1,
  rationale: "RCHN scope: health promotion, MCH, FP, treatment of common ailments per protocol. Cannot prescribe all meds - only per guidelines. NCK tests scope."
},
{
  q: "14. The purpose of a job description is to:",
  options: [
    "Punish employees",
    "Define roles and responsibilities",
    "Increase salary",
    "Replace policies"
  ],
  ans: 1,
  rationale: "Job description = clear roles, accountability, performance appraisal. NCK tests management."
},
{
  q: "15. CASE SCENARIO: Nurse shares patient HIV status with friend. This violates:",
  options: [
    "Autonomy",
    "Confidentiality",
    "Beneficence",
    "Justice"
  ],
  ans: 1,
  rationale: "Confidentiality = HIPAA/NCK Code. Breach can lead to deregistration. Exception: mandatory reporting. NCK tests ethics."
},
{
  q: "16. Which is an example of vicarious liability?",
  options: [
    "Nurse makes own error",
    "Employer liable for employee's actions during duty",
    "Patient sues doctor",
    "Nurse sues hospital"
  ],
  ans: 1,
  rationale: "Respondeat superior. Hospital liable for nurse's negligence during duty. NCK tests legal."
},
{
  q: "17. The best way to resolve conflict in a nursing team is:",
  options: [
    "Avoid the issue",
    "Confrontation with open communication",
    "Complain to others",
    "Transfer"
  ],
  ans: 1,
  rationale: "Conflict resolution: address early, use assertive communication, focus on problem not person. NCK tests leadership."
},
{
  q: "18. CASE SCENARIO: Nurse finds expired drugs in ward. First action?",
  options: [
    "Use them anyway",
    "Remove and report to in-charge",
    "Sell them",
    "Ignore"
  ],
  ans: 1,
  rationale: "Patient safety. Remove, document, report. Follow policy on disposal. NCK tests professionalism."
},
{
  q: "19. Continuing Professional Development CPD points are required by NCK for:",
  options: [
    "Promotion only",
    "Renewal of practicing license",
    "Salary increase",
    "Transfer"
  ],
  ans: 1,
  rationale: "NCK requires CPD points every 3 years for license renewal. Ensures competence. NCK direct question."
},
{
  q: "20. Which is a characteristic of a professional nurse?",
  options: [
    "Gossiping",
    "Accountability and lifelong learning",
    "Ignoring policies",
    "Late coming"
  ],
  ans: 1,
  rationale: "Professionalism: accountability, competence, ethics, CPD. NCK tests professional values."
},
{
  q: "21. CASE SCENARIO: Doctor gives verbal order. Nurse should:",
  options: [
    "Write and read back for verification",
    "Ignore it",
    "Wait for written order",
    "Do it and document later"
  ],
  ans: 0,
  rationale: "Verbal orders: write, read back, sign. Must be countersigned within 24hr. NCK tests safe practice."
},
{
  q: "22. The principle of 'treating all patients fairly' is:",
  options: [
    "Autonomy",
    "Beneficence",
    "Justice",
    "Fidelity"
  ],
  ans: 2,
  rationale: "Justice = fairness, equal distribution of resources. NCK tests ethics."
},
{
  q: "23. Which is the role of a nurse in research?",
  options: [
    "No role",
    "Data collection and patient advocacy",
    "Funding research",
    "Publishing only"
  ],
  ans: 1,
  rationale: "Nurses collect data, identify problems, protect subjects, apply evidence. NCK tests nursing roles."
},
{
  q: "24. CASE SCENARIO: Nurse is assigned 20 patients. This is an example of:",
  options: [
    "Good delegation",
    "Unsafe staffing",
    "Team nursing",
    "Primary nursing"
  ],
  ans: 1,
  rationale: "Unsafe staffing compromises care. Nurse must report to supervisor. NCK tests management + patient safety."
},
{
  q: "25. The purpose of nursing audit is to:",
  options: [
    "Punish nurses",
    "Evaluate quality of nursing care",
    "Increase admissions",
    "Reduce staff"
  ],
  ans: 1,
  rationale: "Audit = retrospective review of documentation to improve quality. NCK tests quality assurance."
},
{
  q: "26. Which is NOT a legal document?",
  options: [
    "Nursing care plan",
    "Incident report",
    "Patient chart",
    "Personal diary"
  ],
  ans: 3,
  rationale: "Legal documents: anything in patient record. Personal diary not part of record. NCK tests documentation."
},
{
  q: "27. CASE SCENARIO: Nurse administers drug without checking allergy. Patient reacts. This is:",
  options: [
    "Malpractice",
    "Battery",
    "Assault",
    "Defamation"
  ],
  ans: 0,
  rationale: "Malpractice = professional negligence. Failure to follow standard of care. NCK tests legal terms."
},
{
  q: "28. Transformational leadership is characterized by:",
  options: [
    "Micromanaging",
    "Inspiring and motivating staff toward vision",
    "No communication",
    "Punishment"
  ],
  ans: 1,
  rationale: "Transformational = vision, inspiration, empowerment. Best for change. NCK tests modern leadership."
},
{
  q: "29. The nurse's duty in disaster is to:",
  options: [
    "Leave hospital",
    "Participate in disaster plan and triage",
    "Hide",
    "Wait for orders"
  ],
  ans: 1,
  rationale: "Professional duty during disaster. Triage, first aid, coordination. NCK tests disaster management."
},
{
  q: "30. CASE SCENARIO: Nurse signs for drug she did not give. This is:",
  options: [
    "Good teamwork",
    "Falsification and grounds for deregistration",
    "Acceptable",
    "Delegation"
  ],
  ans: 1,
  rationale: "Falsification = fraud. NCK can deregister. Legal and ethical violation. NCK tests professional misconduct."
}
]

  },
  prediction: {
    p1k: [
     // NCK AUGUST 2026 PREDICTION - KRCHN PAPER 1 - 120 QUESTIONS
// Q1-20: MED-SURG
{
  q: "1. A patient with acute MI on monitor develops V-Fib. Immediate action?",
  options: ["Give oxygen","Defibrillate","Give aspirin","Administer morphine"],
  ans: 1,
  rationale: "V-Fib = no cardiac output. Immediate defibrillation per ACLS. NCK emergency priority."
},
{
  q: "2. Priority lab to monitor heparin therapy?",
  options: ["PT/INR","aPTT","Platelets","D-dimer"],
  ans: 1,
  rationale: "Heparin monitored by aPTT. Warfarin = PT/INR. NCK repeated."
},
{
  q: "3. CASE: BP 80/50 after cardiac cath. First action?",
  options: ["Recheck BP","Assess puncture site for bleeding","Give fluids","Administer antihypertensive"],
  ans: 1,
  rationale: "Hypotension post-cath = hemorrhage. Check site first. NCK post-procedure."
},
{
  q: "4. Side effect of Lisinopril?",
  options: ["Tachycardia","Dry cough","Hypoglycemia","Diarrhea"],
  ans: 1,
  rationale: "ACE inhibitors cause bradykinin buildup → dry cough. NCK HTN drugs."
},
{
  q: "5. Diet for HF patient?",
  options: ["Low cholesterol","Low sodium 2g","High potassium","High protein"],
  ans: 1,
  rationale: "Sodium restriction prevents fluid overload. NCK patient teaching."
},
{
  q: "6. Cushing's Triad indicates?",
  options: ["Hypovolemia","Increased ICP","Sepsis","Shock"],
  ans: 1,
  rationale: "HTN + Bradycardia + Irregular respirations = late sign of increased ICP. NCK neuro."
},
{
  q: "7. Kayexalate is given for K+ of?",
  options: ["3.0","4.5","5.5","6.8"],
  ans: 3,
  rationale: "Hyperkalemia >6.5 = cardiac risk. Kayexalate binds K+. NCK renal emergency."
},
{
  q: "8. Trousseau's sign indicates?",
  options: ["Hypokalemia","Hypocalcemia","Hypermagnesemia","Hyponatremia"],
  ans: 1,
  rationale: "BP cuff inflation causes carpopedal spasm in hypocalcemia. NCK electrolytes."
},
{
  q: "9. Priority in DVT with sudden dyspnea?",
  options: ["Elevate leg","Apply heat","Assess for PE","Massage leg"],
  ans: 2,
  rationale: "Sudden dyspnea + chest pain = PE. Most dangerous DVT complication. NCK."
},
{
  q: "10. First drug in anaphylaxis?",
  options: ["Antihistamine","Epinephrine IM","Steroids","Oxygen"],
  ans: 1,
  rationale: "Epinephrine reverses bronchospasm and vasodilation first. NCK emergency."
},
{
  q: "11. Levodopa/Carbidopa is for?",
  options: ["Essential tremor","Parkinson's","Seizures","Depression"],
  ans: 1,
  rationale: "Replaces dopamine in Parkinson's. NCK neuro meds."
},
{
  q: "12. Sun exposure worsens?",
  options: ["RA","SLE","Osteoporosis","Diabetes"],
  ans: 1,
  rationale: "UV light triggers SLE flares. NCK autoimmune."
},
{
  q: "13. Ototoxic drug?",
  options: ["Penicillin","Gentamicin","Amoxicillin","Cephalexin"],
  ans: 1,
  rationale: "Aminoglycosides = ototoxic + nephrotoxic. NCK pharm."
},
{
  q: "14. Rest during acute flare is for?",
  options: ["OA","RA","Gout","Fibromyalgia"],
  ans: 1,
  rationale: "RA: rest during acute inflammation. NCK MSK."
},
{
  q: "15. CASE: Cloudy peritoneal dialysis outflow indicates?",
  options: ["Normal","Peritonitis","Obstruction","Overload"],
  ans: 1,
  rationale: "Cloudy = peritonitis. Culture and treat. NCK renal."
},
{
  q: "16. Beta-blocker eye drops for glaucoma work by?",
  options: ["Increasing outflow","Decreasing aqueous production","Dilating pupil","Constricting pupil"],
  ans: 1,
  rationale: "Timolol decreases aqueous humor production. NCK eye."
},
{
  q: "17. Low serum ferritin indicates?",
  options: ["B12 deficiency","Iron deficiency","Folate deficiency","Anemia of chronic disease"],
  ans: 1,
  rationale: "Iron deficiency: low ferritin, low MCV. NCK labs."
},
{
  q: "18. Priority for T4 spinal cord injury?",
  options: ["Bowel","Respiratory status","Skin","Pain"],
  ans: 1,
  rationale: "T4 affects intercostals. Airway/Breathing first. NCK SCI."
},
{
  q: "19. Passive ROM prevents?",
  options: ["Pressure ulcers","Contractures","Infection","Depression"],
  ans: 1,
  rationale: "CVA patient with paralysis needs ROM to prevent contractures. NCK rehab."
},
{
  q: "20. Sunlight is important in osteoporosis for?",
  options: ["Calcium absorption","Vitamin D synthesis","Weight bearing","Protein synthesis"],
  ans: 1,
  rationale: "Sun = Vitamin D for calcium absorption. Limiting sun worsens. NCK."
},

// Q21-40: MCH
{
  q: "21. CASE: 32 weeks, gush of fluid. First?",
  options: ["VE","Nitrazine test + FHR","Tocolytics","Deliver"],
  ans: 1,
  rationale: "Confirm PROM, assess fetal well-being. No VE before confirming. NCK."
},
{
  q: "22. Contraindicated vaccine in pregnancy?",
  options: ["TT","Inactivated flu","MMR","Tdap"],
  ans: 2,
  rationale: "Live vaccines contraindicated. NCK immunization."
},
{
  q: "23. RhoGAM given within?",
  options: ["24hr","72hr","1 week","1 month"],
  ans: 1,
  rationale: "Rh- mom with Rh+ baby: within 72hr. NCK."
},
{
  q: "24. CASE: Late decelerations. Action?",
  options: ["Ambulate","O2 + left side + notify MD","Increase oxytocin","Push"],
  ans: 1,
  rationale: "Late decels = uteroplacental insufficiency. NCK FHR."
},
{
  q: "25. Placenta previa bleeding is?",
  options: ["Painful dark","Painless bright red","Concealed","With HTN"],
  ans: 1,
  rationale: "Painless bleeding. No VE. NCK 3rd trimester."
},
{
  q: "26. Drug for fetal lung maturity?",
  options: ["MgSO4","Betamethasone","Ritodrine","Oxytocin"],
  ans: 1,
  rationale: "Steroids mature lungs if <34 weeks. NCK preterm."
},
{
  q: "27. CASE: Postpartum boggy uterus + bleeding. First?",
  options: ["Call MD","Massage uterus","Give iron","Fluids"],
  ans: 1,
  rationale: "Uterine atony. Massage to expel clots. NCK PPH."
},
{
  q: "28. Vitamin K given to newborn to prevent?",
  options: ["Infection","Hemorrhagic disease","Jaundice","Rickets"],
  ans: 1,
  rationale: "Newborns lack gut flora. NCK newborn meds."
},
{
  q: "29. Back to sleep prevents?",
  options: ["Colic","SIDS","Jaundice","Rickets"],
  ans: 1,
  rationale: "SIDS prevention. NCK newborn safety."
},
{
  q: "30. CASE: IDM baby most at risk for?",
  options: ["Hyperglycemia","Hypoglycemia","Hypercalcemia","Polycythemia"],
  ans: 1,
  rationale: "High insulin → hypoglycemia after birth. NCK."
},
{
  q: "31. Quickening occurs at?",
  options: ["8-10wks","16-20wks primigravida","24wks","36wks"],
  ans: 1,
  rationale: "First fetal movement. NCK milestones."
},
{
  q: "32. Episiotomy care after 24hr?",
  options: ["Ice","Sitz bath","No care","Aspirin"],
  ans: 1,
  rationale: "Sitz baths promote healing. NCK postpartum."
},
{
  q: "33. CASE: Eclampsia. Priority drug?",
  options: ["Oxytocin","MgSO4","Methergine","Iron"],
  ans: 1,
  rationale: "MgSO4 for seizure prophylaxis. NCK obstetric emergency."
},
{
  q: "34. Avoid in pregnancy: deli meats due to?",
  options: ["Salmonella","Listeria","E.coli","Staph"],
  ans: 1,
  rationale: "Listeriosis risk. NCK patient teaching."
},
{
  q: "35. KEPI at 6 weeks?",
  options: ["BCG","Penta1,OPV1,PCV1,Rota1","Measles","TT2"],
  ans: 1,
  rationale: "Kenya schedule. NCK repeated."
},
{
  q: "36. CASE: Newborn temp 35.8C. Action?",
  options: ["Blanket","Radiant warmer","Bath","Feed"],
  ans: 1,
  rationale: "Hypothermia emergency. Prevent cold stress. NCK."
},
{
  q: "37. Presumptive sign of pregnancy?",
  options: ["FHR","US","Nausea","Fetal movement by examiner"],
  ans: 2,
  rationale: "Subjective signs. NCK diagnosis."
},
{
  q: "38. CASE: Meconium-stained liquor. Notify?",
  options: ["Social worker","Pediatric team","Physiotherapist","Dietician"],
  ans: 1,
  rationale: "Risk MAS. Need suction at delivery. NCK."
},
{
  q: "39. Fertilization occurs in?",
  options: ["Uterus","Ovary","Ampulla of tube","Cervix"],
  ans: 2,
  rationale: "Ampulla of fallopian tube. NCK physiology."
},
{
  q: "40. Estrogen-containing contraceptive contraindicated in?",
  options: ["Postmenopausal","Breastfeeding","Diabetic","Hypertensive"],
  ans: 1,
  rationale: "Decreases milk supply. Use POP. NCK FP."
},

// Q41-60: COMMUNITY HEALTH
{
  q: "41. Primary goal of CHN?",
  options: ["Hospital care","Population health promotion","Curative only","Individual care"],
  ans: 1,
  rationale: "Population focus. NCK philosophy."
},
{
  q: "42. Immunization is what level?",
  options: ["Primary","Secondary","Tertiary","Primordial"],
  ans: 0,
  rationale: "Prevent disease before occurrence. NCK."
},
{
  q: "43. CASE: 5 children malnourished. First?",
  options: ["Feed","Assess community causes","Educate","Refer"],
  ans: 1,
  rationale: "Assess first. NCK nursing process."
},
{
  q: "44. Best IMR reflects?",
  options: ["Hospital beds","Sanitation + nutrition + maternal care","Doctors","Drugs"],
  ans: 1,
  rationale: "Gold standard indicator. NCK."
},
{
  q: "45. Alma-Ata principle?",
  options: ["Hospital based","Community participation","Specialist care","Curative only"],
  ans: 1,
  rationale: "PHC element. NCK."
},
{
  q: "46. CASE: Diarrhea outbreak. Long-term solution?",
  options: ["ORS","Clean water + sanitation","Antibiotics","Education only"],
  ans: 1,
  rationale: "Address root cause. NCK public health."
},
{
  q: "47. Contact tracing is?",
  options: ["Primary","Secondary","Tertiary","Health promotion"],
  ans: 1,
  rationale: "Early detection. NCK epidemiology."
},
{
  q: "48. KEHP includes?",
  options: ["Only hospitals","Community + referral services","Private only","Specialist only"],
  ans: 1,
  rationale: "Kenya Essential Package. NCK."
},
{
  q: "49. CHV role in Kenya?",
  options: ["Prescribe","Health promotion + data","Surgery","Manage hospital"],
  ans: 1,
  rationale: "Community Health Strategy. NCK."
},
{
  q: "50. CASE: Floods. First priority?",
  options: ["Rebuild","Assess water/sanitation/disease","Blankets","Education"],
  ans: 1,
  rationale: "Prevent communicable disease. NCK disaster."
},
{
  q: "51. MUAC <11.5cm =?",
  options: ["Normal","MAM","SAM","Overweight"],
  ans: 2,
  rationale: "Severe acute malnutrition. NCK nutrition."
},
{
  q: "52. EPI: BCG given at?",
  options: ["6 weeks","Birth","9 months","14 weeks"],
  ans: 1,
  rationale: "At birth. NCK KEPI."
},
{
  q: "53. CASE: Vaccine refusal. Best approach?",
  options: ["Force","Community dialogue + elders","Ignore","Close clinic"],
  ans: 1,
  rationale: "Cultural sensitivity. NCK."
},
{
  q: "54. Epidemiological triad?",
  options: ["Doctor,nurse,patient","Agent,host,environment","Prevention,treatment,rehab","Hospital,clinic,home"],
  ans: 1,
  rationale: "Disease causation. NCK."
},
{
  q: "55. School health objective?",
  options: ["Treat all","Promote health in school children","Close schools","Exams"],
  ans: 1,
  rationale: "Deworming, immunization. NCK."
},
{
  q: "56. CASE: High teen pregnancy. Best strategy?",
  options: ["Punish","CSE + youth friendly services","Ignore","Contraceptives only"],
  ans: 1,
  rationale: "Multi-sectoral. NCK adolescent health."
},
{
  q: "57. Red Man Syndrome from?",
  options: ["Penicillin","Vancomycin","Gentamicin","Cipro"],
  ans: 1,
  rationale: "Infuse Vanco slowly. NCK."
},
{
  q: "58. Vitamin A deficiency causes?",
  options: ["Scurvy","Night blindness","Rickets","Beriberi"],
  ans: 1,
  rationale: "Xerophthalmia. NCK nutrition."
},
{
  q: "59. CASE: High maternal deaths in KE. Common cause?",
  options: ["Cancer","Hemorrhage","Diabetes","Accident"],
  ans: 1,
  rationale: "Leading cause. NCK maternal health."
},
{
  q: "60. Health facility Level 2 in Kenya?",
  options: ["Referral","County","Dispensary","National"],
  ans: 2,
  rationale: "Dispensary. NCK health system."
},

// Q61-80: PEDIATRICS
{
  q: "61. 6-month infant weight?",
  options: ["Same as birth","1.5x birth","Double birth","Triple birth"],
  ans: 2,
  rationale: "Doubles by 6 months. NCK growth."
},
{
  q: "62. CASE: Barking cough + stridor at night?",
  options: ["Asthma","Croup","Bronchiolitis","Pneumonia"],
  ans: 1,
  rationale: "Laryngotracheobronchitis. NCK."
},
{
  q: "63. Febrile seizure: position?",
  options: ["Supine","Side-lying","Prone","Trendelenburg"],
  ans: 1,
  rationale: "Prevent aspiration. NCK emergency."
},
{
  q: "64. 3-month milestone?",
  options: ["Sits","Follows with eyes","Walks","2 words"],
  ans: 1,
  rationale: "Head control, cooing. NCK."
},
{
  q: "65. CASE: Iron ingestion. First?",
  options: ["Induce vomiting","Call poison control + milk","Charcoal","Observe"],
  ans: 1,
  rationale: "Corrosive. Don't induce. NCK poisoning."
},
{
  q: "66. Epiglottitis position?",
  options: ["Supine","Tripod leaning forward","Prone","Side"],
  ans: 1,
  rationale: "Maintain airway. No throat exam. NCK."
},
{
  q: "67. KEPI 6 weeks?",
  options: ["BCG","Penta1","Measles","TT"],
  ans: 1,
  rationale: "Penta1,OPV1,PCV1,Rota1. NCK."
},
{
  q: "68. CASE: DKA in child: fruity breath + Kussmaul?",
  options: ["Hypoglycemia","DKA","HHNS","Normal"],
  ans: 1,
  rationale: "Insulin deficiency + ketosis. NCK."
},
{
  q: "69. SIDS prevention?",
  options: ["Soft pillow","Back to sleep","Warm room","Bumpers"],
  ans: 1,
  rationale: "Back to sleep. NCK."
},
{
  q: "70. CASE: Leukemia + fever + ANC 200?",
  options: ["Antipyretic","Neutropenic precautions + notify","Visitors","Oral fluids"],
  ans: 1,
  rationale: "Severe neutropenia risk sepsis. NCK oncology."
},
{
  q: "71. OM sign in toddler?",
  options: ["Ear pain + tugging","Cough","Rash","Diarrhea"],
  ans: 0,
  rationale: "Common <5y. NCK."
},
{
  q: "72. CASE: Projectile vomiting 2-month-old?",
  options: ["GERD","Pyloric stenosis","Gastro","Intussusception"],
  ans: 1,
  rationale: "Olive mass. NCK surgical."
},
{
  q: "73. Asthma trigger to avoid?",
  options: ["Fluids","Cold air + allergens","Sleep","Food"],
  ans: 1,
  rationale: "Common triggers. NCK."
},
{
  q: "74. Spina bifida risk?",
  options: ["Diabetes","Latex allergy","HTN","Asthma"],
  ans: 1,
  rationale: "Repeated surgeries. NCK."
},
{
  q: "75. CASE: Diarrhea 6x/day. Home care?",
  options: ["Stop BF","ORS + continue feeding + zinc","Antibiotic","Antidiarrheal"],
  ans: 1,
  rationale: "IMCI protocol. NCK."
},
{
  q: "76. Live vaccine?",
  options: ["DPT","Hep B","MMR","Pneumo"],
  ans: 2,
  rationale: "MMR, OPV, Rota. NCK."
},
{
  q: "77. DDH test?",
  options: ["Barlow/Ortolani","Babinski","Moro","Rooting"],
  ans: 0,
  rationale: "Hip dysplasia screening. NCK."
},
{
  q: "78. CF diet?",
  options: ["Low fat","High cal + enzymes","Fluid restriction","Low Na"],
  ans: 1,
  rationale: "Malabsorption. NCK."
},
{
  q: "79. CASE: Kerosene ingestion?",
  options: ["Induce vomiting","Don't induce, side-lying","Milk","Charcoal"],
  ans: 1,
  rationale: "Risk aspiration pneumonia. NCK."
},
{
  q: "80. 12-month milestone?",
  options: ["Rolls","Sits","Walks alone","Newborn reflexes"],
  ans: 2,
  rationale: "Walks, pincer grasp. NCK."
},

// Q81-100: PSYCH + PHARM
{
  q: "81. Shaking on stopping alcohol =?",
  options: ["Abuse","Dependence with withdrawal","Intoxication","Tolerance"],
  ans: 1,
  rationale: "Physiological dependence. NCK SUD."
},
{
  q: "82. 'FBI through TV' =?",
  options: ["Hallucination","Persecutory delusion","Illusion","Flight"],
  ans: 1,
  rationale: "Fixed false belief. NCK."
},
{
  q: "83. Priority in suicidal ideation?",
  options: ["Thought process","Risk for self-directed violence","Isolation","Coping"],
  ans: 1,
  rationale: "Safety first. NCK."
},
{
  q: "84. MDD vs Bipolar key difference?",
  options: ["Sadness","History of mania","Insomnia","Poor appetite"],
  ans: 1,
  rationale: "Mania/hypomania defines bipolar. NCK."
},
{
  q: "85. Best response to 'I feel worthless'?",
  options: ["Don't feel that","Everyone does","Tell me more","You have a lot"],
  ans: 2,
  rationale: "Therapeutic communication. NCK."
},
{
  q: "86. CASE: Schizophrenia stops meds. Nurse?",
  options: ["Must take","What concerns you","You'll be restrained","Doctor knows"],
  ans: 1,
  rationale: "Explore concerns. NCK."
},
{
  q: "87. 'Lab made mistake, I don't have cancer' =?",
  options: ["Denial","Projection","Rationalization","Sublimation"],
  ans: 0,
  rationale: "Defense mechanism. NCK."
},
{
  q: "88. OCD handwashing reduces?",
  options: ["Boredom","Anxiety","Attention","Manipulation"],
  ans: 1,
  rationale: "Compulsion reduces anxiety. NCK."
},
{
  q: "89. Voluntary admission wants to leave?",
  options: ["Restrain","Process discharge + notify MD","Hide clothes","Sedate"],
  ans: 1,
  rationale: "Legal right. NCK."
},
{
  q: "90. Agranulocytosis risk drug?",
  options: ["Lithium","Clozapine","Fluoxetine","Haloperidol"],
  ans: 1,
  rationale: "Needs CBC monitoring. NCK."
},
{
  q: "91. Omeprazole works by?",
  options: ["Neutralizing acid","Barrier","Proton pump inhibitor","H2 blocker"],
  ans: 2,
  rationale: "Blocks H+/K+ ATPase. NCK."
},
{
  q: "92. Digoxin mechanism?",
  options: ["Beta stim","Na/K ATPase inhibition","Vasodilation","Diuresis"],
  ans: 1,
  rationale: "Increases Ca++ → stronger contraction. NCK."
},
{
  q: "93. CASE: MgSO4 loading dose for eclampsia?",
  options: ["2g","4g IV over 20min","10g","500mg"],
  ans: 1,
  rationale: "4-6g load, then 1-2g/hr. NCK."
},
{
  q: "94. Furosemide side effect?",
  options: ["Hyperkalemia","Hypokalemia + ototoxicity","Bradycardia","Constipation"],
  ans: 1,
  rationale: "Loop diuretic. NCK."
},
{
  q: "95. Lispro insulin timing?",
  options: ["30min before","With meal","Right before meal","Bedtime"],
  ans: 2,
  rationale: "Onset 15min. NCK DM."
},
{
  q: "96. CASE: Warfarin INR 4.5?",
  options: ["Increase","Vitamin K","Heparin","No action"],
  ans: 1,
  rationale: "High INR = bleeding risk. NCK."
},
{
  q: "97. Metformin contraindicated in?",
  options: ["HTN","Renal failure","Asthma","Anemia"],
  ans: 1,
  rationale: "Risk lactic acidosis. NCK."
},
{
  q: "98. Acetaminophen antidote?",
  options: ["Naloxone","Flumazenil","NAC","Protamine"],
  ans: 2,
  rationale: "N-acetylcysteine. NCK."
},
{
  q: "99. Lisinopril cough due to?",
  options: ["Allergy","Bradykinin","Infection","Asthma"],
  ans: 1,
  rationale: "ACE inhibitor effect. NCK."
},
{
  q: "100. Aspirin contraindicated in child with viral illness due to?",
  options: ["Reye's","Ototoxicity","Nephrotoxicity","Hepatotoxicity"],
  ans: 0,
  rationale: "Reye's syndrome. NCK peds."
},

// Q101-120: PROFESSIONAL + MIXED
{
  q: "101. Highest nursing authority in Kenya?",
  options: ["MOH","NCK","WHO","Administrator"],
  ans: 1,
  rationale: "Nursing Council of Kenya. NCK."
},
{
  q: "102. First step in nursing process?",
  options: ["Diagnosis","Assessment","Planning","Evaluation"],
  ans: 1,
  rationale: "ADPIE. NCK."
},
{
  q: "103. CASE: Delegate meds to student?",
  options: ["Yes","No, illegal","If supervised","Good teamwork"],
  ans: 1,
  rationale: "Requires nursing judgment. NCK."
},
{
  q: "104. Informed consent obtained by?",
  options: ["Nurse","Doctor doing procedure","Admin","Family"],
  ans: 1,
  rationale: "MD explains. Nurse witnesses. NCK."
},
{
  q: "105. Autocratic leadership?",
  options: ["Team decides","Leader decides all","Hands off","Motivational"],
  ans: 1,
  rationale: "Leader makes decisions. NCK."
},
{
  q: "106. CASE: Med error. First?",
  options: ["Blame","Assess + notify + document + incident report","Hide","Wait"],
  ans: 1,
  rationale: "Patient safety first. NCK."
},
{
  q: "107. 'Do no harm' =?",
  options: ["Beneficence","Non-maleficence","Autonomy","Justice"],
  ans: 1,
  rationale: "Ethical principle. NCK."
},
{
  q: "108. CASE: Patient refuses treatment?",
  options: ["Force","Respect + document","Police","Ignore"],
  ans: 1,
  rationale: "Autonomy. NCK."
},
{
  q: "109. NCK function?",
  options: ["Hire","Register + discipline","Manage hospital","Buy drugs"],
  ans: 1,
  rationale: "Statutory body. NCK."
},
{
  q: "110. Poor documentation =?",
  options: ["Good","Legal protection","Negligence","Teamwork"],
  ans: 2,
  rationale: "If not documented, not done. NCK."
},
{
  q: "111. CASE: Witness drug theft?",
  options: ["Ignore","Report to supervisor/NCK","Keep secret","Join"],
  ans: 1,
  rationale: "Duty to report. NCK."
},
{
  q: "112. RCHN cannot?",
  options: ["Health education","Prescribe all meds","Home visits","MCH"],
  ans: 1,
  rationale: "Scope per protocol only. NCK."
},
{
  q: "113. Sharing HIV status violates?",
  options: ["Autonomy","Confidentiality","Beneficence","Justice"],
  ans: 1,
  rationale: "Breach of confidentiality. NCK."
},
{
  q: "114. Vicarious liability?",
  options: ["Own error","Employer liable for employee","Patient sues doctor","Nurse sues"],
  ans: 1,
  rationale: "Respondeat superior. NCK."
},
{
  q: "115. CASE: Verbal order?",
  options: ["Ignore","Write + read back","Wait","Do later"],
  ans: 1,
  rationale: "Read back policy. NCK."
},
{
  q: "116. Justice principle?",
  options: ["Autonomy","Beneficence","Fairness","Fidelity"],
  ans: 2,
  rationale: "Treat all fairly. NCK."
},
{
  q: "117. Nurse role in research?",
  options: ["None","Data collection + advocacy","Funding","Publishing only"],
  ans: 1,
  rationale: "Evidence-based practice. NCK."
},
{
  q: "118. CASE: 20 patients assigned?",
  options: ["Good","Unsafe staffing","Team nursing","Primary"],
  ans: 1,
  rationale: "Report to supervisor. NCK."
},
{
  q: "119. Nursing audit purpose?",
  options: ["Punish","Evaluate quality","Increase admission","Reduce staff"],
  ans: 1,
  rationale: "Quality assurance. NCK."
},
{
  q: "120. CASE: Sign for drug not given?",
  options: ["Teamwork","Falsification = deregistration","OK","Delegation"],
  ans: 1,
  rationale: "Professional misconduct. NCK."
}
    ],
    p2k: [
    // NCK AUGUST 2026 PREDICTION - KRCHN PAPER 2 - 120 QUESTIONS
// PAPER 2 = CLINICAL + PHARM + LEADERSHIP HEAVY

// Q1-25: MED-SURG + EMERGENCY + OR
{
  q: "1. CASE: Post-op patient day 1 has temp 38.5C, tachycardia, wound erythema + purulent drainage. Most likely?",
  options: ["Atelectasis","Surgical site infection","DVT","Pulmonary embolism"],
  ans: 1,
  rationale: "NCK wants you to cluster: Fever + tachycardia + wound changes 24-48hrs post-op = SSI. Atelectasis happens <24hr and resolves with coughing. DVT/PE would have leg pain or chest symptoms. Priority: Notify surgeon, wound culture, antibiotics. This is why asepsis matters."
},
{
  q: "2. A patient with COPD is on 2L O2. SpO2 drops to 88%. First action?",
  options: ["Increase O2 to 4L","Assess respiratory rate and ABGs","Call respiratory therapist","Give bronchodilator"],
  ans: 1,
  rationale: "COPD patients are CO2 retainers. High O2 kills respiratory drive. NCK traps you with 'give more O2'. You must assess first: RR, LOC, ABG for CO2 retention. Target SpO2 88-92% in COPD. Giving 4L blindly can cause CO2 narcosis."
},
{
  q: "3. Which finding requires immediate reporting in a patient with head injury?",
  options: ["Headache","Vomiting","Unequal pupils","Drowsiness"],
  ans: 2,
  rationale: "Unequal pupils = uncal herniation and increased ICP. This is a neurosurgical emergency. NCK tests Cushing's Triad late signs. Headache/vomiting/drowsiness are expected. Unequal pupils mean brainstem compression → death if not decompressed."
},
{
  q: "4. CASE: Patient on heparin infusion. aPTT is 90 seconds. Therapeutic range 1.5-2.5x control. Action?",
  options: ["Increase heparin","Decrease heparin","Give protamine sulfate","Give vitamin K"],
  ans: 2,
  rationale: "90sec is likely >2.5x control = bleeding risk. NCK expects you to know: aPTT too high = hold heparin and notify. Protamine reverses heparin in emergency bleeding. Vitamin K reverses warfarin, not heparin. This is a high-alert medication."
},
{
  q: "5. Priority intervention for patient with hypovolemic shock?",
  options: ["Assess lung sounds","Administer IV fluid bolus","Give oxygen","Monitor BP q15min"],
  ans: 1,
  rationale: "ABC but in shock it's Circulation. Hypovolemic = not enough volume. NCK expects you to act, not just monitor. 30ml/kg crystalloid bolus per ATLS. O2 helps but doesn't fix volume. Lung sounds come after you start resuscitation."
},
{
  q: "6. A patient with ARF has K+ 6.9, peaked T waves. First drug?",
  options: ["Insulin + D50","Kayexalate","Lasix","Calcium gluconate"],
  ans: 3,
  rationale: "NCK trick question. K+ 6.9 + ECG changes = cardiac emergency. Calcium gluconate stabilizes myocardium in 1-3min. It doesn't lower K+. Insulin+D50 and Kayexalate lower K+ but take 30-60min. You stabilize heart first, then treat the K+. This kills patients."
},
{
  q: "7. CASE: Patient post-thyroidectomy has stridor and Chvostek sign. Suspect?",
  options: ["Hemorrhage","Hypocalcemia","Hyperthyroidism","Airway edema"],
  ans: 1,
  rationale: "Thyroid and parathyroids sit together. Chvostek = hypocalcemia from accidental parathyroid removal. Stridor = laryngeal spasm from low Ca++. NCK loves post-thyroid complications. Hemorrhage would have neck swelling + hypotension. Give IV calcium gluconate STAT."
},
{
  q: "8. Which is contraindicated in patient with glaucoma?",
  options: ["Atropine","Metoprolol","Lisinopril","Furosemide"],
  ans: 0,
  rationale: "Atropine is anticholinergic → mydriasis → blocks aqueous outflow → acute angle-closure glaucoma. NCK pharmacology trap. Beta blockers, ACE, and loop diuretics are actually used in glaucoma. This is why medication history matters."
},
{
  q: "9. Best indicator of fluid overload in CHF patient?",
  options: ["BP 160/90","Weight gain 2kg in 24hr","Crackles","JVD"],
  ans: 1,
  rationale: "1L fluid = 1kg weight. NCK wants objective data. Weight is most sensitive. Crackles and JVD are late signs. BP can be high for other reasons. Daily weights catch overload before pulmonary edema."
},
{
  q: "10. CASE: Patient with liver cirrhosis has asterixis and confusion. This is?",
  options: ["Wernicke","Hepatic encephalopathy","Dementia","Stroke"],
  ans: 1,
  rationale: "Liver can't detox ammonia → crosses BBB → cerebral edema. Asterixis = 'liver flap'. NCK GI emergency. Lactulose given to trap ammonia. This is why we restrict protein during acute phase."
},
{
  q: "11. Which lab best monitors warfarin?",
  options: ["PT/INR","aPTT","Platelets","Hemoglobin"],
  ans: 0,
  rationale: "Warfarin inhibits vit K factors 2,7,9,10 → prolongs PT. Heparin prolongs aPTT. NCK repeats this yearly. Therapeutic INR 2-3. >3 = bleeding risk. This is why we teach diet consistency with vit K foods."
},
{
  q: "12. CASE: Patient with pancreatitis. Priority lab?",
  options: ["Amylase and Lipase","LFTs","BUN/Cr","Glucose"],
  ans: 0,
  rationale: "Amylase and Lipase >3x normal confirms pancreatitis. NCK wants diagnostic labs. Lipase more specific. Pain management and NPO are next. This tests if you know what defines the disease vs complications."
},
{
  q: "13. Priority for patient with suspected appendicitis?",
  options: ["Apply heat","Give laxative","NPO and IV fluids","Encourage ambulation"],
  ans: 2,
  rationale: "Appendix can rupture. NPO prevents aspiration if surgery. IV for hydration. NCK surgical priority. Heat can cause rupture. Laxatives can perforate. This is about anticipating deterioration."
},
{
  q: "14. Which is a sign of compartment syndrome?",
  options: ["Pain unrelieved by opioids","Swelling","Numbness","All of the above"],
  ans: 3,
  rationale: "5 P's: Pain out of proportion, Pallor, Pulseless, Paresthesia, Paralysis. NCK ortho emergency. Fasciotomy needed within 6hr or limb lost. Pain unrelieved by meds is earliest sign."
},
{
  q: "15. CASE: Patient with chest tube. Sudden 200ml bright red drainage. Action?",
  options: ["Clamp tube","Notify surgeon","Milk tube","Reposition patient"],
  ans: 1,
  rationale: ">100ml/hr for 3hr = hemorrhage. Never clamp chest tube - can cause tension pneumothorax. NCK surgical emergency. Notify surgeon, prepare for OR. This tests critical thinking under pressure."
},
{
  q: "16. Best position for patient with ascites?",
  options: ["Supine","Prone","Semi-Fowler's","Trendelenburg"],
  ans: 2,
  rationale: "Semi-Fowler's decreases pressure on diaphragm and improves breathing. NCK GI management. Supine worsens dyspnea. This is comfort + physiology."
},
{
  q: "17. Which drug requires renal dose adjustment?",
  options: ["Penicillin","Gentamicin","Aspirin","Acetaminophen"],
  ans: 1,
  rationale: "Gentamicin is nephrotoxic and renally excreted. NCK pharm + renal. Need peak/trough and CrCl calculation. This is why we monitor I&O and BUN/Cr."
},
{
  q: "18. CASE: Patient with burns 40% TBSA. First 24hr fluid?",
  options: ["D5W","LR per Parkland","Dextrose","Colloid"],
  ans: 1,
  rationale: "Parkland: 4ml x %TBSA x kg. Half in first 8hr. LR replaces fluid loss and prevents acidosis. NCK burn management. D5W is hypotonic and worsens edema."
},
{
  q: "19. Priority assessment in patient with DKA?",
  options: ["K+ level","Blood glucose","pH and bicarbonate","Urine output"],
  ans: 2,
  rationale: "DKA = metabolic acidosis. pH <7.3 is life-threatening. NCK endocrine emergency. You treat acidosis and dehydration, not just glucose. K+ will shift with treatment so monitor closely."
},
{
  q: "20. Which is true about malignant hyperthermia?",
  options: ["Caused by succinylcholine","Treated with benadryl","Common complication","Low temp"],
  ans: 0,
  rationale: "MH triggered by volatile anesthetics + succinylcholine. Treated with Dantrolene. NCK OR emergency. Temp >40C, rigidity, tachycardia. This is why anesthesia history matters."
},
{
  q: "21. CASE: Patient with peptic ulcer has coffee-ground emesis. Indicates?",
  options: ["Fresh bleeding","Old bleeding","Perforation","Obstruction"],
  ans: 1,
  rationale: "Coffee-ground = blood digested by gastric acid = old bleeding. NCK GI. Fresh blood = bright red. This determines urgency and need for transfusion."
},
{
  q: "22. Best way to prevent pressure ulcers?",
  options: ["Massage bony prominences","Turn q2hr","High protein diet","Air mattress only"],
  ans: 1,
  rationale: "Turning relieves pressure. NCK fundamental. Massage damages tissue. Nutrition helps but doesn't replace turning. This is nursing care that prevents lawsuits."
},
{
  q: "23. CASE: Patient with SIADH has Na 122. Priority?",
  options: ["Fluid restriction","Increase fluids","Give K+","Give diuretic"],
  ans: 0,
  rationale: "SIADH = too much ADH → water retention → hyponatremia. NCK endocrine. Fluid restriction is treatment. Giving fluids worsens it. Monitor neuro status for seizures."
},
{
  q: "24. Which is a late sign of hypoxia?",
  options: ["Restlessness","Tachycardia","Cyanosis","Tachypnea"],
  ans: 2,
  rationale: "Early: restlessness, tachycardia. Late: cyanosis. NCK respiratory. By cyanosis, patient is in trouble. This is why we monitor SpO2 early."
},
{
  q: "25. CASE: Patient with spinal anesthesia has BP 80/50. Action?",
  options: ["Ephedrine","Fluid bolus","Trendelenburg","All of the above"],
  ans: 3,
  rationale: "Spinal causes vasodilation. NCK anesthesia complication. Treat hypotension with fluids, Trendelenburg to increase cerebral perfusion, and ephedrine if needed. This is about multi-pronged approach."
},

// Q26-50: PHARMACOLOGY - HIGH ALERT
{
  q: "26. CASE: Digoxin level 2.8, HR 52. Action?",
  options: ["Give digoxin","Hold digoxin and notify MD","Give K+","Give Lasix"],
  ans: 1,
  rationale: "Therapeutic 0.5-2.0. Toxic >2.0. Bradycardia + toxicity. NCK cardiac. Hold drug, check K+. Hypokalemia increases dig toxicity. This is why we check pulse before giving."
},
{
  q: "27. MgSO4 toxicity antidote?",
  options: ["Vitamin K","Calcium gluconate","Protamine","NAC"],
  ans: 1,
  rationale: "MgSO4 given for eclampsia. Toxicity: loss DTR, RR<12. Calcium gluconate reverses. NCK obstetric emergency. This is a must-know dose and antidote."
},
{
  q: "28. Which is given 30min before meals?",
  options: ["Metformin","Omeprazole","Iron","Digoxin"],
  ans: 1,
  rationale: "PPI blocks proton pump before food stimulates acid. NCK pharm timing. Iron with Vit C. Metformin with food to prevent GI upset."
},
{
  q: "29. CASE: Patient on MAOI ate aged cheese. BP 210/110. Suspect?",
  options: ["Anaphylaxis","Hypertensive crisis","Stroke","MI"],
  ans: 1,
  rationale: "MAOI + tyramine = hypertensive crisis. NCK psych pharm. Tyramine causes catecholamine release. This is why diet teaching is critical."
},
{
  q: "30. Lithium therapeutic level?",
  options: ["0.2-0.4","0.6-1.2","1.5-2.0","2.5-3.0"],
  ans: 1,
  rationale: "0.6-1.2 mEq/L. Toxic >1.5. NCK psych. Signs: tremor, N/V, confusion. Monitor kidney and thyroid."
},
{
  q: "31. CASE: Patient with TB. Orange urine expected with?",
  options: ["INH","Rifampin","PZA","Ethambutol"],
  ans: 1,
  rationale: "Rifampin stains body fluids orange. NCK public health. Patient teaching prevents panic. Ethambutol causes vision changes."
},
{
  q: "32. Which is given to prevent Reye's in children?",
  options: ["Avoid aspirin with viral illness","Avoid penicillin","Avoid ibuprofen","Avoid tetracycline"],
  ans: 0,
  rationale: "Aspirin + viral = Reye's: liver failure + encephalopathy. NCK peds pharm. Use acetaminophen instead."
},
{
  q: "33. CASE: Patient with gout. Drug to prevent attacks?",
  options: ["Colchicine","Allopurinol","Indomethacin","Prednisone"],
  ans: 1,
  rationale: "Allopurinol decreases uric acid production. Colchicine treats acute. NCK rheumatology. This is chronic vs acute management."
},
{
  q: "34. IV Vancomycin must be infused over?",
  options: ["15min","30min","60-90min","3hr"],
  ans: 2,
  rationale: "Rapid infusion = Red Man Syndrome. NCK pharm safety. Also monitor trough levels and renal function."
},
{
  q: "35. CASE: Patient with asthma. Rescue inhaler?",
  options: ["Fluticasone","Albuterol","Montelukast","Theophylline"],
  ans: 1,
  rationale: "Albuterol = SABA for acute bronchospasm. NCK respiratory. Steroids are controllers. This is acute vs maintenance."
},
{
  q: "36. Which is contraindicated in renal failure?",
  options: ["Penicillin","Metformin","Lisinopril","Digoxin"],
  ans: 1,
  rationale: "Metformin risk lactic acidosis in renal failure. NCK DM. Also contraindicated with contrast. This is high-risk medication."
},
{
  q: "37. CASE: Patient with myasthenia gravis. Drug?",
  options: ["Prednisone","Neostigmine","Propranolol","Levodopa"],
  ans: 1,
  rationale: "Neostigmine inhibits acetylcholinesterase → more ACh. NCK neuro. Prednisone for immunosuppression long-term."
},
{
  q: "38. Which requires INR monitoring?",
  options: ["Heparin","Warfarin","Enoxaparin","Aspirin"],
  ans: 1,
  rationale: "Warfarin oral anticoagulant. NCK. Heparin and LMWH use aPTT/anti-Xa. This is anticoagulant differentiation."
},
{
  q: "39. CASE: Patient with seizures. Drug with gingival hyperplasia?",
  options: ["Phenobarbital","Phenytoin","Carbamazepine","Valproic acid"],
  ans: 1,
  rationale: "Phenytoin side effect. NCK neuro pharm. Also need dental care. This is long-term side effect management."
},
{
  q: "40. Which is given subcutaneously for DVT prophylaxis?",
  options: ["Warfarin","Heparin","Enoxaparin","Clopidogrel"],
  ans: 2,
  rationale: "LMWH like Lovenox. NCK surgical. Doesn't need lab monitoring. Warfarin oral, heparin IV."
},
{
  q: "41. CASE: Patient with hyperthyroidism. Drug to decrease hormone synthesis?",
  options: ["Propranolol","PTU","Levothyroxine","Iodine"],
  ans: 1,
  rationale: "PTU blocks synthesis. Propranolol controls symptoms. NCK endocrine. This is mechanism-based."
},
{
  q: "42. Which is ototoxic and nephrotoxic?",
  options: ["Penicillin","Gentamicin","Cephalexin","Amoxicillin"],
  ans: 1,
  rationale: "Aminoglycoside. NCK. Need peak/trough. This is adverse effect clustering."
},
{
  q: "43. CASE: Patient with Parkinson's. Drug that replaces dopamine?",
  options: ["Bromocriptine","Levodopa/Carbidopa","Benztropine","Amantadine"],
  ans: 1,
  rationale: "Levodopa crosses BBB and converts to dopamine. Carbidopa prevents peripheral conversion. NCK neuro."
},
{
  q: "44. Which is used for opioid overdose?",
  options: ["Flumazenil","Naloxone","Protamine","NAC"],
  ans: 1,
  rationale: "Naloxone reverses respiratory depression. NCK emergency. Duration shorter than opioids so monitor."
},
{
  q: "45. CASE: Patient with Cushing's on steroid. Priority teaching?",
  options: ["Don't stop abruptly","Take on empty stomach","Avoid sunlight","Increase K+"],
  ans: 0,
  rationale: "Abrupt stop = adrenal crisis. NCK endocrine. Taper slowly. Take with food to prevent ulcer."
},
{
  q: "46. Which is given for anaphylaxis first?",
  options: ["Benadryl","Epinephrine IM","Steroids","Oxygen"],
  ans: 1,
  rationale: "Epi reverses airway and BP. NCK emergency. Benadryl for itching after. This is ACLS protocol."
},
{
  q: "47. CASE: Patient with iron deficiency. Teaching?",
  options: ["Take with milk","Take with Vit C","Take at bedtime","Avoid constipation"],
  ans: 1,
  rationale: "Vit C increases absorption. Milk/tea decrease. NCK. Expect black stools. This is patient education."
},
{
  q: "48. Which is used for chemotherapy-induced N/V?",
  options: ["Metoclopramide","Ondansetron","Loperamide","Simethicone"],
  ans: 1,
  rationale: "5-HT3 antagonist. NCK oncology. Given before chemo. This is supportive care."
},
{
  q: "49. CASE: Patient with hyperkalemia on ECG. First?",
  options: ["Kayexalate","Insulin + D50","Calcium gluconate","Lasix"],
  ans: 2,
  rationale: "Stabilize heart first. NCK emergency. Then shift K+ into cells. This is life-threatening prioritization."
},
{
  q: "50. Which is used to treat scabies?",
  options: ["Nystatin","Permethrin","Clotrimazole","Acyclovir"],
  ans: 1,
  rationale: "Permethrin cream. NCK community health. Treat all contacts. This is infectious disease management."
},

// Q51-80: PSYCH + MENTAL HEALTH CRISIS
{
  q: "51. CASE: Patient with schizophrenia says 'Poison in my food'. Response?",
  options: ["That's not true","I understand you're scared. The food is safe","Just eat","I'll get you different food"],
  ans: 1,
  rationale: "NCK therapeutic communication. Don't argue with delusion. Acknowledge feeling + offer reality. Arguing increases agitation."
},
{
  q: "52. Which is priority in patient with command hallucinations?",
  options: ["Give PRN","Assess for harm to self/others","Restrain","Isolate"],
  ans: 1,
  rationale: "Safety first. NCK psych emergency. Command hallucinations = high risk. Assess plan and intent."
},
{
  q: "53. CASE: Patient with mania hasn't slept 4 days. Priority nursing diagnosis?",
  options: ["Social isolation","Risk for injury","Disturbed thought","Imbalanced nutrition"],
  ans: 1,
  rationale: "Mania = poor judgment, risk-taking, no sleep. NCK bipolar. Risk for injury from impulsivity. Create safe environment."
},
{
  q: "54. Which is an example of projection?",
  options: ["I'm fine","You hate me","I forgot","I'm sick"],
  ans: 1,
  rationale: "Attributing own feelings to others. NCK defense mechanisms. This is repeated in NCK."
},
{
  q: "55. CASE: Patient withdrawing from alcohol has tremors, hallucinations, BP 180/100. Suspect?",
  options: ["DTs","Alcohol intoxication","Wernicke","Korsakoff"],
  ans: 0,
  rationale: "DTs 48-96hr post last drink. Life-threatening. NCK SUD. Treat with BZDs in ICU. This is medical emergency."
},
{
  q: "56. Best response to suicidal client: 'I want to die'?",
  options: ["You don't mean that","Everyone feels that","Are you thinking of hurting yourself?","You have so much to live for"],
  ans: 2,
  rationale: "NCK therapeutic. Direct question doesn't plant idea. Assesses risk. This is suicide assessment."
},
{
  q: "57. CASE: Patient with anorexia says 'I'm fat'. Underlying issue?",
  options: ["Attention seeking","Body image disturbance","Manipulation","Depression"],
  ans: 1,
  rationale: "Distorted body image is core. NCK eating disorder. Weight restoration is medical priority."
},
{
  q: "58. Which is a positive symptom of schizophrenia?",
  options: ["Alogia","Avolition","Hallucinations","Flat affect"],
  ans: 2,
  rationale: "Positive = added experiences. NCK psych. Negative = loss of function. This is diagnostic criteria."
},
{
  q: "59. CASE: Patient with PTSD has flashback. Intervention?",
  options: ["Grounding technique","Ignore it","Restrain","Sedate"],
  ans: 0,
  rationale: "Bring to present: 5-4-3-2-1 technique. NCK trauma. Safety and validation first."
},
{
  q: "60. Which is true about ECT?",
  options: ["Done awake","Causes brain damage","Used for severe depression","Given daily"],
  ans: 2,
  rationale: "ECT for treatment-resistant depression. NCK. Done under anesthesia 2-3x/week. Memory loss is side effect."
},
{
  q: "61. CASE: Patient with BPD threatens self-harm when nurse leaves. This is?",
  options: ["Manipulation","Fear of abandonment","Attention seeking","Borderline trait"],
  ans: 1,
  rationale: "Core feature of BPD. NCK personality disorders. Need consistent boundaries and validation."
},
{
  q: "62. Which is used for OCD?",
  options: ["Benzodiazepines","SSRIs","Antipsychotics","Stimulants"],
  ans: 1,
  rationale: "SSRIs first line for OCD. NCK. High dose needed. This is pharmacology."
},
{
  q: "63. CASE: Patient with dementia sundowning at 6pm. Intervention?",
  options: ["Increase lighting","Restrain","Medicate","Ignore"],
  ans: 0,
  rationale: "Bright light reduces confusion. NCK geriatric. Routine and orientation helps."
},
{
  q: "64. Which is a side effect of SSRIs?",
  options: ["Weight gain","Sexual dysfunction","Tremor","Agranulocytosis"],
  ans: 1,
  rationale: "Common and causes non-adherence. NCK. TCAs cause weight gain. Clozapine causes agranulocytosis."
},
{
  q: "65. CASE: Patient with alcohol use in denial. Best approach?",
  options: ["Confront","Motivational interviewing","Ignore","Threaten"],
  ans: 1,
  rationale: "Meet client where they are. NCK SUD. Confrontation increases resistance."
},
{
  q: "66. Which is an example of reaction formation?",
  options: ["I hate boss so I quit","I hate boss so I'm overly nice","I blame coworker","I work harder"],
  ans: 1,
  rationale: "Express opposite of true feeling. NCK defense mechanisms."
},
{
  q: "67. CASE: Patient with depression and psychomotor retardation. Activity?",
  options: ["Group therapy","Simple structured task","No activity","Competitive sport"],
  ans: 1,
  rationale: "Start small to build success. NCK MDD. Avoid overwhelming."
},
{
  q: "68. Which is priority in patient with acute psychosis?",
  options: ["Medication compliance","Safety","Insight","Social skills"],
  ans: 1,
  rationale: "ABC. NCK. Safety overrides everything else."
},
{
  q: "69. CASE: Patient with narcissistic personality. Expect?",
  options: ["Empathy","Need for admiration","Low self-esteem","Avoidance"],
  ans: 1,
  rationale: "Core trait. NCK personality disorders. Fragile self-esteem underneath."
},
{
  q: "70. Which is used for ADHD?",
  options: ["Fluoxetine","Methylphenidate","Haloperidol","Lorazepam"],
  ans: 1,
  rationale: "Stimulant. NCK child psych. Monitor growth and BP."
},
{
  q: "71. CASE: Patient with somatic symptom disorder. Nurse response?",
  options: ["It's all in your head","I believe you're in pain","Stop complaining","You're fine"],
  ans: 1,
  rationale: "Validate experience without reinforcing. NCK therapeutic communication."
},
{
  q: "72. Which is a side effect of antipsychotics?",
  options: ["Diarrhea","Tardive dyskinesia","Hypertension","Hyperglycemia"],
  ans: 1,
  rationale: "EPS from dopamine blockade. NCK. Irreversible. This is adverse effect monitoring."
},
{
  q: "73. CASE: Patient with eating disorder has K+ 2.8. Priority?",
  options: ["Weight gain","K+ replacement","Therapy","Exercise"],
  ans: 1,
  rationale: "Hypokalemia from purging can cause cardiac arrest. NCK medical priority before psych."
},
{
  q: "74. Which is true about involuntary commitment?",
  options: ["Patient can leave anytime","Danger to self/others","Family decides","No criteria"],
  ans: 1,
  rationale: "Legal criteria. NCK. Protects patient and society."
},
{
  q: "75. CASE: Patient with grief. Stage with anger?",
  options: ["Denial","Anger","Bargaining","Acceptance"],
  ans: 1,
  rationale: "Kubler-Ross stages. NCK. Normal process."
},
{
  q: "76. Which is used for panic disorder?",
  options: ["Antidepressants","Antipsychotics","Mood stabilizers","Stimulants"],
  ans: 0,
  rationale: "SSRIs/SNRIs first line. NCK anxiety. BZDs short-term only."
},
{
  q: "77. CASE: Patient with schizophrenia non-adherent. Reason?",
  options: ["Laziness","Side effects","Stubborn","Poor insight"],
  ans: 1,
  rationale: "EPS and weight gain common. NCK. Address side effects to improve adherence."
},
{
  q: "78. Which is an example of sublimation?",
  options: ["Yelling","Running to cope with anger","Drinking","Sleeping"],
  ans: 1,
  rationale: "Healthy channeling of impulse. NCK defense mechanism."
},
{
  q: "79. CASE: Patient with bipolar on lithium has diarrhea and tremor. Action?",
  options: ["Increase dose","Hold and check level","Give antidiarrheal","Continue"],
  ans: 1,
  rationale: "Signs of toxicity. NCK. Therapeutic 0.6-1.2. Toxic >1.5."
},
{
  q: "80. Which is priority in patient with self-harm?",
  options: ["Psychotherapy","Safety contract","Medication","Family therapy"],
  ans: 1,
  rationale: "Safety plan first. NCK. Then address underlying issues."
},

// Q81-120: LEADERSHIP + PROFESSIONAL + LEGAL
{
  q: "81. CASE: Nurse sees colleague documentation falsified. Action?",
  options: ["Ignore","Confront colleague","Report to supervisor","Do same"],
  ans: 1,
  rationale: "NCK Code of Conduct. Duty to report. Falsification = deregistration. Protects public."
},
{
  q: "82. Which is highest priority in delegation?",
  options: ["Task complexity","Staff preference","Patient acuity","Time available"],
  ans: 2,
  rationale: "Right task, right person, right patient. NCK. RN retains accountability."
},
{
  q: "83. CASE: Patient refuses blood transfusion for religious reasons. Nurse?",
  options: ["Call lawyer","Respect and document","Get court order","Transfuse anyway"],
  ans: 1,
  rationale: "Autonomy. NCK ethics. Educate but respect competent adult decision."
},
{
  q: "84. Which is an example of negligence?",
  options: ["Med error","Failure to follow standard of care","Assault","Battery"],
  ans: 1,
  rationale: "Deviation from standard causing harm. NCK legal. This is malpractice definition."
},
{
  q: "85. CASE: Charge nurse assigns 8 patients to new grad. Issue?",
  options: ["Good experience","Unsafe staffing","Team nursing","Primary nursing"],
  ans: 1,
  rationale: "NCK management. Unsafe assignment. Must advocate and report."
},
{
  q: "86. Which leadership style is best for crisis?",
  options: ["Democratic","Laissez-faire","Autocratic","Transformational"],
  ans: 2,
  rationale: "Autocratic for quick decisions. NCK. Democratic for planning."
},
{
  q: "87. CASE: Nurse gives wrong drug. First?",
  options: ["Fill incident report","Assess patient","Notify MD","Document"],
  ans: 1,
  rationale: "Patient safety first. NCK. Then follow chain. This is error management."
},
{
  q: "88. Which is purpose of nursing audit?",
  options: ["Punish nurses","Evaluate care quality","Reduce costs","Increase staff"],
  ans: 1,
  rationale: "Quality improvement. NCK. Retrospective review."
},
{
  q: "89. CASE: Doctor gives verbal order for heparin. Nurse?",
  options: ["Give immediately","Write, read back, verify","Wait for written","Refuse"],
  ans: 1,
  rationale: "NCK policy. Read back prevents error. Must be signed within 24hr."
},
{
  q: "90. Which is function of NCK?",
  options: ["Employ nurses","License and discipline","Run hospitals","Set salaries"],
  ans: 1,
  rationale: "Regulatory body. NCK. Cap 257."
},
{
  q: "91. CASE: Nurse shares patient info on Facebook. Violation?",
  options: ["Autonomy","Confidentiality","Beneficence","Justice"],
  ans: 1,
  rationale: "HIPAA and NCK Code breach. NCK. Can lead to deregistration."
},
{
  q: "92. Which is true about informed consent?",
  options: ["Nurse obtains","Patient must understand","Family signs always","Verbal only"],
  ans: 1,
  rationale: "MD explains, nurse witnesses understanding. NCK legal."
},
{
  q: "93. CASE: Nurse with TB working. Action?",
  options: ["Continue working","Report to occupational health","Take leave","Wear mask only"],
  ans: 1,
  rationale: "Employee health. NCK. Protect patients and self."
},
{
  q: "94. Which is characteristic of professional nurse?",
  options: ["Gossip","Accountability","Blame others","Late"],
  ans: 1,
  rationale: "NCK Code. Professionalism standards."
},
{
  q: "95. CASE: Patient falls. Nurse didn't do hourly rounds. This is?",
  options: ["Malpractice","Battery","Assault","Defamation"],
  ans: 0,
  rationale: "Breach of duty causing harm. NCK legal. Standard of care not met."
},
{
  q: "96. Which is purpose of CPD?",
  options: ["Promotion","License renewal","Salary","Transfer"],
  ans: 1,
  rationale: "NCK requirement every 3 years. NCK. Ensures competence."
},
{
  q: "97. CASE: Nurse witnesses impaired colleague. Action?",
  options: ["Cover for them","Report to supervisor","Ignore","Take over shift"],
  ans: 1,
  rationale: "Duty to report impairment. NCK. Patient safety issue."
},
{
  q: "98. Which leadership theory focuses on tasks?",
  options: ["Transformational","Transactional","Servant","Charismatic"],
  ans: 1,
  rationale: "Rewards and punishment for tasks. NCK management."
},
{
  q: "99. CASE: Nurse documents before giving med. This is?",
  options: ["Efficient","Falsification","Good practice","Time saving"],
  ans: 1,
  rationale: "Document after. NCK. Fraud if not given."
},
{
  q: "100. Which is true about scope of practice?",
  options: ["Same for all nurses","Defined by NCK","Decided by hospital","Not important"],
  ans: 1,
  rationale: "NCK defines RN, RCHN, KRCHN scope. NCK. Working outside = illegal."
},
{
  q: "101. CASE: Patient with DNR. Family demands CPR. Nurse?",
  options: ["Follow family","Follow DNR","Call security","Start CPR"],
  ans: 1,
  rationale: "Legal document. NCK ethics. Follow patient wishes."
},
{
  q: "102. Which is example of quality improvement?",
  options: ["Blaming staff","Root cause analysis","Ignoring errors","Hiding data"],
  ans: 1,
  rationale: "NCK. Focus on system not person."
},
{
  q: "103. CASE: Nurse asked to work 16hr shift. Concern?",
  options: ["Good overtime","Fatigue risk","Illegal","Preferred"],
  ans: 1,
  rationale: "NCK. Fatigue causes errors. Must report unsafe staffing."
},
// CONTINUATION Q104-120: LEADERSHIP + PROFESSIONAL + LEGAL + ETHICS
{
  q: "104. Which is true about incident report?",
  options: ["Goes in patient chart","For quality improvement","Admissible in court","Punishes nurse"],
  ans: 1,
  rationale: "NCK + Legal: Incident report is for system analysis, not patient chart and not admissible in court. It’s protected. Purpose is to prevent recurrence, not to blame. If you put it in the chart you create legal liability. This is why nurses fear reporting."
},
{
  q: "105. CASE: Nurse is asked to perform procedure she’s not competent in. Action?",
  options: ["Do it to please doctor","Refuse and explain","Ask colleague to do it","Do it and learn"],
  ans: 1,
  rationale: "NCK Code: Accountability + Competence. Working outside scope = negligence. You must refuse, explain, and request supervision/training. 'I was told to' is not a legal defense. This is how nurses get deregistered."
},
{
  q: "106. Which is an example of battery?",
  options: ["Touching patient without consent","Giving wrong drug","Forgetting to turn patient","Sharing patient info"],
  ans: 0,
  rationale: "Battery = intentional unauthorized touching. NCK legal. Giving wrong drug = negligence. Forgetting to turn = negligence. Sharing info = breach of confidentiality. NCK tests tort law differences."
},
{
  q: "107. CASE: Nurse manager uses 'management by walking around'. This demonstrates?",
  options: ["Autocratic leadership","Participative management","Avoidance","Bureaucratic style"],
  ans: 1,
  rationale: "MBWA = visible, approachable, gathers info directly. NCK leadership. Improves communication and morale. Autocratic = top-down. Laissez-faire = hands off. This style catches problems early."
},
{
  q: "108. Which is the best way to resolve conflict between 2 nurses?",
  options: ["Transfer one nurse","Ignore it","Confront with open communication","Complain to other staff"],
  ans: 2,
  rationale: "NCK management: Address conflict early using assertive communication. Focus on issue, not person. Use 'I statements'. Ignoring escalates. Transferring doesn’t solve root cause. This protects team function."
},
{
  q: "109. CASE: Patient is unconscious with no relative. Emergency surgery needed. Consent?",
  options: ["Wait for relative","Two doctors consent","Nurse consents","No surgery"],
  ans: 1,
  rationale: "NCK + Law: Doctrine of implied consent. In life-threatening emergency, 2 doctors can consent. Nurse cannot consent. Waiting = negligence. This protects patient and hospital legally."
},
{
  q: "110. Which is NOT a responsibility of NCK?",
  options: ["Maintaining register","Setting nursing syllabus","Disciplining nurses","Employing nurses"],
  ans: 3,
  rationale: "NCK Cap 257: Regulatory body. Employment is by MOH/County/Hospital. NCK repeats this direct question. Know the difference between regulator vs employer."
},
{
  q: "111. CASE: Nurse administers medication without checking ID band. Patient gets wrong drug. This is?",
  options: ["Malpractice","Battery","Assault","Defamation"],
  ans: 0,
  rationale: "Malpractice = professional negligence. 5 Rights not followed = breach of standard of care causing harm. NCK patient safety. This is why we do 2 patient identifiers."
},
{
  q: "112. Which is true about vicarious liability?",
  options: ["Nurse liable alone","Employer liable for employee acts during duty","Patient liable","Doctor liable only"],
  ans: 1,
  rationale: "Respondeat superior. NCK legal. Hospital is liable for nurse’s actions during scope of employment. But nurse can still be disciplined by NCK. This is why documentation and following policy matters."
},
{
  q: "113. CASE: Nurse finds expired IV fluids on ward. First action?",
  options: ["Use if no alternative","Remove and report to in-charge","Sell to patient","Ignore"],
  ans: 1,
  rationale: "NCK professionalism + Patient safety. Remove to prevent use, document, report. Using expired = negligence. This tests accountability and chain of command."
},
{
  q: "114. Which leadership style encourages staff participation in decision making?",
  options: ["Autocratic","Democratic","Laissez-faire","Bureaucratic"],
  ans: 1,
  rationale: "Democratic = shared decision making. NCK. Increases job satisfaction and buy-in. Autocratic = fast but low morale. Laissez-faire = chaos. Best for long-term planning."
},
{
  q: "115. CASE: Nurse overhears doctor discussing patient in elevator. This violates?",
  options: ["Autonomy","Confidentiality","Beneficence","Justice"],
  ans: 1,
  rationale: "HIPAA + NCK Code. Confidentiality = protect patient info in all settings. Elevator is public. Both doctor and nurse are liable. This is why we use private rooms for handover."
},
{
  q: "116. Which is the purpose of job description?",
  options: ["To increase salary","Define roles and responsibilities","To punish staff","Replace policies"],
  ans: 1,
  rationale: "NCK management. Job description = clear expectations, accountability, performance appraisal basis. Without it there’s role conflict and legal issues."
},
{
  q: "117. CASE: Nurse is floated to ICU with no ICU training. Patient deteriorates. Who is liable?",
  options: ["Only nurse","Only hospital","Nurse and hospital","No one"],
  ans: 2,
  rationale: "NCK legal: Both. Hospital for unsafe assignment. Nurse for accepting assignment beyond competence without objection. You must speak up. 'I was floated' is not full defense."
},
{
  q: "118. Which is a principle of quality assurance in nursing?",
  options: ["Blame individuals","Continuous monitoring and evaluation","Punish errors","Hide mistakes"],
  ans: 1,
  rationale: "NCK QA: Proactive, ongoing, system-focused. Audit, feedback, education. Not blame. Goal is prevent errors, not punish. This is modern patient safety culture."
},
{
  q: "119. CASE: Patient asks nurse 'Will I die?'. Best response?",
  options: ["No you won't","Ask your doctor","You seem worried about dying. Tell me more","Everyone dies"],
  ans: 2,
  rationale: "NCK therapeutic communication. Acknowledge emotion + open-ended. Don’t give false reassurance or avoid. This builds trust and allows exploration of fears."
},
{
  q: "120. Which action can lead to deregistration by NCK?",
  options: ["Late coming","Falsification of records","Arguing with doctor","Wearing wrong uniform"],
  ans: 1,
  rationale: "NCK Code: Professional misconduct = falsification, drug theft, sexual misconduct, practicing while impaired. Late/uniform = administrative. Falsification is fraud and patient safety risk = deregistration."
}
],
    p1b: [
     // NCK AUGUST 2026 PREDICTION - BScN PAPER 1 MIXED - 120 QUESTIONS

{
  q: "1. The nursing theorist who defined nursing as 'meeting patient's self-care needs' is?",
  options: ["Florence Nightingale","Dorothea Orem","Callista Roy","Virginia Henderson"],
  ans: 1,
  rationale: "Orem's Self-Care Deficit Theory. BScN must know theorists. When patient has deficit, nurse provides wholly compensatory, partly compensatory, or supportive-educative care."
},
{
  q: "2. Priority lab to monitor heparin therapy is?",
  options: ["PT/INR","aPTT","Platelets","D-dimer"],
  ans: 1,
rationale: "Heparin affects intrinsic pathway → prolongs aPTT. Warfarin affects extrinsic → PT/INR. Therapeutic aPTT = 1.5-2.5x control. NCK tests drug monitoring."
},
{
  q: "3. The main principle of Primary Health Care from Alma-Ata is?",
  options: ["Hospital based care","Community participation","Specialist driven","Curative only"],
  ans: 1,
  rationale: "PHC 8 elements. Community participation ensures programs are accepted and sustained. Without it projects fail in Kenya."
},
{
  q: "4. Side effect of Lisinopril that requires patient teaching?",
  options: ["Tachycardia","Dry cough","Hypoglycemia","Weight gain"],
  ans: 1,
  rationale: "ACE inhibitors block breakdown of bradykinin → persistent dry cough. Not allergy. Teach patient not to stop without consulting. ARBs don’t cause this."
},
{
  q: "5. Which vaccine is contraindicated in pregnancy?",
  options: ["TT","Inactivated influenza","MMR","Tdap"],
  ans: 2,
  rationale: "Live attenuated vaccines contraindicated in pregnancy due to risk to fetus. MMR, Varicella, Yellow fever. Inactivated are safe."
},
{
  q: "6. The therapeutic level of Digoxin is?",
  options: ["0.2-0.5 ng/mL","0.5-2.0 ng/mL","2.5-3.5 ng/mL","4.0-5.0 ng/mL"],
  ans: 1,
  rationale: "0.5-2.0 ng/mL. Toxic >2.0. Signs: N/V, yellow-green halos, bradycardia. Check apical pulse 1min before giving. Hold if <60 adult."
},
{
  q: "7. Which is a function of Nursing Council of Kenya?",
  options: ["Employing nurses","Licensing and disciplining nurses","Managing hospitals","Setting salaries"],
  ans: 1,
  rationale: "NCK mandate under Cap 257: Register, license, discipline, set standards, CPD. Employment is by county/MOH."
},
{
  q: "8. In a patient with COPD, target SpO2 should be?",
  options: ["95-100%","92-94%","88-92%","80-85%"],
  ans: 2,
  rationale: "COPD patients are CO2 retainers. High O2 suppresses hypoxic drive. Target 88-92% to avoid CO2 narcosis. This is a common NCK trap."
},
{
  q: "9. The loading dose of MgSO4 for eclampsia is?",
  options: ["2g IV","4g IV over 20min","10g IM","500mg IV"],
  ans: 1,
  rationale: "4-6g IV loading over 20min, then 1-2g/hr maintenance. Therapeutic 4-7 mEq/L. Toxicity: loss DTR, RR<12. Antidote: Calcium gluconate. NCK must-know."
},
{
  q: "10. Which leadership style is best during a code blue?",
  options: ["Democratic","Laissez-faire","Autocratic","Transformational"],
  ans: 2,
  rationale: "Autocratic = quick, clear commands. No time for discussion. Democratic is for planning. Transformational for change."
},
{
  q: "11. A patient with Cushing's Triad has?",
  options: ["Hypotension, tachycardia, tachypnea","Hypertension, bradycardia, irregular respirations","Fever, chills, sweating","Nausea, vomiting, diarrhea"],
  ans: 1,
  rationale: "Late sign of increased ICP due to brainstem compression. HTN + bradycardia + irregular respirations. Indicates herniation. Neurosurgical emergency."
},
{
  q: "12. Which is a characteristic of Type 1 Diabetes?",
  options: ["Insulin resistance","Autoimmune destruction of beta cells","Adult onset","Managed by diet only"],
  ans: 1,
  rationale: "T1DM = absolute insulin deficiency. T2DM = insulin resistance. NCK differentiates pathophysiology for management."
},
{
  q: "13. The best indicator of fluid overload in a CHF patient is?",
  options: ["Crackles","JVD","Daily weight gain","Edema"],
  ans: 2,
  rationale: "1L = 1kg. Weight is most objective and earliest sign. Crackles and JVD are late. Daily weights catch overload before pulmonary edema."
},
{
  q: "14. Which is an example of primary prevention?",
  options: ["Screening for cancer","Immunization","Rehabilitation after stroke","Treating hypertension"],
  ans: 1,
  rationale: "Primary = prevent disease before it occurs. Secondary = early detection. Tertiary = prevent complications."
},
{
  q: "15. A patient with liver cirrhosis and confusion likely has?",
  options: ["Stroke","Hepatic encephalopathy","Wernicke encephalopathy","Hypoglycemia"],
  ans: 1,
  rationale: "Liver fails to detox ammonia → crosses BBB → cerebral edema. Treated with lactulose to trap ammonia. Asterixis is classic sign."
},
{
  q: "16. Which is the antidote for acetaminophen overdose?",
  options: ["Naloxone","Flumazenil","N-acetylcysteine","Protamine sulfate"],
  ans: 2,
  rationale: "NAC replenishes glutathione within 8-10hrs to prevent liver necrosis. Naloxone = opioids. Protamine = heparin. NCK antidotes are high yield."
},
{
  q: "17. The nurse witnesses a colleague stealing drugs. Legal duty is to?",
  options: ["Ignore","Confront and keep secret","Report to supervisor/NCK","Take drugs too"],
  ans: 1,
  rationale: "NCK Code of Conduct: Duty to report unprofessional conduct. Protects patients and profession. Failure to report = complicit."
},
{
  q: "18. Which is a sign of hypokalemia?",
  options: ["Peaked T waves","U waves on ECG","Muscle spasms","Hyperreflexia"],
  ans: 1,
  rationale: "K+ <3.5: muscle weakness, ileus, U waves, arrhythmias. Peaked T = hyperkalemia. NCK electrolyte emergency."
},
{
  q: "19. Informed consent must be obtained by?",
  options: ["The nurse","The doctor performing procedure","Hospital administrator","Family member"],
  ans: 1,
  rationale: "MD explains risks, benefits, alternatives. Nurse witnesses signature and ensures understanding. Cannot delegate explanation."
},
{
  q: "20. Which is a risk factor for DVT?",
  options: ["Ambulation","Anticoagulant use","Prolonged immobility","Young age"],
  ans: 2,
  rationale: "Virchow's triad: stasis, hypercoagulability, endothelial injury. Immobility = stasis. NCK prevention: early ambulation, SCDs."
},
{
  q: "21. KEPI schedule: Penta1 is given at?",
  options: ["Birth","6 weeks","10 weeks","14 weeks"],
  ans: 1,
  rationale: "KEPI: Birth=BCG,OPV0. 6wks=Penta1,OPV1,PCV1,Rota1. 10wks=Penta2. 14wks=Penta3. 9m=Measles. NCK repeats."
},
{
  q: "22. Which is a positive symptom of schizophrenia?",
  options: ["Flat affect","Avolition","Hallucination","Social withdrawal"],
  ans: 2,
  rationale: "Positive = added experiences: delusions, hallucinations. Negative = loss: flat affect, alogia. NCK psych."
},
{
  q: "23. The purpose of daily weights in renal failure is to assess?",
  options: ["Nutrition","Fluid balance","Cardiac output","Protein loss"],
  ans: 1,
  rationale: "Kidneys regulate fluid. 1kg gain = 1L retention. More accurate than I&O. NCK renal."
},
{
  q: "24. Which drug is used for status asthmaticus?",
  options: ["Oral antihistamine","IV corticosteroid + nebulized bronchodilator","Antibiotic","Decongestant"],
  ans: 1,
  rationale: "Severe asthma = steroids to reduce inflammation + SABA nebulizer. May need MgSO4, Heliox. NCK emergency."
},
{
  q: "25. A patient refuses blood transfusion due to religion. Nurse should?",
  options: ["Call police","Respect and document","Force transfusion","Get court order"],
  ans: 1,
  rationale: "Autonomy. Competent adult can refuse. Educate on risks, document, notify MD. Jehovah's Witnesses common in Kenya."
},
{
  q: "26. Which is a complication of prolonged bedrest?",
  options: ["Hypertension","Pressure ulcer","Bradycardia","Weight loss"],
  ans: 1,
  rationale: "Pressure, shear, friction → tissue ischemia. Prevent with turning q2hr. NCK fundamental."
},
{
  q: "27. The antidote for heparin overdose is?",
  options: ["Vitamin K","Protamine sulfate","Calcium gluconate","N-acetylcysteine"],
  ans: 1,
  rationale: "Protamine binds heparin. Vitamin K reverses warfarin. NCK anticoagulant reversal."
},
{
  q: "28. Which is a sign of increased ICP?",
  options: ["Tachycardia","Hypertension + bradycardia","Hypotension","Tachypnea"],
  ans: 1,
  rationale: "Cushing's reflex. Late sign. Also vomiting, headache, decreased LOC. NCK neuro."
},
{
  q: "29. Which is used for gout prevention?",
  options: ["Colchicine","Allopurinol","Ibuprofen","Prednisone"],
  ans: 1,
  rationale: "Allopurinol decreases uric acid production. Colchicine/NSAIDs treat acute attack. NCK rheumatology."
},
{
  q: "30. The best way to prevent CAUTI is?",
  options: ["Daily catheter care","Early removal of catheter","Antibiotic prophylaxis","Closed drainage only"],
  ans: 1,
  rationale: "Each day with catheter increases risk 5%. Remove ASAP. NCK infection control."
},
{
  q: "31. Which is a sign of anaphylaxis?",
  options: ["Bradycardia","Hypotension + bronchospasm","Hypertension","Bradypnea"],
  ans: 1,
  rationale: "Histamine release → vasodilation + airway edema. First drug: Epinephrine IM. NCK emergency."
},
{
  q: "32. In delegation, which task cannot be delegated to UAP?",
  options: ["Bathing","Vital signs","Nursing assessment","Feeding"],
  ans: 2,
  rationale: "Assessment, diagnosis, planning, evaluation require nursing judgment. NCK delegation rules."
},
{
  q: "33. Which is a side effect of prednisone?",
  options: ["Hypoglycemia","Hyperglycemia + immunosuppression","Hypotension","Weight loss"],
  ans: 1,
  rationale: "Steroids cause Cushingoid features, hyperglycemia, infection risk. Must taper, not stop abruptly."
},
{
  q: "34. The purpose of ORT in diarrhea is to?",
  options: ["Stop diarrhea","Replace fluid and electrolytes","Kill bacteria","Reduce fever"],
  ans: 1,
  rationale: "Prevent dehydration. Zinc reduces duration. NCK IMCI. Antibiotics only for dysentery/cholera."
},
{
  q: "35. Which is a characteristic of malignant tumor?",
  options: ["Well differentiated","Slow growing","Metastasizes","Encapsulated"],
  ans: 2,
  rationale: "Malignant: rapid, invasive, metastasize. Benign: slow, encapsulated. NCK oncology."
},
{
  q: "36. A patient with ARF and K+ 6.8 with peaked T waves. First?",
  options: ["Kayexalate","Insulin + D50","Calcium gluconate","Dialysis"],
  ans: 2,
  rationale: "Stabilize myocardium first. Calcium works in 1-3min. Then shift K+ with insulin. NCK cardiac emergency."
},
{
  q: "37. Which is true about EBP?",
  options: ["Based on tradition","Integrates research + expertise + patient values","Uses only RCTs","Done by doctors only"],
  ans: 1,
  rationale: "BScN role is to lead EBP. Triad: Best evidence + clinical expertise + patient preference."
},
{
  q: "38. Which is a sign of child abuse?",
  options: ["Bruises in various stages","Frequent colds","Good hygiene","Normal growth"],
  ans: 0,
  rationale: "Inconsistent history, bruises on trunk/ears, burns. Mandatory reporting. NCK legal."
},
{
  q: "39. Which is used for pulmonary edema?",
  options: ["Digoxin","Furosemide","Nitroglycerin","All of the above"],
  ans: 3,
  rationale: "Lasix for fluid, NTG for preload, Digoxin for contractility. Triple therapy in acute HF."
},
{
  q: "40. The nurse notes wrong drug given. First action?",
  options: ["Fill incident report","Assess patient","Notify MD","Document"],
  ans: 1,
  rationale: "Patient safety first. ABC. Then follow chain. Incident report is for QI, not punishment."
},
{
  q: "41. Which is a complication of measles?",
  options: ["Otitis media + pneumonia","Diabetes","Asthma","Epilepsy"],
  ans: 0,
  rationale: "Common complications in under 5. Give Vitamin A. NCK child health."
},
{
  q: "42. Which is true about Lithium?",
  ans: 1,
  rationale: "0.6-1.2 mEq/L. Toxic >1.5. Monitor kidney and thyroid. Signs toxicity: tremor, N/V, confusion."
},
{
  q: "43. Which is a priority in patient with hypovolemic shock?",
  options: ["Assess lung sounds","IV fluid bolus","Give oxygen","Monitor BP"],
  ans: 1,
  rationale: "Replace volume. 30ml/kg crystalloid. Oxygen helps but doesn't fix volume deficit."
},
{
  q: "44. Which is a sign of hyperthyroidism?",
  options: ["Bradycardia","Weight gain","Exophthalmos","Cold intolerance"],
  ans: 2,
  rationale: "Graves: exophthalmos, tachycardia, weight loss, heat intolerance. NCK endocrine."
},
{
  q: "45. The purpose of nursing audit is to?",
  options: ["Punish nurses","Evaluate quality of care","Reduce staff","Increase admissions"],
  ans: 1,
  rationale: "Retrospective review to improve care. Part of QA. Not for blame."
},
{
  q: "46. Which is a sign of compartment syndrome?",
  options: ["Pain relieved by opioid","Pain unrelieved by opioid","Warm extremity","Strong pulses"],
  ans: 1,
  rationale: "Pain out of proportion. 5 P's. Surgical emergency - fasciotomy within 6hr."
},
{
  q: "47. Which is used for TB treatment and causes orange urine?",
  options: ["INH","Rifampin","PZA","Ethambutol"],
  ans: 1,
  rationale: "Rifampin stains body fluids. Teach patient to prevent panic. Ethambutol = vision changes."
},
{
  q: "48. Which is a principle of documentation?",
  options: ["Use pencil","Document before giving care","Be objective and timely","Use correction fluid"],
  ans: 2,
  rationale: "If not documented, not done. Legal record. No scribbling."
},
{
  q: "49. Which is a sign of DKA?",
  options: ["Fruity breath + Kussmaul respirations","Sweet breath + slow respirations","No breath odor","Halitosis"],
  ans: 0,
  rationale: "Acetone breath + deep rapid breathing to blow off CO2 and correct acidosis."
},
{
  q: "50. Which is true about vicarious liability?",
  options: ["Nurse liable alone","Employer liable for employee during duty","Patient liable","Doctor liable only"],
  ans: 1,
  rationale: "Respondeat superior. Hospital liable for nurse's actions within scope."
},
{
  q: "51. Which is a sign of increased ICP in infant?",
  options: ["Bulging fontanelle","Bradycardia","Hypertension","All of the above"],
  ans: 3,
  rationale: "Infant: bulging fontanelle, high-pitched cry. Older: Cushing's triad."
},
{
  q: "52. Which is used for anaphylaxis first?",
  options: ["Benadryl","Epinephrine IM","Steroids","Oxygen"],
  ans: 1,
  rationale: "Epi reverses airway and BP. Give in lateral thigh. Benadryl after."
},
{
  q: "53. Which is a characteristic of a professional nurse?",
  options: ["Gossiping","Accountability","Blaming others","Late coming"],
  ans: 1,
  rationale: "NCK Code: accountability, competence, ethics, lifelong learning."
},
{
  q: "54. Which is a sign of pulmonary embolism?",
  options: ["Sudden dyspnea + chest pain","Bradycardia","Hypertension","Bradypnea"],
  ans: 0,
  rationale: "Sudden onset. May have hemoptysis. DVT is source. NCK emergency."
},
{
  q: "55. Which is used for hypertension in pregnancy?",
  options: ["Lisinopril","Methyldopa","Atenol","Captopril"],
  ans: 1,
  rationale: "ACE inhibitors teratogenic. Methyldopa and labetalol safe. NCK obstetrics."
},
{
  q: "56. Which is a sign of hypoglycemia?",
  options: ["Fruity breath","Tremors + sweating","Polyuria","Blurred vision"],
  ans: 1,
  rationale: "Adrenergic response. Treat with 15g fast acting carb. NCK DM."
},
{
  q: "57. Which is a function of CHV in Kenya?",
  options: ["Prescribe antibiotics","Health education + referrals","Surgery","Manage dispensary"],
  ans: 1,
  rationale: "Community Health Strategy. Link between community and facility."
},
{
  q: "58. Which is a sign of left-sided HF?",
  options: ["JVD","Peripheral edema","Pulmonary crackles","Ascites"],
  ans: 2,
  rationale: "Left = pulmonary congestion. Right = systemic congestion."
},
{
  q: "59. Which is true about CPD?",
  options: ["Optional","Required for license renewal","Every year","For promotion only"],
  ans: 1,
  rationale: "NCK: 20 points every 3 years for license renewal."
},
{
  q: "60. Which is a sign of meningitis?",
  options: ["Kernig sign","Babinski","Brudzinski","Both B and C"],
  ans: 3,
  rationale: "Meningeal irritation signs. Also fever, headache, photophobia. NCK infectious."
},
{
  q: "61. Which is used for pain in MI?",
  options: ["Morphine","Pethidine","Tramadol","Paracetamol"],
  ans: 0,
  rationale: "Morphine: analgesia + venodilation reduces preload. NCK cardiac."
},
{
  q: "62. Which is a sign of dehydration in child?",
  options: ["Tachycardia","Sunken fontanelle","Dry mucous membranes","All of the above"],
  ans: 3,
  rationale: "IMCI classification. Severe = lethargy + unable to drink."
},
{
  q: "63. Which is true about delegation?",
  options: ["RN can delegate assessment","Accountability cannot be delegated","UAP can do nursing diagnosis","Delegate to anyone"],
  ans: 1,
  rationale: "You can delegate task but not accountability. NCK management."
},
{
  q: "64. Which is a sign of hyperkalemia?",
  options: ["U waves","Peaked T waves","Hyporeflexia","Ileus"],
  ans: 1,
  rationale: "K+ >5.5: peaked T, widened QRS. Cardiac arrest risk. NCK emergency."
},
{
  q: "65. Which is used for Parkinson's disease?",
  options: ["Propranolol","Levodopa/Carbidopa","Diazepam","Haloperidol"],
  ans: 1,
  rationale: "Replaces dopamine. Carbidopa prevents peripheral breakdown."
},
{
  q: "66. Which is a sign of increased ICP?",
  options: ["Tachycardia","Hypertension + bradycardia","Hypotension","Tachypnea"],
  ans: 1,
  rationale: "Late sign. Indicates brainstem compression."
},
{
  q: "67. Which is a complication of immobility?",
  options: ["Hypertension","Pressure ulcer","Bradycardia","Weight loss"],
  ans: 1,
  rationale: "Prevent with turning, skin care, nutrition."
},
{
  q: "68. Which is true about informed consent?",
  options: ["Nurse obtains","Patient must understand","Family signs always","Verbal only"],
  ans: 1,
  rationale: "Must be voluntary, informed, competent. MD explains."
},
{
  q: "69. Which is a sign of anemia?",
  options: ["Hypertension","Pallor + fatigue","Tachycardia only","Weight gain"],
  ans: 1,
  rationale: "Decreased Hb → decreased O2 carrying. NCK."
},
{
  q: "70. Which is used for eclampsia seizure?",
  options: ["Oxytocin","MgSO4","Methergine","Iron"],
  ans: 1,
  rationale: "MgSO4 is drug of choice for seizure prophylaxis in preeclampsia/eclampsia."
},
{
  q: "71. Which is a sign of otitis media?",
  options: ["Ear pain + tugging","Cough","Rash","Diarrhea"],
  ans: 0,
  rationale: "Common in <5y due to short eustachian tube."
},
{
  q: "72. Which is true about incident report?",
  options: ["Goes in patient chart","For quality improvement","Admissible in court","Punishes nurse"],
  ans: 1,
  rationale: "QI tool. Not in chart, not admissible."
},
{
  q: "73. Which is a sign of Cushing's syndrome?",
  options: ["Moon face + buffalo hump","Weight loss","Hypotension","Bradycardia"],
  ans: 0,
  rationale: "Excess cortisol. Also hyperglycemia, thin skin."
},
{
  q: "74. Which is used for asthma maintenance?",
  options: ["Albuterol","Fluticasone","Ipratropium","Epinephrine"],
  ans: 1,
  rationale: "Inhaled steroid for inflammation. Albuterol is rescue."
},
{
  q: "75. Which is a sign of renal failure?",
  options: ["Polyuria early","Oliguria late","Hypertension","All of the above"],
  ans: 3,
  rationale: "ARF: oliguria. CRF: polyuria early then oliguria. HTN common."
},
{
  q: "76. Which is true about therapeutic communication?",
  options: ["Giving advice","Using open-ended questions","Changing subject","Asking why"],
  ans: 1,
  rationale: "'Tell me more'. Avoid clichés and false reassurance."
},
{
  q: "77. Which is a sign of appendicitis?",
  options: ["Rebound tenderness","Diarrhea","Constipation","Dysuria"],
  ans: 0,
  rationale: "Peritoneal irritation. NPO, IV, prepare for surgery."
},
{
  q: "78. Which is used for DVT prophylaxis?",
  options: ["Warfarin","Enoxaparin","Aspirin","Clopidogrel"],
  ans: 1,
  rationale: "LMWH subcut. Doesn't need lab monitoring."
},
{
  q: "79. Which is a sign of hyperglycemia?",
  options: ["Tremors","Polyuria + polydipsia","Sweating","Tachycardia"],
  ans: 1,
  rationale: "Osmotic diuresis. NCK DM."
},
{
  q: "80. Which is true about nursing process?",
  options: ["Linear","Cyclical","Done once","Only for hospital"],
  ans: 1,
  rationale: "ADPIE is continuous and cyclical."
},
{
  q: "81. Which is a sign of shock?",
  options: ["Hypertension","Tachycardia + pallor","Bradycardia","Warm skin"],
  ans: 1,
  rationale: "Compensatory mechanism. Late = hypotension."
},
{
  q: "82. Which is used for UTI?",
  options: ["Amoxicillin","Nitrofurantoin","Metronidazole","Acyclovir"],
  ans: 1,
  rationale: "First line for uncomplicated UTI. Avoid in renal failure."
},
{
  q: "83. Which is a sign of pneumonia?",
  options: ["Crackles + fever","Bradypnea","Hypertension","Bradycardia"],
  ans: 0,
  rationale: "Consolidation. Assess SpO2 and RR first."
},
{
  q: "84. Which is true about quality improvement?",
  options: ["Blame staff","Focus on system","Hide errors","Punish errors"],
  ans: 1,
  rationale: "Root cause analysis. Just culture."
},
{
  q: "85. Which is a sign of dehydration?",
  options: ["Tachycardia","Sunken eyes","Poor skin turgor","All of the above"],
  ans: 3,
  rationale: "Assess mucous membranes, capillary refill, urine output."
},
{
  q: "86. Which is used for pain?",
  options: ["Morphine","Ibuprofen","Paracetamol","All depending on pain scale"],
  ans: 3,
  rationale: "WHO pain ladder. NCK pharmacology."
},
{
  q: "87. Which is a sign of infection?",
  options: ["Fever","Tachycardia","Leukocytosis","All of the above"],
  ans: 3,
  rationale: "SIRS criteria. NCK."
},
{
  q: "88. Which is true about scope of practice?",
  options: ["Same for all","Defined by NCK","Decided by hospital","Not important"],
  ans: 1,
  rationale: "NCK defines RN, KRCHN, BScN scope."
},
{
  q: "89. Which is a sign of heart failure?",
  options: ["Dyspnea on exertion","Edema","Fatigue","All of the above"],
  ans: 3,
  rationale: "Decreased cardiac output."
},
{
  q: "90. Which is used for constipation?",
  options: ["Loperamide","Lactulose","Omeprazole","Metoclopramide"],
  ans: 1,
  rationale: "Osmotic laxative. Also used in hepatic encephalopathy."
},
{
  q: "91. Which is a sign of stroke?",
  options: ["FAST: Face, Arm, Speech","Headache only","Fever","Nausea"],
  ans: 0,
  rationale: "Time is brain. NCK neuro."
},
{
  q: "92. Which is true about patient rights?",
  options: ["Right to refuse treatment","Right to information","Right to privacy","All of the above"],
  ans: 3,
  rationale: "Kenya Patient's Rights Charter."
},
{
  q: "93. Which is a sign of sepsis?",
  options: ["Fever + tachycardia","Hypotension","Altered mental","All of the above"],
  ans: 3,
  rationale: "qSOFA criteria. NCK emergency."
},
{
  q: "94. Which is used for vomiting?",
  options: ["Ondansetron","Loperamide","Simethicone","Antacid"],
  ans: 0,
  rationale: "5-HT3 antagonist. Used in chemo."
},
{
  q: "95. Which is a sign of malnutrition?",
  options: ["Weight loss","Edema","Hair changes","All of the above"],
  ans: 3,
  rationale: "Assess MUAC, BMI, clinical signs."
},
{
  q: "96. Which is true about teamwork?",
  options: ["One person does all","Shared goals","No communication","Blame culture"],
  ans: 1,
  rationale: "SBAR communication. NCK."
},
{
  q: "97. Which is a sign of urinary retention?",
  options: ["Frequency","Suprapubic distention","Polyuria","Dysuria"],
  ans: 1,
  rationale: "Bladder palpable. Catheterize if needed."
},
{
  q: "98. Which is used for fever?",
  options: ["Paracetamol","Ibuprofen","Both","Aspirin in children"],
  ans: 2,
  rationale: "Antipyretic. Avoid aspirin in children due to Reye's."
},
{
  q: "99. Which is a sign of anxiety?",
  options: ["Tachycardia","Sweating","Restlessness","All of the above"],
  ans: 3,
  rationale: "Physiological + psychological."
},
{
  q: "100. Which is true about patient education?",
  options: ["One time","Tailored to patient","No need to evaluate","Done by doctor only"],
  ans: 1,
  rationale: "Assess learning needs, evaluate understanding."
},
{
  q: "101. Which is a sign of hypertension?",
  options: ["BP >140/90","Headache","Nosebleeds","All of the above"],
  ans: 3,
  rationale: "Silent killer. NCK."
},
{
  q: "102. Which is used for cough?",
  options: ["Dextromethorphan","Guaifenesin","Both","Antibiotic"],
  ans: 2,
  rationale: "Suppressant vs expectorant."
},
{
  q: "103. Which is a sign of allergy?",
  options: ["Rash","Itching","Wheezing","All of the above"],
  ans: 3,
  rationale: "Mild to anaphylaxis."
},
{
  q: "104. Which is true about safety?",
  options: ["Patient safety first","Staff safety","Environment safety","All of the above"],
  ans: 3,
  rationale: "NCK priority."
},
{
  q: "105. Which is a sign of pain?",
  options: ["Facial grimace","Tachycardia","Restlessness","All of the above"],
  ans: 3,
  rationale: "Assess using pain scale."
},
{
  q: "106. Which is used for insomnia?",
  options: ["Sleep hygiene","Zolpidem","Both","Alcohol"],
  ans: 2,
  rationale: "Non-pharmacological first."
},
{
  q: "107. Which is a sign of respiratory distress?",
  options: ["Tachypnea","Retractions","Cyanosis","All of the above"],
  ans: 3,
  rationale: "Assess airway first."
},
{
  q: "108. Which is true about documentation?",
  options: ["Timely","Accurate","Complete","All of the above"],
  ans: 3,
  rationale: "Legal requirement."
},
{
  q: "109. Which is a sign of wound infection?",
  options: ["Redness","Swelling","Purulent drainage","All of the above"],
  ans: 3,
  rationale: "Assess daily."
},
{
  q: "110. Which is used for nausea?",
  options: ["Metoclopramide","Ondansetron","Both","Antacid"],
  ans: 2,
  rationale: "Prokinetic vs antiemetic."
},
{
  q: "111. Which is a sign of bleeding?",
  options: ["Tachycardia","Hypotension","Pallor","All of the above"],
  ans: 3,
  rationale: "Assess vitals and Hb."
},
{
  q: "112. Which is true about ethics?",
  options: ["Based on law","Guides practice","Optional","Not important"],
  ans: 1,
  rationale: "NCK Code of Conduct."
},
{
  q: "113. Which is a sign of respiratory infection?",
  options: ["Cough","Fever","Sputum","All of the above"],
  ans: 3,
  rationale: "Assess sputum color."
},
{
  q: "114. Which is used for diarrhea?",
  options: ["ORS","Zinc","Both","Antibiotic always"],
  ans: 2,
  rationale: "IMCI protocol."
},
{
  q: "115. Which is a sign of cardiac problem?",
  options: ["Chest pain","Dyspnea","Edema","All of the above"],
  ans: 3,
  rationale: "Assess cardiac enzymes."
},
{
  q: "116. Which is true about leadership?",
  options: ["Born not made","Can be learned","Not needed","Only for managers"],
  ans: 1,
  rationale: "BScN prepares leaders."
},
{
  q: "117. Which is a sign of GI problem?",
  options: ["Nausea","Vomiting","Abdominal pain","All of the above"],
  ans: 3,
  rationale: "Assess bowel sounds."
},
{
  q: "118. Which is used for fungal infection?",
  options: ["Antibiotic","Antifungal","Antiviral","Antihistamine"],
  ans: 1,
  rationale: "Nystatin, fluconazole."
},
{
  q: "119. Which is a sign of neurological problem?",
  options: ["Headache","Weakness","Seizure","All of the above"],
  ans: 3,
  rationale: "Assess GCS."
},
{
  q: "120. Which is true about nursing?",
  options: ["Art and science","Patient centered","Evidence based","All of the above"],
  ans: 3,
  rationale: "BScN definition of nursing."
}
    ],
    p2b: [
     // NCK AUGUST 2026 PREDICTION - BScN PAPER 2 MIXED - 120 QUESTIONS
{
  q: "1. Priority action for patient with V-Fib on monitor?",
  options: ["Give oxygen","Defibrillate immediately","Give aspirin","Administer morphine"],
  ans: 1,
  rationale: "V-Fib = no cardiac output. ACLS: Defibrillate first within 3min. CPR while charging. O2 and drugs after shock. This is life or death prioritization."
},
{
  q: "2. Which vaccine is contraindicated in pregnancy?",
  options: ["TT","Inactivated flu","MMR","Tdap"],
  ans: 2,
  rationale: "Live vaccines like MMR, Varicella, Yellow fever contraindicated due to fetal risk. Inactivated flu and Tdap are actually recommended in pregnancy."
},
{
  q: "3. A patient with COPD on 2L O2 has SpO2 88%. Next action?",
  options: ["Increase to 4L","Assess RR and ABG","Call RT","Give bronchodilator"],
  ans: 1,
  rationale: "COPD patients are CO2 retainers. Target 88-92%. Increasing O2 blindly can cause CO2 narcosis. Assess first. NCK loves this trap."
},
{
  q: "4. The antidote for MgSO4 toxicity is?",
  options: ["Vitamin K","Calcium gluconate","Protamine","NAC"],
  ans: 1,
  rationale: "MgSO4 used in eclampsia. Toxic: loss DTR, RR<12. Calcium gluconate reverses in minutes. Must monitor RR, reflexes, UO >30ml/hr."
},
{
  q: "5. Which is a sign of increased ICP?",
  options: ["Tachycardia","Hypertension + bradycardia","Hypotension","Tachypnea"],
  ans: 1,
  rationale: "Cushing's Triad: HTN + bradycardia + irregular respirations. Late sign of brainstem compression. Neurosurgical emergency."
},
{
  q: "6. A patient with liver cirrhosis has asterixis and confusion. This is?",
  options: ["Stroke","Hepatic encephalopathy","Wernicke","Hypoglycemia"],
  ans: 1,
  rationale: "Liver fails to detox ammonia → crosses BBB → cerebral edema. Treated with lactulose. Asterixis = liver flap. NCK GI emergency."
},
{
  q: "7. Which lab monitors heparin therapy?",
  options: ["PT/INR","aPTT","Platelets","D-dimer"],
  ans: 1,
  rationale: "Heparin affects intrinsic pathway. Therapeutic aPTT = 1.5-2.5x control. Warfarin uses PT/INR. High-alert drug."
},
{
  q: "8. KEPI: Penta1 is given at?",
  options: ["Birth","6 weeks","10 weeks","14 weeks"],
  ans: 1,
  rationale: "Kenya schedule: Birth=BCG,OPV0. 6wks=Penta1,OPV1,PCV1,Rota1. 10wks=Penta2. 14wks=Penta3. 9m=Measles. NCK repeats this."
},
{
  q: "9. First drug in anaphylaxis?",
  options: ["Diphenhydramine","Epinephrine IM","Hydrocortisone","Oxygen"],
  ans: 1,
  rationale: "Epi 0.3-0.5mg IM lateral thigh reverses airway and BP in minutes. Antihistamine is for itching after. This saves lives."
},
{
  q: "10. A patient with ARF has K+ 6.9 and peaked T waves. First?",
  options: ["Kayexalate","Insulin + D50","Calcium gluconate","Furosemide"],
  ans: 2,
  rationale: "K+ >6.5 + ECG changes = cardiac emergency. Calcium stabilizes heart in 1-3min. Then shift K+ with insulin. NCK prioritization."
},
{
  q: "11. Which is a function of NCK?",
  options: ["Employ nurses","License and discipline","Manage hospital","Set salaries"],
  ans: 1,
  rationale: "NCK Cap 257: Register, license, discipline, set standards, CPD. Employment is by county/MOH."
},
{
  q: "12. A 2-year old with barking cough and stridor has?",
  options: ["Asthma","Croup","Bronchiolitis","Pneumonia"],
  ans: 1,
  rationale: "Croup: barking cough + inspiratory stridor. Worse at night. Treated with nebulized epi + dexamethasone. NCK peds."
},
{
  q: "13. Which is contraindicated with MAOIs?",
  options: ["Dairy","Aged cheese","Citrus","Whole grains"],
  ans: 1,
  rationale: "Tyramine in aged cheese + MAOI = hypertensive crisis. Also avoid wine, cured meats. NCK psych pharm."
},
{
  q: "14. A patient with chest tube has 250ml bright red drainage in 1hr. Action?",
  options: ["Clamp tube","Notify surgeon","Milk tube","Reposition"],
  ans: 1,
  rationale: ">100ml/hr for 3hr = hemorrhage. Never clamp - risk tension pneumothorax. Prepare for OR. Post-op emergency."
},
{
  q: "15. Which is a sign of compartment syndrome?",
  options: ["Pain relieved by opioid","Pain unrelieved by opioid","Warm extremity","Bounding pulses"],
  ans: 1,
  rationale: "Pain out of proportion is earliest sign. 5 P's. Fasciotomy needed within 6hr or limb loss. NCK ortho."
},
{
  q: "16. RhoGAM is given within how long after delivery?",
  options: ["24hr","72hr","1 week","1 month"],
  ans: 1,
  rationale: "Rh- mother with Rh+ baby. Given within 72hr to prevent sensitization. Also given at 28 weeks."
},
{
  q: "17. Which is used for status asthmaticus?",
  options: ["Oral antihistamine","IV steroid + nebulized bronchodilator","Antibiotic","Decongestant"],
  ans: 1,
  rationale: "Severe asthma: IV methylprednisolone + continuous albuterol. May need MgSO4. Treats inflammation + bronchospasm."
},
{
  q: "18. The therapeutic level of Digoxin is?",
  options: ["0.2-0.5","0.5-2.0","2.5-3.5","4.0-5.0"],
  ans: 1,
  rationale: "0.5-2.0 ng/mL. Toxic >2.0: N/V, yellow vision, arrhythmias. Check apical pulse 1min before giving. Hold <60."
},
{
  q: "19. A patient with pancreatitis. Priority lab?",
  options: ["Amylase","Lipase","LFTs","Glucose"],
  ans: 1,
  rationale: "Lipase is more specific and stays elevated longer. >3x normal confirms pancreatitis. NPO, IV fluids follow."
},
{
  q: "20. Which is a sign of hypovolemic shock?",
  options: ["Hypertension","Tachycardia + pallor","Bradycardia","Warm skin"],
  ans: 1,
  rationale: "Compensatory: tachycardia, pallor, cool clammy skin. Late = hypotension. Treatment: 30ml/kg crystalloid bolus."
},
{
  q: "21. Late decelerations on FHR indicate?",
  options: ["Cord compression","Uteroplacental insufficiency","Fetal sleep","Maternal position"],
  ans: 1,
  rationale: "Late decels = placenta not perfusing. Action: O2, left lateral, stop oxytocin, notify MD. NCK obstetrics."
},
{
  q: "22. Which is contraindicated in patient with glaucoma?",
  options: ["Metoprolol","Atropine","Lisinopril","Furosemide"],
  ans: 1,
  rationale: "Atropine = anticholinergic → mydriasis → blocks aqueous outflow → acute angle closure. Beta blockers treat glaucoma."
},
{
  q: "23. A patient witnessing drug theft. Action?",
  options: ["Ignore","Report to supervisor","Keep secret","Join"],
  ans: 1,
  rationale: "Duty to report. NCK Code. Protects public and profession. Failure to report = complicit."
},
{
  q: "24. Which is used for gout prevention?",
  options: ["Colchicine","Allopurinol","Indomethacin","Prednisone"],
  ans: 1,
  rationale: "Allopurinol decreases uric acid production. Colchicine/NSAIDs treat acute attack. NCK rheumatology."
},
{
  q: "25. A patient with DKA has pH 7.1. Priority?",
  options: ["Insulin","Fluid resuscitation","Bicarbonate","Potassium"],
  ans: 1,
  rationale: "Dehydration and acidosis kill first. 1L NS in first hour. Insulin after fluids. K+ will drop with insulin."
},
{
  q: "26. Which is a sign of pulmonary embolism?",
  options: ["Sudden dyspnea + pleuritic chest pain","Bradycardia","Hypertension","Bradypnea"],
  ans: 0,
  rationale: "Sudden onset dyspnea, tachycardia, hypoxia. Source is often DVT. Immediate O2 and anticoagulation."
},
{
  q: "27. Which is monitored by INR?",
  options: ["Heparin","Warfarin","Enoxaparin","Aspirin"],
  ans: 1,
  rationale: "Warfarin oral anticoagulant. Therapeutic INR 2-3. Heparin uses aPTT. NCK anticoagulant differentiation."
},
{
  q: "28. A patient with burns 40% TBSA. First 24hr fluid?",
  options: ["D5W","LR per Parkland","Colloid","Dextrose"],
  ans: 1,
  rationale: "Parkland: 4ml x %TBSA x kg. Half in first 8hr. LR prevents acidosis. D5W worsens edema."
},
{
  q: "29. Which is a sign of child abuse?",
  options: ["Bruises in various stages","Frequent colds","Good hygiene","Normal growth"],
  ans: 0,
  rationale: "Inconsistent history, bruises on trunk/ears, burns. Mandatory reporting. NCK legal + child protection."
},
{
  q: "30. Which is used for pulmonary edema?",
  options: ["Digoxin","Furosemide","Nitroglycerin","All of the above"],
  ans: 3,
  rationale: "Triple therapy: Lasix for fluid, NTG for preload, Digoxin for contractility if EF low. Plus O2 and sitting."
},
{
  q: "31. A patient with ARDS. Priority?",
  options: ["High FiO2","Prone positioning","Low tidal volume","All of the above"],
  ans: 3,
  rationale: "ARDSnet: Low tidal volume 6ml/kg, high PEEP, prone improves oxygenation. Goal SpO2 88-95%."
},
{
  q: "32. Which is a sign of sepsis?",
  options: ["Fever + tachycardia","Hypotension","Altered mental","All of the above"],
  ans: 3,
  rationale: "qSOFA: RR>22, altered mental, SBP<100. Lactate >2. Antibiotics within 1hr + 30ml/kg fluids."
},
{
  q: "33. Which drug requires renal dose adjustment?",
  options: ["Penicillin","Gentamicin","Aspirin","Paracetamol"],
  ans: 1,
  rationale: "Gentamicin is nephrotoxic and renally cleared. Need CrCl, peak/trough. Monitor I&O and BUN/Cr."
},
{
  q: "34. A patient with CVA. FAST stands for?",
  options: ["Face, Arm, Speech","Fever, Arm, Swelling","Face, Abdomen, Speech","Fatigue, Arm, Speech"],
  ans: 0,
  rationale: "FAST screening for stroke. Time is brain. Thrombolytics within 3-4.5hr. NCK neuro emergency."
},
{
  q: "35. Which is the antidote for warfarin overdose?",
  options: ["Protamine sulfate","Vitamin K","Calcium gluconate","N-acetylcysteine"],
  ans: 1,
  rationale: "Vitamin K reverses warfarin in 6-24hr. Protamine reverses heparin. For immediate reversal use FFP."
},
{
  q: "36. A patient with eclampsia. Drug of choice?",
  options: ["Oxytocin","MgSO4","Methergine","Iron"],
  ans: 1,
  rationale: "MgSO4 4-6g IV load then 1-2g/hr for seizure prophylaxis. Also antihypertensives if BP >160/110."
},
{
  q: "37. Which is a sign of hypoglycemia?",
  options: ["Fruity breath","Tremors + sweating","Polyuria","Blurred vision"],
  ans: 1,
  rationale: "Adrenergic response. Treat with 15g fast acting carb. Recheck in 15min. NCK DM."
},
{
  q: "38. Which is a live vaccine?",
  options: ["DPT","Hep B","MMR","Pneumococcal"],
  ans: 2,
  rationale: "MMR, OPV, Rota, Varicella. Contraindicated in immunocompromised and pregnancy."
},
{
  q: "39. A patient with CHF. Daily weight best indicates?",
  options: ["Cardiac output","Fluid status","Renal function","Nutrition"],
  ans: 1,
  rationale: "1kg = 1L fluid. Earliest sign of overload. More accurate than edema or crackles."
},
{
  q: "40. Which is used for TB and causes orange urine?",
  options: ["INH","Rifampin","PZA","Ethambutol"],
  ans: 1,
  rationale: "Rifampin stains body fluids orange. Teach patient. INH = peripheral neuropathy, give pyridoxine."
},
{
  q: "41. A patient with ARF and K+ 6.8. First?",
  options: ["Kayexalate","Insulin + D50","Calcium gluconate","Dialysis"],
  ans: 2,
  rationale: "Stabilize heart first with calcium. Then shift K+. Kayexalate and dialysis take longer."
},
{
  q: "42. Which is a sign of anaphylaxis?",
  options: ["Bradycardia","Hypotension + bronchospasm","Hypertension","Bradypnea"],
  ans: 1,
  rationale: "Histamine release → vasodilation + airway edema. Epi first, then antihistamine and steroids."
},
{
  q: "43. A patient with liver failure has confusion. Suspect?",
  options: ["Stroke","Hepatic encephalopathy","Dementia","Hypoglycemia"],
  ans: 1,
  rationale: "Ammonia toxicity. Treat with lactulose to trap ammonia and rifaximin. Restrict protein during acute phase."
},
{
  q: "44. Which is a complication of immobility?",
  options: ["Hypertension","Pressure ulcer","Bradycardia","Weight loss"],
  ans: 1,
  rationale: "Pressure, shear, friction → tissue ischemia. Prevent with turning q2hr, skin care, nutrition."
},
{
  q: "45. A patient with COPD. Target SpO2?",
  options: ["95-100","92-94","88-92","80-85"],
  ans: 2,
  rationale: "CO2 retainer. High O2 suppresses hypoxic drive. Target 88-92% to avoid CO2 narcosis."
},
{
  q: "46. Which is used for anaphylaxis maintenance?",
  options: ["Epinephrine","Steroids + antihistamine","Oxygen","Fluids"],
  ans: 1,
  rationale: "Epi for immediate. Steroids + antihistamine prevent biphasic reaction 4-12hr later. Observe 4-6hr."
},
{
  q: "47. A patient with pancreatitis needs?",
  options: ["High fat diet","NPO + IV fluids","Oral feeding","Heat to abdomen"],
  ans: 1,
  rationale: "Rest pancreas. NPO, IV fluids, pain management. No alcohol. Lipase >3x confirms diagnosis."
},
{
  q: "48. Which is a sign of increased ICP in infant?",
  options: ["Bulging fontanelle","Bradycardia","Hypertension","All of the above"],
  ans: 3,
  rationale: "Infant: bulging fontanelle, high-pitched cry, vomiting. Older: Cushing's triad."
},
{
  q: "49. Which is used for status epilepticus?",
  options: ["Oral diazepam","IV lorazepam","Phenytoin PO","Carbamazepine"],
  ans: 1,
  rationale: "IV lorazepam first line. Then load phenytoin. Protect airway, give O2. NCK emergency."
},
{
  q: "50. A patient with MI. Morphine given for?",
  options: ["Pain + reduce preload","Sleep","Anxiety","BP"],
  ans: 0,
  rationale: "Morphine: analgesia + venodilation reduces cardiac workload. Also O2, nitroglycerin, aspirin."
},
{
  q: "51. Which is a sign of meningitis?",
  options: ["Kernig sign","Babinski","Brudzinski","Both A and C"],
  ans: 3,
  rationale: "Meningeal irritation signs. Also fever, headache, photophobia. Immediate antibiotics."
},
{
  q: "52. A patient with ARF. Oliguria is?",
  options: ["<500ml/24hr","<400ml/24hr","<300ml/24hr","<100ml/24hr"],
  ans: 1,
  rationale: "Oliguria <400ml/24hr. Anuria <100ml. Monitor I&O, daily weights, BUN/Cr."
},
{
  q: "53. Which is used for UTI?",
  options: ["Amoxicillin","Nitrofurantoin","Metronidazole","Acyclovir"],
  ans: 1,
  rationale: "First line for uncomplicated UTI. Avoid in renal failure. Increase fluids."
},
{
  q: "54. A patient with DVT and sudden dyspnea. Suspect?",
  options: ["PE","MI","Pneumonia","Anxiety"],
  ans: 0,
  rationale: "DVT can embolize to lungs. Sudden dyspnea + chest pain + hypoxia. NCK emergency."
},
{
  q: "55. Which is a sign of hyperthyroidism?",
  options: ["Bradycardia","Weight gain","Exophthalmos","Cold intolerance"],
  ans: 2,
  rationale: "Graves: exophthalmos, tachycardia, weight loss, heat intolerance. Treated with PTU, propranolol."
},
{
  q: "56. A patient with spinal cord injury at T4. Priority?",
  options: ["Bowel","Respiratory status","Skin","Pain"],
  ans: 1,
  rationale: "T4 affects intercostals. Airway/Breathing first. Then circulation, then everything else."
},
{
  q: "57. Which is used for hyperkalemia with ECG changes?",
  options: ["Kayexalate","Insulin + D50","Calcium gluconate","Lasix"],
  ans: 2,
  rationale: "Calcium stabilizes myocardium immediately. Then shift K+. Kayexalate and dialysis remove K+."
},
{
  q: "58. A patient with preeclampsia. BP goal?",
  options: ["<120/80","<140/90","<160/110","<180/120"],
  ans: 2,
  rationale: "Severe = >160/110. Treat to <160/110 to prevent stroke. Use labetalol or hydralazine. NCK obstetrics."
},
{
  q: "59. Which is a sign of respiratory distress?",
  options: ["Tachypnea","Retractions","Cyanosis","All of the above"],
  ans: 3,
  rationale: "Assess airway first. Give O2, call for help. In children look for nasal flaring."
},
{
  q: "60. A patient with sepsis. First bundle element?",
  options: ["Antibiotics","Lactate","Blood cultures","Fluids"],
  ans: 2,
  rationale: "Cultures before antibiotics. Then lactate, antibiotics within 1hr, 30ml/kg fluids. Surviving Sepsis."
},
{
  q: "61. Which is used for Parkinson's disease?",
  options: ["Propranolol","Levodopa/Carbidopa","Diazepam","Haloperidol"],
  ans: 1,
  rationale: "Levodopa crosses BBB and converts to dopamine. Carbidopa prevents peripheral breakdown."
},
{
  q: "62. A patient with pneumonia. Priority assessment?",
  options: ["BP","Respiratory rate + SpO2","Temperature","Pain"],
  ans: 1,
  rationale: "ABC. Hypoxia kills first. Assess RR, SpO2, lung sounds, sputum."
},
{
  q: "63. Which is a sign of appendicitis?",
  options: ["Rebound tenderness","Diarrhea","Constipation","Dysuria"],
  ans: 0,
  rationale: "Peritoneal irritation. NPO, IV, prepare for surgery. Can rupture in 24-48hr."
},
{
  q: "64. A patient with thyroid storm. Priority?",
  options: ["Propranolol","PTU","Cooling","All of the above"],
  ans: 3,
  rationale: "Multi-system emergency. Beta blocker + antithyroid + cooling + steroids. NCK endocrine."
},
{
  q: "65. Which is used for pain in MI?",
  options: ["Morphine","Pethidine","Tramadol","Paracetamol"],
  ans: 0,
  rationale: "Morphine: analgesia + venodilation reduces preload. Part of MONA: Morphine, Oxygen, Nitroglycerin, Aspirin."
},
{
  q: "66. A patient with Cushing's syndrome has?",
  options: ["Moon face + buffalo hump","Weight loss","Hypotension","Bradycardia"],
  ans: 0,
  rationale: "Excess cortisol. Also hyperglycemia, thin skin, purple striae. NCK endocrine."
},
{
  q: "67. Which is used for asthma maintenance?",
  options: ["Albuterol","Fluticasone","Ipratropium","Epinephrine"],
  ans: 1,
  rationale: "Inhaled steroid for inflammation. Albuterol is rescue. NCK respiratory."
},
{
  q: "68. A patient with renal failure. Hyperkalemia sign?",
  options: ["U waves","Peaked T waves","Hyporeflexia","Ileus"],
  ans: 1,
  rationale: "K+ >5.5: peaked T, widened QRS. Cardiac arrest risk. NCK emergency."
},
{
  q: "69. Which is used for DVT prophylaxis?",
  options: ["Warfarin","Enoxaparin","Aspirin","Clopidogrel"],
  ans: 1,
  rationale: "LMWH subcut. Doesn't need lab monitoring. Warfarin takes 3-5 days to work."
},
{
  q: "70. A patient with shock. Late sign?",
  options: ["Tachycardia","Hypotension","Pallor","Tachypnea"],
  ans: 1,
  rationale: "Compensation fails. BP drops. Early signs: tachycardia, pallor, anxiety."
},
{
  q: "71. Which is a sign of dehydration in child?",
  options: ["Tachycardia","Sunken fontanelle","Dry mucous membranes","All of the above"],
  ans: 3,
  rationale: "IMCI: assess skin turgor, eyes, mucous membranes, urine output."
},
{
  q: "72. A patient with GI bleed. Coffee ground emesis means?",
  options: ["Fresh bleeding","Old bleeding","Perforation","Obstruction"],
  ans: 1,
  rationale: "Blood digested by gastric acid. Fresh blood = bright red. NCK GI."
},
{
  q: "73. Which is used for constipation?",
  options: ["Loperamide","Lactulose","Omeprazole","Metoclopramide"],
  ans: 1,
  rationale: "Osmotic laxative. Also used in hepatic encephalopathy to trap ammonia."
},
{
  q: "74. A patient with stroke. Time window for tPA?",
  options: ["1 hour","3-4.5 hours","12 hours","24 hours"],
  ans: 1,
  rationale: "Ischemic stroke: tPA within 3-4.5hr. Hemorrhagic = no tPA. Time is brain."
},
{
  q: "75. Which is a sign of infection?",
  options: ["Fever","Tachycardia","Leukocytosis","All of the above"],
  ans: 3,
  rationale: "SIRS criteria. Also tachypnea, altered mental. NCK."
},
{
  q: "76. A patient with cardiac arrest PEA. Treatment?",
  options: ["Defibrillation","Epinephrine + CPR","Atropine","Amiodarone"],
  ans: 1,
  rationale: "PEA = non-shockable. CPR + Epi q3-5min + find H's and T's."
},
{
  q: "77. Which is used for nausea?",
  options: ["Metoclopramide","Ondansetron","Both","Antacid"],
  ans: 2,
  rationale: "Prokinetic vs 5-HT3 antagonist. Used in chemo, pregnancy, post-op."
},
{
  q: "78. A patient with anemia. Sign?",
  options: ["Hypertension","Pallor + fatigue","Tachycardia only","Weight gain"],
  ans: 1,
  rationale: "Decreased Hb → decreased O2 carrying. Also dyspnea, tachycardia."
},
{
  q: "79. Which is true about documentation?",
  options: ["Timely","Accurate","Complete","All of the above"],
  ans: 3,
  rationale: "Legal requirement. If not documented, not done. NCK."
},
{
  q: "80. A patient with wound infection. Sign?",
  options: ["Redness","Swelling","Purulent drainage","All of the above"],
  ans: 3,
  rationale: "Assess daily. Culture if purulent. Antibiotics if systemic signs."
},
{
  q: "81. Which is used for fungal infection?",
  options: ["Antibiotic","Antifungal","Antiviral","Antihistamine"],
  ans: 1,
  rationale: "Nystatin, fluconazole. Assess for immunocompromise."
},
{
  q: "82. A patient with neurological problem. Assess?",
  options: ["Headache","Weakness","Seizure","All of the above"],
  ans: 3,
  rationale: "Assess GCS, pupils, motor. Neuro vitals q15min if acute."
},
{
  q: "83. Which is true about patient rights?",
  options: ["Right to refuse treatment","Right to information","Right to privacy","All of the above"],
  ans: 3,
  rationale: "Kenya Patient's Rights Charter. NCK."
},
{
  q: "84. A patient with respiratory infection. Sign?",
  options: ["Cough","Fever","Sputum","All of the above"],
  ans: 3,
  rationale: "Assess sputum color, RR, SpO2, lung sounds."
},
{
  q: "85. Which is used for diarrhea?",
  options: ["ORS","Zinc","Both","Antibiotic always"],
  ans: 2,
  rationale: "IMCI: ORS + zinc 10 days. Antibiotic only for dysentery/cholera."
},
{
  q: "86. A patient with cardiac problem. Sign?",
  options: ["Chest pain","Dyspnea","Edema","All of the above"],
  ans: 3,
  rationale: "Assess cardiac enzymes, ECG, echo. NCK."
},
{
  q: "87. Which is true about teamwork?",
  options: ["One person does all","Shared goals","No communication","Blame culture"],
  ans: 1,
  rationale: "SBAR communication. NCK. Improves patient safety."
},
{
  q: "88. A patient with urinary retention. Sign?",
  options: ["Frequency","Suprapubic distention","Polyuria","Dysuria"],
  ans: 1,
  rationale: "Bladder palpable. Catheterize if needed. Assess post-void residual."
},
{
  q: "89. Which is used for fever?",
  options: ["Paracetamol","Ibuprofen","Both","Aspirin in children"],
  ans: 2,
  rationale: "Antipyretic. Avoid aspirin in children due to Reye's."
},
{
  q: "90. A patient with anxiety. Sign?",
  options: ["Tachycardia","Sweating","Restlessness","All of the above"],
  ans: 3,
  rationale: "Physiological + psychological. Therapeutic communication helps."
},
{
  q: "91. Which is true about safety?",
  options: ["Patient safety first","Staff safety","Environment safety","All of the above"],
  ans: 3,
  rationale: "NCK priority. Use PPE, identify patient, check meds."
},
{
  q: "92. A patient with pain. Sign?",
  options: ["Facial grimace","Tachycardia","Restlessness","All of the above"],
  ans: 3,
  rationale: "Assess using pain scale 0-10. Treat before it becomes severe."
},
{
  q: "93. Which is used for insomnia?",
  options: ["Sleep hygiene","Zolpidem","Both","Alcohol"],
  ans: 2,
  rationale: "Non-pharmacological first. Meds short term only."
},
{
  q: "94. A patient with GI problem. Sign?",
  options: ["Nausea","Vomiting","Abdominal pain","All of the above"],
  ans: 3,
  rationale: "Assess bowel sounds, abdomen, stool. NCK."
},
{
  q: "95. Which is true about leadership?",
  options: ["Born not made","Can be learned","Not needed","Only for managers"],
  ans: 1,
  rationale: "BScN prepares leaders. Transformational, democratic, autocratic styles."
},
{
  q: "96. A patient with bleeding. Sign?",
  options: ["Tachycardia","Hypotension","Pallor","All of the above"],
  ans: 3,
  rationale: "Assess vitals, Hb, source. Fluid resuscitation if hypovolemic."
},
{
  q: "97. Which is true about ethics?",
  options: ["Based on law","Guides practice","Optional","Not important"],
  ans: 1,
  rationale: "NCK Code of Conduct. 4 principles: autonomy, beneficence, non-maleficence, justice."
},
{
  q: "98. A patient with respiratory problem. Priority?",
  options: ["Airway","Breathing","Circulation","All ABCD"],
  ans: 0,
  rationale: "ABCDE. Airway first. Then breathing, circulation."
},
{
  q: "99. Which is used for vomiting?",
  options: ["Ondansetron","Metoclopramide","Both","Antacid"],
  ans: 2,
  rationale: "5-HT3 antagonist vs prokinetic. Used in pregnancy, chemo, post-op."
},
{
  q: "100. A patient with malnutrition. Sign?",
  options: ["Weight loss","Edema","Hair changes","All of the above"],
  ans: 3,
  rationale: "Assess MUAC, BMI, clinical signs. NCK community health."
},
{
  q: "101. Which is true about quality improvement?",
  options: ["Blame staff","Focus on system","Hide errors","Punish errors"],
  ans: 1,
  rationale: "Root cause analysis. Just culture. NCK."
},
{
  q: "102. A patient with hypertension. Sign?",
  options: ["BP >140/90","Headache","Nosebleeds","All of the above"],
  ans: 3,
  rationale: "Silent killer. Assess target organ damage. NCK."
},
{
  q: "103. Which is used for cough?",
  options: ["Dextromethorphan","Guaifenesin","Both","Antibiotic"],
  ans: 2,
  rationale: "Suppressant vs expectorant. Choose based on type of cough."
},
{
  q: "104. A patient with allergy. Sign?",
  options: ["Rash","Itching","Wheezing","All of the above"],
  ans: 3,
  rationale: "Mild to anaphylaxis. Epi for severe. NCK."
},
{
  q: "105. Which is true about patient education?",
  options: ["One time","Tailored to patient","No need to evaluate","Done by doctor only"],
  ans: 1,
  rationale: "Assess learning needs, evaluate understanding. NCK."
},
{
  q: "106. A patient with cardiac enzymes elevated. Suspect?",
  options: ["MI","Angina","Pericarditis","All of the above"],
  ans: 0,
  rationale: "Troponin specific for myocardial injury. NCK."
},
{
  q: "107. Which is used for antifungal?",
  options: ["Amoxicillin","Fluconazole","Acyclovir","Loratadine"],
  ans: 1,
  rationale: "Fluconazole for candida. NCK pharm."
},
{
  q: "108. A patient with neurological deficit. Assess?",
  options: ["GCS","Pupils","Motor","All of the above"],
  ans: 3,
  rationale: "Neuro assessment q1hr if acute. NCK."
},
{
  q: "109. Which is true about communication?",
  options: ["SBAR","Open-ended","Active listening","All of the above"],
  ans: 3,
  rationale: "Therapeutic communication. NCK."
},
{
  q: "110. A patient with infection. Treatment?",
  options: ["Antibiotic","Isolation","Hand hygiene","All depending"],
  ans: 3,
  rationale: "Based on culture and type. NCK infection control."
},
{
  q: "111. Which is used for hypertension?",
  options: ["Lisinopril","Atenolol","Amlodipine","All of the above"],
  ans: 3,
  rationale: "ACE, Beta blocker, CCB. Choice depends on comorbidities."
},
{
  q: "112. A patient with diabetes. Complication?",
  options: ["Nephropathy","Retinopathy","Neuropathy","All of the above"],
  ans: 3,
  rationale: "Microvascular complications. NCK."
},
{
  q: "113. Which is true about delegation?",
  options: ["Task can be delegated","Accountability cannot","RN retains responsibility","All of the above"],
  ans: 3,
  rationale: "NCK delegation principles."
},
{
  q: "114. A patient with asthma. Trigger?",
  options: ["Cold air","Allergens","Smoke","All of the above"],
  ans: 3,
  rationale: "Avoid triggers. Use controller + rescue inhaler."
},
{
  q: "115. Which is used for depression?",
  options: ["SSRI", "SNRI", "TCA", "All depending"],
  ans: 3,
  rationale: "First line = SSRI like fluoxetine. Choice depends on side effects, comorbidities, and patient response. NCK psych pharm. Monitor for suicide risk first 2 weeks."
},
{
  q: "116. A patient with urinary catheter. Best way to prevent CAUTI?",
  options: ["Daily meatal care", "Early removal", "Antibiotic prophylaxis", "Closed drainage system"],
  ans: 1,
  rationale: "Each day with catheter increases CAUTI risk by 5%. Remove ASAP. Daily care and closed system help but removal is key. NCK infection control."
},
{
  q: "117. Which is a sign of left-sided heart failure?",
  options: ["JVD", "Peripheral edema", "Pulmonary crackles", "Ascites"],
  ans: 2,
  rationale: "Left = pulmonary congestion: crackles, dyspnea, orthopnea. Right = systemic: JVD, edema, ascites. NCK cardiac."
},
{
  q: "118. A patient with Parkinson's. Priority nursing diagnosis?",
  options: ["Risk for falls", "Imbalanced nutrition", "Social isolation", "All of the above"],
  ans: 3,
  rationale: "Tremor, rigidity, bradykinesia → falls. Dysphagia → nutrition risk. Depression → isolation. Holistic care needed. NCK neuro."
},
{
  q: "119. Which is true about nursing?",
  options: ["Art and science", "Patient centered", "Evidence based", "All of the above"],
  ans: 3,
  rationale: "BScN definition. Combines caring + science + research. Goal: promote health, prevent illness, restore health."
},
{
  q: "120. A patient is assigned 20 patients to one nurse. This is?",
  options: ["Good delegation", "Unsafe staffing", "Team nursing", "Primary nursing"],
  ans: 1,
  rationale: "Unsafe and violates NCK standards. Nurse must advocate, report to supervisor, and document. Patient safety is compromised."
}
    ]
  },
  test: {
    t1k: [
      // NCK AUGUST 2026 - KRCHN PAPER 1 - 120 QUESTIONS - NO RATIONALE
{
  q: "1. The nursing theorist associated with '14 basic human needs' is?",
  options: ["Florence Nightingale","Virginia Henderson","Dorothea Orem","Callista Roy"],
  ans: 1
},
{
  q: "2. A patient’s BP is 80/50, HR 120, RR 28. This indicates?",
  options: ["Hypertension","Compensated shock","Decompensated shock","Normal vital signs"],
  ans: 1
},
{
  q: "3. The first step in the nursing process is?",
  options: ["Diagnosis","Assessment","Planning","Evaluation"],
  ans: 1
},
{
  q: "4. Which is an example of a primary prevention?",
  options: ["Cancer screening","Immunization","Physiotherapy after stroke","Dialysis"],
  ans: 1
},
{
  q: "5. A patient is to receive 500ml of NS over 4 hours. Drop factor 20. Drops per minute?",
  options: ["20","25","30","42"],
  ans: 1
},
{
  q: "6. The antidote for heparin is?",
  options: ["Vitamin K","Protamine sulfate","Calcium gluconate","N-acetylcysteine"],
  ans: 1
},
{
  q: "7. Which is a sign of dehydration?",
  options: ["Tachycardia","Hypertension","Bradycardia","Bounding pulse"],
  ans: 0
},
{
  q: "8. The KEPI vaccine given at birth includes?",
  options: ["Measles","BCG and OPV0","Penta1","TT"],
  ans: 1
},
{
  q: "9. Which is a principle of documentation?",
  options: ["Use pencil","Document before care","Timely and accurate","Use correction fluid"],
  ans: 2
},
{
  q: "10. A patient with COPD should have oxygen administered to maintain SpO2 at?",
  options: ["95-100%","92-94%","88-92%","80-85%"],
  ans: 2
},
{
  q: "11. Which is a characteristic of malignant tumor?",
  options: ["Slow growing","Encapsulated","Metastasizes","Well differentiated"],
  ans: 2
},
{
  q: "12. The loading dose of MgSO4 in eclampsia is?",
  options: ["2g IV","4g IV","10g IM","500mg IV"],
  ans: 1
},
{
  q: "13. Which is NOT a function of NCK?",
  options: ["Licensing","Discipline","Employment","Setting standards"],
  ans: 2
},
{
  q: "14. A patient with diabetes has fruity breath. This is due to?",
  options: ["Hypoglycemia","Ketosis","Infection","Dehydration"],
  ans: 1
},
{
  q: "15. The best position for a patient with dyspnea is?",
  options: ["Supine","Prone","Semi-Fowler's","Trendelenburg"],
  ans: 2
},
{
  q: "16. Which is a side effect of ACE inhibitors?",
  options: ["Dry cough","Diarrhea","Tachycardia","Weight loss"],
  ans: 0
},
{
  q: "17. A patient refuses treatment. The nurse should?",
  options: ["Force the treatment","Respect and document","Call police","Ignore"],
  ans: 1
},
{
  q: "18. Which is a sign of increased ICP?",
  options: ["Tachycardia","Hypertension + bradycardia","Hypotension","Tachypnea"],
  ans: 1
},
{
  q: "19. The therapeutic range for Lithium is?",
  options: ["0.2-0.4","0.6-1.2","1.5-2.0","2.5-3.0"],
  ans: 1
},
{
  q: "20. Which is used for pulmonary edema?",
  options: ["Digoxin","Furosemide","Nitroglycerin","All of the above"],
  ans: 3
},
{
  q: "21. A patient with liver cirrhosis has confusion. This is?",
  options: ["Stroke","Hepatic encephalopathy","Dementia","Hypoglycemia"],
  ans: 1
},
{
  q: "22. Which is a live vaccine?",
  options: ["DPT","Hepatitis B","MMR","Pneumococcal"],
  ans: 2
},
{
  q: "23. The purpose of ORS in diarrhea is to?",
  options: ["Stop diarrhea","Replace fluids and electrolytes","Kill bacteria","Reduce fever"],
  ans: 1
},
{
  q: "24. Which is a sign of hypokalemia?",
  options: ["Peaked T waves","U waves","Muscle spasm","Hyperreflexia"],
  ans: 1
},
{
  q: "25. A patient with ARF has K+ 7.0. First intervention?",
  options: ["Kayexalate","Insulin + D50","Calcium gluconate","Dialysis"],
  ans: 2
},
{
  q: "26. Which is contraindicated in pregnancy?",
  options: ["TT","Inactivated flu","MMR","Iron"],
  ans: 2
},
{
  q: "27. The normal range for aPTT during heparin therapy is?",
  options: ["1-1.5x control","1.5-2.5x control","2.5-3.5x control","3-4x control"],
  ans: 1
},
{
  q: "28. Which is a sign of child abuse?",
  options: ["Bruises in various stages","Frequent cough","Good appetite","Normal weight"],
  ans: 0
},
{
  q: "29. A patient with chest tube has 200ml blood in 1 hour. Action?",
  options: ["Clamp tube","Notify doctor","Milk tube","Change dressing"],
  ans: 1
},
{
  q: "30. Which is used for TB and causes orange urine?",
  options: ["INH","Rifampin","PZA","Ethambutol"],
  ans: 1
},
{
  q: "31. A patient with DKA. Priority lab?",
  options: ["CBC","RBS and electrolytes","LFT","RFT"],
  ans: 1
},
{
  q: "32. Which is a sign of anaphylaxis?",
  options: ["Bradycardia","Hypotension + bronchospasm","Hypertension","Bradypnea"],
  ans: 1
},
{
  q: "33. The antidote for acetaminophen overdose is?",
  options: ["Naloxone","Flumazenil","N-acetylcysteine","Protamine"],
  ans: 2
},
{
  q: "34. Which is a characteristic of Type 1 Diabetes?",
  options: ["Insulin resistance","Autoimmune destruction of beta cells","Adult onset","Obesity related"],
  ans: 1
},
{
  q: "35. A patient with burns 30%. First 24hr fluid is?",
  options: ["D5W","LR per Parkland","Colloid","Blood"],
  ans: 1
},
{
  q: "36. Which is a sign of pulmonary embolism?",
  options: ["Sudden dyspnea + chest pain","Bradycardia","Hypertension","Bradypnea"],
  ans: 0
},
{
  q: "37. The best way to prevent CAUTI is?",
  options: ["Daily catheter care","Early removal","Antibiotic prophylaxis","Closed drainage"],
  ans: 1
},
{
  q: "38. A patient with schizophrenia says 'people are after me'. This is?",
  options: ["Hallucination","Delusion","Illusion","Phobia"],
  ans: 1
},
{
  q: "39. Which is a complication of immobility?",
  options: ["Hypertension","Pressure ulcer","Bradycardia","Weight gain"],
  ans: 1
},
{
  q: "40. A patient with preeclampsia has BP 170/110. Drug of choice?",
  options: ["Methyldopa","Labetalol","Captopril","Atenolol"],
  ans: 1
},
{
  q: "41. Which is used for gout prevention?",
  options: ["Colchicine","Allopurinol","Ibuprofen","Prednisone"],
  ans: 1
},
{
  q: "42. A patient with CVA. Time window for thrombolytics?",
  options: ["1 hour","3-4.5 hours","12 hours","24 hours"],
  ans: 1
},
{
  q: "43. Which is a sign of respiratory distress?",
  options: ["Tachypnea","Retractions","Cyanosis","All of the above"],
  ans: 3
},
{
  q: "44. The purpose of nursing audit is to?",
  options: ["Punish nurses","Evaluate quality","Reduce staff","Increase admissions"],
  ans: 1
},
{
  q: "45. A patient with sepsis. First action?",
  options: ["Give fluids","Draw blood cultures","Give antibiotics","Give oxygen"],
  ans: 1
},
{
  q: "46. Which is used for asthma maintenance?",
  options: ["Albuterol","Fluticasone","Ipratropium","Epinephrine"],
  ans: 1
},
{
  q: "47. A patient with MI. Which drug reduces preload?",
  options: ["Morphine","Aspirin","Heparin","Metoprolol"],
  ans: 0
},
{
  q: "48. Which is a sign of hyperthyroidism?",
  options: ["Bradycardia","Weight gain","Exophthalmos","Cold intolerance"],
  ans: 2
},
{
  q: "49. A patient with ARDS. Ventilator setting?",
  options: ["High tidal volume","Low tidal volume","High FiO2 only","No PEEP"],
  ans: 1
},
{
  q: "50. Which is a sign of meningitis?",
  options: ["Kernig sign","Babinski","Brudzinski","Both A and C"],
  ans: 3
},
{
  q: "51. A patient with renal failure. Oliguria means?",
  options: ["<1000ml/24hr","<400ml/24hr","<200ml/24hr","<100ml/24hr"],
  ans: 1
},
{
  q: "52. Which is used for UTI?",
  options: ["Amoxicillin","Nitrofurantoin","Metronidazole","Acyclovir"],
  ans: 1
},
{
  q: "53. A patient with DVT and sudden dyspnea. Suspect?",
  options: ["PE","MI","Pneumonia","Anxiety"],
  ans: 0
},
{
  q: "54. Which is a sign of appendicitis?",
  options: ["Rebound tenderness","Diarrhea","Constipation","Dysuria"],
  ans: 0
},
{
  q: "55. A patient with thyroid storm needs?",
  options: ["Propranolol","PTU","Cooling","All of the above"],
  ans: 3
},
{
  q: "56. Which is used for pain in MI?",
  options: ["Morphine","Pethidine","Tramadol","Paracetamol"],
  ans: 0
},
{
  q: "57. A patient with Cushing's syndrome has?",
  options: ["Moon face + buffalo hump","Weight loss","Hypotension","Bradycardia"],
  ans: 0
},
{
  q: "58. A patient with pneumonia. Priority assessment?",
  options: ["BP","RR + SpO2","Temperature","Pain"],
  ans: 1
},
{
  q: "59. Which is used for DVT prophylaxis?",
  options: ["Warfarin","Enoxaparin","Aspirin","Clopidogrel"],
  ans: 1
},
{
  q: "60. A patient in shock. Late sign?",
  options: ["Tachycardia","Hypotension","Pallor","Tachypnea"],
  ans: 1
},
{
  q: "61. A child with diarrhea 6x/day. Home care?",
  options: ["Stop BF","ORS + continue feeding + zinc","Antibiotic","Antidiarrheal"],
  ans: 1
},
{
  q: "62. Which is a sign of dehydration in infant?",
  options: ["Tachycardia","Sunken fontanelle","Dry mucous membranes","All of the above"],
  ans: 3
},
{
  q: "63. A patient with GI bleed has coffee ground emesis. This indicates?",
  options: ["Fresh bleeding","Old bleeding","Perforation","Obstruction"],
  ans: 1
},
{
  q: "64. Which is used for constipation?",
  options: ["Loperamide","Lactulose","Omeprazole","Metoclopramide"],
  ans: 1
},
{
  q: "65. A patient with stroke. Priority?",
  options: ["Airway","Nutrition","Bowel","Skin"],
  ans: 0
},
{
  q: "66. Which is a sign of infection?",
  options: ["Fever","Tachycardia","Leukocytosis","All of the above"],
  ans: 3
},
{
  q: "67. A patient in PEA arrest needs?",
  options: ["Defibrillation","Epinephrine + CPR","Atropine","Amiodarone"],
  ans: 1
},
{
  q: "68. Which is used for nausea?",
  options: ["Metoclopramide","Ondansetron","Both","Antacid"],
  ans: 2
},
{
  q: "69. A patient with anemia. Sign?",
  options: ["Hypertension","Pallor + fatigue","Tachycardia only","Weight gain"],
  ans: 1
},
{
  q: "70. Which is true about documentation?",
  options: ["Timely","Accurate","Complete","All of the above"],
  ans: 3
},
{
  q: "71. A patient with wound infection. Sign?",
  options: ["Redness","Swelling","Purulent drainage","All of the above"],
  ans: 3
},
{
  q: "72. Which is used for fungal infection?",
  options: ["Antibiotic","Antifungal","Antiviral","Antihistamine"],
  ans: 1
},
{
  q: "73. A patient with neurological deficit. Assess?",
  options: ["Headache","Weakness","Seizure","All of the above"],
  ans: 3
},
{
  q: "74. Which is a patient right?",
  options: ["Right to refuse treatment","Right to information","Right to privacy","All of the above"],
  ans: 3
},
{
  q: "75. A patient with respiratory infection. Sign?",
  options: ["Cough","Fever","Sputum","All of the above"],
  ans: 3
},
{
  q: "76. Which is used for hypertension?",
  options: ["Lisinopril","Atenolol","Amlodipine","All of the above"],
  ans: 3
},
{
  q: "77. A patient with diabetes. Complication?",
  options: ["Nephropathy","Retinopathy","Neuropathy","All of the above"],
  ans: 3
},
{
  q: "78. Which is true about delegation?",
  options: ["Task can be delegated","Accountability cannot","RN retains responsibility","All of the above"],
  ans: 3
},
{
  q: "79. A patient with asthma. Trigger?",
  options: ["Cold air","Allergens","Smoke","All of the above"],
  ans: 3
},
{
  q: "80. Which is used for depression?",
  options: ["SSRI","SNRI","TCA","All depending"],
  ans: 3
},
{
  q: "81. A patient with urinary catheter. Best way to prevent CAUTI?",
  options: ["Daily meatal care","Early removal","Antibiotic prophylaxis","Closed drainage"],
  ans: 1
},
{
  q: "82. Which is a sign of left-sided heart failure?",
  options: ["JVD","Peripheral edema","Pulmonary crackles","Ascites"],
  ans: 2
},
{
  q: "83. A patient with Parkinson's. Priority diagnosis?",
  options: ["Risk for falls","Imbalanced nutrition","Social isolation","All of the above"],
  ans: 3
},
{
  q: "84. Which is true about nursing?",
  options: ["Art and science","Patient centered","Evidence based","All of the above"],
  ans: 3
},
{
  q: "85. A patient is assigned 20 patients to one nurse. This is?",
  options: ["Good delegation","Unsafe staffing","Team nursing","Primary nursing"],
  ans: 1
},
{
  q: "86. A patient with otitis media will?",
  options: ["Tug ear","Cough","Rash","Diarrhea"],
  ans: 0
},
{
  q: "87. Which is a sign of pyloric stenosis?",
  options: ["Projectile vomiting","Diarrhea","Constipation","Fever"],
  ans: 0
},
{
  q: "88. A patient with spina bifida is at risk for?",
  options: ["Diabetes","Latex allergy","HTN","Asthma"],
  ans: 1
},
{
  q: "89. Which is a live vaccine in KEPI?",
  options: ["Penta","PCV","Rota","Measles"],
  ans: 3
},
{
  q: "90. A patient with CF needs?",
  options: ["Low fat","High cal + enzymes","Fluid restriction","Low Na"],
  ans: 1
},
{
  q: "91. A patient ingested kerosene. Action?",
  options: ["Induce vomiting","Don't induce, side-lying","Milk","Charcoal"],
  ans: 1
},
{
  q: "92. A 12-month old should?",
  options: ["Roll","Sit","Walk alone","Have newborn reflexes"],
  ans: 2
},
{
  q: "93. A patient with alcohol withdrawal. Sign?",
  options: ["Tremors","Seizures","Hallucinations","All of the above"],
  ans: 3
},
{
  q: "94. A patient says 'I am worthless'. Best response?",
  options: ["Don't feel that","Everyone does","Tell me more","You have a lot"],
  ans: 2
},
{
  q: "95. A patient stops psychiatric medication. Nurse?",
  options: ["Must take","What concerns you","You'll be restrained","Doctor knows"],
  ans: 1
},
{
  q: "96. A patient denies diagnosis. This is?",
  options: ["Denial","Projection","Rationalization","Sublimation"],
  ans: 0
},
{
  q: "97. A patient with OCD handwashing. Purpose?",
  options: ["Boredom","Reduce anxiety","Attention","Manipulation"],
  ans: 1
},
{
  q: "98. A voluntary patient wants to leave. Action?",
  options: ["Restrain","Process discharge + notify MD","Hide clothes","Sedate"],
  ans: 1
},
{
  q: "99. Which drug needs CBC monitoring?",
  options: ["Lithium","Clozapine","Fluoxetine","Haloperidol"],
  ans: 1
},
{
  q: "100. The highest nursing authority in Kenya is?",
  options: ["MOH","NCK","WHO","Hospital"],
  ans: 1
},
{
  q: "101. A patient with med error. First?",
  options: ["Blame","Assess patient","Incident report","Document"],
  ans: 1
},
{
  q: "102. 'Do no harm' is?",
  options: ["Beneficence","Non-maleficence","Autonomy","Justice"],
  ans: 1
},
{
  q: "103. A patient refuses blood. Nurse?",
  options: ["Force","Respect + document","Call police","Ignore"],
  ans: 1
},
{
  q: "104. NCK function is to?",
  options: ["Employ nurses","License and discipline","Manage hospital","Set salaries"],
  ans: 1
},
{
  q: "105. Poor documentation is?",
  options: ["Good","Legal protection","Negligence","Teamwork"],
  ans: 2
},
{
  q: "106. A patient witnesses drug theft. Action?",
  options: ["Ignore","Report to supervisor","Keep secret","Join"],
  ans: 1
},
{
  q: "107. A nurse cannot?",
  options: ["Give health education","Prescribe all medications","Do home visits","Do MCH"],
  ans: 1
},
{
  q: "108. Sharing patient HIV status violates?",
  options: ["Autonomy","Confidentiality","Beneficence","Justice"],
  ans: 1
},
{
  q: "109. Vicarious liability means?",
  options: ["Nurse liable alone","Employer liable for employee","Patient liable","Doctor liable"],
  ans: 1
},
{
  q: "110. Verbal order should be?",
  options: ["Ignored","Written + read back","Wait","Done later"],
  ans: 1
},
{
  q: "111. Justice principle means?",
  options: ["Autonomy","Beneficence","Fairness","Fidelity"],
  ans: 2
},
{
  q: "112. Nurse role in research is?",
  options: ["None","Data collection + advocacy","Funding","Publishing"],
  ans: 1
},
{
  q: "113. Assigning 20 patients to one nurse is?",
  options: ["Good","Unsafe staffing","Team nursing","Primary"],
  ans: 1
},
{
  q: "114. Nursing audit purpose?",
  options: ["Punish","Evaluate quality","Increase admission","Reduce staff"],
  ans: 1
},
{
  q: "115. Signing for drug not given is?",
  options: ["Teamwork","Falsification","OK","Delegation"],
  ans: 1
},
{
  q: "116. A patient with CHF. Daily weight indicates?",
  options: ["Cardiac output","Fluid status","Renal function","Nutrition"],
  ans: 1
},
{
  q: "117. A patient with COPD. Target SpO2?",
  options: ["95-100","92-94","88-92","80-85"],
  ans: 2
},
{
  q: "118. A patient with DVT and sudden dyspnea. Suspect?",
  options: ["PE","MI","Pneumonia","Anxiety"],
  ans: 0
},
{
  q: "119. A patient with preeclampsia. BP goal?",
  options: ["<120/80","<140/90","<160/110","<180/120"],
  ans: 2
},
{
  q: "120. A patient with respiratory distress. Priority?",
  options: ["Airway","Breathing","Circulation","All ABCD"],
  ans: 0
}
    ],
    t2k: [
      // NCK AUGUST 2026 - KRCHN PAPER 2 - 120 QUESTIONS - CLINICAL
{
  q: "1. A patient in V-Fib. First action?",
  options: ["Give oxygen","Defibrillate","Give aspirin","Start CPR"],
  ans: 1
},
{
  q: "2. A patient with COPD on 2L O2, SpO2 86%. Next?",
  options: ["Increase to 4L","Assess RR and ABG","Call doctor","Give bronchodilator"],
  ans: 1
},
{
  q: "3. The antidote for MgSO4 toxicity is?",
  options: ["Vitamin K","Calcium gluconate","Protamine","NAC"],
  ans: 1
},
{
  q: "4. A patient with ARF, K+ 6.8, peaked T waves. First?",
  options: ["Kayexalate","Insulin + D50","Calcium gluconate","Furosemide"],
  ans: 2
},
{
  q: "5. A patient with chest tube drains 300ml in 1hr. Action?",
  options: ["Clamp tube","Notify surgeon","Milk tube","Reposition"],
  ans: 1
},
{
  q: "6. First drug in anaphylaxis?",
  options: ["Diphenhydramine","Epinephrine IM","Hydrocortisone","Oxygen"],
  ans: 1
},
{
  q: "7. A patient with liver cirrhosis and confusion. Suspect?",
  options: ["Stroke","Hepatic encephalopathy","Dementia","Hypoglycemia"],
  ans: 1
},
{
  q: "8. Which monitors heparin therapy?",
  options: ["PT","aPTT","INR","Platelets"],
  ans: 1
},
{
  q: "9. A patient with pancreatitis. Diagnostic lab?",
  options: ["Amylase","Lipase","LFT","Glucose"],
  ans: 1
},
{
  q: "10. A patient with burns 40%. First 24hr fluid?",
  options: ["D5W","LR per Parkland","Colloid","Dextrose"],
  ans: 1
},
{
  q: "11. A patient with sudden dyspnea + pleuritic pain. Suspect?",
  options: ["PE","MI","Pneumonia","Asthma"],
  ans: 0
},
{
  q: "12. A patient with pulmonary edema needs?",
  options: ["Digoxin","Furosemide","Nitroglycerin","All of the above"],
  ans: 3
},
{
  q: "13. A patient with DKA, pH 7.1. Priority?",
  options: ["Insulin","Fluids","Bicarbonate","Potassium"],
  ans: 1
},
{
  q: "14. A patient with ARDS. Ventilator strategy?",
  options: ["High tidal volume","Low tidal volume","No PEEP","100% FiO2"],
  ans: 1
},
{
  q: "15. A patient with sepsis. First?",
  options: ["Antibiotics","Blood cultures","Fluids","Oxygen"],
  ans: 1
},
{
  q: "16. A patient with CVA. FAST stands for?",
  options: ["Face, Arm, Speech","Fever, Arm, Swelling","Face, Abdomen, Speech","Fatigue, Arm, Speech"],
  ans: 0
},
{
  q: "17. The antidote for warfarin is?",
  options: ["Protamine","Vitamin K","Calcium","NAC"],
  ans: 1
},
{
  q: "18. A patient with eclampsia. Drug of choice?",
  options: ["Oxytocin","MgSO4","Methergine","Hydralazine"],
  ans: 1
},
{
  q: "19. A patient with hypoglycemia. Sign?",
  options: ["Fruity breath","Tremors + sweating","Polyuria","Blurred vision"],
  ans: 1
},
{
  q: "20. A patient with hyperthyroidism. Sign?",
  options: ["Bradycardia","Weight gain","Exophthalmos","Cold intolerance"],
  ans: 2
},
{
  q: "21. A patient with spinal cord injury at C5. Priority?",
  options: ["Bowel","Respiratory","Skin","Pain"],
  ans: 1
},
{
  q: "22. A patient with hyperkalemia + ECG changes. First?",
  options: ["Kayexalate","Insulin","Calcium gluconate","Lasix"],
  ans: 2
},
{
  q: "23. A patient with preeclampsia BP 170/110. Drug?",
  options: ["Methyldopa","Labetalol","Captopril","Atenolol"],
  ans: 1
},
{
  q: "24. A patient with respiratory distress. Sign?",
  options: ["Tachypnea","Retractions","Cyanosis","All of the above"],
  ans: 3
},
{
  q: "25. A patient with MI. MONA includes?",
  options: ["Morphine, Oxygen, Nitroglycerin, Aspirin","Metformin, Oxygen, Nitroglycerin, Aspirin","Morphine, Oxygen, Nitro, Antibiotic","Morphine, Oxygen, Nitroglycerin, Atropine"],
  ans: 0
},
{
  q: "26. A patient with thyroid storm needs?",
  options: ["Propranolol","PTU","Cooling","All of the above"],
  ans: 3
},
{
  q: "27. A patient with pneumonia. Priority assessment?",
  options: ["BP","RR + SpO2","Temp","Pain"],
  ans: 1
},
{
  q: "28. A patient with appendicitis. Sign?",
  options: ["Rebound tenderness","Diarrhea","Constipation","Dysuria"],
  ans: 0
},
{
  q: "29. A patient with DVT prophylaxis gets?",
  options: ["Warfarin","Enoxaparin","Aspirin","Clopidogrel"],
  ans: 1
},
{
  q: "30. A patient in shock. Late sign?",
  options: ["Tachycardia","Hypotension","Pallor","Tachypnea"],
  ans: 1
},
{
  q: "31. A child with diarrhea. Treatment?",
  options: ["Stop BF","ORS + zinc + continue feeding","Antibiotic","Antidiarrheal"],
  ans: 1
},
{
  q: "32. A child with dehydration. Sign?",
  options: ["Tachycardia","Sunken fontanelle","Dry mucosa","All of the above"],
  ans: 3
},
{
  q: "33. A patient with GI bleed, coffee ground vomit means?",
  options: ["Fresh bleed","Old bleed","Perforation","Obstruction"],
  ans: 1
},
{
  q: "34. A patient with constipation gets?",
  options: ["Loperamide","Lactulose","Omeprazole","Metoclopramide"],
  ans: 1
},
{
  q: "35. A patient with stroke. Priority?",
  options: ["Airway","Nutrition","Bowel","Skin"],
  ans: 0
},
{
  q: "36. A patient with infection. Sign?",
  options: ["Fever","Tachycardia","Leukocytosis","All of the above"],
  ans: 3
},
{
  q: "37. A patient in PEA arrest gets?",
  options: ["Defibrillation","Epinephrine + CPR","Atropine","Amiodarone"],
  ans: 1
},
{
  q: "38. A patient with nausea gets?",
  options: ["Metoclopramide","Ondansetron","Both","Antacid"],
  ans: 2
},
{
  q: "39. A patient with anemia. Sign?",
  options: ["Hypertension","Pallor + fatigue","Tachycardia only","Weight gain"],
  ans: 1
},
{
  q: "40. A patient with wound infection. Sign?",
  options: ["Redness","Swelling","Pus","All of the above"],
  ans: 3
},
{
  q: "41. A patient with fungal infection gets?",
  options: ["Antibiotic","Antifungal","Antiviral","Antihistamine"],
  ans: 1
},
{
  q: "42. A patient with neuro problem. Assess?",
  options: ["GCS","Pupils","Motor","All of the above"],
  ans: 3
},
{
  q: "43. A patient with hypertension gets?",
  options: ["Lisinopril","Atenolol","Amlodipine","All of the above"],
  ans: 3
},
{
  q: "44. A patient with diabetes. Complication?",
  options: ["Nephropathy","Retinopathy","Neuropathy","All of the above"],
  ans: 3
},
{
  q: "45. A patient with asthma. Trigger?",
  options: ["Cold air","Allergens","Smoke","All of the above"],
  ans: 3
},
{
  q: "46. A patient with depression gets?",
  options: ["SSRI","SNRI","TCA","All depending"],
  ans: 3
},
{
  q: "47. A patient with catheter. Prevent CAUTI by?",
  options: ["Daily care","Early removal","Antibiotics","Closed system"],
  ans: 1
},
{
  q: "48. A patient with left HF. Sign?",
  options: ["JVD","Edema","Crackles","Ascites"],
  ans: 2
},
{
  q: "49. A patient with Parkinson's. Risk?",
  options: ["Falls","Nutrition","Isolation","All of the above"],
  ans: 3
},
{
  q: "50. A patient assigned 20 patients. This is?",
  options: ["Good","Unsafe","Team nursing","Primary"],
  ans: 1
},
{
  q: "51. A patient with otitis media?",
  options: ["Ear tug","Cough","Rash","Diarrhea"],
  ans: 0
},
{
  q: "52. A patient with projectile vomiting, 2 months. Suspect?",
  options: ["GERD","Pyloric stenosis","Gastro","Intussusception"],
  ans: 1
},
{
  q: "53. A patient with spina bifida. Risk?",
  options: ["Diabetes","Latex allergy","HTN","Asthma"],
  ans: 1
},
{
  q: "54. A patient with CF needs?",
  options: ["Low fat","High cal + enzymes","Fluid restrict","Low Na"],
  ans: 1
},
{
  q: "55. A patient ingested kerosene. Action?",
  options: ["Induce vomiting","Don't induce, side-lying","Milk","Charcoal"],
  ans: 1
},
{
  q: "56. A 12 month old should?",
  options: ["Roll","Sit","Walk","Reflexes"],
  ans: 2
},
{
  q: "57. A patient with alcohol withdrawal. Sign?",
  options: ["Tremors","Seizures","Hallucinations","All of the above"],
  ans: 3
},
{
  q: "58. A patient says 'I am worthless'. Response?",
  options: ["Don't feel that","Everyone does","Tell me more","You have a lot"],
  ans: 2
},
{
  q: "59. A patient stops psych meds. Nurse?",
  options: ["Must take","What concerns you","You'll be restrained","Doctor knows"],
  ans: 1
},
{
  q: "60. A patient denies illness. This is?",
  options: ["Denial","Projection","Rationalization","Sublimation"],
  ans: 0
},
{
  q: "61. A patient with OCD washes hands to?",
  options: ["Relieve boredom","Reduce anxiety","Get attention","Manipulate"],
  ans: 1
},
{
  q: "62. A voluntary patient wants to leave. Action?",
  options: ["Restrain","Process discharge","Hide clothes","Sedate"],
  ans: 1
},
{
  q: "63. A patient on clozapine needs?",
  options: ["LFT","RFT","CBC","ECG"],
  ans: 2
},
{
  q: "64. Highest nursing authority in Kenya?",
  options: ["MOH","NCK","WHO","Hospital"],
  ans: 1
},
{
  q: "65. A patient with med error. First?",
  options: ["Blame","Assess patient","Incident report","Document"],
  ans: 1
},
{
  q: "66. 'Do no harm' is?",
  options: ["Beneficence","Non-maleficence","Autonomy","Justice"],
  ans: 1
},
{
  q: "67. A patient refuses blood. Nurse?",
  options: ["Force","Respect + document","Call police","Ignore"],
  ans: 1
},
{
  q: "68. NCK does?",
  options: ["Employ","License + discipline","Manage hospital","Pay salary"],
  ans: 1
},
{
  q: "69. Poor documentation is?",
  options: ["Good","Protection","Negligence","Teamwork"],
  ans: 2
},
{
  q: "70. A patient witnesses theft. Action?",
  options: ["Ignore","Report","Keep secret","Join"],
  ans: 1
},
{
  q: "71. A nurse cannot?",
  options: ["Educate","Prescribe all drugs","Home visit","MCH"],
  ans: 1
},
{
  q: "72. Sharing HIV status violates?",
  options: ["Autonomy","Confidentiality","Beneficence","Justice"],
  ans: 1
},
{
  q: "73. Employer liable for employee acts is?",
  options: ["Vicarious liability","Personal liability","Patient liability","Doctor liability"],
  ans: 0
},
{
  q: "74. Verbal order must be?",
  options: ["Ignored","Written + read back","Delayed","Done later"],
  ans: 1
},
{
  q: "75. Fairness is?",
  options: ["Autonomy","Beneficence","Justice","Fidelity"],
  ans: 2
},
{
  q: "76. Nurse in research?",
  options: ["None","Data + advocacy","Funding","Publishing"],
  ans: 1
},
{
  q: "77. Assigning too many patients is?",
  options: ["Good","Unsafe","Team","Primary"],
  ans: 1
},
{
  q: "78. Nursing audit is for?",
  options: ["Punish","Quality","Admission","Reduce staff"],
  ans: 1
},
{
  q: "79. Signing drug not given is?",
  options: ["Teamwork","Falsification","OK","Delegation"],
  ans: 1
},
{
  q: "80. A patient with CHF. Daily weight shows?",
  options: ["Cardiac output","Fluid status","Renal","Nutrition"],
  ans: 1
},
{
  q: "81. A patient with COPD. Target SpO2?",
  options: ["95-100","92-94","88-92","80-85"],
  ans: 2
},
{
  q: "82. A patient with DVT + dyspnea. Suspect?",
  options: ["PE","MI","Pneumonia","Anxiety"],
  ans: 0
},
{
  q: "83. A patient with preeclampsia. BP goal?",
  options: ["<120/80","<140/90","<160/110","<180/120"],
  ans: 2
},
{
  q: "84. A patient with respiratory distress. Priority?",
  options: ["Airway","Breathing","Circulation","Disability"],
  ans: 0
},
{
  q: "85. A patient with PROM at 32 weeks. First?",
  options: ["VE","Nitrazine + FHR","Tocolysis","Deliver"],
  ans: 1
},
{
  q: "86. A patient in labor, late decelerations. Action?",
  options: ["Oxytocin","O2 + left side","Ambulate","Push"],
  ans: 1
},
{
  q: "87. A patient with painless bleeding at 36 weeks. Suspect?",
  options: ["Abruption","Placenta previa","Vasa previa","Rupture"],
  ans: 1
},
{
  q: "88. A patient 1hr postpartum, boggy uterus. First?",
  options: ["Oxytocin","Fundal massage","Methergine","Fluids"],
  ans: 1
},
{
  q: "89. Newborn gets Vit K to prevent?",
  options: ["Infection","HDN","Jaundice","Rickets"],
  ans: 1
},
{
  q: "90. A patient with meconium liquor. Notify?",
  options: ["Social worker","Pediatric team","Physio","Dietician"],
  ans: 1
},
{
  q: "91. A patient with UTI gets?",
  options: ["Amoxicillin","Nitrofurantoin","Metronidazole","Acyclovir"],
  ans: 1
},
{
  q: "92. A patient with gout prevention gets?",
  options: ["Colchicine","Allopurinol","Ibuprofen","Prednisone"],
  ans: 1
},
{
  q: "93. A patient with TB gets rifampin. Side effect?",
  options: ["Yellow urine","Orange urine","Red urine","Blue urine"],
  ans: 1
},
{
  q: "94. A patient with Digoxin. Hold if pulse?",
  options: ["<50","<60","<70","<80"],
  ans: 1
},
{
  q: "95. A patient with gentamicin needs?",
  options: ["Peak + trough","INR","aPTT","LFT"],
  ans: 0
},
{
  q: "96. A patient with Vancomycin infusion time?",
  options: ["15min","30min","60-90min","3hr"],
  ans: 2
},
{
  q: "97. A patient with Phenytoin. Side effect?",
  options: ["Gingival hyperplasia","Hair loss","Weight loss","Hypotension"],
  ans: 0
},
{
  q: "98. A patient with Parkinson's gets?",
  options: ["Levodopa","Propranolol","Diazepam","Haloperidol"],
  ans: 0
},
{
  q: "99. A patient with opioid OD gets?",
  options: ["Flumazenil","Naloxone","Protamine","NAC"],
  ans: 1
},
{
  q: "100. A patient with steroids. Do not?",
  options: ["Take with food","Stop abruptly","Take in morning","Monitor glucose"],
  ans: 1
},
{
  q: "101. A patient with wound. Assess?",
  options: ["Redness","Swelling","Drainage","All of the above"],
  ans: 3
},
{
  q: "102. A patient with fever gets?",
  options: ["Paracetamol","Ibuprofen","Both","Aspirin in child"],
  ans: 2
},
{
  q: "103. A patient with pain. Assess?",
  options: ["0-10 scale","FLACC","Wong-Baker","All depending"],
  ans: 3
},
{
  q: "104. A patient with infection. Isolate if?",
  options: ["TB","Chicken pox","MRSA","All of the above"],
  ans: 3
},
{
  q: "105. A patient with surgery. NPO for?",
  options: ["2hr","4hr","6-8hr","12hr"],
  ans: 2
},
{
  q: "106. A patient with cast. Assess?",
  options: ["Pain","Circulation","Movement","All of the above"],
  ans: 3
},
{
  q: "107. A patient with NG tube. Check placement by?",
  options: ["Aspirate pH","X-ray","Air insufflation","All of the above"],
  ans: 3
},
{
  q: "108. A patient with traction. Assess?",
  options: ["Alignment","Circulation","Skin","All of the above"],
  ans: 3
},
{
  q: "109. A patient with colostomy. Care?",
  options: ["Empty 1/3 full","Skin care","Odor control","All of the above"],
  ans: 3
},
{
  q: "110. A patient with tracheostomy. Suction?",
  options: ["5sec","10sec","15sec","20sec"],
  ans: 1
},
{
  q: "111. A patient with oxygen. Check?",
  options: ["Flow rate","Humidification","Nasal prongs","All of the above"],
  ans: 3
},
{
  q: "112. A patient with IV. Check?",
  options: ["Site","Flow rate","Patency","All of the above"],
  ans: 3
},
{
  q: "113. A patient with BP cuff. Size?",
  options: ["1/3 arm","2/3 arm","Full arm","Any size"],
  ans: 1
},
{
  q: "114. A patient with temperature. Route for infant?",
  options: ["Oral","Axillary","Rectal","Tympanic"],
  ans: 1
},
{
  q: "115. A patient with pulse. Count for?",
  options: ["15sec","30sec","60sec","2min"],
  ans: 2
},
{
  q: "116. A patient with respirations. Count for?",
  options: ["15sec","30sec","60sec","2min"],
  ans: 2
},
{
  q: "117. A patient with handwashing. Time?",
  options: ["10sec","15sec","20sec","30sec"],
  ans: 2
},
{
  q: "118. A patient with sharps. Disposal?",
  options: ["Bin","Safety box","Trash","Sink"],
  ans: 1
},
{
  q: "119. A patient with PPE. Order?",
  options: ["Gown, mask, goggles, gloves","Mask, gown, gloves, goggles","Goggles, mask, gown, gloves","Gloves, gown, mask, goggles"],
  ans: 0
},
{
  q: "120. A patient with CPR. Ratio for adult?",
  options: ["15:2","30:2","5:1","100:1"],
  ans: 1
}
    ],
    t1b: [
      // NCK AUGUST 2026 - BScN PAPER 1 - 120 QUESTIONS
{
  q: "1. The nursing theory that focuses on adaptation to stressors is by?",
  options: ["Orem","Roy","Henderson","Nightingale"],
  ans: 1
},
{
  q: "2. A p-value of <0.05 in research means?",
  options: ["95% confidence","5% chance due to chance","Clinically significant","No relationship"],
  ans: 1
},
{
  q: "3. The first level of health care in Kenya is?",
  options: ["Level 4","Level 2","Level 5","Level 6"],
  ans: 1
},
{
  q: "4. Which is a principle of PHC?",
  options: ["Hospital centered","Community participation","Specialist driven","Curative only"],
  ans: 1
},
{
  q: "5. A patient with BP 180/110. This is classified as?",
  options: ["Normal","Stage 1","Stage 2","Hypertensive crisis"],
  ans: 3
},
{
  q: "6. The main function of NCK is to?",
  options: ["Employ nurses","Regulate nursing practice","Manage hospitals","Set salaries"],
  ans: 1
},
{
  q: "7. Which is a social determinant of health?",
  options: ["Blood group","Education level","Age","Gender"],
  ans: 1
},
{
  q: "8. In research, reliability refers to?",
  options: ["Truthfulness","Consistency","Generalizability","Validity"],
  ans: 1
},
{
  q: "9. A patient with BMI 32 is?",
  options: ["Underweight","Normal","Overweight","Obese"],
  ans: 3
},
{
  q: "10. Which leadership style is best for crisis?",
  options: ["Democratic","Laissez-faire","Autocratic","Transformational"],
  ans: 2
},
{
  q: "11. The Kenya Essential Package for Health has how many components?",
  options: ["4","6","8","10"],
  ans: 1
},
{
  q: "12. Which is an example of secondary prevention?",
  options: ["Immunization","Cancer screening","Rehabilitation","Health education"],
  ans: 1
},
{
  q: "13. The ethical principle of respecting patient choices is?",
  options: ["Beneficence","Autonomy","Justice","Fidelity"],
  ans: 1
},
{
  q: "14. A community health worker in Kenya is called?",
  options: ["Nurse","CHV","Doctor","Clinician"],
  ans: 1
},
{
  q: "15. Which is a characteristic of evidence-based practice?",
  options: ["Based on tradition","Uses research + expertise + patient values","Doctor decides only","Hospital policy only"],
  ans: 1
},
{
  q: "16. The Alma-Ata declaration was in?",
  options: ["1978","1988","1998","2008"],
  ans: 0
},
{
  q: "17. Which is a sign of malnutrition in under 5?",
  options: ["MUAC <11.5cm","Weight gain","Tall stature","Normal hair"],
  ans: 0
},
{
  q: "18. The purpose of CPD for NCK is?",
  options: ["Promotion","License renewal","Salary increase","Transfer"],
  ans: 1
},
{
  q: "19. Which is a risk factor for NCDs?",
  options: ["Exercise","Healthy diet","Smoking","Clean water"],
  ans: 2
},
{
  q: "20. In management, planning, organizing, directing, controlling are?",
  options: ["Nursing process","Management functions","Research steps","Teaching methods"],
  ans: 1
},
{
  q: "21. A patient with TB. DOTS stands for?",
  options: ["Directly Observed Treatment Short course","Drug Outbreak Treatment Strategy","Direct Oral TB Solution","Daily Observed TB Supervision"],
  ans: 0
},
{
  q: "22. Which is a qualitative research method?",
  options: ["Survey","RCT","Phenomenology","Correlational"],
  ans: 2
},
{
  q: "23. The IMR refers to?",
  options: ["Infant Mortality Rate","Infectious Morbidity Rate","Immunization Monitoring Rate","Intensive Medical Rate"],
  ans: 0
},
{
  q: "24. Which is a function of dispensary?",
  options: ["Major surgery","Outpatient services","Train specialists","Research"],
  ans: 1
},
{
  q: "25. A patient with stress. Best coping mechanism?",
  options: ["Denial","Exercise","Alcohol","Isolation"],
  ans: 1
},
{
  q: "26. The highest level of evidence is?",
  options: ["Expert opinion","Case study","Systematic review of RCTs","Cohort study"],
  ans: 2
},
{
  q: "27. Which is a barrier to health access?",
  options: ["Too many hospitals","Distance and cost","Overstaffing","Free services"],
  ans: 1
},
{
  q: "28. The nursing process is?",
  options: ["Linear","Cyclical","Done once","Only for hospital"],
  ans: 1
},
{
  q: "29. Which is a sign of depression?",
  options: ["Euphoria","Anhedonia","Hyperactivity","Weight gain"],
  ans: 1
},
{
  q: "30. The purpose of health promotion is to?",
  options: ["Treat disease","Enable people to control health","Build hospitals","Give medicine"],
  ans: 1
},
{
  q: "31. A patient with schizophrenia, hearing voices. This is?",
  options: ["Delusion","Hallucination","Illusion","Phobia"],
  ans: 1
},
{
  q: "32. Which is a principle of delegation?",
  options: ["Delegate assessment","RN retains accountability","Delegate to anyone","Delegate diagnosis"],
  ans: 1
},
{
  q: "33. The epidemiological triad includes?",
  options: ["Doctor, nurse, patient","Agent, host, environment","Prevention, treatment, rehab","Hospital, clinic, home"],
  ans: 1
},
{
  q: "34. Which is a sign of anxiety?",
  options: ["Tachycardia","Sweating","Restlessness","All of the above"],
  ans: 3
},
{
  q: "35. The Kenya health policy emphasizes?",
  options: ["Curative","Preventive and promotive","Specialist care","Private care"],
  ans: 1
},
{
  q: "36. Which is a type of sampling where everyone has equal chance?",
  options: ["Purposive","Convenience","Simple random","Snowball"],
  ans: 2
},
{
  q: "37. A patient with low self-esteem. Intervention?",
  options: ["Criticize","Positive reinforcement","Ignore","Compare to others"],
  ans: 1
},
{
  q: "38. The role of BScN in research is to?",
  options: ["No role","Lead and implement","Only collect data","Only read"],
  ans: 1
},
{
  q: "39. Which is a communicable disease?",
  options: ["Diabetes","Hypertension","Tuberculosis","Arthritis"],
  ans: 2
},
{
  q: "40. The purpose of performance appraisal is to?",
  options: ["Punish","Improve performance","Reduce salary","Increase work"],
  ans: 1
},
{
  q: "41. A patient with PTSD. Intervention?",
  options: ["Restraint","Grounding techniques","Ignore","Sedation"],
  ans: 1
},
{
  q: "42. Which is a sign of burnout?",
  options: ["High motivation","Emotional exhaustion","Job satisfaction","Energy"],
  ans: 1
},
{
  q: "43. The community health strategy in Kenya focuses on?",
  options: ["Hospital care","Household and community","Specialist care","Private clinics"],
  ans: 1
},
{
  q: "44. Which is a characteristic of transformational leader?",
  options: ["Micromanage","Inspire vision","Avoid change","Punish errors"],
  ans: 1
},
{
  q: "45. A patient with substance abuse. Priority?",
  options: ["Judgment","Safety","Confrontation","Punishment"],
  ans: 1
},
{
  q: "46. Which is a principle of documentation?",
  options: ["Use pencil","Be subjective","Timely and accurate","Use correction fluid"],
  ans: 2
},
{
  q: "47. The goal of MDGs/SDGs related to health is?",
  options: ["Reduce poverty","Good health and well-being","Quality education","Gender equality"],
  ans: 1
},
{
  q: "48. Which is a sign of ADHD?",
  options: ["Inattention","Hyperactivity","Impulsivity","All of the above"],
  ans: 3
},
{
  q: "49. A patient with chronic illness needs?",
  options: ["Cure only","Holistic care","Isolation","Punishment"],
  ans: 1
},
{
  q: "50. Which is a method of health education?",
  options: ["Lecture","Demonstration","Group discussion","All of the above"],
  ans: 3
},
{
  q: "51. The term 'gatekeeper' in community research refers to?",
  options: ["Researcher","Community leader","Statistician","Ethics committee"],
  ans: 1
},
{
  q: "52. Which is a sign of eating disorder?",
  options: ["Normal weight","Binge eating","Good appetite","Social eating"],
  ans: 1
},
{
  q: "53. The purpose of strategic planning is?",
  options: ["Daily tasks","Long-term goals","Punish staff","Increase admissions"],
  ans: 1
},
{
  q: "54. Which is a sign of bipolar mania?",
  options: ["Hypersomnia","Decreased activity","Grandiosity","Social withdrawal"],
  ans: 2
},
{
  q: "55. A patient with cultural beliefs refusing treatment. Nurse?",
  options: ["Force","Respect and educate","Ignore","Report to police"],
  ans: 1
},
{
  q: "56. Which is a function of county health department?",
  options: ["Policy making","Service delivery","Training only","Research only"],
  ans: 1
},
{
  q: "57. The term 'health equity' means?",
  options: ["Same treatment for all","Fair distribution of resources","Free treatment","Private care"],
  ans: 1
},
{
  q: "58. Which is a sign of OCD?",
  options: ["Repetitive behaviors","Euphoria","Hyperactivity","Weight loss"],
  ans: 0
},
{
  q: "59. The purpose of supervision is to?",
  options: ["Punish","Support and improve performance","Reduce staff","Increase work"],
  ans: 1
},
{
  q: "60. Which is a determinant of health?",
  options: ["Genetics","Environment","Lifestyle","All of the above"],
  ans: 3
},
{
  q: "61. A patient with grief. Stage of denial is?",
  options: ["Acceptance","Refusal to accept reality","Anger","Bargaining"],
  ans: 1
},
{
  q: "62. Which is a principle of EBP?",
  options: ["Ignore research","Use best evidence","Follow tradition","Doctor's opinion only"],
  ans: 1
},
{
  q: "63. The role of nurse manager includes?",
  options: ["Direct care only","Staffing and budgeting","No leadership","Patient only"],
  ans: 1
},
{
  q: "64. Which is a sign of substance withdrawal?",
  options: ["Euphoria","Tremors","Weight gain","Hyperactivity"],
  ans: 1
},
{
  q: "65. The purpose of community diagnosis is to?",
  options: ["Treat individuals","Identify community health problems","Build hospital","Give drugs"],
  ans: 1
},
{
  q: "66. Which is a sign of autism?",
  options: ["Eye contact","Social interaction","Repetitive behavior","All of the above"],
  ans: 2
},
{
  q: "67. A patient with terminal illness. Priority?",
  options: ["Cure","Palliative care","Discharge","Ignore"],
  ans: 1
},
{
  q: "68. Which is a principle of quality improvement?",
  options: ["Blame staff","Focus on system","Hide errors","Punish errors"],
  ans: 1
},
{
  q: "69. The term 'vulnerable group' includes?",
  options: ["Adults","Children under 5","Athletes","Doctors"],
  ans: 1
},
{
  q: "70. Which is a sign of personality disorder?",
  options: ["Stable relationships","Impulsivity","Good coping","Reality testing"],
  ans: 1
},
{
  q: "71. The purpose of health surveillance is to?",
  options: ["Treat patients","Detect disease trends","Build hospitals","Give drugs"],
  ans: 1
},
{
  q: "72. Which is a sign of stress?",
  options: ["Relaxation","Headache","Calmness","Sleeping well"],
  ans: 1
},
{
  q: "73. A patient with disability needs?",
  options: ["Isolation","Rehabilitation","Punishment","Ignore"],
  ans: 1
},
{
  q: "74. Which is a principle of leadership?",
  options: ["Autocracy always","Communication","No feedback","Blame staff"],
  ans: 1
},
{
  q: "75. The role of CHV includes?",
  options: ["Prescribing","Health education","Surgery","Diagnosis"],
  ans: 1
},
{
  q: "76. Which is a sign of geriatric syndrome?",
  options: ["Falls","Incontinence","Delirium","All of the above"],
  ans: 3
},
{
  q: "77. The purpose of referral system is to?",
  options: ["Keep patients","Ensure continuity of care","Reduce staff","Increase cost"],
  ans: 1
},
{
  q: "78. Which is a sign of domestic violence?",
  options: ["Bruises","Fear","Isolation","All of the above"],
  ans: 3
},
{
  q: "79. A patient with chronic pain. Intervention?",
  options: ["Ignore","Pain assessment + management","Punish","Sedate"],
  ans: 1
},
{
  q: "80. Which is a principle of ethics?",
  options: ["Beneficence","Do good","Non-maleficence","All of the above"],
  ans: 3
},
{
  q: "81. The term 'epidemic' means?",
  options: ["Disease in one person","Disease in many people in area","Disease worldwide","No disease"],
  ans: 1
},
{
  q: "82. Which is a sign of intellectual disability?",
  options: ["High IQ","Delayed milestones","Good memory","Normal speech"],
  ans: 1
},
{
  q: "83. The purpose of advocacy is to?",
  options: ["Punish","Speak for patient rights","Ignore","Blame"],
  ans: 1
},
{
  q: "84. Which is a sign of workplace violence?",
  options: ["Threats","Assault","Bullying","All of the above"],
  ans: 3
},
{
  q: "85. A patient with health literacy needs?",
  options: ["Complex terms","Simple language","No information","Medical jargon"],
  ans: 1
},
{
  q: "86. Which is a principle of public health?",
  options: ["Individual only","Population focus","Curative only","Private only"],
  ans: 1
},
{
  q: "87. The role of nurse educator is to?",
  options: ["Treat patients","Teach students","Manage hospital","Do surgery"],
  ans: 1
},
{
  q: "88. Which is a sign of workplace stress?",
  options: ["Absenteeism","High productivity","Job satisfaction","Teamwork"],
  ans: 0
},
{
  q: "89. The purpose of health policy is to?",
  options: ["Guide health services","Punish staff","Increase cost","Reduce services"],
  ans: 0
},
{
  q: "90. Which is a sign of mental illness?",
  options: ["Hallucinations","Delusions","Mood changes","All of the above"],
  ans: 3
},
{
  q: "91. A patient with palliative care needs?",
  options: ["Cure","Pain relief + comfort","Discharge","Ignore"],
  ans: 1
},
{
  q: "92. Which is a principle of community participation?",
  options: ["Top-down","Involvement in decision making","No feedback","Doctor decides"],
  ans: 1
},
{
  q: "93. The role of nurse researcher is to?",
  options: ["Treat patients","Conduct research","Manage hospital","Do surgery"],
  ans: 1
},
{
  q: "94. Which is a sign of health promotion?",
  options: ["Disease","Wellness","Illness","Disability"],
  ans: 1
},
{
  q: "95. A patient with health insurance. Benefit?",
  options: ["Access to care","High cost","No care","Delay"],
  ans: 0
},
{
  q: "96. Which is a principle of interprofessional collaboration?",
  options: ["Work alone","Teamwork","Competition","Isolation"],
  ans: 1
},
{
  q: "97. The purpose of health education is to?",
  options: ["Confuse","Inform and empower","Punish","Ignore"],
  ans: 1
},
{
  q: "98. Which is a sign of healthy lifestyle?",
  options: ["Smoking","Exercise","Poor diet","No sleep"],
  ans: 1
},
{
  q: "99. A patient with health rights. Right to?",
  options: ["Information","Privacy","Refuse treatment","All of the above"],
  ans: 3
},
{
  q: "100. Which is a principle of nursing management?",
  options: ["Centralization","Decentralization","No planning","No evaluation"],
  ans: 1
},
{
  q: "101. The term 'morbidity' means?",
  options: ["Death","Illness","Health","Recovery"],
  ans: 1
},
{
  q: "102. Which is a sign of health system?",
  options: ["Fragmented","Integrated","No services","Poor quality"],
  ans: 1
},
{
  q: "103. A patient with health needs. Assessment includes?",
  options: ["Physical","Psychological","Social","All of the above"],
  ans: 3
},
{
  q: "104. Which is a principle of patient safety?",
  options: ["Blame","Report errors","Hide mistakes","Punish"],
  ans: 1
},
{
  q: "105. The role of nurse advocate is to?",
  options: ["Ignore","Protect patient rights","Punish","Blame"],
  ans: 1
},
{
  q: "106. Which is a sign of health inequality?",
  options: ["Equal access","Disparity in care","Same outcome","Fairness"],
  ans: 1
},
{
  q: "107. A patient with health program. Evaluation measures?",
  options: ["Outcome","Process","Impact","All of the above"],
  ans: 3
},
{
  q: "108. Which is a principle of health financing?",
  options: ["Equity","Efficiency","Sustainability","All of the above"],
  ans: 3
},
{
  q: "109. A patient with health data. Use for?",
  options: ["Decision making","Planning","Evaluation","All of the above"],
  ans: 3
},
{
  q: "110. Which is a sign of good governance?",
  options: ["Transparency","Accountability","Participation","All of the above"],
  ans: 3
},
{
  q: "111. A patient with health workforce. Need?",
  options: ["Adequate","Skilled","Motivated","All of the above"],
  ans: 3
},
{
  q: "112. Which is a principle of health service delivery?",
  options: ["Accessibility","Quality","Continuity","All of the above"],
  ans: 3
},
{
  q: "113. A patient with health information system. Use for?",
  options: ["Monitoring","Reporting","Decision","All of the above"],
  ans: 3
},
{
  q: "114. Which is a sign of health product?",
  options: ["Medicine","Vaccine","Equipment","All of the above"],
  ans: 3
},
{
  q: "115. A patient with health technology. Benefit?",
  options: ["Improve care","Reduce error","Increase access","All of the above"],
  ans: 3
},
{
  q: "116. Which is a principle of health leadership?",
  options: ["Vision","Integrity","Communication","All of the above"],
  ans: 3
},
{
  q: "117. A patient with health partnership. Benefit?",
  options: ["Resource sharing","Improved outcome","Sustainability","All of the above"],
  ans: 3
},
{
  q: "118. Which is a sign of health resilience?",
  options: ["Adapt","Recover","Withstand shock","All of the above"],
  ans: 3
},
{
  q: "119. A patient with health innovation. Goal?",
  options: ["Improve quality","Reduce cost","Increase access","All of the above"],
  ans: 3
},
{
  q: "120. Which is true about nursing?",
  options: ["Art","Science","Profession","All of the above"],
  ans: 3
}
    ],
    t2b: [
      // NCK AUGUST 2026 - BScN PAPER 2 - 120 QUESTIONS - CLINICAL
{
  q: "1. A patient in V-Tach with pulse. First action?",
  options: ["Defibrillate","Synchronized cardioversion","CPR","Amiodarone"],
  ans: 1
},
{
  q: "2. A patient with ARDS. Ventilator strategy?",
  options: ["High tidal volume","Low tidal volume 6ml/kg","100% FiO2","No PEEP"],
  ans: 1
},
{
  q: "3. A patient with sepsis, lactate 4. First bundle?",
  options: ["Antibiotics","Blood cultures","30ml/kg fluids","All within 1hr"],
  ans: 3
},
{
  q: "4. A patient with DKA, pH 7.0, K+ 3.0. Priority?",
  options: ["Insulin","Fluids","Potassium replacement","Bicarbonate"],
  ans: 1
},
{
  q: "5. A patient with increased ICP, Cushing's triad present. Action?",
  options: ["Mannitol","Elevate HOB 30","Hyperventilate","All of the above"],
  ans: 3
},
{
  q: "6. A patient with acute liver failure, ammonia high. Treatment?",
  options: ["Lactulose","Rifampin","Protein diet","Diuretics"],
  ans: 0
},
{
  q: "7. A patient with STEMI. Door-to-balloon time goal?",
  options: ["30min","60min","90min","120min"],
  ans: 2
},
{
  q: "8. A patient with PE, hypotensive. Treatment?",
  options: ["Heparin","Thrombolytics","Oxygen","All of the above"],
  ans: 3
},
{
  q: "9. A patient with ARF, oliguric. First?",
  options: ["Fluid challenge","Furosemide","Dialysis","Restrict fluids"],
  ans: 0
},
{
  q: "10. A patient with pancreatitis, severe pain. Drug?",
  options: ["Morphine","Meperidine","Ibuprofen","Aspirin"],
  ans: 0
},
{
  q: "11. A patient with burns 50%. Parkland formula first 8hr?",
  options: ["1/4 total","1/2 total","3/4 total","All total"],
  ans: 1
},
{
  q: "12. A patient with spinal shock. Sign?",
  options: ["Hypertension","Bradycardia","Flaccid paralysis","Spasticity"],
  ans: 2
},
{
  q: "13. A patient with thyroid storm. Priority drug?",
  options: ["PTU","Propranolol","Hydrocortisone","All of the above"],
  ans: 3
},
{
  q: "14. A patient with myasthenia crisis. Treatment?",
  options: ["Neostigmine","Plasmapheresis","IVIG","All of the above"],
  ans: 3
},
{
  q: "15. A patient with DIC. Lab finding?",
  options: ["High platelets","Low fibrinogen","High hemoglobin","Low PT"],
  ans: 1
},
{
  q: "16. A patient with eclampsia, seizing. First?",
  options: ["MgSO4 IV","Protect from injury","Oxygen","All of the above"],
  ans: 3
},
{
  q: "17. A patient with PROM 34 weeks. Management?",
  options: ["Immediate delivery","Steroids + antibiotics","Tocolysis","VE"],
  ans: 1
},
{
  q: "18. A patient with placenta previa, bleeding. Action?",
  options: ["VE","Oxygen","Prepare for C/S","Oxytocin"],
  ans: 2
},
{
  q: "19. A patient postpartum, PPH 800ml. First drug?",
  options: ["Methergine","Oxytocin","Misoprostol","Carboprost"],
  ans: 1
},
{
  q: "20. A newborn, APGAR 4 at 1min. First?",
  options: ["Warmth","Dry and stimulate","Oxygen","Intubation"],
  ans: 1
},
{
  q: "21. A child with croup, severe stridor. Treatment?",
  options: ["Nebulized epinephrine","Albuterol","Steroids","All of the above"],
  ans: 3
},
{
  q: "22. A child with intussusception. Sign?",
  options: ["Currant jelly stool","Projectile vomiting","Diarrhea","Fever"],
  ans: 0
},
{
  q: "23. A child with leukemia, ANC 200, fever. Action?",
  options: ["Antipyretic","Broad spectrum antibiotics","Isolation","All of the above"],
  ans: 3
},
{
  q: "24. A child with DKA, K+ 2.8. Action?",
  options: ["Insulin","Fluids","KCl replacement","Bicarbonate"],
  ans: 2
},
{
  q: "25. A patient with schizophrenia, command hallucinations. Priority?",
  options: ["Safety","Medication","Therapy","Family"],
  ans: 0
},
{
  q: "26. A patient with bipolar mania, not sleeping 3 days. Risk?",
  options: ["Depression","Exhaustion","Euphoria","Hyperactivity"],
  ans: 1
},
{
  q: "27. A patient with OCD. First line drug?",
  options: ["BZD","SSRI","Antipsychotic","Mood stabilizer"],
  ans: 1
},
{
  q: "28. A patient with BPD, self-harm. Intervention?",
  options: ["Contract for safety","Restraint","Ignore","Discharge"],
  ans: 0
},
{
  q: "29. A patient with delirium. Cause?",
  options: ["Dementia","Infection","Depression","Personality"],
  ans: 1
},
{
  q: "30. A patient with anorexia, BMI 14. Priority?",
  options: ["Therapy","Weight restoration","Exercise","School"],
  ans: 1
},
{
  q: "31. A patient with hypertensive emergency, BP 240/130. Drug?",
  options: ["Oral captopril","IV labetalol","Nifedipine PO","Atenolol"],
  ans: 1
},
{
  q: "32. A patient with HF, EF 20%. Drug to improve survival?",
  options: ["Digoxin","Furosemide","Carvedilol","Nitroglycerin"],
  ans: 2
},
{
  q: "33. A patient with cirrhosis, variceal bleed. First?",
  options: ["Octreotide","Band ligation","Propranolol","All of the above"],
  ans: 3
},
{
  q: "34. A patient with IBD flare. Drug?",
  options: ["Prednisone","Mesalamine","Azathioprine","All depending"],
  ans: 3
},
{
  q: "35. A patient with COPD exacerbation, CO2 60. Treatment?",
  options: ["High flow O2","NIPPV","Intubation","All depending"],
  ans: 3
},
{
  q: "36. A patient with asthma, PEF 40%. Treatment?",
  options: ["Albuterol neb","IV steroids","Magnesium","All of the above"],
  ans: 3
},
{
  q: "37. A patient with AKI, hyperkalemia 7.0, ECG changes. First?",
  options: ["Kayexalate","Calcium gluconate","Insulin","Dialysis"],
  ans: 1
},
{
  q: "38. A patient with nephrotic syndrome. Complication?",
  options: ["Infection","Thrombosis","Edema","All of the above"],
  ans: 3
},
{
  q: "39. A patient with SLE flare. Drug?",
  options: ["NSAIDs","Steroids","Hydroxychloroquine","All depending"],
  ans: 3
},
{
  q: "40. A patient with RA. Drug to prevent joint damage?",
  options: ["Ibuprofen","Methotrexate","Prednisone","Acetaminophen"],
  ans: 1
},
{
  q: "41. A patient with CML. Drug?",
  options: ["Imatinib","Hydroxyurea","Interferon","All of the above"],
  ans: 0
},
{
  q: "42. A patient with lymphoma, B symptoms. Treatment?",
  options: ["Chemo","Radiation","Surgery","All depending"],
  ans: 3
},
{
  q: "43. A patient with HIV, CD4 100. Prophylaxis?",
  options: ["PCP","TB","Toxo","All of the above"],
  ans: 0
},
{
  q: "44. A patient with meningitis. Empirical antibiotics?",
  options: ["Ceftriaxone + Vancomycin","Penicillin","Gentamicin","Doxycycline"],
  ans: 0
},
{
  q: "45. A patient with encephalitis. Cause?",
  options: ["HSV","TB","Fungal","All depending"],
  ans: 0
},
{
  q: "46. A patient with GBS. Treatment?",
  options: ["IVIG","Plasmapheresis","Steroids","All of the above"],
  ans: 3
},
{
  q: "47. A patient with MS exacerbation. Drug?",
  options: ["Interferon","Steroids","Natalizumab","All depending"],
  ans: 1
},
{
  q: "48. A patient with epilepsy, status. Drug?",
  options: ["Lorazepam IV","Phenytoin","Levetiracetam","All of the above"],
  ans: 0
},
{
  q: "49. A patient with Parkinson's, freezing. Drug?",
  options: ["Levodopa","Amantadine","Anticholinergic","All of the above"],
  ans: 0
},
{
  q: "50. A patient with Alzheimer's. Drug?",
  options: ["Donepezil","Memantine","Rivastigmine","All of the above"],
  ans: 3
},
{
  q: "51. A patient with trauma, BP 70/40, HR 130. First?",
  options: ["CT scan","Fluids + blood","Surgery","Pain meds"],
  ans: 1
},
{
  q: "52. A patient with tension pneumothorax. Treatment?",
  options: ["Needle decompression","Chest tube","Oxygen","All of the above"],
  ans: 3
},
{
  q: "53. A patient with cardiac tamponade. Sign?",
  options: ["Beck's triad","Murmur","Rub","Gallop"],
  ans: 0
},
{
  q: "54. A patient with compartment syndrome. Pressure >?",
  options: ["20mmHg","30mmHg","40mmHg","50mmHg"],
  ans: 1
},
{
  q: "55. A patient with fracture, open. First?",
  options: ["Reduce","Antibiotics","Tetanus","All of the above"],
  ans: 3
},
{
  q: "56. A patient with leadership role. Delegation principle?",
  options: ["Delegate assessment","RN retains accountability","Delegate to anyone","No supervision"],
  ans: 1
},
{
  q: "57. A patient with conflict in team. Resolution?",
  options: ["Ignore","Confront with communication","Transfer staff","Complain"],
  ans: 1
},
{
  q: "58. A patient with quality issue. First step?",
  options: ["Punish","Root cause analysis","Ignore","Blame"],
  ans: 1
},
{
  q: "59. A patient with research. IRB approval is for?",
  options: ["Funding","Ethical approval","Publication","Data collection"],
  ans: 1
},
{
  q: "60. A patient with EBP. Source?",
  options: ["Expert opinion","RCT","Systematic review","All depending"],
  ans: 2
},
{
  q: "61. A patient with community program. Evaluation?",
  options: ["Process","Outcome","Impact","All of the above"],
  ans: 3
},
{
  q: "62. A patient with health policy. Goal?",
  options: ["Equity","Access","Quality","All of the above"],
  ans: 3
},
{
  q: "63. A patient with disaster. Triage color red means?",
  options: ["Dead","Immediate","Delayed","Minor"],
  ans: 1
},
{
  q: "64. A patient with bioterrorism. Disease?",
  options: ["Anthrax","Smallpox","Plague","All of the above"],
  ans: 3
},
{
  q: "65. A patient with infection control. Standard precautions for?",
  options: ["All patients","TB only","HIV only","Isolation patients"],
  ans: 0
},
{
  q: "66. A patient with antibiotic resistance. Cause?",
  options: ["Overuse","Incomplete course","Self-medication","All of the above"],
  ans: 3
},
{
  q: "67. A patient with pain management. WHO ladder step 3?",
  options: ["Paracetamol","Codeine","Morphine","NSAID"],
  ans: 2
},
{
  q: "68. A patient with palliative care. Focus?",
  options: ["Cure","Comfort","Prolong life","Aggressive treatment"],
  ans: 1
},
{
  q: "69. A patient with end of life. Ethical principle?",
  options: ["Autonomy","Beneficence","Justice","All of the above"],
  ans: 3
},
{
  q: "70. A patient with organ donation. Consent from?",
  options: ["Patient","Family","Doctor","Government"],
  ans: 1
},
{
  q: "71. A patient with cultural competence. Approach?",
  options: ["Ignore culture","Assess beliefs","Impose values","Stereotype"],
  ans: 1
},
{
  q: "72. A patient with spiritual care. Need?",
  options: ["Assess","Refer chaplain","Respect","All of the above"],
  ans: 3
},
{
  q: "73. A patient with geriatric care. Syndrome?",
  options: ["Falls","Delirium","Incontinence","All of the above"],
  ans: 3
},
{
  q: "74. A patient with pediatric dose. Calculation based on?",
  options: ["Age","Weight","Height","All of the above"],
  ans: 1
},
{
  q: "75. A patient with adolescent. Priority?",
  options: ["Privacy","Autonomy","Confidentiality","All of the above"],
  ans: 3
},
{
  q: "76. A patient with women's health. Screening?",
  options: ["Pap smear","Mammogram","Bone density","All depending age"],
  ans: 3
},
{
  q: "77. A patient with men's health. Screening?",
  options: ["PSA","Testicular","Colon","All depending age"],
  ans: 3
},
{
  q: "78. A patient with occupational health. Hazard?",
  options: ["Chemical","Biological","Ergonomic","All of the above"],
  ans: 3
},
{
  q: "79. A patient with school health. Program?",
  options: ["Deworming","Immunization","Nutrition","All of the above"],
  ans: 3
},
{
  q: "80. A patient with refugee health. Priority?",
  options: ["Infectious disease","Mental health","Nutrition","All of the above"],
  ans: 3
},
{
  q: "81. A patient with telehealth. Benefit?",
  options: ["Access","Cost saving","Convenience","All of the above"],
  ans: 3
},
{
  q: "82. A patient with informatics. Use?",
  options: ["EHR","Decision support","Data analysis","All of the above"],
  ans: 3
},
{
  q: "83. A patient with genomics. Application?",
  options: ["Personalized medicine","Risk assessment","Pharmacogenomics","All of the above"],
  ans: 3
},
{
  q: "84. A patient with global health. Issue?",
  options: ["NCDs","Infectious disease","Maternal mortality","All of the above"],
  ans: 3
},
{
  q: "85. A patient with health economics. Concept?",
  options: ["Cost-effectiveness","Cost-benefit","Cost-utility","All of the above"],
  ans: 3
},
{
  q: "86. A patient with health law. Liability?",
  options: ["Negligence","Malpractice","Battery","All of the above"],
  ans: 3
},
{
  q: "87. A patient with health education. Method?",
  options: ["Lecture","Demonstration","Role play","All of the above"],
  ans: 3
},
{
  q: "88. A patient with health counseling. Technique?",
  options: ["Open-ended","Active listening","Reflection","All of the above"],
  ans: 3
},
{
  q: "89. A patient with health promotion. Model?",
  options: ["Pender","Ottawa Charter","Bandura","All of the above"],
  ans: 3
},
{
  q: "90. A patient with health protection. Example?",
  options: ["Immunization","Screening","Law","All of the above"],
  ans: 3
},
{
  q: "91. A patient with health prevention. Level 1?",
  options: ["Treatment","Rehab","Prevention of disease","Screening"],
  ans: 2
},
{
  q: "92. A patient with health screening. Test?",
  options: ["Sensitive","Specific","Valid","All of the above"],
  ans: 3
},
{
  q: "93. A patient with health surveillance. System?",
  options: ["IDSR","DHIS2","HMIS","All of the above"],
  ans: 3
},
{
  q: "94. A patient with health emergency. Preparedness?",
  options: ["Plan","Drill","Supplies","All of the above"],
  ans: 3
},
{
  q: "95. A patient with health recovery. Phase?",
  options: ["Response","Recovery","Mitigation","All of the above"],
  ans: 1
},
{
  q: "96. A patient with health risk assessment. Tool?",
  options: ["Epidemiology","Statistics","Survey","All of the above"],
  ans: 3
},
{
  q: "97. A patient with health communication. Channel?",
  options: ["Mass media","Interpersonal","Social media","All of the above"],
  ans: 3
},
{
  q: "98. A patient with health advocacy. Role?",
  options: ["Policy","Community","Individual","All of the above"],
  ans: 3
},
{
  q: "99. A patient with health leadership. Style?",
  options: ["Transactional","Transformational","Servant","All depending"],
  ans: 3
},
{
  q: "100. A patient with health management. Function?",
  options: ["Planning","Organizing","Controlling","All of the above"],
  ans: 3
},
{
  q: "101. A patient with health quality. Dimension?",
  options: ["Safe","Effective","Patient-centered","All of the above"],
  ans: 3
},
{
  q: "102. A patient with health safety. Goal?",
  options: ["Zero harm","Reduce error","Culture","All of the above"],
  ans: 3
},
{
  q: "103. A patient with health ethics. Committee?",
  options: ["IRB","Ethics committee","Clinical ethics","All of the above"],
  ans: 3
},
{
  q: "104. A patient with health research. Design?",
  options: ["Experimental","Quasi-experimental","Descriptive","All of the above"],
  ans: 3
},
{
  q: "105. A patient with health statistics. Measure?",
  options: ["Mean","Median","Mode","All of the above"],
  ans: 3
},
{
  q: "106. A patient with health informatics. Standard?",
  options: ["HL7","ICD-10","SNOMED","All of the above"],
  ans: 3
},
{
  q: "107. A patient with health technology assessment. Purpose?",
  options: ["Efficacy","Cost","Safety","All of the above"],
  ans: 3
},
{
  q: "108. A patient with health system. Building block?",
  options: ["Workforce","Financing","Governance","All of the above"],
  ans: 3
},
{
  q: "109. A patient with health financing. Source?",
  options: ["Tax","Insurance","Out of pocket","All of the above"],
  ans: 3
},
{
  q: "110. A patient with health workforce. Issue?",
  options: ["Shortage","Migration","Skill mix","All of the above"],
  ans: 3
},
{
  q: "111. A patient with health service. Level?",
  options: ["Primary","Secondary","Tertiary","All of the above"],
  ans: 3
},
{
  q: "112. A patient with health program. Planning cycle?",
  options: ["Assessment","Implementation","Evaluation","All of the above"],
  ans: 3
},
{
  q: "113. A patient with health monitoring. Indicator?",
  options: ["Input","Process","Outcome","All of the above"],
  ans: 3
},
{
  q: "114. A patient with health evaluation. Type?",
  options: ["Formative","Summative","Impact","All of the above"],
  ans: 3
},
{
  q: "115. A patient with health audit. Purpose?",
  options: ["Quality","Compliance","Improvement","All of the above"],
  ans: 3
},
{
  q: "116. A patient with health accreditation. Benefit?",
  options: ["Standard","Quality","Recognition","All of the above"],
  ans: 3
},
{
  q: "117. A patient with health regulation. Body?",
  options: ["NCK","PPB","KMPDC","All of the above"],
  ans: 3
},
{
  q: "118. A patient with health policy analysis. Step?",
  options: ["Problem","Options","Recommendation","All of the above"],
  ans: 3
},
{
  q: "119. A patient with health diplomacy. Goal?",
  options: ["Cooperation","Negotiation","Partnership","All of the above"],
  ans: 3
},
{
  q: "120. A patient with health future. Trend?",
  options: ["Digital","Personalized","Preventive","All of the above"],
  ans: 3
}
    ]
  }
};

let state = {
  mode:'', paper:'', topic:'', qIndex:0, questions:[], answers:[],
  timer:null, timeLeft:0, testDuration:10800, perQTime:60
};

function goTo(page, param=''){
  document.getElementById('main').innerHTML = '';
  if(page==='revisionCats') loadRevisionCats();
  if(page==='predictionSelect') loadPredictionSelect();
  if(page==='testSelect') loadTestSelect();
  if(page==='analytics') loadAnalytics();
  if(page==='quiz') startQuiz(param.mode, param.paper, param.topic);
  saveProgress();
}

function loadRevisionCats(){
  let html = `<div class="card"><h2>Revision Mode - Select Topic</h2>`;
  for(let topic in banks.revision){
    html += `<button class="topic-btn" onclick="goTo('quiz',{mode:'revision',topic:'${topic}'})">${topic}</button>`;
  }
  html += `</div>`;
  document.getElementById('main').innerHTML = html;
}

function loadPredictionSelect(){
  document.getElementById('main').innerHTML = `
  <div class="card center">
    <h2>Prediction Mode - Enter Code</h2>
    <div class="code-box">
      <button onclick="promptCode('p1k')">KRCHN Paper 1</button>
      <button onclick="promptCode('p2k')">KRCHN Paper 2</button>
      <button onclick="promptCode('p1b')">BSN Paper 1</button>
      <button onclick="promptCode('p2b')">BSN Paper 2</button>
    </div>
  </div>`;
}

function loadTestSelect(){
  document.getElementById('main').innerHTML = `
  <div class="card center">
    <h2>Test Mode - 60s per Q, 3 hours total</h2>
    <div class="code-box">
      <button onclick="promptCode('t1k', 'test')">KRCHN Paper 1</button>
      <button onclick="promptCode('t2k', 'test')">KRCHN Paper 2</button>
      <button onclick="promptCode('t1b', 'test')">BSN Paper 1</button>
      <button onclick="promptCode('t2b', 'test')">BSN Paper 2</button>
    </div>
  </div>`;
}

function promptCode(paper, mode='prediction'){
  const code = prompt("Enter 4-digit code");
  if(codes[code] === paper) goTo('quiz',{mode, paper});
  else alert("Invalid Code");
}

function loadAnalytics(){
  document.getElementById('main').innerHTML = `
  <div class="card">
    <h2>NCK Exam Analytics & Design</h2>
   
As of 2024/2025, NCK changed format: 
Both Paper 1 AND Paper 2 are now 100% MCQs. No more essays or OSCE on exam day. </p>

<p><b>KRCHN &BScN - NCK LICENSING EXAM 2026 FORMAT</b></p>

<p>Both cadres sit the <b>same 2 papers</b>. Same day. All MCQs.</p>

</p><b>PAPER 1: CORE NURSING MCQs</b></p>
<b>Time:</b> 3 hours | ∼150-180 MCQs | Computer Based Test</p>
<p>Tests broad knowledge and recall.</p>

<p><b>Topics + % Weight:</b></p>
<p><b>1.  Medical-Surgical Nursing - 25-30%  </b></p>
    <p>Emergencies: MI, Stroke, Shock, DKA, Poisoning, Surgical care, Pain, Infection control, Fluids</p>
<p><b>2.  Maternal & Newborn Health - 20-25%  </b></p>
    <p>ANC, Labor stages, PPH, APH, Pre-eclampsia/Eclampsia, Partograph, FP, Postnatal, Newborn care + Resuscitation</p>
<p><b>3.  Community Health & UHC - 15-20%  </b></p>
    <p>Kenya Health Policy 2014-2030, UHC, NHIF, EPI schedule, Disease surveillance, TB, HIV, Malaria, School health, Disaster</p>
<p><b>4.  Pediatric Nursing - 10-15%  </b></p>
    <p>IMCI, Malnutrition, Diarrhea, Pneumonia, Growth monitoring, Immunization schedules</p>
<p><b>5.  Mental Health & Psychiatry - 5-10%  </b></p>
    Depression, Schizophrenia, Anxiety, Substance abuse, Suicide, Therapeutic communication
<p><b>6.  Pharmacology + Dosage Calculations - 8-10%  </b></p>
   <p> Drug actions, side effects, contraindications, IV drip rates, mg↔ml, Units</p>
<p><b>7.  Professional Practice / NCK Act - 5%  </b></p>
   <p> Scope of practice, Code of Conduct, Documentation, Ethics, Legal issues, Delegation</p>

<p> <b>PAPER 2: CLINICAL APPLICATION MCQs </b></p>
<p><b>Time: </b>3 hours | ∼150-180 MCQs | Computer Based Test</p>  
<p>Tests clinical reasoning. All questions are scenarios/case studies.</p>

<p><b>Style:</b> "A 24yr old G3P2 presents with..." → "What is the priority action?" "What is the most likely diagnosis?" "What do you do next?"</p>

<p><b>Topics + Focus:</b></p>
<p><b>1.  Emergency & Critical Care Scenarios* - 20%  </b></p>
    <p>ABC, CPR, Anaphylaxis, Trauma, Burns</p>
<p><b>2.  Maternity Case Scenarios - 25%  </b></p>
   <p> Obstructed labor, PPH management, Eclampsia, Fetal distress, Prematurity</p>
<p><b>3.  Medical-Surgical Case Scenarios - 25%  </b></p>
    <p>Post-op complications, Diabetes management, Cancer care, Wound care</p>
<p><b>4.  Community/Pediatric Case Scenarios - 20%  </b></p>
    <p>Outbreak, Contact tracing, Malnourished child, Immunization defaulter</p>
<p><b>5.  Ethics + Leadership Scenarios - 10% </b> </p>
    <p>What would you do if... Patient rights, Informed consent, Reporting</p>

<table style="width:100%; border-collapse:collapse; font-size:15px; margin:15px 0; background:white;">
  <thead><tr style="background:#0d47a1; color:white;">
    <th style="padding:10px; border:1px solid #ddd; text-align:left;"></th>
    <th style="padding:10px; border:1px solid #ddd; text-align:left;">KRCHN</th>
    <th style="padding:10px; border:1px solid #ddd; text-align:left;">BScN</th>
  </tr></thead>
  <tbody>
  <tr>
    <td style="padding:8px; border:1px solid #ddd; font-weight:600; background:#e3f2fd;">Question depth</td>
    <td style="padding:8px; border:1px solid #ddd;">"What is the first action"</td>
    <td style="padding:8px; border:1px solid #ddd;">"Analyze and choose best evidence-based action"</td>
  </tr>
  <tr>
    <td style="padding:8px; border:1px solid #ddd; font-weight:600; background:#e3f2fd;">Patho</td>
    <td style="padding:8px; border:1px solid #ddd;">Basic</td>
    <td style="padding:8px; border:1px solid #ddd;">More pathophysiology + research-based</td>
  </tr>
  <tr>
    <td style="padding:8px; border:1px solid #ddd; font-weight:600; background:#e3f2fd;">Leadership</td>
    <td style="padding:8px; border:1px solid #ddd;">Team member role</td>
    <td style="padding:8px; border:1px solid #ddd;">Delegation, management, policy questions</td>
  </tr>
  </tbody></table>

<p><b>Pass mark</b>	60% in both papers</p>
<p>Fail 1 paper = Re-sit that paper only.</p>

<p><b>August 2026 Prediction - Most Repeated MCQ Topics</b></p>
<p>NCK recycles concepts every sitting:</p>
<p><b>1.</b>  PPH, Pre-eclampsia, Partograph interpretation</p>
<p><b>2.</b>  CPR steps, MI, Stroke, Shock</p>
<p><b>3.</b>  KEPI schedule, vision 2030, UHC pillars</p>
<p><b>4.</b>  Dosage calc: Heparin, Insulin, Drip factors</p>
<p><b>5.</b>  NCK Code + Documentation + Scope</p>

  </div>`;
}

function startQuiz(mode, paper, topic){
  state.mode = mode; state.paper = paper; state.topic = topic;
  state.questions = mode==='revision'? banks.revision[topic] : banks[mode][paper];
  state.qIndex = 0; state.answers = Array(state.questions.length).fill(null);
  state.timeLeft = mode==='test'? state.testDuration : 0;

  renderQuiz();
  buildGrid();
  loadQ();
  if(mode==='test') startTimers();
}

function renderQuiz(){
  document.getElementById('main').innerHTML = `
  <div class="card">
    <div class="timer" id="timer"></div>
    <h3 id="q-counter"></h3>
    <p id="question"></p>
    <div class="options" id="options"></div>
    <div class="rationale" id="rationale"></div>
    <div class="q-grid minimized" id="q-grid"></div>
    <div class="nav-btns">
      <button onclick="prevQ()" id="prevBtn">Previous</button>
      <button onclick="nextQ()" id="nextBtn">Next</button>
    </div>
  </div>`;
}

function buildGrid(){
  const grid = document.getElementById('q-grid');
  grid.innerHTML = '';
  state.questions.forEach((_, i)=>{
    const btn = document.createElement('button');
    btn.innerText = i+1;
    btn.onclick = ()=>{state.qIndex=i; loadQ();}
    grid.appendChild(btn);
  });
}

function loadQ(){
  const q = state.questions[state.qIndex];
  document.getElementById('q-counter').innerText = `Question ${state.qIndex+1} of ${state.questions.length}`;
  document.getElementById('question').innerText = q.q;
  const opts = document.getElementById('options');
  opts.innerHTML = '';
  q.options.forEach((opt, i)=>{
    const checked = state.answers[state.qIndex]===i? 'checked':'';
    opts.innerHTML += `<label><input type="radio" name="opt" value="${i}" ${checked} onchange="selectAnswer(${i})"> ${opt}</label>`;
  });
  document.getElementById('rationale').style.display='none';
  document.getElementById('prevBtn').disabled = state.qIndex===0;
  document.getElementById('nextBtn').innerText = state.qIndex===state.questions.length-1? 'Finish':'Next';
  updateGrid();
  if(state.mode==='test') resetPerQTimer();
}

function selectAnswer(i){
  state.answers[state.qIndex] = i;
  if(state.mode!=='test'){ // FIX: rationale shows for revision + prediction
    const q = state.questions[state.qIndex];
    document.querySelectorAll('.options label').forEach((lab,idx)=>{
      if(idx===q.ans) lab.classList.add('correct');
      if(idx===i && idx!==q.ans) lab.classList.add('wrong');
    });
    if(q.rationale){
      document.getElementById('rationale').innerText = "Rationale: " + q.rationale;
      document.getElementById('rationale').style.display='block';
    }
  }
  updateGrid();
}

function nextQ(){
  if(state.qIndex===state.questions.length-1) showScore();
  else {state.qIndex++; loadQ();}
}
function prevQ(){ if(state.qIndex>0){state.qIndex--; loadQ();} }

function updateGrid(){
  document.querySelectorAll('#q-grid button').forEach((btn,i)=>{
    btn.className='';
    if(i===state.qIndex) btn.classList.add('current');
    else if(state.answers[i]!==null) btn.classList.add('answered');
    else btn.classList.add('skipped');
  });
}

function startTimers(){
  state.timer = setInterval(()=>{
    state.timeLeft--;
    document.getElementById('timer').innerText = `Time: ${Math.floor(state.timeLeft/60)}:${(state.timeLeft%60).toString().padStart(2,'0')}`;
    if(state.timeLeft<=0) showScore();
  },1000);
}

let perQTimer;
function resetPerQTimer(){
  clearInterval(perQTimer);
  let t = state.perQTime;
  perQTimer = setInterval(()=>{
    t--;
    if(t<=0){ nextQ(); }
  },1000);
}

function showScore(){
  clearInterval(state.timer); clearInterval(perQTimer);
  let score = 0;
  if(state.mode!=='test'){
    score = state.answers.filter((a,i)=>a===state.questions[i].ans).length;
  }
  let html = `<div class="card center"><h2>Test Complete</h2><h1>Score: ${score} / ${state.questions.length}</h1><hr>`;
  state.questions.forEach((q,i)=>{
    html += `<p style="text-align:left"><b>Q${i+1}:</b> ${q.q}<br><b>Your answer:</b> ${q.options[state.answers[i]]||'Not answered'}</p>`; // FIX: no rationale here
  });
  html += `<button onclick="location.reload()">Home</button></div>`;
  document.getElementById('main').innerHTML = html;
  localStorage.removeItem('nckProgress');
}

function saveProgress(){
  localStorage.setItem('nckProgress', JSON.stringify(state));
}
function loadProgress(){
  const data = localStorage.getItem('nckProgress');
  if(data) state = JSON.parse(data);
}
loadProgress();

function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('minimized');
}
