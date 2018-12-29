$(document).ready(function(){
	var clicks=0;
	$("#getdata").click(function(){
		if(clicks==0){
			$("#displaydata").show();	
			//table declaration
			var listtable = $('#dataTables-example').DataTable();

			//College Selection
			var aec=$("#aec:checked").val() ? "AEC" : "aec"; 
			//alert(aec);
			var acet=$("#acet:checked").val() ? "ACET" : "acet";
			//alert(acet);
			var acoe=$("#acoe:checked").val() ? "ACE" : "acoe";
      //alert(acoe);
			//Branch Selection
			var cse=$("#cse:checked").val() ? "CSE" : "cse";
			var it=$("#it:checked").val() ? "IT" : "it";
			var ece=$("#ece:checked").val() ? "ECE" : "ece";
			var eee=$("#eee:checked").val() ? "EEE" : "eee";
			var mca=$("#mca:checked").val() ? "MCA" : "mca";		
			var civil=$("#civil:checked").val() ? "CE" : "civil";
			var pt=$("#pt:checked").val() ? "PT" : "pt";		
			var me=$("#me:checked").val() ? "ME" : "me";
			var agri=$("#agri:checked").val() ? "AgE" : "agri";
			var min=$("#min:checked").val() ? "MinE" : "min";

			//Percentage Selection
			var ssc=$("#ssc").val();
			var inter=$("#inter").val();
			var diploma=$("#diploma").val();
			var btech=$("#btech").val();

			//Backlogs Creteria
			var backlogs=$("#backlog_number").val();

			//Gender Selection
			var male=$("#male:checked").val() ? "M" : "male";
			var female=$("#female:checked").val() ? "F" : "female";

			//package
			var salary=$("#package").val();

			//console count AEC
			var aeccse=0;
			var aecit=0;
			var aecece=0;
			var aeceee=0;
			var aecmca=0;		
			var aeccivil=0;
			var aecpt=0;		
			var aecme=0;
			var aecmin=0;
			var aecagri=0;

			//console count ACET
			var acetcse=0;
			var acetit=0;
			var acetece=0;
			var aceteee=0;
			var acetmca=0;		
			var acetcivil=0;
			var acetpt=0;		
			var acetme=0;
			var acetmin=0;
			var acetagri=0;

			//console count ACE
			var acecse=0;
			var aceit=0;
			var aceece=0;
			var aceeee=0;
			var acemca=0;		
			var acecivil=0;
			var acept=0;		
			var aceme=0;
			var acemin=0;
			var aceagri=0;


			//getting data from server
			$.post('/cocubesdata',{aec:aec,acet:acet,acoe:acoe,cse:cse,agri:agri,min:min,it:it,ece:ece,eee:eee,mca:mca,civil:civil,pt:pt,me:me,ssc:ssc,salary:salary,inter:inter,diploma:diploma,btech:btech,backlogs:backlogs,male:male,female:female},function(data,textStatus,jqXHR){	
			    //alert('success');
				var jsondata=JSON.stringify(data);
			//	alert(jsondata);
				$("#count").html(data.length.toLocaleString('en-IN'));			
			//	alert(data.length);
				$.each($.parseJSON(jsondata),function(i,v){

					//AEC College
					if((v.College=='AEC')&&(v.Branch=='CSE')){
						aeccse++;
					}
					if((v.College=='AEC')&&(v.Branch=='IT')){
						aecit++;
					}
					if((v.College=='AEC')&&(v.Branch=='ECE')){
						aecece++;
					}
					if((v.College=='AEC')&&(v.Branch=='EEE')){
						aeceee++;
					}
					if((v.College=='AEC')&&(v.Branch=='MCA')){
						aecmca++;
					}				
					if((v.College=='AEC')&&(v.Branch=='CE')){
						aeccivil++;
					}
					if((v.College=='AEC')&&(v.Branch=='PT')){
						aecpt++;
					}				
					if((v.College=='AEC')&&(v.Branch=='ME')){
						aecme++;
					}
					if((v.College=='AEC')&&(v.Branch=='MinE')){
						aecmin++;
					}
					if((v.College=='AEC')&&(v.Branch=='AgE')){
						aecagri++;
					}

					//ACET College
					if((v.College=='ACET')&&(v.Branch=='CSE')){
						acetcse++;
					}
					if((v.College=='ACET')&&(v.Branch=='IT')){
						acetit++;
					}
					if((v.College=='ACET')&&(v.Branch=='ECE')){
						acetece++;
					}				
					if((v.College=='ACET')&&(v.Branch=='EEE')){
						aceteee++;
					}
					if((v.College=='ACET')&&(v.Branch=='MCA')){
						acetmca++;
					}				
					if((v.College=='ACET')&&(v.Branch=='CE')){
						acetcivil++;
					}
					if((v.College=='ACET')&&(v.Branch=='PT')){
						acetpt++;
					}				
					if((v.College=='ACET')&&(v.Branch=='ME')){
						acetme++;
					}
					if((v.College=='ACET')&&(v.Branch=='MinE')){
						acetmin++;
					}
					if((v.College=='ACET')&&(v.Branch=='AgE')){
						acetagri++;
					}

					//ACE College
					if((v.College=='ACE')&&(v.Branch=='CSE')){
						acecse++;
					}
					if((v.College=='ACE')&&(v.Branch=='IT')){
						aceit++;
					}
					if((v.College=='ACE')&&(v.Branch=='ECE')){
						aceece++;
					}
					if((v.College=='ACE')&&(v.Branch=='EEE')){
						aceeee++;
					}
					if((v.College=='ACE')&&(v.Branch=='MCA')){
						acemca++;
					}				
					if((v.College=='ACE')&&(v.Branch=='CE')){
						acecivil++;
					}
					if((v.College=='ACE')&&(v.Branch=='PT')){
						acept++;
					}				
					if((v.College=='ACE')&&(v.Branch=='ME')){
						aceme++;
					}
					if((v.College=='ACE')&&(v.Branch=='MinE')){
						acemin++;
					}
					if((v.College=='ACE')&&(v.Branch=='AgE')){
						aceagri++;
					}

					//$("#consolereport").append("<tr><td>CSE</td><td>"+aeccse+"</td><td>IT</td><td>"+aecit+"</td><td>ECE</td><td>"+aecece+"</td><td>EEE</td><td>"+aeceee+"<td>MCA</td><td>"+aecmca+"</td><td>MECH</td><td>"+aecmech+"</td><td>CIVIL</td><td>"+aeccivil+"</td><td>PT</td><td>"+aecpt+"</td><td>AE</td><td>"+aecae+"</td><td>ME</td><td>"+aecme+"</td></tr>")				
					
					listtable.row.add( [
							v.RollNo,
							v.StudentName,
							v.Branch,
							v.MobileNo,
							v.CollegeMail,
							v.College,
							v.Gender,
							v.SSC,
							v.INTER,
							v.DIPLOMA,
							v.Backlogs
						] ).draw(false);						
					});
				//$('#dataTables1-example').DataTable();  
	            var consoletable = $('#dataTables-example1').DataTable();
	            var aeccount=aeccse+aecit+aecece+aeceee+aecmca+aeccivil+aecpt+aecme+aecmin+aecagri;
	            //alert(aeccount);
	            $("#aecgraph_count").attr('data-percentage', aeccount);

	            //alert(aeccount);
	            var acetcount=acetcse+acetit+acetece+aceteee+acetmca+acetcivil+acetpt+acetme+acetmin+acetagri;
              //alert(acetcount);
	            var acecount=acecse+aceit+aceece+aceeee+acemca+acecivil+acept+aceme+acemin+aceagri;
	            //alert(acecount);
	            var grandtotal=aeccount+acetcount+acecount;                      
	            //alert(grandtotal);
					var rowNode = consoletable				
				    .rows.add( [
				    	       [ 'CSE',aeccse,acetcse,acecse,aeccse+acetcse+acecse ],
				    		   [ 'IT',aecit,acetit,aceit,aecit+acetit+aceit ],
				    		   [ 'ECE',aecece,acetece,aceece,aecece+acetece+aceece ],
				    		   [ 'EEE',aeceee,aceteee,aceeee,aeceee+aceteee+aceeee ],
				    		   [ 'MCA',aecmca,acetmca,acemca,aecmca+acetmca+acemca ],			    		   
				    		   [ 'CE',aeccivil,acetcivil,acecivil,aeccivil+acetcivil+acecivil ],
				    		   [ 'PT',aecpt,acetpt,acept,aecpt+acetpt+acept ],			    		   
				    		   [ 'ME',aecme,acetme,aceme,aecme+acetme+aceme ],
				    		   [ 'MinE',aecmin,acetmin,acemin,aecmin+acetmin+acemin ],
				    		   [ 'AgE',aecagri,acetagri,aceagri,aecagri+acetagri+aceagri ],
				    		   ['~ Overall Count ~',aeccount.toLocaleString('en-IN'),acetcount.toLocaleString('en-IN'),acecount.toLocaleString('en-IN'),grandtotal.toLocaleString('en-IN')]			    		   		    		   
				    		  ] ).draw(false).node();	         
				});	
				clicks++;
		}
		else{
			$("#displaydata").show();	
			//table declaration
			var listtable = $('#dataTables-example').DataTable();
			listtable.clear().draw();

			//College Selection
			var aec=$("#aec:checked").val() ? "AEC" : "aec"; 
			//alert('hi');
			var acet=$("#acet:checked").val() ? "ACET" : "acet";
			var acoe=$("#acoe:checked").val() ? "ACE" : "acoe";

			//Branch Selection
			var cse=$("#cse:checked").val() ? "CSE" : "cse";
			var it=$("#it:checked").val() ? "IT" : "it";
			var ece=$("#ece:checked").val() ? "ECE" : "ece";
			var eee=$("#eee:checked").val() ? "EEE" : "eee";
			var mca=$("#mca:checked").val() ? "MCA" : "mca";		
			var civil=$("#civil:checked").val() ? "CE" : "civil";
			var pt=$("#pt:checked").val() ? "PT" : "pt";		
			var me=$("#me:checked").val() ? "ME" : "me";
			var agri=$("#agri:checked").val() ? "AgE" : "agri";
			var min=$("#min:checked").val() ? "MinE" : "min";

			//Percentage Selection
			var ssc=$("#ssc").val();
			var inter=$("#inter").val();
			var diploma=$("#diploma").val();
			var btech=$("#btech").val();

			//Backlogs Creteria
			var backlogs=$("#backlog_number").val();

			//Gender Selection
			var male=$("#male:checked").val() ? "M" : "male";
			var female=$("#female:checked").val() ? "F" : "female";

			//console count AEC
			var aeccse=0;
			var aecit=0;
			var aecece=0;
			var aeceee=0;		
			var aecmech=0;
			var aeccivil=0;
			var aecpt=0;		
			var aecme=0;
			var aecmin=0;
			var aecagri=0;

			//console count ACET
			var acetcse=0;
			var acetit=0;
			var acetece=0;
			var aceteee=0;		
			var acetmech=0;
			var acetcivil=0;
			var acetpt=0;		
			var acetme=0;
			var acetmin=0;
			var acetagri=0;

			//console count ACE
			var acecse=0;
			var aceit=0;
			var aceece=0;
			var aceeee=0;		
			var acemech=0;
			var acecivil=0;
			var acept=0;		
			var aceme=0;
			var acemin=0;
			var aceagri=0;

			//getting data from server
			$.post('/cocubesdata',{aec:aec,acet:acet,acoe:acoe,cse:cse,it:it,ece:ece,agri:agri,min:min,eee:eee,mca:mca,civil:civil,pt:pt,me:me,ssc:ssc,inter:inter,diploma:diploma,btech:btech,backlogs:backlogs,male:male,female:female},function(data,textStatus,jqXHR){	
			  //alert(data);
				var jsondata=JSON.stringify(data);
			//	alert(jsondata);
				$("#count").html(data.length);			
			//	alert(data.length);
				$.each($.parseJSON(jsondata),function(i,v){

					//AEC College
					if((v.College=='AEC')&&(v.Branch=='CSE')){
						aeccse++;
					}
					if((v.College=='AEC')&&(v.Branch=='IT')){
						aecit++;
					}
					if((v.College=='AEC')&&(v.Branch=='ECE')){
						aecece++;
					}
					if((v.College=='AEC')&&(v.Branch=='EEE')){
						aeceee++;
					}
					if((v.College=='AEC')&&(v.Branch=='MCA')){
						aecmca++;
					}				
					if((v.College=='AEC')&&(v.Branch=='CE')){
						aeccivil++;
					}
					if((v.College=='AEC')&&(v.Branch=='PT')){
						aecpt++;
					}				
					if((v.College=='AEC')&&(v.Branch=='ME')){
						aecme++;
					}
					if((v.College=='AEC')&&(v.Branch=='MinE')){
						aecmin++;
					}
					if((v.College=='AEC')&&(v.Branch=='AgE')){
						aecagri++;
					}   
					//ACET College
					if((v.College=='ACET')&&(v.Branch=='CSE')){
						acetcse++;
					}
					if((v.College=='ACET')&&(v.Branch=='IT')){
						acetit++;
					}
					if((v.College=='ACET')&&(v.Branch=='ECE')){
						acetece++;
					}				
					if((v.College=='ACET')&&(v.Branch=='EEE')){
						aceteee++;
					}
					if((v.College=='ACET')&&(v.Branch=='MCA')){
						acetmca++;
					}				
					if((v.College=='ACET')&&(v.Branch=='CE')){
						acetcivil++;
					}
					if((v.College=='ACET')&&(v.Branch=='PT')){
						acetpt++;
					}				
					if((v.College=='ACET')&&(v.Branch=='ME')){
						acetme++;
					}
					if((v.College=='ACET')&&(v.Branch=='MinE')){
						acetmin++;
					}
					if((v.College=='ACET')&&(v.Branch=='AgE')){
						acetagri++;
					}

					//ACE College
					if((v.College=='ACE')&&(v.Branch=='CSE')){
						acecse++;
					}
					if((v.College=='ACE')&&(v.Branch=='IT')){
						aceit++;
					}

					if((v.College=='ACE')&&(v.Branch=='ECE')){
						aceece++;
					}
					if((v.College=='ACE')&&(v.Branch=='EEE')){
						aceeee++;
					}
					if((v.College=='ACE')&&(v.Branch=='MCA')){
						acemca++;
					}				
					if((v.College=='ACE')&&(v.Branch=='CE')){
						acecivil++;
					}
					if((v.College=='ACE')&&(v.Branch=='PT')){
						acept++;
					}				
					if((v.College=='ACE')&&(v.Branch=='ME')){
						aceme++;
					}
					if((v.College=='ACE')&&(v.Branch=='MinE')){
						acemin++;
					}
					if((v.College=='ACE')&&(v.Branch=='AgE')){
						aceagri++;
					}


					//$("#consolereport").append("<tr><td>CSE</td><td>"+aeccse+"</td><td>IT</td><td>"+aecit+"</td><td>ECE</td><td>"+aecece+"</td><td>EEE</td><td>"+aeceee+"<td>MCA</td><td>"+aecmca+"</td><td>MECH</td><td>"+aecmech+"</td><td>CIVIL</td><td>"+aeccivil+"</td><td>PT</td><td>"+aecpt+"</td><td>AE</td><td>"+aecae+"</td><td>ME</td><td>"+aecme+"</td></tr>")				

					listtable.row.add( [
							v.RollNo,
							v.StudentName,
							v.Branch,
							v.MobileNo,
							v.CollegeMail,
							v.College,
							v.Gender,
							v.SSC,
							v.INTER,
							v.DIPLOMA,
							v.Backlogs
						] ).draw(false);	
					});
				//$('#dataTables1-example').DataTable();  
	            var consoletable = $('#dataTables-example2').DataTable();
	             consoletable.clear().draw();
	            //alert(aeccount);
	            var aeccount=aeccse+aecit+aecece+aeceee+aecmca+aeccivil+aecpt+aecme+aecmin+aecagri;
	            //alert(acetcount);
	            var acetcount=acetcse+acetit+acetece+aceteee+acetmca+acetcivil+acetpt+acetme+acetmin+acetagri;
	            //alert(acecount);
	            var acecount=acecse+aceit+aceece+aceeee+acemca+acecivil+acept+aceme+acemin+aceagri;
	            //alert(grandtotal);
	            var grandtotal=aeccount+acetcount+acecount;                      
					var rowNode = consoletable				
				    .rows.add( [
				    	       [ 'CSE',aeccse,acetcse,acecse,aeccse+acetcse+acecse ],
				    		   [ 'IT',aecit,acetit,aceit,aecit+acetit+aceit ],
				    		   [ 'ECE',aecece,acetece,aceece,aecece+acetece+aceece ],
				    		   [ 'EEE',aeceee,aceteee,aceeee,aeceee+aceteee+aceeee ],
				    		   [ 'MCA',aecmca,acetmca,acemca,aecmca+acetmca+acemca ],			    		   
				    		   [ 'CE',aeccivil,acetcivil,acecivil,aeccivil+acetcivil+acecivil ],
				    		   [ 'PT',aecpt,acetpt,acept,aecpt+acetpt+acept ],			    		   
				    		   [ 'ME',aecme,acetme,aceme,aecme+acetme+aceme ],
				    		   [ 'MinE',aecmin,acetmin,acemin,aecmin+acetmin+acemin ],
				    		   [ 'AgE',aecagri,acetagri,aceagri,aecagri+acetagri+aceagri ],
				    		   ['~ Overall Count ~',aeccount,acetcount,acecount,grandtotal]			    		   		    		   
				    		  ] ).draw(false).node();	                         
			});	
	  }
  });
});


 
