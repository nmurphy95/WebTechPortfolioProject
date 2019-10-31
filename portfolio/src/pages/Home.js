import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            // database create functions to dynamically load info based on database entries and headings
            <div id="name">
                <h1>Nolan Murphy</h1>
                <div id="sections">
                    <div id="objective">
                        <h2>Objective</h2>
                        <p>To hone skills in applying my technology and business knowledge to full-scale business problem decision-making.</p>
                    </div>
                    <div id="education">
                        <h2>Education</h2>
                        <p><b>Bachelor of Science in Computer Science | Saint Louis University</b></p>
                        <p>Expected graduation May 2020</p>
                        <ul>
                            <li>Minors in Mathematics and Entrepreneurship</li>
                            <li>GPA: 3.79/4.0</li>
                            <li>Relevant Coursework: Financial Accounting, Managerial Accounting, Business Law, Management Theory and Practice, Managing Ideas in Entrepreneurial Firms, Corporate Finance, Marketing, Graphic Design I, Discrete Mathematics, Introduction to Object-Oriented Programming, Calculus I-III, Data Structures, Object-Oriented Software Design, Algorithms, Software Engineering, Linear Algebra, Operating Systems (current enrollment), Databases (current enrollment), Web Technologies (current enrollment), Managing Resources in Entrepreneurial Firms (current enrollment)</li>
                        </ul>
                    </div>
                    <div id="experience">
                        <h2>Experience</h2>
                        <p><b>Software Engineering Intern | Principal Financial Group</b></p>
                        <p>MAY 2019 - PRESENT</p>
                        <ul>
                            <li>Worked with an intern team to develop a full-stack internal web application using JavaScript, Java, HTML, and CSS, handling production rollout to the company</li>
                            <li>Built custom analytics for the web application using MongoDB to store data, which showed 1000 site visits in the first two weeks</li>
                            <li>Won first place out of fifteen with my team in an IT intern Code Jam building a Google Assistant Action to present users with the closest dentist in Principal’s insurance network leveraging the Google Maps API and Google Cloud Platform</li>
                        </ul>
                        <p><b>Development and Administrative Intern | Ticket Solutions, Inc.</b></p>
                        <p>MARCH 2018 - SEPTEMBER 2018</p>
                        <ul>
                            <li>Assisted in purchasing tickets from a variety of venues both in Saint Louis and around the country, which involved handling sums of cash over $1000.</li>
                            <li>Worked on an agile development team with mentorship of the CTO to implement new features and updates to proprietary internal software in C# and JavaScript</li>
                        </ul>
                        <p><b>Business Apprentice, Third Party Consulting | Cerner Corporation</b></p>
                        <p>JANUARY 2017 - JULY 2017</p>
                        <ul>
                            <li>Performed audits of travel receipts with customer invoices to support business analysts in maintaining client relationships</li>
                            <li>Managed accounts payable invoices and approved for payment consistently faster than terms were set for</li>
                            <li>Managed supplier account interactions regarding service and expenses through email and phone communication</li>
                            <li>Used Excel daily to run macros which ensured invoices were processed according to Cerner standards, queries which pulled key supplier data to deliver accuracy on paid invoices, and created weekly timesheet reports using Pivot Tables to ensure timesheets were processed correctly from a managerial perspective</li>
                        </ul>
                    </div>
                    <div id="skills">
                        <h2>Skills</h2>
                        <ul>
                            <li>Computer Languages: Python, HTML/CSS, ARM, C++, C, MATLAB, VBA, Java, SQL, JavaScript</li>
                            <li>Software: Microsoft Excel, Adobe Illustrator, Microsoft Word, Microsoft PowerPoint, Adobe Premiere, Visual Studio, IDLE, IntelliJ</li>
                        </ul>
                    </div>
                    <div id="activities">
                        <h2>Activities</h2>
                        <p><b>Sigma Chi</b></p>
                        <p>SEPTEMBER 2017 - PRESENT</p>
                        <ul>
                            <li>Fall 2018 Chapter Editor and Social Media Manager</li>
                            <li>Spring 2018 Ritual Chair, planned two-day initiation including 48 members</li>
                        </ul>
                        <p><b>Research Assistant</b></p>
                        <p>JANUARY 2017 - MAY 2019</p>
                        <ul>
                            <li>Drafted a research paper with our results for future submission to a peer-reviewed scientific journal</li>
                            <li>Worked on a project involving the occurrence of multiple matrices patterns in graphs of over ten million data points using a cluster of CPUs and an algorithm I wrote using C-code</li>
                            <li>Presented my work at a Saint Louis University Research Symposium, where I was selected as the math department representative</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;