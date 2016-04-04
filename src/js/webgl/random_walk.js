(function (){

    var camera, scene, renderer;

    var line;
    var MAX_POINTS = 1000;
    var draw_count;

    init();
    animate();

    function init(){
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);

        camera.position.set(0, 0, 1000);

        var geometry = new THREE.BufferGeometry();

        var positions = new Float32Array(MAX_POINTS * 3);

        geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));

        draw_count = 2;
        geometry.setDrawRange(0, draw_count);

        var material = new THREE.LineBasicMaterial({ color : 0xff0000, linewidth: 3});

        line = new THREE.Line(geometry, material);
        scene.add(line);

        update_positions();
    }

    function update_positions(){
        var positions = line.geometry.attributes.position.array;

        var x, y, z, index;
        x = y = z = index = 0;

        function clamp(n, min, max){
            return Math.max(min, Math.min(max, n));
        }

        for( var i = 0, l = MAX_POINTS; i < l; i++){
            positions[index++] = x;
            positions[index++] = y;
            positions[index++] = z;

            x += ( Math.random() - 0.5) * 30;
            y += ( Math.random() - 0.5) * 30;
            z += ( Math.random() - 0.5) * 30;

            var w, h, d;
            w = window.innerWidth/2;
            h = window.innerHeight/2;
            d = 100;
            x = clamp(x, -w, w);
            y = clamp(y, -h, h);
            z = clamp(z, -d, d);
        }
    }

    function update_line(){
        draw_count = (draw_count + 1) % MAX_POINTS;

        line.geometry.setDrawRange(0, draw_count);

        if (draw_count === 0){
            update_positions();

            line.geometry.attributes.position.needsUpdate = true;

            line.material.color.setHSL( Math.random(), 1, 0.5);
        }
    }

    function animate () {
        requestAnimationFrame(animate);

        update_line();

        renderer.render(scene, camera);
    }
}());
