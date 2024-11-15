(function() {
    emailjs.init("ChNzpVN8Zi0TD2yAU");
})();

function sendFollowerRequest() {
    var username = document.getElementById("username").value;

    if (username) {
        emailjs.send("Service_diavolo12", "template_009c0je", {
            username: username
        }).then(function(response) {
            alert("تم إرسال الطلب بنجاح!");
            document.getElementById("followerForm").reset();
        }, function(error) {
            alert("فشل في إرسال الطلب، حاول مرة أخرى.");
        });
    } else {
        alert("يرجى إدخال اسم المستخدم.");
    }
}
