const questions = [
  // ENGLISH
  { language: "English", question: "The sheep carrying the ship has drowned.", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "B" },
  { language: "English", question: "The knight spent the whole night guarding the castle.", a: "Sounds Right, but Spelled Wrong", b: "Incorrect & Nonsense", c: "Correct & Clear", d: "Spelled Right, but Meaning is Wrong", correct: "C" },
  { language: "English", question: "With his bright mind, he fixed the bright lightbulb.", a: "Correct & Clear", b: "Spelled Right, but Meaning is Wrong", c: "Sounds Right, but Spelled Wrong", d: "Incorrect & Nonsense", correct: "A" },
  { language: "English", question: "Please right your name on the write side of the paper.", a: "Spelled Right, but Meaning is Wrong", b: "Correct & Clear", c: "Incorrect & Nonsense", d: "Sounds Right, but Spelled Wrong", correct: "D" },
  { language: "English", question: "I got piece when I ate peace of cake.", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Correct & Clear", d: "Incorrect & Nonsense", correct: "A" },
  { language: "English", question: "The huge elephant pushed the large tree aside.", a: "Incorrect & Nonsense", b: "Correct & Clear", c: "Sounds Right, but Spelled Wrong", d: "Spelled Right, but Meaning is Wrong", correct: "B" },
  { language: "English", question: "The plain flew over the plane covered with grass.", a: "Sounds Right, but Spelled Wrong", b: "Incorrect & Nonsense", c: "Correct & Clear", d: "Spelled Right, but Meaning is Wrong", correct: "A" },
  { language: "English", question: "He sat on the river bank before going to the bank.", a: "Spelled Right, but Meaning is Wrong", b: "Sounds Right, but Spelled Wrong", c: "Incorrect & Nonsense", d: "Correct & Clear", correct: "D" },
  { language: "English", question: "She knew that the new dress would suit her perfectly.", a: "Incorrect & Nonsense", b: "Spelled Right, but Meaning is Wrong", c: "Correct & Clear", d: "Sounds Right, but Spelled Wrong", correct: "C" },
  { language: "English", question: "I’m glad you’re feeling so cheerful today.", a: "Sounds Right, but Spelled Wrong", b: "Correct & Clear", c: "Incorrect & Nonsense", d: "Spelled Right, but Meaning is Wrong", correct: "B" },

  // HINDI
  { language: "Hindi", question: "पक्षी ने अपने नीर के लिए पास की नदी से नीड़ लाने का प्रयास किया।", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "B" },
  { language: "Hindi", question: "रिया ने हार के बाद भी हार नहीं मानी।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Incorrect & Nonsense", d: "Correct & Clear", correct: "D" },
  { language: "Hindi", question: "चिड़िया के पर बहुत कोमल हैं, पर वह उड़ नहीं सकती।", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "A" },
  { language: "Hindi", question: "बूढ़ा सारथी अपने सूत को सुत काटना सिखा रहा था।", a: "Correct & Clear", b: "Spelled Right, but Meaning is Wrong", c: "Sounds Right, but Spelled Wrong", d: "Incorrect & Nonsense", correct: "C" },
  { language: "Hindi", question: "परीक्षा में अच्छे फल मिलने पर रिया को उपहार में बहुत से फल मिले।", a: "Sounds Right, but Spelled Wrong", b: "Correct & Clear", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "B" },
  { language: "Hindi", question: "वनराज को देखकर शेर दहाड़ने लगा।", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "A" },
  { language: "Hindi", question: "उस बड़े कूल का युवक नदी के कुल पर बैठा हुआ था।", a: "Correct & Clear", b: "Incorrect & Nonsense", c: "Spelled Right, but Meaning is Wrong", d: "Sounds Right, but Spelled Wrong", correct: "D" },
  { language: "Hindi", question: "इस बोतल का मुँह छोटा है, इसलिए मेरे मुँह में पानी नहीं आ रहा।", a: "Spelled Right, but Meaning is Wrong", b: "Sounds Right, but Spelled Wrong", c: "Correct & Clear", d: "Incorrect & Nonsense", correct: "C" },
  { language: "Hindi", question: "कल सीता ने कहा कि कल वह दिल्ली जाएगी।", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "A" },
  { language: "Hindi", question: "आकाश में सूर्य चमक रहा है और सूरज की किरणें तेज हैं।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Correct & Clear", d: "Incorrect & Nonsense", correct: "C" },

  // BENGALI
  { language: "Bengali", question: "কূল খেয়ে সে নদীর কুল এ বসে রইল।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Incorrect & Nonsense", d: "Correct & Clear", correct: "A" },
  { language: "Bengali", question: "দেশকে  ভালোবাসার কারণে রাগ- দ্বেষও ভুলে থাকা যায়।", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "A" },
  { language: "Bengali", question: "পরীক্ষায় ভালো ফল হওয়ার কারণে সে একটা আপেল ফল উপহার পেল।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Correct & Clear", d: "Incorrect & Nonsense", correct: "C" },
  { language: "Bengali", question: "পাখিদের নীর ভেসে যায় আকাশভাঙা নীড়ে।", a: "Correct & Clear", b: "Spelled Right, but Meaning is Wrong", c: "Sounds Right, but Spelled Wrong", d: "Incorrect & Nonsense", correct: "C" },
  { language: "Bengali", question: "তীরন্দাজিতে লক্ষ্য ভেদের জন্য ১ লক্ষ টাকা পুরস্কার ছিল।", a: "Sounds Right, but Spelled Wrong", b: "Correct & Clear", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "B" },
  { language: "Bengali", question: "এই বিশাল পৃথিবীর বুকে ধরণীর রূপ যেন শেষ হতে চায় না।", a: "Spelled Right, but Meaning is Wrong", b: "Correct & Clear", c: "Sounds Right, but Spelled Wrong", d: "Incorrect & Nonsense", correct: "B" },
  { language: "Bengali", question: "নদীর তিরেতে তীর চালানোর প্রশিক্ষণ হচ্ছিল।", a: "Correct & Clear", b: "Incorrect & Nonsense", c: "Spelled Right, but Meaning is Wrong", d: "Sounds Right, but Spelled Wrong", correct: "D" },
  { language: "Bengali", question: "বড় মাথা মানেই যে মাথায় বুদ্ধি বেশি এই ধারণা সবসময় ঠিক নাও হতে পারে।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Correct & Clear", d: "Incorrect & Nonsense", correct: "C" },
  { language: "Bengali", question: "চরণ গান গাইলো চরন এর সামনে।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Incorrect & Nonsense", d: "Correct & Clear", correct: "A" },
  { language: "Bengali", question: "টাইগার হিলে প্রভাতের সূর্যোদয়ের দৃশ্য আমার সকালকে স্মরণীয় করে তুললো।", a: "Sounds Right, but Spelled Wrong", b: "Correct & Clear", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "B" },
];
