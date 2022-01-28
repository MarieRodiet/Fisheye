class SorterForm {
    constructor(Media) {
        this.Media = Media;
    }

    onChangeSorter() {
        document.querySelector('.select')
            .addEventListener('change', e => {
                const sorter = e.target.value;
                this.sortMovies(sorter);
            })
    }

    sortMovies(sorter) {
        console.log("NOT SORTED! : " + this.Media);
        let copy = [...this.Media];
        let result = [];
        if (sorter == "popularity") {
            console.log(" you chose popularity");
            result = copy.sort(function (a, b) {
                return a.likes - b.likes;
            });
        }
        else if (sorter == "date") {
            console.log(" you chose date");
            result = copy.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });
        }
        else {
            console.log(" you chose title");
            result = copy.sort(function (a, b) {
                if (a.title < b.title) { return -1; }
                if (a.title > b.title) { return 1; }
                return 0;
            });
        }
    }



}