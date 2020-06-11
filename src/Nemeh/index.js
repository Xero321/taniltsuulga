import React, { Component } from 'react';
import './style.css';

class Nemeh extends Component {

   state= ({
        el: 'App',
        data: {
          images: []
        },
        methods: {
          onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
              return;
            this.createImage(files);
          },
          createImage(files) {
            var vm = this;
            for (var index = 0; index < files.length; index++) {
              var reader = new FileReader();
              reader.onload = function(event) {
                const imageUrl = event.target.result;
                vm.images.push(imageUrl);
              }
              reader.readAsDataURL(files[index]);
            }
          },
          removeImage(index) {
            this.images.splice(index, 1)
          }
        }
      })

    render () {
        return(
            <div className='App'>
                <div>
                    <h2>Select an image</h2>
                    <input type="file" multiple onChange="onFileChange"/>
                </div>

                <div v-if="images">
                    <div v-for="(image, index) in images">
                        <img src="image" />
                        <button onClick="removeImage(index)"> Remove image </button>
                    </div>
                    
                </div>

            </div>
        )

    }

}

export default Nemeh;