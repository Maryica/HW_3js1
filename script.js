const musicCollection = [
    {
        title: "A Night at the Opera",
        artist: "Queen",
        year: "1975"
    },
    {
        title: "From Under the Cork Tree",
        artist: "Fall Out Boy",
        year: "2005"
    },
    {
        title: "From Under the Cork Tree",
        artist: "Fall Out Boy",
        year: "2005"
    },
    {
        title: "Evermore",
        artist: "Taylor Swift",
        year: "2020"
    }

];

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ? {
                done: false, value: musicCollection[this.current++]
            } : { done: true };
        }
    }
}
for (let musicCollections of musicCollection) {
    console.log(`Название альбома: ${musicCollections.title}, Исполнитель: ${musicCollections.artist}, Год выпуска: ${musicCollections.year}`);
}
