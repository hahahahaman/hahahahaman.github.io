(function (){
    var camera, scene, renderer, material
    var date, prev_time, dt, line_update_time, update_counter

    init()
    animate()

    function add_line(){
        var line, pos, line_geo, line_mat;
        line_geo = new THREE.Geometry();

        line_geo.vertices[0] = new THREE.Vector3(0.0, 0.0, 0.0);
        line_geo.vertices[1] = new THREE.Vector3(100, 100, 100);

        line_geo.colors = [ new THREE.Color(0xffffff),
                            new THREE.Color(0xffffff)];

        line_mat = new THREE.LineBasicMaterial(
            {
                color: 0xffffff,
                opacity: 0.1,
                linewidth: 3,
                vertexColors: THREE.VertexColors
            });

        line = new THREE.Line (line_geo, line_mat);
        line.scale.x = line.scale.y = line.scale.z = 1.0;
        line.position = THREE.Vector3(0,0,0);
        scene.add(line);
    }

    function init (){
        date = new Date()
        prev_time = date.getTime()


    }

    function update (){
        dt = date.getTime() - prev_time
        update_counter += dt

        if (update_counter >= line_update_time){
            add_line()
        }
    }

    function animate () {
    }
}())

