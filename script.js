// ================= LOGIN =================

function login() {

    const name = document.getElementById("studentName").value.trim();
    const enrollment = document.getElementById("enrollment").value.trim();
    const password = document.getElementById("password").value.trim();

    const loginMessage = document.getElementById("loginMessage");

    if (name === "" || enrollment === "" || password === "") {

        loginMessage.innerText = "⚠️ Please fill all details.";
        return;
    }

    // Hide login
    document.querySelector(".login-page").style.display = "none";

    // Show dashboard
    document.getElementById("dashboard").style.display = "block";

    // Show student name
    document.querySelector(".student-profile span").innerText =
        "Hello, " + name;

    document.querySelector(".welcome-banner h2").innerText =
        "Welcome, " + name + " 👋";
}


// ================= GENERAL MESSAGE =================

function showMessage(feature) {

    const message = document.getElementById("message");

    message.style.display = "block";

    if (feature === "Notices") {

        message.innerHTML = `
            <div class="card-heading">
                <div>
                    <span class="heading-icon">📢</span>
                    <h3>College Notices</h3>
                </div>
            </div>

            <div class="notice-preview">

                <span class="new-badge">NEW</span>

                <h4>Welcome to SKITM Smart Campus</h4>

                <p>
                    Check college announcements regularly
                    for important updates.
                </p>

                <small>📅 18 September 2026</small>

            </div>

            <button onclick="closeMessage()">
                ← Back to Dashboard
            </button>
        `;
    }


    else if (feature === "Study") {

        message.innerHTML = `
            <div class="card-heading">
                <div>
                    <span class="heading-icon">📚</span>
                    <h3>Study Resources</h3>
                </div>
            </div>

            <p>Select your subject:</p>

            <button onclick="showSubject('Engineering Chemistry')">
                🧪 Engineering Chemistry
            </button>

            <button onclick="showSubject('Mathematics-I')">
                📐 Mathematics-I
            </button>

            <button onclick="showSubject('English for Technical Communication')">
                📖 English for Technical Communication
            </button>

            <button onclick="showSubject('Introduction to Electrical & Electronics Engg.')">
                ⚡ Electrical & Electronics Engg.
            </button>

            <button onclick="showSubject('Engineering Graphics')">
                📏 Engineering Graphics
            </button>

            <button onclick="showSubject('Manufacturing Practices')">
                🔧 Manufacturing Practices
            </button>

            <br>

            <button onclick="closeMessage()">
                ← Back to Dashboard
            </button>
        `;
    }
}


// ================= SUBJECT =================

