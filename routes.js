const routes = [
    {
        path: '/',
        template: ` <h1 class="cover-heading pb-3">Floristería la Reina.</h1>
        <p class="lead">En nuestra floristería le ofrecemos flores y arreglos florales, no sólo para bodas, fiestas familiares, como aniversarios, bautizos y otras fiestas religiosas.
        <br/>...<br/>
        Nos distinguimos por nuestra amplia experiencia y el entusiasmo que ponemos en nuestro trabajo.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary">Ver Más</a>
        </p>`
    },
    {
        path:'/contacto',
        template: `<h1>Contáctanos</h1><p>¿Podemos ayudarle? Póngase en contacto con nosotros.</p><form class="text-left">
        <div class="form-group">
          <label for="txtEmail">E-mail</label>
          <input type="email" class="form-control" id="txtEmail" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="txtAsunto">Asunto</label>
          <input type="password" class="form-control" id="txtAsunto">
        </div>
        <div class="form-group">
          <label for="txtMensaje">Mensaje</label>
          <textarea name="txtMensaje" class="form-control" id="" cols="2" rows="2"></textarea>
        </div>
        <div>
        <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </form>`
    },
    {
        path: '/about',
        template: `<h1 class="pb-3">¿Quiénes Somos?</h1>...
        <p class="lead pt-3">Nos dedicamos a la atención personalizada de venta de flores naturales y artificiales. Para nosotros el detalle es lo más importante y por esta razón nos esforzamos en crear e innovar cada uno de nuestros proyectos.</p>
        <img src="img/flores.jpg" width="500px" heigth="500px" class="rounded mx-auto d-block" >`
    }
];