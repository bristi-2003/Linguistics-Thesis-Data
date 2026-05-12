const questions = [
  // ENGLISH
  { language: "English", question: "The sheep carrying the ship has drowned.", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "B" },
  { language: "English", question: "The knight spent the whole night guarding the castle.", a: "Sounds Right, but Spelled Wrong", b: "Incorrect & Nonsense", c: "Correct & Clear", d: "Spelled Right, but Meaning is Wrong", correct: "C" },
  { language: "English", question: "He used his bright mind to fix the bright lightbulb.", a: "Correct & Clear", b: "Spelled Right, but Meaning is Wrong", c: "Sounds Right, but Spelled Wrong", d: "Incorrect & Nonsense", correct: "A" },
  { language: "English", question: "Please right your name on the write side of the paper.", a: "Spelled Right, but Meaning is Wrong", b: "Correct & Clear", c: "Incorrect & Nonsense", d: "Sounds Right, but Spelled Wrong", correct: "D" },
  { language: "English", question: "I got peace when I ate piece of cake.", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Correct & Clear", d: "Incorrect & Nonsense", correct: "C" },
  { language: "English", question: "The huge giant stepped over the large rock.", a: "Incorrect & Nonsense", b: "Correct & Clear", c: "Sounds Right, but Spelled Wrong", d: "Spelled Right, but Meaning is Wrong", correct: "B" },
  { language: "English", question: "The plain flew over the plane covered with grass.", a: "Sounds Right, but Spelled Wrong", b: "Incorrect & Nonsense", c: "Correct & Clear", d: "Spelled Right, but Meaning is Wrong", correct: "A" },
  { language: "English", question: "The bank of the river is far from the city bank.", a: "Spelled Right, but Meaning is Wrong", b: "Sounds Right, but Spelled Wrong", c: "Incorrect & Nonsense", d: "Correct & Clear", correct: "D" },
  { language: "English", question: "She knew that the new dress would suit her perfectly.", a: "Incorrect & Nonsense", b: "Spelled Right, but Meaning is Wrong", c: "Correct & Clear", d: "Sounds Right, but Spelled Wrong", correct: "C" },
  { language: "English", question: "I am happy that you are feeling so cheerful today.", a: "Sounds Right, but Spelled Wrong", b: "Correct & Clear", c: "Incorrect & Nonsense", d: "Spelled Right, but Meaning is Wrong", correct: "B" },

  // HINDI
  { language: "Hindi", question: "पक्षी ने अपने नीर के लिए पास की नदी से नीड़ लाने का प्रयास किया।", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "B" },
  { language: "Hindi", question: "उस बड़े कुल का युवक नदी के कूल पर बैठा हुआ था।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Incorrect & Nonsense", d: "Correct & Clear", correct: "D" },
  { language: "Hindi", question: "चिड़िया के पर बहुत कोमल हैं, पर वह उड़ नहीं सकती।", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "A" },
  { language: "Hindi", question: "बूढ़ा सारथी अपने सूत को सुत काटना सिखा रहा था।", a: "Correct & Clear", b: "Spelled Right, but Meaning is Wrong", c: "Sounds Right, but Spelled Wrong", d: "Incorrect & Nonsense", correct: "C" },
  { language: "Hindi", question: "यह आम तो बिल्कुल पका हुआ है, मुझे पक्का यकीन है कि इसे खाने से कोई नुकसान नहीं होगा।", a: "Sounds Right, but Spelled Wrong", b: "Correct & Clear", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "B" },
  { language: "Hindi", question: "जंगल में सिंह को देखकर शेर दहाड़ने लगा।", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "A" },
  { language: "Hindi", question: "उस दूर के गृह पर जीवन की तलाश करने के बजाय, हमें अपने ग्रह को बचाना चाहिए।", a: "Correct & Clear", b: "Incorrect & Nonsense", c: "Spelled Right, but Meaning is Wrong", d: "Sounds Right, but Spelled Wrong", correct: "D" },
  { language: "Hindi", question: "इस बोतल का मुँह छोटा है, इसलिए मेरे मुँह में पानी नहीं आ रहा।", a: "Spelled Right, but Meaning is Wrong", b: "Sounds Right, but Spelled Wrong", c: "Correct & Clear", d: "Incorrect & Nonsense", correct: "C" },
  { language: "Hindi", question: "इस समस्या का परिणाम बहुत बुरा होगा, क्योंकि हमें सही परिमाण का पता नहीं था।", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "A" },
  { language: "Hindi", question: "आकाश में सूर्य चमक रहा है और सूरज की रोशनी तेज है।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Correct & Clear", d: "Incorrect & Nonsense", correct: "C" },

  // BENGALI
  { language: "Bengali", question: "কূল খেয়ে সে নদীর কুল এ বসে রইল।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Incorrect & Nonsense", d: "Correct & Clear", correct: "D" },
  { language: "Bengali", question: "দেশকে ভালোবাসার কারণে সে নিজের দ্বেষকে ছাপিয়ে গেল।", a: "Correct & Clear", b: "Sounds Right, but Spelled Wrong", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "A" },
  { language: "Bengali", question: "পরীক্ষায় ভালো ফল পাওয়ার পর সে একটা আপেল ফল খেল।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Correct & Clear", d: "Incorrect & Nonsense", correct: "C" },
  { language: "Bengali", question: "পাখিরা নীড় পান করে তাদের নীরে উড়ে গেল।", a: "Correct & Clear", b: "Spelled Right, but Meaning is Wrong", c: "Sounds Right, but Spelled Wrong", d: "Incorrect & Nonsense", correct: "C" },
  { language: "Bengali", question: "অন্যের জন্য অন্ন রান্না করা হলো।", a: "Sounds Right, but Spelled Wrong", b: "Correct & Clear", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "B" },
  { language: "Bengali", question: "এই বিশাল পৃথিবীর বুকে ধরণীর রূপ যেন শেষ হতে চায় না।", a: "Spelled Right, but Meaning is Wrong", b: "Correct & Clear", c: "Sounds Right, but Spelled Wrong", d: "Incorrect & Nonsense", correct: "B" },
  { language: "Bengali", question: "নদীর তিরেতে তীর চালানোর প্রশিক্ষণ হচ্ছিল।", a: "Correct & Clear", b: "Incorrect & Nonsense", c: "Spelled Right, but Meaning is Wrong", d: "Sounds Right, but Spelled Wrong", correct: "D" },
  { language: "Bengali", question: "তার মাথা খুব বড় কিন্তু অংকে তার একদম মাথা নেই।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Correct & Clear", d: "Incorrect & Nonsense", correct: "C" },
  { language: "Bengali", question: "তীরন্দাজিতে লক্ষ্য ভেদের জন্য লক্ষ টাকা পুরস্কার ছিল।", a: "Sounds Right, but Spelled Wrong", b: "Spelled Right, but Meaning is Wrong", c: "Incorrect & Nonsense", d: "Correct & Clear", correct: "D" },
  { language: "Bengali", question: "সুন্দর প্রভাতে আজ খুব মিষ্টি একটা সকাল।", a: "Sounds Right, but Spelled Wrong", b: "Correct & Clear", c: "Spelled Right, but Meaning is Wrong", d: "Incorrect & Nonsense", correct: "B" },
];
