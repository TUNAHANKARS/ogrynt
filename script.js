
const students = [];

let nextId = 1;

function addStudent() {
    let studentName = prompt("Öğrencinin adını ve soyadını giriniz:");

    if (studentName === null) {
        alert("Öğrenci ekleme işlemi iptal edildi.");
        return;
    }

    if (studentName === "") {
        alert("Öğrenci adı boş bırakılamaz");
        return;
    }

    const newStudent = {
        id: nextId,
        name: studentName
    };

    students.push(newStudent);
    nextId++;

    alert("Öğrenci başarıyla eklendi");
}

function listStudents() {
    if (students.length === 0) {
        alert("öğrenci listesi şu an boş.");
        return;
    }

    let studentList = "ÖĞRENCİ LİSTESİ\n\n";

    students.forEach(function(student) {
        studentList += "ID: " + student.id +
                       " - İsim: " + student.name + "\n";
    });

    alert(studentList);
}

function deleteStudent() {
    if (students.length === 0) {
        alert("Silinecek öğrenci bulunmamaktadır.");
        return;
    }

    let studentId = prompt("Silmek istediğiniz öğrencinin ID numarasını giriniz:");

    if (studentId === null) {
        alert("Öğrenci silme işlemi iptal edildi.");
        return;
    }

    if (studentId === "") {
        alert("ID alanı boş bırakılamaz");
        return;
    }

    if (!Number.isInteger(studentId) || studentId <= 0) {
        alert("Lütfen geçerli bir ID numarası giriniz");
        return;
    }

    const studentIndex = students.findIndex(function(student) {
        return student.id === studentId;
    });

    if (studentIndex === -1) {
        alert("Bu ID numarasına sahip öğrenci bulunamadı!");
        return;
    }

    students.splice(studentIndex, 1);

    alert("Öğrenci başarıyla silindi");
}

function startApp() {

    let isRunning = true;

    while (isRunning) {

        let choice = prompt(
            "1 - Öğrenci Ekle\n" +
            "2 - Öğrencileri Listele\n" +
            "3 - Öğrenci Sil\n" +
            "4 - Uygulamadan Çık\n\n" +
            "Lütfen yapmak istediğiniz işlemi seçiniz:"
        );

        if (choice === null) {
            alert("Çıkış yapmak için 4 numaralı seçeneği kullanınız.");
            continue;
        }

        choice = choice.trim();

        switch (choice) {

            case "1":
                addStudent();
                break;

            case "2":
                listStudents();
                break;

            case "3":
                deleteStudent();
                break;

            case "4":
                alert("Öğrenci Yönetim Sisteminden çıkış yapılıyor. Hoşça kalın!");
                isRunning = false;
                break;

            default:
                alert("Hatalı seçim yaptınız! Lütfen 1-4 arasında bir değer giriniz.");
        }
    }
}

startApp();
