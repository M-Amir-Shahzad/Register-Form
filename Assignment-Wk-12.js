var name = prompt("Enter Name:");
		var sname = prompt("Enter School Name:")
		var year = prompt("Enter Year:")
		var age = prompt("Enter Age:")
		var rollno = prompt("Enter Roll No:")
		var eng = prompt("Enter Marks ENGLISH:")
		var urdu = prompt("Enter Marks URDU:")
		var math = prompt("Enter Marks MATHEMATICS:")
		var com = prompt("Enter Marks COMPUTER:")
		var phy = prompt("Enter Marks PHYSICS:")
		var chem = prompt("Enter Marks CHEMISTRY:")
		var total = parseInt(eng) + parseInt(urdu) + parseInt(math) +
			parseInt(com) + parseInt(phy) + parseInt(chem);
		var avg = (parseInt(eng) + parseInt(urdu) + parseInt(math) +
			parseInt(com) + parseInt(phy) + parseInt(chem)) / 6;
		
		var totalMarks = total;
		var remarks;
		var grade;
		if (avg > 80 && avg <= 100) {
			remarks = 'First Class';
			grade = "A";
		}
		else if (avg > 60 && avg < 80) {
			remarks = '2nd Class';
			grade = "B";
		}
		else if (avg > 50 && avg < 60) {
			remarks = 'Third Class';
			grade = "C";
		}
		else {
			remarks = "Fail";
			grade = "F";

		}