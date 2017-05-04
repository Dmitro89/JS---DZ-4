var playList = [
 {
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
 },
 {
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
 },
 {
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
 },
 {
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
 },
 {
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
 },
 {
 author: "AC/DC",
 song:"BACK IN BLACK"
 },
 {
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
 },
 {
 author: "METALLICA",
 song:"ENTER SANDMAN"
 }
];

function print(message){
	document.write(message);
}

function printList(list){
	var HTML_list = "<ol>";

	for (var i = 0; i < list.length; i++){

		HTML_list += '<li style="line-height: 1.5;">' + list[i].song +"</li>";
		
	}
	HTML_list += "</ol>";
	print(HTML_list);
}

printList(playList);
