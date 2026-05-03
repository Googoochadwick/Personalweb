var title = document.getElementById("title");
var output = document.getElementById("output");
var input = document.getElementById("input");
var entryh = [];



function processInput(){
    var text = input.value.toLowerCase().trim();
    entryh.push(input.value);
switch(text) {
    case 'help':
        output.innerHTML += (output.innerHTML === "" ? '<span style="color: #949b93;">~ ></span> '+input.value : '<span style="color: #949b93;"><br>~ ></span> '+input.value) +  `

<span class="cmd" data-cmd="whoami" style="color: #e1e15d;">whoami</span>              Who is Arush?

<span class="cmd" data-cmd="projects" style="color: #e1e15d;">projects</span>            My projects

<span class="cmd" data-cmd="certs" style="color: #e1e15d;">certs</span>               My Certifications

<span class="cmd" data-cmd="socials" style="color: #e1e15d;">socials</span>             Where to find me

<span class="cmd" data-cmd="skills" style="color: #e1e15d;">skills</span>              What I can do

<span class="cmd" data-cmd="daxfetch main" style="color: #e1e15d;">daxfetch [-I]</span>       use [main] or [server] to get info about my machines
`

break;
        
    case 'whoami':
        output.innerHTML += (output.innerHTML === "" ? '<span style="color: #949b93;">~ ></span> '+input.value : '<span style="color: #949b93;"><br>~ ></span> '+input.value) + `
+------------------------------------------------------------------------------------------+
| I am Arush Anand Singh                                                                   |
| │                                                                                        |
| ├Currently pursuing a degree in Computer Science. Good with python & C++                 |
| └Vice-President of Geekroom Club                                                         |
+------------------------------------------------------------------------------------------+

To know more use <span class="cmd" data-cmd="skills" style="color: #e1e15d;">skills</span> to see my skills and <span class="cmd" data-cmd="projects" style="color: #e1e15d;">projects</span> to see my work.
or check out my <a href="https://www.linkedin.com/in/arush-anand-singh-062761346" target="_blank">LinkedIn</a> or <a href="https://www.geekroom-srmist.co.in/team" target="_blank">Club</a><br>
Use <span class="cmd" data-cmd="clear" style="color: #e1e15d;">'clear'</span> to clear the terminal or <span class="cmd" data-cmd="help" style="color: #e1e15d;">'help'</span> to see other commands.
`;

        
        break;
    
    
    
    
    case 'projects':
        output.innerHTML += (output.innerHTML === "" ? '<span style="color: #949b93;">~ ></span> '+input.value : '<span style="color: #949b93;"><br>~ ></span> '+input.value) + `

<span style="color: #949b93; font-family: monospace;">███████╗ ██╗   ██╗███████╗████████╗███████╗ ███╗   ███╗    
██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝ ████╗ ████║    
███████╗ ╚████╔╝ ███████╗   ██║    █████╗   ██╔████╔██║    
╚════██║  ╚██╔╝  ╚════██║   ██║    ██╔══╝   ██║╚██╔╝██║    
███████║   ██║   ███████║   ██║    ███████╗ ██║ ╚═╝ ██║    
╚══════╝   ╚═╝   ╚══════╝   ╚═╝    ╚══════╝ ╚═╝     ╚═╝    

 ███████╗ ████████╗ █████╗ ████████╗███████╗
██╔════╝ ╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝
███████╗     ██║   ███████║   ██║   ███████╗
╚════██║     ██║   ██╔══██║   ██║   ╚════██║
███████║     ██║   ██║  ██║   ██║   ███████║
╚══════╝     ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝</span>

My Harvard CS50P final project made using Python, it is a terminal application 
able to display live system resource usage and can also generate pdf reports 
of the same.

MORE ON THE WAY!!!

<span style="color: #e1e15d;">link: <a href="https://github.com/Googoochadwick/SystemStats" target="_blank">GitHub Repository</a></span>

Use <span class="cmd" data-cmd="clear" style="color: #e1e15d;">'clear'</span> to clear the terminal or <span class="cmd" data-cmd="help" style="color: #e1e15d;">'help'</span> to see other commands.
`;
        break;
    case 'socials':
        output.innerHTML += (output.innerHTML === "" ? '<span style="color: #949b93;">~ ></span> '+input.value : '<span style="color: #949b93;"><br>~ ></span> '+input.value) + `
        
┌──────────────────────<span style="color: #e1e15d;">Find me on</span>───────────────────────┐
│ ├<span style="color: #e1e15d;">Linkedin:</span>   <a href="https://isht.ink/my-linkedin" target="_blank">My professional profile</a>
│ ├<span style="color: #e1e15d;">GitHub:</span>     <a href="https://ishortn.ink/my-github" target="_blank">My code repositories</a>
│ ├<span style="color: #e1e15d;">Medium:</span>     <a href="https://ishortn.ink/my-medium" target="_blank">My articles and blogs</a>
│ ├<span style="color: #e1e15d;">Twitter:</span>    <a href="https://ishortn.ink/my-twitter" target="_blank">My Twitter handle</a>
│ ├<span style="color: #e1e15d;">Mastodon:</span>   <a href="https://isht.ink/my-mastodom" target="_blank">My Mastodon handle</a>
│ ├<span style="color: #e1e15d;">Gmail:</span>      <a href="mailto:arushanand@gmail.com" target="_blank">My Gmail address</a>
└─────────────────────────────────────────────────────┘

Use <span class="cmd" data-cmd="clear" style="color: #e1e15d;">'clear'</span> to clear the terminal or <span class="cmd" data-cmd="help" style="color: #e1e15d;">'help'</span> to see other commands.

`;
        break;
    case 'certs':
        output.innerHTML += (output.innerHTML === "" ? '<span style="color: #949b93;">~ ></span> '+input.value : '<span style="color: #949b93;"><br>~ ></span> '+input.value) + `
<span style="color: #f64b02; font-family: monospace;"> 

            <img src="harvard.png" alt="Harvard CS50 Certificate" style="width: 200px; margin-top: 10px;">
    
    ⣇⣸ ⢀⣀ ⡀⣀ ⡀⢀ ⢀⣀ ⡀⣀ ⢀⣸   ⡎⠑ ⢎⡑ ⣏⡉ ⣎⣵ ⣏⡱
    ⠇⠸ ⠣⠼ ⠏  ⠱⠃ ⠣⠼ ⠏  ⠣⠼   ⠣⠔ ⠢⠜ ⠤⠜ ⠫⠜ ⠇ 
</span>
    An introduction to programming using Python,
    a popular language for general-purpose programming, data science, 
    web programming, and more.

    <a href="https://certificates.cs50.io/2d78657b-2231-415e-9a90-ba18d00b2d49.pdf?size=letter" target="_blank">View Certificate</a>

    <span style="color: #949b93; font-family: monospace;">

            <img src="microsoft.png" alt="Microsoft Azure Certificate" style="width: 200px; margin-top: 10px;">
    
    ⡷⢾ ⠄ ⢀⣀ ⡀⣀ ⢀⡀ ⢀⣀ ⢀⡀ ⣰⡁ ⣰⡀   ⣎⣱ ⢉⠝      ⢎⣱ ⣎⣵ ⣎⣵
    ⠇⠸ ⠇ ⠣⠤ ⠏  ⠣⠜ ⠭⠕ ⠣⠜ ⢸  ⠘⠤   ⠇⠸ ⠮⠤ ⠉⠉   ⠠⠜ ⠫⠜ ⠫⠜
</span> 
    Demonstrate foundational knowledge of cloud concepts, 
    core Azure services, plus Azure management and governance 
    features and tools.
    
    <a href="https://learn.microsoft.com/en-us/users/arushanandsingh-0374/credentials/dfc4be24c786d14f?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank">View Certificate</a>
   
    
                  <img src="microsoft.png" alt="Microsoft Azure AI Certificate" style="width: 200px; margin-top: 10px;">   
<span style="color: #949b93; font-family: monospace;">    
    ⡷⢾ ⠄ ⢀⣀ ⡀⣀ ⢀⡀ ⢀⣀ ⢀⡀ ⣰⡁ ⣰⡀   ⣎⣱ ⡇      ⢎⣱ ⣎⣵ ⣎⣵
    ⠇⠸ ⠇ ⠣⠤ ⠏  ⠣⠜ ⠭⠕ ⠣⠜ ⢸  ⠘⠤   ⠇⠸ ⠇ ⠉⠉   ⠠⠜ ⠫⠜ ⠫⠜
</span>
    Fundamentals concepts related to artificial intelligence, 
    and the services in Microsoft Azure that can be used to 
    create AI solutions.

    <a href="https://learn.microsoft.com/en-us/users/arushanandsingh-0374/credentials/3e6491c874db4d1e?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank">View Certificate</a>

Use <span class="cmd" data-cmd="clear" style="color: #e1e15d;">'clear'</span> to clear the terminal or <span class="cmd" data-cmd="help" style="color: #e1e15d;">'help'</span> to see other commands.
                   `;
        break;
    case 'daxfetch main':
        output.innerHTML += (output.innerHTML === "" ? '<span style="color: #949b93;">~ ></span> '+input.value : '<span style="color: #949b93;"><br>~ ></span> '+input.value) + `
┌──────────────────────<span style="color: #e1e15d;">Hardware</span>───────────────────────┐
 <span style="color: #e1e15d;">PC:</span> Vostro 3420
│ ├<span style="color: #e1e15d;">CPU:</span> 12th Gen Intel(R) Core(TM) i3-1215U (4+4) @ 4.40 GHz
└ ├<span style="color: #e1e15d;">GPU:</span> Intel UHD Graphics @ 1.10 GHz [Integrated]
└────────────────────────────────────────────────────┘

┌──────────────────────<span style="color: #e1e15d;">Software</span>───────────────────────┐
 <span style="color: #e1e15d;">OS:</span> Omarchy 3.6.0
│ ├<span style="color: #e1e15d;">Primary IDE:</span> VScode
│ ├<span style="color: #e1e15d;">Secondary IDE:</span> Fresh
│ ├<span style="color: #e1e15d;">VM:</span> Windows 11 
│ ├<span style="color: #e1e15d;">Terminal:</span> alacritty 0.17.0
└ ├<span style="color: #e1e15d;">Misc software:</span> Bambu Studio, Blender, Docker
└────────────────────────────────────────────────────┘

┌───────────────────────<span style="color: #e1e15d;">Notes</span>─────────────────────────┐
 <span style="color: #e1e15d;">Notes:</span> This is my main machine, I have been using it for 
│ development and other related work like photogammetry,
│ 3D printing, CAD modeling etc.
│   
└ Use command <span class="cmd" data-cmd="skills" style="color: #e1e15d;">skills</span> to know about my skills.
└────────────────────────────────────────────────────┘

Use <span class="cmd" data-cmd="clear" style="color: #e1e15d;">'clear'</span> to clear the terminal or <span class="cmd" data-cmd="help" style="color: #e1e15d;">'help'</span> to see other commands.

        `;
        break;
    case 'daxfetch server':
        output.innerHTML += (output.innerHTML === "" ? '<span style="color: #949b93;">~ ></span> '+input.value : '<span style="color: #949b93;"><br>~ ></span> '+input.value) + `
┌──────────────────────<span style="color: #e1e15d;">Hardware</span>───────────────────────┐
 <span style="color: #e1e15d;">PC:</span> Aspire 5742Z V1.21
│ ├<span style="color: #e1e15d;">CPU:</span> Intel Pentium P6100 (2) @ 1.999 GHz
└ ├<span style="color: #e1e15d;">GPU:</span> Intel Core Processor 
└────────────────────────────────────────────────────┘

┌──────────────────────<span style="color: #e1e15d;">Software</span>───────────────────────┐
 <span style="color: #e1e15d;">OS:</span> Ubuntu 24.04.3 LTS x86_64
│ ├<span style="color: #e1e15d;">Terminal:</span> TMUX
└ ├<span style="color: #e1e15d;">Misc software:</span> CodeServer, Dufs, Pi-Hole
└────────────────────────────────────────────────────┘

┌───────────────────────<span style="color: #e1e15d;">Notes</span>─────────────────────────┐
 <span style="color: #e1e15d;">Notes:</span> This is my server, I have been using it for 
│ hosting the software to code, serve files & blocking 
│ ads in my dorm room.
│   
└ Use command <span class="cmd" data-cmd="skills" style="color: #e1e15d;">skills</span> to know about my skills.
└────────────────────────────────────────────────────┘

Use <span class="cmd" data-cmd="clear" style="color: #e1e15d;">'clear'</span> to clear the terminal or <span class="cmd" data-cmd="help" style="color: #e1e15d;">'help'</span> to see other commands.

        `;
        break;
    case 'clear':
        output.innerHTML =  "";

        break;
    case 'skills':
        output.innerHTML += (output.innerHTML === "" ? '<span style="color: #949b93;">~ ></span> '+input.value : '<span style="color: #949b93;"><br>~ ></span> '+input.value) + `

<span style = "font-size : 20px;">Technical Skills:</span>
<span style="color: #1605ff;">
01010101
10101010
01010101
</span>
<span style="color: #d29a8a;">Programming languages:</span> Python, C++
<span style="color: #d29a8a;">Web development:</span> HTML, CSS, JS, React
<span style="color: #d29a8a;">Tools:</span> Git, Docker, VScode, Colab
<span style="color: #d29a8a;">Domains:</span> AI/ML, IOT, Cloud Computing 

<a href="https://ishortn.ink/my-github" target="_blank">My code repositories</a> 

───────────────────────────────────

<span style = "font-size : 20px;">Other Related Skills:</span>
<span style="color: #2ccda7;">  
     +----------+                           
    /          /|
   /          / |
  +----------+  |
  |          |  |
  |          |  +
  |          | /
  |          |/
  +----------+</span>

+---------------------------------------------+  
|3D printing, Modeling &                      |
|Photogammetry.                               |
+---------------------------------------------+

<a href="https://medium.com/@sudo.desync/my-photogrammetry-3d-printing-adventure-34442291a13a" target="_blank">Related Article</a>

───────────────────────────────────
<span style="color: #ffffff;">
      .--.
   .-(    ).
  (___.__)__)
</span>
+---------------------------------------------+
|Microsoft Azure cloud and AI tools           |
|Certification: AZ-900, AI-900                |
+---------------------------------------------+

Use <span style="color: #e1e15d;">'certs'</span> to see my certifications.

───────────────────────────────────

<span style="color: #8be15d;">
   +--------------+
   |.------------.|
   || ..> Hello  ||
   ||    World   ||
   ||            ||
   ||  :)        ||
   |+------------+|
   +-..--------..-+
</span>
+---------------------------------------------+
|Server management and hosting                |
|both through services like Vercel            |
|and self hosted.                             |
+---------------------------------------------+

use <span class="cmd" data-cmd="daxfetch server" style="color: #e1e15d;">'daxfetch server'</span> to know about my server

───────────────────────────────────

    <span style="color: #5de1c7;">
     ____________________
    | o o o              |
    |--------------------|
    |                    |
    |                    |
    |                    |
    |____________________|
    </span>
+---------------------------------------------+
|Web development and design,                  |
|both frontend and backend                    |
|using figma, penpot and react.               |
+---------------------------------------------+

<a href="https://medium.com/@sudo.desync/modern-quick-dev-learning-and-building-the-hard-way-e4f51cd67746" target="_blank">Related Article</a>

───────────────────────────────────
<span style="color: #5de187;">
     |||||||||||
  ___|||||||||||___
 |                 |
=|   ___________   |=
=|  |           |  |=
=|  |           |  |=
=|  |___________|  |=
 |                 |
  -----------------
     |||||||||||</span>

+---------------------------------------------+
| Knowledge of Arduino and Raspberry Pi.      |
| Learning Webot.                             |
+---------------------------------------------+

<a href="https://www.tinkercad.com/things/gQ1lE5SKVUd-aqua-shield-system?sharecode=e2nQ2ZF5Rf4-j7yGBqFUM6pDBF-47cKATbe6E9wR3nY" target="_blank">Refrence link</a>

Use <span class="cmd" data-cmd="clear" style="color: #e1e15d;">'clear'</span> to clear the terminal or <span class="cmd" data-cmd="help" style="color: #e1e15d;">'help'</span> to see other commands.
`;
        break;
    default:
        output.innerHTML += (output.innerHTML === "" ? '<span style="color: #949b93;">~ ></span> '+input.value : '<span style="color: #949b93;"><br>~ ></span> '+input.value) + "<br>Command not found. Type 'help' for assistance.<br>";
        break;

     
}
input.value = "";
input.focus();
output.scrollTop = output.scrollHeight;
window.scrollTo(0, document.body.scrollHeight);
}

function historyInput(){
    if(entryh.length > 0){
        input.value = entryh[entryh.length - 1];
    }}







input.addEventListener('keydown', function(event) {
  // Check if the pressed key is "Enter"
  if (event.key === 'Enter') {
    // Prevent a new line from being added
    event.preventDefault();
    processInput(); 
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    historyInput();
  }  
    
    // Call your switch case function
  });



document.addEventListener("click", function(e) {
    if (e.target.classList.contains("cmd")) {
        const command = e.target.getAttribute("data-cmd");
        
        input.value = command;   // autofill textarea
        processInput();          // execute command
    }
});