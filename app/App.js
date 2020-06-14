import React, { useEffect, useContext } from 'react';
const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';
import ModelFile from 'models/RobotExpressive.glb';
// import SodaBottleIos from 'models/CHAHIN_BOTTLE_OF_SODA.usdz';
// import binFile from 'models/Set_anim_Test_10_Bake_anim.bin';
// import textureFile1 from 'models/The_arch_texture1.jpg';
// import textureFile2 from 'models/New_goundtex2.jpg';
// import textureFile3 from 'models/New_cylinder_tex3.jpg';

function App() {
    return (
      <div className="appWrapper">
        <model-viewer
          id="paused-change-demo"
          camera-controls
          src={ModelFile}
          animation-name="Dancing"
          // animation-name="Transform:nurbsCircle2"
          autoplay
          ar
        />
      </div>
    )
}

export default App;
