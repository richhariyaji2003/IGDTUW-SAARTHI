// node --version # Should be >= 18
// npm install @google/generative-ai express

const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.API_KEY;

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "you are the saarthi of IGDTUW, your responsibility to solve a problem related to IGDTUW. IGDTUW is a women college of engineering in which fest is happenning in february called tarangana"}],
      },
      {
        role: "model",
        parts: [{ text: "\n\nThe Tarangna fest is approaching in February, and as the head of the organizing committee, I need to ensure that everything is arranged to make the fest a success. However, there are a few challenges that we are facing:\n\n *Budget Constraints:* We have been allocated a limited budget for the fest, and we need to make sure that we allocate the funds wisely to cover all the necessary expenses.\n* *Venue Issues:* The usual venue for the fest is undergoing renovations, and we need to find a suitable alternative location that can accommodate a large number of people.\n* *Lack of Volunteers:* Many students are busy with their studies and exams, and it's difficult to find enough volunteers to help with various tasks during the fest.\n* *Poor Publicity:* In the past, the fest has not received much attention from the student body, and we need to improve our publicity efforts to ensure that more people attend this year.\n\n*Solution:\n\nTo address these challenges, I propose the following solutions:\n\n *Budget Allocation:* I will work with the finance committee to develop a detailed budget that outlines the allocation of funds for different aspects of the fest. We will prioritize essential expenses such as stage setup, sound system, decorations, and entertainment, while also setting aside a portion of the budget for unexpected costs.\n* *Alternative Venue:* I will explore various options for an alternative venue that can accommodate the expected number of participants. This may include reaching out to other colleges or institutions that have suitable facilities, or considering the possibility of setting up a temporary venue on campus.\n* *Volunteer Recruitment:* I will launch a comprehensive volunteer recruitment campaign through various channels, including social media, student organizations, and departmental representatives. We will provide incentives such as certificates, refreshments, and recognition to encourage students to participate.\n* *Publicity and Marketing:* I will work with the marketing team to develop a creative and engaging publicity campaign that will generate interest and excitement among the student body. We will utilize various platforms such as social media, posters, and word-of-mouth to spread the word about the fest and its attractions.\n\nBy implementing these solutions, I am confident that we can overcome the challenges and make the Tarangana fest a memorable and successful event for the IGDTUW community."}],
      },
      {
        role: "user",
        parts: [{ text: "PlacementsFacilitiesCareersAlumniConvocationSDGs@IGDTUWCSDNewslettersTech CollaborationsG20@IGDTUWViksit Bharat@2047Research AwardIndira Gandhi Delhi Technical University For Women(Established by Govt. of Delhi vide Act 9 of 2012)ISO 9001:2015 Certified University HomeAbout Us Departments Academics Student Life Research Admissions Examinations VIKSIT BHARAT @2047  Vice Chancellor's MessageIt feels great to be the wind beneath the wings of one of the top ranking Emerging Engineering Institutes of Technology in India. The devouring stride of IGDTUW, since its inception in 1998 as IGIT, has been exemplary, culminating in transforming itself into an icon for women empowerment. To be a vibrant part of this illustrious edifice of teaching and learning is certainly a matter of stupendous pride and a new-found privilege for me.“YOU EDUCATE A MAN, YOU EDUCATE A MAN.YOU EDUCATE A WOMAN, YOU EDUCATE A GENERATION.”  Read More  Upcoming Events  Notices / Circulars  Past EventsOrder for Appointment of Prof. Vandana Niranjan as Chief ProctorOrder for Constitution of Proctoral BoardOrder for Celebration of Republic DayCircular as per UGC Regulation- 2018 vide Gazette Notification No. F.1-2/2017 (EC/PS)...Circular as per AICTE Regulation- 2019 vide Gazette Notification Regd. No. D.L./33004...  Read MoreAwards and AchievementsIGDTUW Got AAA Rating Based On Performance In NPTEL Online Courses (July- Dec 2023)DetailsUniversity Of The Year Award 2022 Under Best Placement Opportunities By FICCIDetailsE-Learning Excellence AwardDetailsStree Shakti Samaan AwardDetailsWorld's Universities With Real Impact (WURI) Ranking 2022DetailsUseful LinksDesign & Web Development TeamSwayamInformation Under Contract Labour ActWomen Helpline NumbersIGDTUW Privacy PolicyRTIArchivesTendersCoE AMSCommon Management Admission Committee (CMAC)Useful LinksLife@IGDTUWNPTELSpoken TutorialDelhi Public LibraryHandbook On Sexual Harassment Of Women At WorkplacePrevention Of Sexual Harassment At Workplace(SheBox Portal)Certificate Of Accreditation From The Society Of Women EngineersDirectoryWebmailERP PortalQuick LinksNAACUnnat Bharat AbhiyanAISHEAnvenshan Foundation (Business Incubator)NIRF DataARIIA DataFacebook-GNCTDInstagram-GNCTDTwitter-GNCTDKoo-GNCTDYoutube-GNCTDContactsIndira Gandhi Delhi Technical University For Women  Madrasa RoadOpposite St. James ChurchKashmere GateDelhi-110006   Telephone: 011- 23900261, 23900264Copyright © 2020 Indira Gandhi Delhi Technichal University for Women. All Rights Reserved.Best Viewed in 1024 x 768 Resolution."}],
      },
      {
        role: "model",
        parts: [{ text: "*Challenges:\n\n Limited budget for the fest\n* Lack of suitable venue due to ongoing renovations\n* Difficulty in finding enough volunteers\n* Poor publicity and lack of awareness among the student body\n\n*Proposed Solutions:\n\n *Budget Allocation:\n    * Develop a detailed budget that outlines the allocation of funds for different aspects of the fest.\n    * Prioritize essential expenses such as stage setup, sound system, decorations, and entertainment.\n    * Set aside a portion of the budget for unexpected costs.\n\n *Alternative Venue:\n    * Explore options for an alternative venue that can accommodate the expected number of participants.\n    * Reach out to other colleges or institutions with suitable facilities.\n    * Consider setting up a temporary venue on campus.\n\n *Volunteer Recruitment:\n    * Launch a comprehensive volunteer recruitment campaign through various channels.\n    * Utilize social media, student organizations, and departmental representatives to spread the word.\n    * Provide incentives such as certificates, refreshments, and recognition to encourage participation.\n\n *Publicity and Marketing:\n    * Develop a creative and engaging publicity campaign to generate interest and excitement among the student body.\n    * Utilize social media, posters, and word-of-mouth to spread the word about the fest and its attractions.\n\nAdditional Recommendations:\n\n *Collaboration with Other Colleges:\n    * Reach out to other colleges in the area and explore the possibility of collaborating on the fest.\n    * This can help to share resources, attract a larger audience, and create a more diverse and exciting event.\n\n *Sponsorship and Partnerships:\n    * Seek out potential sponsors and partners who can provide financial support or other resources for the fest.\n    * This can help to reduce the financial burden on the organizing committee and ensure that the fest is a success.\n\n *Feedback and Evaluation:*\n    * Collect feedback from participants and attendees after the fest to identify areas for improvement.\n    * Use this feedback to make the next fest even better and more successful.\n\nBy implementing these solutions and recommendations, the Tarangana fest can overcome the challenges it faces and become a memorable and successful event for the IGDTUW community."}],
      },
      {
        role: "user",
        parts: [{ text: "you are saarthi of IGDTUW , IF students want resouces like notes lectures nad pyq then first ask student to share your academic details like  current semester, course or branch then you share https://fresources.tech/subject?branchId=cllpge2ef000rky6wz10s2q03&courseId=clna1efxj00p4i6jmxeend063  according to the in formation given by user"}],
      },
      {
        role: "model",
        parts: [{ text: "Sure, here is how I would respond to a student's request for resources like notes, lectures, and previous year question papers (PYQs) as the Saarthi of IGDTUW:\n\n*Step 1: Ask for Academic Details\n\n\n[Student]: Hi Saarthi, can you share some resources like notes, lectures, and PYQs for my studies?\n\n[Saarthi]: Hello! Sure, I can help you with that. First, could you please share your academic details with me? This will help me provide you with the most relevant resources.\n\n\nStep 2: Collect Academic Details\n\n\n[Student]: I am a student of IGDTUW in the current semester. My course is and my branch is .\n\n[Saarthi]: Thank you for providing your details. Now, I can share some useful resources with you.\n\n\nStep 3: Share Resources Link\n\n\n[Saarthi]: Here is a link to a website called Fresources: https://fresources.tech/subject?branchId=cllpge2ef000rky6wz10s2q03&courseId=clna1efxj00p4i6jmxeend063. This website has a collection of resources for students, including notes, lectures, and PYQs.\n\n[Student]: Thank you so much! This is really helpful.\n\n[Saarthi]: You're welcome! I'm glad I could assist you. If you have any more questions or need additional resources, feel free to ask.\n\n\nNote:*\n\nThe link provided in Step 3 is an example link to Fresources, a website that offers study resources for various courses and branches. You can replace this link with the actual link to the IGDTUW resource portal or any other reliable source of study materials.\n\nBy following these steps, I can efficiently respond to student requests for resources and provide them with the information they need to succeed in their studies."}],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/loader.gif', (req, res) => {
  res.sendFile(__dirname + '/loader.gif');
});
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log('incoming /chat req', userInput)
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



// const express = require('express');
// const bodyParser = require('body-parser');
// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const app = express();
// const port = 3000; // You can change the port as needed

// const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Serve the HTML form
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // Handle the POST request from the form
// app.post('/chat', async (req, res) => {
//   const userMessage = req.body.message;

//   const generationConfig = {
//     temperature: 0.9,
//     topK: 1,
//     topP: 1,
//     maxOutputTokens: 2048,
//   };

//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     // Add other safety settings as needed
//   ];

//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history: [
//       // Your chat history goes here
//     ],
//   });

//   const result = await chat.sendMessage(userMessage);
//   const response = result.response;

//   // Send the response back to the client
//   res.json({ text: response.text() });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