function showSubject(subject) {

    const message = document.getElementById("message");

    let syllabus = "";


    if (subject === "Engineering Chemistry") {

        syllabus = `
            <h4>Unit 1 – Water</h4>
            <p>
                Hardness, EDTA method, alkalinity, boiler troubles,
                lime-soda, zeolite and ion exchange methods.
            </p>

            <h4>Unit 2 – Lubricants and Lubrication</h4>
            <p>
                Mechanism, classification, viscosity, flash & fire points,
                cloud & pour points.
            </p>

            <h4>Unit 3 – Polymer & Polymerization</h4>
            <p>
                Polymerization, thermoplastic, thermosetting,
                biodegradable polymers, PVC, PMMA, Teflon and Nylon.
            </p>

            <h4>Unit 4 – Periodic Properties & Material Science</h4>
            <p>
                Nuclear charge, atomic size, electron affinity,
                electronegativity, alloys and nanotechnology.
            </p>

            <h4>Unit 5 – Spectroscopic Techniques</h4>
            <p>
                Microwave, IR, UV-Vis and NMR spectroscopy.
            </p>
        `;
    }


    else if (subject === "Mathematics-I") {

        syllabus = `
            <h4>Module 1 – Differential Calculus-I</h4>
            <p>
                Taylor and Maclaurin theorem, partial differentiation,
                maxima-minima, Euler theorem and total differentiation.
            </p>

            <h4>Module 2 – Differential Calculus-II</h4>
            <p>
                Jacobians, Lagrange multipliers, curvature and asymptotes.
            </p>

            <h4>Module 3 – Integral Calculus-I</h4>
            <p>
                Beta-Gamma functions, multiple integrals,
                change of order, area and volume.
            </p>

            <h4>Module 4 – Vector Spaces</h4>
            <p>
                Vector spaces, subspaces, linear combination,
                dependence, independence, basis and transformations.
            </p>

            <h4>Module 5 – Matrices</h4>
            <p>
                Rank, simultaneous equations, consistency,
                eigenvalues, eigenvectors, diagonalization
                and Cayley-Hamilton theorem.
            </p>
        `;
    }


    else if (subject === "English for Technical Communication") {

        syllabus = `
            <h4>Unit I – Common Errors in Writing</h4>
            <p>
                Articles, subject-verb agreement, prepositions,
                active-passive voice, reported speech and sentence structure.
            </p>

            <h4>Unit II – Vocabulary & Comprehension</h4>
            <p>
                Prefixes, suffixes, synonyms, antonyms and comprehension.
            </p>

            <h4>Unit III – Communication</h4>
            <p>
                Communication process, oral and written communication,
                7Cs, barriers and non-verbal communication.
            </p>

            <h4>Unit IV – Writing Skills</h4>
            <p>
                Planning, drafting, editing, précis, technical definition,
                description and report writing.
            </p>

            <h4>Unit V – Business Correspondence</h4>
            <p>
                Business letters, applications, resume, quotation,
                orders, complaints, emails and tenders.
            </p>
        `;
    }


    else if (subject === "Introduction to Electrical & Electronics Engg.") {

        syllabus = `
            <h4>Unit I – DC Circuits</h4>
            <p>
                Ohm's law, Kirchhoff's laws, series-parallel circuits,
                Superposition, Thevenin, mesh and nodal analysis.
            </p>

            <h4>Unit II – AC Fundamentals</h4>
            <p>
                Sinusoidal AC, RMS value, phasor, power factor,
                impedance, admittance and resonance.
            </p>

            <h4>Unit III – Magnetic Circuits</h4>
            <p>
                B-H curves, electromagnetic induction, transformer,
                EMF equation and efficiency.
            </p>

            <h4>Unit IV – Electrical Machines</h4>
            <p>
                DC machines, induction machines,
                synchronous machines and 3-phase induction motor.
            </p>

            <h4>Unit V – Basic Electronics</h4>
            <p>
                Number systems, logic gates, adders, flip-flops,
                semiconductors, diodes and BJT.
            </p>

            <h4>Unit VI – Electric Vehicle</h4>
            <p>
                EV basics, components, classification,
                DC motor, PM motor and BLDC motor.
            </p>
        `;
    }


    else if (subject === "Engineering Graphics") {

        syllabus = `
            <h4>Module 1 – Engineering Drawing</h4>
            <p>
                Drawing principles, instruments, lettering,
                conic sections and scales.
            </p>

            <h4>Module 2 – Orthographic Projections</h4>
            <p>
                Projections of points, lines and planes.
            </p>

            <h4>Module 3 – Regular Solids</h4>
            <p>
                Projection of regular solids, auxiliary views,
                annotation and dimensioning.
            </p>

            <h4>Module 4 – Sections</h4>
            <p>
                Sections of prism, cylinder, pyramid and cone.
            </p>

            <h4>Module 5 – Isometric Projection</h4>
            <p>
                Isometric scale and conversion between
                isometric and orthographic views.
            </p>

            <h4>Module 6 – Computer Graphics</h4>
            <p>
                CAD software, coordinate systems and drawing tools.
            </p>
        `;
    }


    else if (subject === "Manufacturing Practices") {

        syllabus = `
            <h4>Manufacturing Methods</h4>
            <p>
                Casting, forming, machining, joining
                and advanced manufacturing methods.
            </p>

            <h4>CNC & Additive Manufacturing</h4>
            <p>
                CNC machining and additive manufacturing.
            </p>

            <h4>Workshop Practices</h4>
            <p>
                Machine shop, fitting, carpentry,
                electrical & electronics, welding, casting and smithy.
            </p>

            <h4>Plastic & Glass</h4>
            <p>
                Plastic moulding and glass cutting.
            </p>
        `;
    }


    message.style.display = "block";

    message.innerHTML = `
        <div class="card-heading">
            <div>
                <span class="heading-icon">📚</span>
                <h3>${subject}</h3>
            </div>
        </div>

        <div class="notice-preview">

            ${syllabus}

        </div>

        <button onclick="showMessage('Study')">
            ← Back to Subjects
        </button>

        <button onclick="closeMessage()">
            🏠 Dashboard
        </button>
    `;
}


