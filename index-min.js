window.loadLeverJobs=function(e){function t(e){return p[e]||e}function n(e){return void 0===e?"":e.replace(/[&<>]/g,t)}function a(e){return""==e||void 0===e?"uncategorized":(e=n(e),e.replace(/\s+/gi,""))}function r(e){function t(e){return e.department==v}function r(e){return e.team==u}if(e){"string"==typeof e&&(e=JSON.parse(e));for(var s="",o=[],d=0;d<e.length;d++)if(e[d]&&e[d].postings&&e[d].postings.length>0){var m=n(e[d].title||"Uncategorized"),p=a(m);for(j=0;j<e[d].postings.length;j++){var c=e[d].postings[j],g=c.categories.team||"Uncategorized",u=a(g),f=c.categories.department||"Uncategorized",v=a(f),h=c.hostedUrl+i;-1===o.findIndex(t)?(newDepartmentToAdd={department:v,departmentTitle:f,teams:[{team:u,teamTitle:g,postings:[]}]},o.push(newDepartmentToAdd)):(departmentIndex=o.findIndex(t),newTeamToAdd={team:u,teamTitle:g,postings:[]},-1===o[departmentIndex].teams.map(function(e){return e.team}).indexOf(u)&&o[departmentIndex].teams.push(newTeamToAdd)),departmentIndex=o.findIndex(t),teamIndex=o[departmentIndex].teams.findIndex(r),o[departmentIndex].teams[teamIndex].postings.push(c)}}o.sort(function(e,t){var n=e.department.toLowerCase(),a=t.department.toLowerCase();return n<a?-1:n>a?1:0});for(var d=0;d<o.length;d++){if(o.length>=2)var b=!0;for(b&&(s+='<section class="lever-department" data-department-title="'+o[d].department+'"><h3 class="lever-department-title">'+n(o[d].departmentTitle)+"</h3>"),j=0;j<o[d].teams.length;j++){s+='<ul class="lever-team" data-team="'+o[d].teams[j].team+'"><li><h4 class="lever-team-title">'+n(o[d].teams[j].teamTitle)+"</h4><ul>";for(var w=0;w<o[d].teams[j].postings.length;w++)s+='<li class="lever-job" data-team="'+o[d].teams[j].postings[w].categories.team+'" data-location="'+o[d].teams[j].postings[w].categories.location+'"data-work-type="'+o[d].teams[j].postings[w].categories.commitment+'"><a class="lever-job-title" href="'+o[d].teams[j].postings[w].hostedUrl+'"">'+n(o[d].teams[j].postings[w].text)+'</a><span class="lever-job-tag">'+(n(o[d].teams[j].postings[w].categories.location)||"")+"</span></li>";s+="</ul></li></ul>"}b&&(s+="</section>")}s+="</ul>",l.innerHTML=s}}function s(e){var t=document.head,n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)}var o=window.location.href,i="",d="?lever-",l=document.getElementById("lever-jobs-container")||document.body;if(o.indexOf("?lever-")>=0){var m=o.split("?lever-");i="?lever-"+m[1]}var p={"&":"&amp;","<":"&lt;",">":"&gt;"},c="https://api.lever.co/v0/postings/"+e.accountName+"?group=team&mode=json";e.includeCss&&s("https://andreasmb.github.io/lever-jobs-embed/embed-css/style.css");var g=new XMLHttpRequest;g.open("GET",c,!0),g.responseType="json",g.onload=function(){200==g.status?r(g.response):(console.log("Error fetching jobs."),l.innerHTML="<p class='lever-error'>Error fetching jobs.</p>")},g.onerror=function(){console.log("Error fetching jobs."),l.innerHTML="<p class='lever-error'>Error fetching jobs.</p>"},g.send()},window.loadLeverJobs(window.leverJobsOptions);