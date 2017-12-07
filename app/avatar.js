var app = new PIXI.Application();

document.body.appendChild(app.view);

PIXI.loader
    .add('myAvatar', 'assets/AvatarRig.json')
    .load(function (loader, resources) {
        var animation = new PIXI.spine.Spine(resources.myAvatar.spineData);
        
        animation.position.x = 500;
        animation.position.y = 500;
        animation.scale.x = 0.5;
        animation.scale.y = 0.5;

        app.stage.addChild(animation);
        animation.state.setAnimation(0, 'Idle', true);
        
        app.start();
    });