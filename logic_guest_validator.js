var daftarTamu = ['Angela','Jack','Pan',"James","Lara",'Jason'];
var tamuBaru = prompt('siapa nanamu?');
var validasi = daftarTamu.includes(tamuBaru)
if (validasi === true){
    alert("Welcome");
} else {
    alert("Pergi SANA!");
}
