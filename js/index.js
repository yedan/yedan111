//->��̬����REM�Ļ������
~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);

//->������������г�ʼ������
~function () {
    var step = 0, divList = null;
    var swp = new Swiper(".swiper-container", {
        loop: true,
        direction: 'vertical',
        onSlidePrevEnd: function () {
            step--;
            change();
            if (step === 0) {
                step = 4;
            }
        },
        onSlideNextEnd: function () {
            step++;
            change();
            if (step === 5) {
                step = 1;
            }
        }
    });


    function change() {
        divList = document.querySelectorAll(".swiper-slide");
        [].forEach.call(divList, function (curDiv, index) {
            curDiv.id = index === step ? curDiv.getAttribute("trueId") : null;
        });
    }

    //->����������һ��loop:true��ʱ��,���Լ�����ͷ�ͽ�β������һ��һģһ����,�����һ���Ҫ������λ������ʵ�ĵ�һ�š�,���Կ�ʼ���Լ������л�һ��,�����ó�ʼ��step=0����
}();
