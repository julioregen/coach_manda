/*
Judul Project : Main Yuk!
Deskripsi : Main Yuk! adalah sebuah permainan seberapa sayang pacar kita. Main Yuk!
            dibuat dengan menggunakan Jquery.
Pembuat : Muhammad Surya Jayadiprana
Disclaimer : Tolong jangan hapus bagian ini, karena menandakan anda mengsupport
            developer lokal. Terima kasih
*/

// Dialog
$(document).on('click', '#tombolPopup', function (e) {
    e.preventDefault();
    Swal.fire({
        icon: 'info',
        title: 'Halo Mandaa',
        text: 'Gua mau ngomong sesuatu nih',
        showClass: {
            popup: 'animate__animated animate__tada'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    }).then(() => {
        Swal.fire({
            title: 'Jawab yang jujur ya ngab',
            showClass: {
                popup: 'animate__animated animate__jackInTheBox'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        }).then(() => {
            Swal.fire({
                icon: 'error',
                title: 'Awas aja kalo boong',
                text: 'Kalo boong eek nya galancar nanti',
                showClass: {
                    popup: 'animate__animated animate__jackInTheBox'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            }).then(() => {
                Swal.fire({
                    title: 'Masukkin nama kamu dulu dong',
                    showClass: {
                        popup: 'animate__animated animate__jackInTheBox'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    },
                    html: '<br><input class="form-control" placeholder="Masukkan nama" id="input-field">',
                    content: {
                        element: "input",
                        attributes: {
                            placeholder: "Masukkan nama",
                            type: "text",
                            id: "input-field",
                            className: "form-control"
                        },
                    },
                    buttons: {
                        cancel: {
                            visible: true,
                            className: 'btn btn-danger'
                        },
                        confirm: {
                            className: 'btn btn-success'
                        }
                    },
                }).then(
                    function () {
                        const nama = $('#input-field').val();
                        console.log(nama);
                        Swal.fire({
                            title: nama + ' ' + ', lu ngerasa komunikasi kita udah kurang gasi?',
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Iya lagi',
                            cancelButtonText: 'Enggak',
                            showClass: {
                                popup: 'animate__animated animate__jackInTheBox'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOut'
                            }
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: 'Gua juga ngerasa kayanya komunikasi kita udah jelek tau man, gak kaya dulu lagi ',
                                    showClass: {
                                        popup: 'animate__animated animate__jackInTheBox'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOut'
                                    }
                                }).then(() => {
                                    Swal.queue([{
                                        title: 'Seberapa jelek menurut lu komunikasi kita?',
                                        confirmButtonText: 'Submit',
                                        showCancelButton: true,
                                        text: 'Coba isi pengen tau seberapa jelek komunikasinya',
                                        showClass: {
                                            popup: 'animate__animated animate__jackInTheBox'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOut'
                                        },
                                        showLoaderOnConfirm: true,
                                        input: 'range',
                                        inputAttributes: {
                                            min: 10,
                                            max: 100,
                                            step: 10,
                                            class: "form-range"
                                        },
                                        inputValue: 20,
                                        preConfirm: function (value) {
                                            Swal.insertQueueStep({
                                                title: 'Mungkin gua tau man lu sibuk aja (klo banget presiden kan?) dsbg atau lost interest makanya bisa' + ' ' + value + '% doang',
                                                text: 'tapi kalo emang udah gamau lanjut ngobrol aja, gua bakal ngerti kok',
                                                icon: "info",
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                }
                                            })
                                        },
                                        allowOutsideClick: () => !Swal.isLoading()
                                    }]).then(() => {
                                        Swal.fire({
                                            title: 'Sekarang' + ' ' + nama + ' ' + 'mau perbaikin komunikasi kita gag?',
                                            icon: 'question',
                                            type: 'question',
                                            showClass: {
                                                popup: 'animate__animated animate__jackInTheBox'
                                            },
                                            hideClass: {
                                                popup: 'animate__animated animate__fadeOut'
                                            },
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'MAUUUUUU',
                                            cancelButtonText: 'Enggak deh',
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                Swal.fire({
                                                    title: 'Nah kalo gitu ayo kita perbaikin bareng" man',
                                                    icon: 'info',
                                                    showClass: {
                                                        popup: 'animate__animated animate__jackInTheBox'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOut'
                                                    }
                                                }).then(() => {
                                                    Swal.fire({
                                                        title: 'Terakhir nih',
                                                        icon: 'info',
                                                        text: 'Waktu itu lu pernah mau minta dibuatin kaya gini kan',
                                                        showClass: {
                                                            popup: 'animate__animated animate__jackInTheBox'
                                                        },
                                                        hideClass: {
                                                            popup: 'animate__animated animate__fadeOut'
                                                        }
                                                    }).then(() => {
                                                        $("#tombolPopup").remove();
                                                        $("#bubble").remove();
                                                        $.playSound('asset/audio/mine.mp3');

                                                        var c = document.createElement('canvas');
                                                        c.id = 'alx';
                                                        document.body.appendChild(c);

                                                        var b = document.body;
                                                        var a = c.getContext('2d');

                                                        e = [];
                                                        h = [];
                                                        WIDTH = c.width = innerWidth;
                                                        HEIGHT = c.height = innerHeight;
                                                        v = 32 + 16 + 8;
                                                        R = Math.random;
                                                        C = Math.cos;
                                                        Y = 6.3;

                                                        for (i = 0; i < Y ; i += 0.2) 
                                                            h.push([WIDTH / 2  + 210 * Math.pow(Math.sin(i), 3), 
                                                            HEIGHT / 2  + 13 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

                                                        for (i = 0; i < Y  ; i += 0.4) 
                                                            h.push([WIDTH / 2  + 150 * Math.pow(Math.sin(i), 3), 
                                                            HEIGHT / 2  + 9 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

                                                        for (i = 0; i < Y  ; i += 0.8) 
                                                            h.push([WIDTH / 2  + 90 * Math.pow(Math.sin(i), 3), 
                                                            HEIGHT / 2  + 5 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

                                                        for (i = 0; i < v;) {
                                                            x = R() * WIDTH;
                                                            y = R() * HEIGHT;
                                                            H = 80 * (i / v) + Math.random * 100;
                                                            S = 40 * R() + 60;
                                                            B = 60 * R() + 20;
                                                            f = [];
                                                            for (k = 0; k < v;) f[k++] = {
                                                                x: x,
                                                                y: y,
                                                                X: 0,
                                                                Y: 0,
                                                                R: 1 - k / v + 1,
                                                                S: R() + 1,
                                                                q: ~~(R() * v),
                                                                D: 2 * (i % 2) - 1,
                                                                F: 0.2 * R() + 0.7,
                                                                f: "hsla(" + ~~H + "," + ~~S + "%," + ~~B + "%,.1)"
                                                            };
                                                            e[i++] = f
                                                        }

                                                        function path(d) {
                                                            a.fillStyle = d.f;
                                                            a.beginPath();
                                                            a.arc(d.x, d.y, d.R, 0, Y, 1);
                                                            a.closePath();
                                                            a.fill()
                                                        }
                                                        setInterval(function () {
                                                            a.fillStyle = "rgba(0,0,0,.2)";
                                                            a.fillRect(0, 0, WIDTH, HEIGHT);
                                                            for (i = v; i--;) {
                                                                f = e[i];
                                                                u = f[0];
                                                                q = h[u.q];
                                                                D = u.x - q[0];
                                                                E = u.y - q[1];
                                                                G = Math.sqrt(D * D + E * E);
                                                                10 > G && (0.95 < R() ? u.q = ~~ (R() * v) : (0.99 < R() && (u.D *= -1), u.q += u.D, u.q %= v, 0 > u.q && (u.q += v)));
                                                                u.X += -D / G * u.S;
                                                                u.Y += -E / G * u.S;
                                                                u.x += u.X;
                                                                u.y += u.Y;
                                                                path(u);
                                                                u.X *= u.F;
                                                                u.Y *= u.F;
                                                                for (k = 0; k < v - 1;) T = f[k], N = f[++k], N.x -= 0.7 * (N.x - T.x), N.y -= 0.7 * (N.y - T.y), path(N)
                                                            }
                                                            a.font = "50px Arial";
                                                            a.fillStyle = "white";
                                                            a.textAlign = "center";
                                                            a.fillText("Amanda", WIDTH / 2, HEIGHT / 2);
                                                        }, 25);
                                                        confetti.start();
                                                    })
                                                })
                                            } else {
                                                Swal.fire({
                                                    title: 'Yaudah man kalo gabisa emang gausah dipaksa',
                                                    text: 'Emang momennya aja gak pas kali ya pas kita kenal',
                                                }).then(() => {
                                                    Swal.fire({
                                                        imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                        imageHeight: 300,
                                                        showClass: {
                                                            popup: 'animate__animated animate__jackInTheBox'
                                                        },
                                                        hideClass: {
                                                            popup: 'animate__animated animate__fadeOut'
                                                        }
                                                    }).then(() => {
                                                        $("body,html").css("background-color", "#2d3436");
                                                        $("#tombolPopup").remove();
                                                        $("#bubble").remove();
                                                        $("#potek").removeClass("tulisan");
                                                        $(document).ready(function () {
                                                            var canvas = $('#canvas')[0];
                                                            canvas.width = window.innerWidth;
                                                            canvas.height = window.innerHeight;
                                                            if (canvas.getContext) {
                                                                var ctx = canvas.getContext('2d');
                                                                var w = canvas.width;
                                                                var h = canvas.height;
                                                                ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                                ctx.lineWidth = 1;
                                                                ctx.lineCap = 'round';
                                                                var init = [];
                                                                var maxParts = 1000;
                                                                for (var a = 0; a < maxParts; a++) {
                                                                    init.push({
                                                                        x: Math.random() * w,
                                                                        y: Math.random() * h,
                                                                        l: Math.random() * 1,
                                                                        xs: -4 + Math.random() * 4 + 2,
                                                                        ys: Math.random() * 10 + 10
                                                                    })
                                                                }
                                                                var particles = [];
                                                                for (var b = 0; b < maxParts; b++) {
                                                                    particles[b] = init[b];
                                                                }

                                                                function draw() {
                                                                    ctx.clearRect(0, 0, w, h);
                                                                    for (var c = 0; c < particles.length; c++) {
                                                                        var p = particles[c];
                                                                        ctx.beginPath();
                                                                        ctx.moveTo(p.x, p.y);
                                                                        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                        ctx.stroke();
                                                                    }
                                                                    move();
                                                                }

                                                                function move() {
                                                                    for (var b = 0; b < particles.length; b++) {
                                                                        var p = particles[b];
                                                                        p.x += p.xs;
                                                                        p.y += p.ys;
                                                                        if (p.x > w || p.y > h) {
                                                                            p.x = Math.random() * w;
                                                                            p.y = -20;
                                                                        }
                                                                    }
                                                                }
                                                                setInterval(draw, 30);
                                                            }
                                                        })
                                                        $.playSound('asset/audio/sakit.mp3');
                                                    })
                                                })
                                            }
                                        })
                                    })
                                })
                            } else {
                                Swal.fire({
                                    title: 'Yang benerrr? Gua tanya sekali lagi nih?',
                                    icon: 'question',
                                    text: 'Coba jawab yang bener',
                                    showCancelButton: true,
                                    confirmButtonText: 'Iya lagi',
                                    cancelButtonText: 'Beneran, engga',
                                    confirmButtonColor: '#d33',
                                    cancelButtonColor: '#3085d6',
                                    showClass: {
                                        popup: 'animate__animated animate__jackInTheBox'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOut'
                                    }
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        Swal.fire({
                                            title: 'Gua juga ngerasa kayanya komunikasi kita udah jelek tau man, gak kaya dulu lagi ',
                                            showClass: {
                                                popup: 'animate__animated animate__jackInTheBox'
                                            },
                                            hideClass: {
                                                popup: 'animate__animated animate__fadeOut'
                                            }
                                        }).then(() => {
                                            Swal.queue([{
                                                title: 'Seberapa jelek menurut lu komunikasi kita?',
                                                confirmButtonText: 'Submit',
                                                showCancelButton: true,
                                                text: 'Coba isi pengen tau seberapa jelek komunikasinya',
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                },
                                                showLoaderOnConfirm: true,
                                                input: 'range',
                                                inputAttributes: {
                                                    min: 10,
                                                    max: 100,
                                                    step: 10,
                                                    class: "form-range"
                                                },
                                                inputValue: 20,
                                                preConfirm: function (value) {
                                                    Swal.insertQueueStep({
                                                        title: 'Mungkin gua tau man lu sibuk aja (klo banget presiden kan?) dsbg atau lost interest makanya bisa' + ' ' + value + '% doang',
                                                        text: 'tapi kalo emang udah gamau lanjut ngobrol aja, gua bakal ngerti kok',
                                                        icon: "info",
                                                        showClass: {
                                                            popup: 'animate__animated animate__jackInTheBox'
                                                        },
                                                        hideClass: {
                                                            popup: 'animate__animated animate__fadeOut'
                                                        }
                                                    })
                                                },
                                                allowOutsideClick: () => !Swal.isLoading()
                                            }]).then(() => {
                                                Swal.fire({
                                                    title: 'Sekarang' + ' ' + nama + ' ' + 'mau perbaikin komunikasi kita gag?',
                                                    icon: 'question',
                                                    type: 'question',
                                                    showClass: {
                                                        popup: 'animate__animated animate__jackInTheBox'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOut'
                                                    },
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'MAUUUUUU',
                                                    cancelButtonText: 'Enggak deh',
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire({
                                                            title: 'Nah kalo gitu ayo kita perbaikin bareng" man',
                                                            icon: 'info',
                                                            showClass: {
                                                                popup: 'animate__animated animate__jackInTheBox'
                                                            },
                                                            hideClass: {
                                                                popup: 'animate__animated animate__fadeOut'
                                                            }
                                                        }).then(() => {
                                                            Swal.fire({
                                                                title: 'Terakhir nih',
                                                                icon: 'info',
                                                                text: 'Waktu itu lu pernah mau minta dibuatin kaya gini kan',
                                                                showClass: {
                                                                    popup: 'animate__animated animate__jackInTheBox'
                                                                },
                                                                hideClass: {
                                                                    popup: 'animate__animated animate__fadeOut'
                                                                }
                                                            }).then(() => {
                                                                $("#tombolPopup").remove();
                                                                $("#bubble").remove();
                                                                $.playSound('asset/audio/mine.mp3');
        
                                                                var c = document.createElement('canvas');
                                                                c.id = 'alx';
                                                                document.body.appendChild(c);
        
                                                                var b = document.body;
                                                                var a = c.getContext('2d');
        
                                                                e = [];
                                                                h = [];
                                                                WIDTH = c.width = innerWidth;
                                                                HEIGHT = c.height = innerHeight;
                                                                v = 32 + 16 + 8;
                                                                R = Math.random;
                                                                C = Math.cos;
                                                                Y = 6.3;
        
                                                                for (i = 0; i < Y ; i += 0.2) 
                                                                    h.push([WIDTH / 2  + 210 * Math.pow(Math.sin(i), 3), 
                                                                    HEIGHT / 2  + 13 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);
        
                                                                for (i = 0; i < Y  ; i += 0.4) 
                                                                    h.push([WIDTH / 2  + 150 * Math.pow(Math.sin(i), 3), 
                                                                    HEIGHT / 2  + 9 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);
        
                                                                for (i = 0; i < Y  ; i += 0.8) 
                                                                    h.push([WIDTH / 2  + 90 * Math.pow(Math.sin(i), 3), 
                                                                    HEIGHT / 2  + 5 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);
        
                                                                for (i = 0; i < v;) {
                                                                    x = R() * WIDTH;
                                                                    y = R() * HEIGHT;
                                                                    H = 80 * (i / v) + Math.random * 100;
                                                                    S = 40 * R() + 60;
                                                                    B = 60 * R() + 20;
                                                                    f = [];
                                                                    for (k = 0; k < v;) f[k++] = {
                                                                        x: x,
                                                                        y: y,
                                                                        X: 0,
                                                                        Y: 0,
                                                                        R: 1 - k / v + 1,
                                                                        S: R() + 1,
                                                                        q: ~~(R() * v),
                                                                        D: 2 * (i % 2) - 1,
                                                                        F: 0.2 * R() + 0.7,
                                                                        f: "hsla(" + ~~H + "," + ~~S + "%," + ~~B + "%,.1)"
                                                                    };
                                                                    e[i++] = f
                                                                }
        
                                                                function path(d) {
                                                                    a.fillStyle = d.f;
                                                                    a.beginPath();
                                                                    a.arc(d.x, d.y, d.R, 0, Y, 1);
                                                                    a.closePath();
                                                                    a.fill()
                                                                }
                                                                setInterval(function () {
                                                                    a.fillStyle = "rgba(0,0,0,.2)";
                                                                    a.fillRect(0, 0, WIDTH, HEIGHT);
                                                                    for (i = v; i--;) {
                                                                        f = e[i];
                                                                        u = f[0];
                                                                        q = h[u.q];
                                                                        D = u.x - q[0];
                                                                        E = u.y - q[1];
                                                                        G = Math.sqrt(D * D + E * E);
                                                                        10 > G && (0.95 < R() ? u.q = ~~ (R() * v) : (0.99 < R() && (u.D *= -1), u.q += u.D, u.q %= v, 0 > u.q && (u.q += v)));
                                                                        u.X += -D / G * u.S;
                                                                        u.Y += -E / G * u.S;
                                                                        u.x += u.X;
                                                                        u.y += u.Y;
                                                                        path(u);
                                                                        u.X *= u.F;
                                                                        u.Y *= u.F;
                                                                        for (k = 0; k < v - 1;) T = f[k], N = f[++k], N.x -= 0.7 * (N.x - T.x), N.y -= 0.7 * (N.y - T.y), path(N)
                                                                    }
                                                                    a.font = "50px Arial";
                                                                    a.fillStyle = "white";
                                                                    a.textAlign = "center";
                                                                    a.fillText("Amanda", WIDTH / 2, HEIGHT / 2);
                                                                }, 25);
                                                                confetti.start();
                                                            })
                                                        })
                                                    } else {
                                                        Swal.fire({
                                                            title: 'Yaudah man kalo gabisa emang gausah dipaksa',
                                                            text: 'Emang momennya aja gak pas kali ya pas kita kenal',
                                                        }).then(() => {
                                                            Swal.fire({
                                                                imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                                imageHeight: 300,
                                                                showClass: {
                                                                    popup: 'animate__animated animate__jackInTheBox'
                                                                },
                                                                hideClass: {
                                                                    popup: 'animate__animated animate__fadeOut'
                                                                }
                                                            }).then(() => {
                                                                $("body,html").css("background-color", "#2d3436");
                                                                $("#tombolPopup").remove();
                                                                $("#bubble").remove();
                                                                $("#potek").removeClass("tulisan");
                                                                $(document).ready(function () {
                                                                    var canvas = $('#canvas')[0];
                                                                    canvas.width = window.innerWidth;
                                                                    canvas.height = window.innerHeight;
                                                                    if (canvas.getContext) {
                                                                        var ctx = canvas.getContext('2d');
                                                                        var w = canvas.width;
                                                                        var h = canvas.height;
                                                                        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                                        ctx.lineWidth = 1;
                                                                        ctx.lineCap = 'round';
                                                                        var init = [];
                                                                        var maxParts = 1000;
                                                                        for (var a = 0; a < maxParts; a++) {
                                                                            init.push({
                                                                                x: Math.random() * w,
                                                                                y: Math.random() * h,
                                                                                l: Math.random() * 1,
                                                                                xs: -4 + Math.random() * 4 + 2,
                                                                                ys: Math.random() * 10 + 10
                                                                            })
                                                                        }
                                                                        var particles = [];
                                                                        for (var b = 0; b < maxParts; b++) {
                                                                            particles[b] = init[b];
                                                                        }
        
                                                                        function draw() {
                                                                            ctx.clearRect(0, 0, w, h);
                                                                            for (var c = 0; c < particles.length; c++) {
                                                                                var p = particles[c];
                                                                                ctx.beginPath();
                                                                                ctx.moveTo(p.x, p.y);
                                                                                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                                ctx.stroke();
                                                                            }
                                                                            move();
                                                                        }
        
                                                                        function move() {
                                                                            for (var b = 0; b < particles.length; b++) {
                                                                                var p = particles[b];
                                                                                p.x += p.xs;
                                                                                p.y += p.ys;
                                                                                if (p.x > w || p.y > h) {
                                                                                    p.x = Math.random() * w;
                                                                                    p.y = -20;
                                                                                }
                                                                            }
                                                                        }
                                                                        setInterval(draw, 30);
                                                                    }
                                                                })
                                                                $.playSound('asset/audio/sakit.mp3');
                                                            })
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    } else {
                                        Swal.fire({
                                            title: 'Nah kalo gitu ayo kita perbaikin bareng" man',
                                            icon: 'info',
                                            showClass: {
                                                popup: 'animate__animated animate__jackInTheBox'
                                            },
                                            hideClass: {
                                                popup: 'animate__animated animate__fadeOut'
                                            }
                                        }).then(() => {
                                            Swal.fire({
                                                title: 'Terakhir nih',
                                                icon: 'info',
                                                text: 'Waktu itu lu pernah mau minta dibuatin kaya gini kan',
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                }
                                            }).then(() => {
                                                $("#tombolPopup").remove();
                                                $("#bubble").remove();
                                                $.playSound('asset/audio/mine.mp3');

                                                var c = document.createElement('canvas');
                                                c.id = 'alx';
                                                document.body.appendChild(c);

                                                var b = document.body;
                                                var a = c.getContext('2d');

                                                e = [];
                                                h = [];
                                                WIDTH = c.width = innerWidth;
                                                HEIGHT = c.height = innerHeight;
                                                v = 32 + 16 + 8;
                                                R = Math.random;
                                                C = Math.cos;
                                                Y = 6.3;

                                                for (i = 0; i < Y ; i += 0.2) 
                                                    h.push([WIDTH / 2  + 210 * Math.pow(Math.sin(i), 3), 
                                                    HEIGHT / 2  + 13 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

                                                for (i = 0; i < Y  ; i += 0.4) 
                                                    h.push([WIDTH / 2  + 150 * Math.pow(Math.sin(i), 3), 
                                                    HEIGHT / 2  + 9 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

                                                for (i = 0; i < Y  ; i += 0.8) 
                                                    h.push([WIDTH / 2  + 90 * Math.pow(Math.sin(i), 3), 
                                                    HEIGHT / 2  + 5 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))]);

                                                for (i = 0; i < v;) {
                                                    x = R() * WIDTH;
                                                    y = R() * HEIGHT;
                                                    H = 80 * (i / v) + Math.random * 100;
                                                    S = 40 * R() + 60;
                                                    B = 60 * R() + 20;
                                                    f = [];
                                                    for (k = 0; k < v;) f[k++] = {
                                                        x: x,
                                                        y: y,
                                                        X: 0,
                                                        Y: 0,
                                                        R: 1 - k / v + 1,
                                                        S: R() + 1,
                                                        q: ~~(R() * v),
                                                        D: 2 * (i % 2) - 1,
                                                        F: 0.2 * R() + 0.7,
                                                        f: "hsla(" + ~~H + "," + ~~S + "%," + ~~B + "%,.1)"
                                                    };
                                                    e[i++] = f
                                                }

                                                function path(d) {
                                                    a.fillStyle = d.f;
                                                    a.beginPath();
                                                    a.arc(d.x, d.y, d.R, 0, Y, 1);
                                                    a.closePath();
                                                    a.fill()
                                                }
                                                setInterval(function () {
                                                    a.fillStyle = "rgba(0,0,0,.2)";
                                                    a.fillRect(0, 0, WIDTH, HEIGHT);
                                                    for (i = v; i--;) {
                                                        f = e[i];
                                                        u = f[0];
                                                        q = h[u.q];
                                                        D = u.x - q[0];
                                                        E = u.y - q[1];
                                                        G = Math.sqrt(D * D + E * E);
                                                        10 > G && (0.95 < R() ? u.q = ~~ (R() * v) : (0.99 < R() && (u.D *= -1), u.q += u.D, u.q %= v, 0 > u.q && (u.q += v)));
                                                        u.X += -D / G * u.S;
                                                        u.Y += -E / G * u.S;
                                                        u.x += u.X;
                                                        u.y += u.Y;
                                                        path(u);
                                                        u.X *= u.F;
                                                        u.Y *= u.F;
                                                        for (k = 0; k < v - 1;) T = f[k], N = f[++k], N.x -= 0.7 * (N.x - T.x), N.y -= 0.7 * (N.y - T.y), path(N)
                                                    }
                                                    a.font = "50px Arial";
                                                    a.fillStyle = "white";
                                                    a.textAlign = "center";
                                                    a.fillText("Amanda", WIDTH / 2, HEIGHT / 2);
                                                }, 25);
                                                confetti.start();
                                            })
                                        })
                                    }
                                })
                            }
                        })
                    }
                )
            })
        })
    })
});