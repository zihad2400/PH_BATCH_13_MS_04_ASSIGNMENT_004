
        let jobsData = [
            { id: 1, company: "Mobile First Corp", title: "React Native Developer", loc: "Remote", time: "Full-time", salary: "$130,000 - $175,000", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: "all" },
            { id: 2, company: "WebFlow Agency", title: "Web Designer & Developer", loc: "Los Angeles, CA", time: "Part-time", salary: "$80,000 - $120,000", desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.", status: "all" },
            { id: 3, company: "DataViz Solutions", title: "Data Visualization Specialist", loc: "Boston, MA", time: "Full-time", salary: "$125,000 - $155,000", desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: "all" },
            { id: 4, company: "CloudFirst Inc", title: "Backend Developer", loc: "Seattle, WA", time: "Full-time", salary: "$140,000 - $190,000", desc: "Design and maintain scalable backend systems using Python and AWS. Work with DevOps pipelines and cloud infrastructure.", status: "all" },
            { id: 5, company: "Innovation Labs", title: "UI/UX Engineer", loc: "Austin, TX", time: "Full-time", salary: "$110,000 - $150,000", desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: "all" },
            { id: 6, company: "MegaCorp Solutions", title: "JavaScript Developer", loc: "New York, NY", time: "Full-time", salary: "$120,000 - $170,000", desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status: "all" },
            { id: 7, company: "StartupXYZ", title: "Full Stack Engineer", loc: "Remote", time: "Full-time", salary: "$120,000 - $180,000", desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: "all" },
            { id: 8, company: "TechCorp Industries", title: "Senior Frontend Developer", loc: "San Francisco, CA", time: "Full-time", salary: "$150,000 - $175,000", desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status: "all" }
        ];

        let activeTab = 'all';

        function render() {
            const container = document.getElementById('jobs-wrapper');
            const empty = document.getElementById('empty-state');
            const filtered = activeTab === 'all' ? jobsData : jobsData.filter(j => j.status === activeTab);
            
            document.getElementById('total-stat').innerText = jobsData.length;
            document.getElementById('interview-stat').innerText = jobsData.filter(j => j.status === 'interview').length;
            document.getElementById('rejected-stat').innerText = jobsData.filter(j => j.status === 'rejected').length;
            document.getElementById('right-count').innerText = `${filtered.length} jobs`;

            container.innerHTML = '';
            if (filtered.length === 0) {
                empty.classList.replace('hidden', 'flex');
            } else {
                empty.classList.replace('flex', 'hidden');
                filtered.forEach(job => {
                    const card = document.createElement('div');
                    card.className = "job-card p-6 rounded-lg shadow-sm relative overflow-hidden";
                    card.innerHTML = `

                        

                         <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-gray-300 hover:text-red-500 btn-animate">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                         </button>



                        <h4 class="text-blue-900 font-bold text-xs mb-1">${job.company}</h4>
                        <h2 class="text-lg font-bold text-gray-800 mb-1">${job.title}</h2>
                        <p class="text-xs text-gray-500 mb-3 font-medium">${job.loc}  •  ${job.time}  •  ${job.salary}</p>
                        <div class="status-badge mb-4">NOT APPLIED</div>
                        <p class="text-sm text-gray-600 mb-6 leading-relaxed">${job.desc}</p>
                        <div class="flex gap-3">
                            <button onclick="updateStatus(${job.id}, 'interview')" class="btn-animate px-4 py-1.5 border border-green-500 text-green-600 text-xs font-bold rounded hover:bg-green-50 uppercase tracking-tighter ${job.status === 'interview' ? 'bg-green-500 text-white shadow-md' : ''}">Interview</button>
                            <button onclick="updateStatus(${job.id}, 'rejected')" class="btn-animate px-4 py-1.5 border border-red-400 text-red-500 text-xs font-bold rounded hover:bg-red-50 uppercase tracking-tighter ${job.status === 'rejected' ? 'bg-red-500 text-white shadow-md' : ''}">Rejected</button>
                        </div>
                    `;
                    container.appendChild(card);
                });
            }
        }

        function setTab(tab) {
            activeTab = tab;
            ['all', 'interview', 'rejected'].forEach(t => {
                const btn = document.getElementById(`btn-${t}`);
                btn.className = (t === tab) ? 'btn-animate px-5 py-1.5 rounded text-sm font-semibold tab-active' : 'btn-animate px-5 py-1.5 rounded text-sm font-semibold tab-inactive';
            });
            render();
        }

        function updateStatus(id, status) {
            const job = jobsData.find(j => j.id === id);
            job.status = (job.status === status) ? 'all' : status;
            render();
        }

        function deleteJob(id) {
            // Animating out before deletion
            const target = event.target.closest('.job-card');
            target.style.opacity = '0';
            target.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                jobsData = jobsData.filter(j => j.id !== id);
                render();
            }, 200);
        }

        render();
    