// ================= CLOSE =================

function closeMessage() {

    document.getElementById("message").style.display = "none";
}


// ================= ATTENDANCE =================

function showAttendance() {

    const message = document.getElementById("message");

    message.style.display = "block";

    message.innerHTML = `
        <div class="card-heading">
            <div>
                <span class="heading-icon">📝</span>
                <h3>Attendance Calculator</h3>
            </div>
        </div>

        <p>Enter your class details:</p>

        <input
            type="number"
            id="totalClasses"
            placeholder="Total Classes"
            min="1"
        >

        <input
            type="number"
            id="attendedClasses"
            placeholder="Attended Classes"
            min="0"
        >

        <button onclick="calculateAttendance()">
            Calculate
        </button>

        <div id="attendanceResult"></div>

        <button onclick="closeMessage()">
            ← Back
        </button>
    `;
}


function calculateAttendance() {

    const total =
        Number(document.getElementById("totalClasses").value);

    const attended =
        Number(document.getElementById("attendedClasses").value);

    const result =
        document.getElementById("attendanceResult");


    if (total <= 0 || attended < 0 || attended > total) {

        result.innerHTML =
            "<p>⚠️ Please enter valid values.</p>";

        return;
    }


    const percentage =
        (attended / total) * 100;


    let status = "";

    if (percentage >= 75) {
        status = "✅ Attendance is above 75%.";
    } else {
        status = "⚠️ Attendance is below 75%.";
    }


    result.innerHTML = `
        <div class="notice-preview">

            <h4>
                Attendance: ${percentage.toFixed(2)}%
            </h4>

            <p>${status}</p>

        </div>
    `;
}


// ================= BUS =================

function showBus() {

    const message = document.getElementById("message");

    message.style.display = "block";

    message.innerHTML = `
        <div class="card-heading">
            <div>
                <span class="heading-icon">🚌</span>
                <h3>SKITM Bus Service</h3>
            </div>
        </div>

        <p>Select Bus Route</p>

        <select id="busRoute">

            <option value="">
                -- Select Route --
            </option>

            <option value="1">
                Route 1 - S-10
            </option>

        </select>

        <button onclick="viewBusRoute()">
            View Route
        </button>

        <div id="busResult"></div>

        <button onclick="closeMessage()">
            ← Back
        </button>
    `;
}


// ================= BUS ROUTE =================

function viewBusRoute() {

    const route =
        document.getElementById("busRoute").value;

    const result =
        document.getElementById("busResult");


    if (route === "") {

        result.innerHTML =
            "<p>⚠️ Please select a route.</p>";

        return;
    }


    if (route === "1") {

        result.innerHTML = `

            <br>

            <h3>🚌 Route 1 - S-10</h3>

            <div class="route-list">

                <p>📍 अम्बेडकर चौराहा — 07:35 AM</p>
                <p>📍 राजवाडा बेटमा — 07:37 AM</p>
                <p>📍 मााँचल — 07:47 AM</p>
                <p>📍 कलाररया — 07:52 AM</p>
                <p>📍 ग्रीन पाकक — 08:00 AM</p>
                <p>📍 नुरानी नगर — 08:02 AM</p>
                <p>📍 चन्दन नगर चौकी — 08:07 AM</p>
                <p>📍 दस्तूर गाडकन — 08:09 AM</p>
                <p>📍 फू टी कोटी — 08:11 AM</p>
                <p>📍 ररलैक्स गाडकन — 08:13 AM</p>
                <p>📍 साईं द्वार — 08:15 AM</p>
                <p>📍 ववधुर नगर — 08:17 AM</p>
                <p>📍 के ट चौराहा — 08:22 AM</p>
                <p>📍 टरेजर फैं टेसी — 08:25 AM</p>
                <p>🏫 कॉलेज — 09:15 AM</p>

            </div>
        `;
    }
}