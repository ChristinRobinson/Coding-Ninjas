function Student(id, name, club) {
	this.id = id;
	this.name = name;
	this.club = club;
	this.printDetails = function () {
		console.log(this.id, this.name, this.club);
	};
}
