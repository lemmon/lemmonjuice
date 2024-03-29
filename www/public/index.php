<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>lemmon juice &middot; freelance web developer</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="https://www.lemmonjuice.com/favicon.ico">
  <link rel="stylesheet" href="https://unpkg.com/abrusco@0.9.0/css/abrusco.min.css">
  <style media="screen">
  .max51 {
    max-width: 51rem;
  }
  .header {
    line-height: 1px;
    display: flex;
    flex-direction: row;
  }
  .header::before,
  .header::after {
    content: "";
    display: block;
    flex: 1;
    height: 1px;
    background-color: var(--black-10);
  }
  .header::before {
    flex: 1;
  }
  .header::after {
    flex: 4;
  }
  </style>
  <?php if ('www.lemmonjuice.com' === $_SERVER['SERVER_NAME']): ?>
  <script defer data-domain="lemmonjuice.com" src="https://plausible.io/js/plausible.js"></script>
  <?php endif ?>
</head>
<body class="col max80 py1 mx">

  <header class="max51 py1 sd-px1 md-px2">
    <div class="p075">
      <h1 class="p025 h2 lh2 fw700">lemmon juice</h1>
      <div class="p025">
        <p class="lh4 color-black-50">freelance web developer</p>
      </div>
    </div>
  </header>

  <main class="span1 max51 pb1 sd-px1"><div class="py05">

    <section class="pt1">

      <header class="py05">
        <div class="header px1 md-py1">
          <h1 class="fw600 mx1 color-black-50">Projects</h1>
        </div>
      </header>

      <div class="py05"><div class="py1 md-px1">

        <article class="p1">
          <h2 class="fw600 lh4"><a class="ul" href="http://abrusco.com/">Abrusco</a></h2>
          <div class="lh4">
            <p class="color-black-80">Hackable CSS toolbox.</p>
            <p class="color-black-40">atomic css, responsive, node.js, open-source</p>
          </div>
        </article>
        <article class="p1">
          <div class="row items-center">
            <h2 class="fw600 lh4"><a class="ul" href="https://themes.lemmonjuice.com/">Kirby Themes</a></h2>
            <aside class="pl025 row">
              <div class="ml025 f4 fw600 uc bg-black-10 color-black-40 py025 px025 br2">new</div>
            </aside>
          </div>
          <div class="lh4">
            <p class="color-black-80">Collection of free and open-source themes created for Kirby CMS.</p>
            <p class="color-black-40">html, css, responsive, kirby, cms, open-source</p>
          </div>
        </article>
        <article class="p1">
          <h2 class="fw600 lh4"><a class="ul" href="https://github.com/lemmon/babel-env-cli">Babel Env CLI</a></h2>
          <div class="lh4">
            <p class="color-black-80">Command line interface for Babel + @babel/preset-env. Global installation.</p>
            <p class="color-black-40">javascript, ecmascript, node.js, babel, open-source</p>
          </div>
        </article>
        <article class="p1">
          <h2 class="fw600 lh4"><a class="ul" href="https://github.com/lemmon/ftpup">FTP Uploader</a></h2>
          <div class="lh4">
            <p class="color-black-80">Simple FTP uploader for node.js.</p>
            <p class="color-black-40">ftp, deployment, node.js, cli, open-source</p>
          </div>
        </article>
        <article class="p1">
          <div class="row items-center">
            <h2 class="fw600 lh4"><a class="ul" href="https://reform.email/">RE:FORM</a></h2>
            <aside class="pl025 row">
              <div class="ml025 f4 fw600 uc bg-black-10 color-black-40 py025 px025 br2">beta</div>
            </aside>
          </div>
          <div class="lh4">
            <p class="color-black-80">HTML form to email service.</p>
            <p class="color-black-40">email, html, saas, node.js, mongodb, serverless</p>
          </div>
        </article>
        <article class="p1">
          <h2 class="fw600 lh4"><a class="ul" href="https://github.com/lemmon/fetch-php">Fetch</a></h2>
          <p class="lh4 color-black-80">PHP implementation of the fetch() web api on top of Guzzle.</p>
        </article>

      </div></div>

    </section>

    <section class="pt1">

      <header class="py05">
        <div class="header px1 md-py1">
          <h1 class="fw600 mx1 color-black-50">Experiments</h1>
        </div>
      </header>

      <div class="py05"><div class="py1 md-px1">

        <div class="md-grid md-grid2">
          <article class="p1">
            <h2 class="fw600 lh4"><a class="ul" href="https://www.lemmonjuice.com/snake/">Snake</a></h2>
            <p class="lh4 color-black-80">Snake game in ASCII.</p>
            <p class="color-black-40">javascript, ascii</p>
          </article>
          <article class="p1">
            <h2 class="fw600 lh4"><a class="ul" href="http://uuid.lemmonjuice.com/">UUID</a></h2>
            <p class="lh4 color-black-80">Version 4 UUID online generator and microservice.</p>
          </article>
          <?php /*
          <article class="p1">
          <h2 class="fw600 lh4"><a class="ul" href="http://todo.lemmonjuice.com/">Todo</a></h2>
          <p class="lh4 color-black-80">Yet another to-do list. Ongoing experiment, work in progress.</p>
          </article>
          */ ?>
          <article class="p1">
            <h2 class="fw600 lh4"><a class="ul" href="http://chevron.lemmonjuice.com/">Chevron</a></h2>
            <p class="lh4 color-black-80">Online SVG chevron generator.</p>
          </article>
          <article class="p1">
            <h2 class="fw600 lh4"><a class="ul" href="http://ribbon.lemmonjuice.com/">Ribbon</a></h2>
            <p class="lh4 color-black-80">Online SVG ribbon generator.</p>
          </article>
          <?php /*
          <article class="p1">
            <div class="row items-center">
              <h2 class="fw600 lh4"><a class="ul" href="https://abrusco.com/buttons/">Abrusco Buttons</a></h2>
              <aside class="pl025 row">
                <div class="ml025 f4 fw600 uc bg-black-10 color-black-40 py025 px025 br2">work-in-progress</div>
              </aside>
            </div>
            <p class="lh4 color-black-80">Buttons extension for Abrusco CSS. Online generator.</p>
          </article>
          <article class="p1">
            <h2 class="fw600 lh4"><a class="ul" href="https://www.lemmonjuice.com/life/">Life</a></h2>
            <div class="lh4">
              <p class="lh4 color-black-80">Conway's Game of Life in ASCII.</p>
              <p class="color-black-40">javascript, ascii</p>
            </div>
          </article>
          <article class="p1">
            <div class="row items-center">
              <h2 class="fw600 lh4"><a class="ul" target="_blank" href="http://game.lemmonjuice.com/">Space Rocket</a></h2>
              <aside class="pl025 row">
                <div class="ml025 f4 fw600 uc bg-black-10 color-black-40 py025 px025 br2">abandoned</div>
                <div class="ml025 f4 fw600 uc bg-black-10 color-black-40 py025 px025 br2">for now</div>
              </aside>
            </div>
            <div class="lh4">
              <p class="color-black-80">2D space flying rocket.</p>
              <p class="color-black-40">javascript, <a class="a-ul" target="_blank" href="http://www.pixijs.com/">pixi</a>, html5, canvas, webgl</p>
            </div>
          </article>
          */ ?>
        </div>

      </div></div>

    </section>

    <section class="pt1">

      <header class="py05">
        <div class="header px1 md-py1">
          <h1 class="fw600 mx1 color-black-50">References</h1>
        </div>
      </header>

      <div class="py05"><div class="py1 md-px1">

        <div class="md-grid md-grid2">
          <article class="p1">
            <h2 class="fw600 lh4"><a class="ul" target="_blank" href="https://www.nethost.cz/">Nethost</a></h2>
            <div class="lh4">
              <p class="color-black-80">September 2018&ndash;present, freelance</p>
              <p class="color-black-40">html, css, javascript, php, mysql, linux</p>
            </div>
          </article>
          <article class="p1">
            <h2 class="fw600 lh4"><a class="ul" target="_blank" href="https://www.eyca.org/">European Youth Card Association</a></h2>
            <div class="lh4">
              <p class="color-black-80">March 2010&ndash;February 2020, freelance</p>
              <p class="color-black-40">html, css, node.js, mongodb, graphql, php</p>
            </div>
          </article>
          <article class="p1">
            <h2 class="fw600 lh4"><a class="ul" target="_blank" href="https://www.eset.com/">ESET</a></h2>
            <div class="lh4">
              <p class="color-black-80">October 2013&ndash;February 2020, freelance</p>
              <p class="color-black-40">html, css, javascript, php</p>
            </div>
          </article>
          <article class="p1">
            <h2 class="fw600 lh4"><a class="ul" target="_blank" href="https://www.prefis.com/">PREFIS</a></h2>
            <div class="lh4">
              <p class="color-black-80">January 2017&ndash;December 2018, freelance</p>
              <p class="color-black-40">html, css, javascript, php</p>
            </div>
          </article>
          <article class="p1">
            <h2 class="fw600 lh4"><a class="ul" target="_blank" href="https://www.assecosolutions.sk/">Asseco Solutions</a></h2>
            <div class="lh4">
              <p class="color-black-80">March 2014&ndash;January 2019, freelance</p>
              <p class="color-black-40">html, css, javascript, php</p>
            </div>
          </article>
          <article class="p1">
            <h2 class="fw600 lh4"><a class="ul" target="_blank" href="https://www.giant.cz/">Giant Interactive</a></h2>
            <div class="lh4">
              <p class="color-black-80">July 2007&ndash;May 2008, Prague</p>
              <p class="color-black-40">php, mysql, javascript, flash</p>
            </div>
          </article>
        </div>

      </div></div>

    </section>

    <section class="pt1">

      <header class="py05">
        <div class="header px1 md-py1">
          <h1 class="fw600 mx1 color-black-50">Skills</h1>
        </div>
      </header>

      <div class="py05"><div class="py1 md-px1">

        <ul class="grid grid2 sd-grid3 md-grid4 lh4">
          <li class="p1">html/css<br><span class="color-black-40"><?= date('Y') - 2003 ?> years</span></li>
          <li class="p1">javascript<br><span class="color-black-40"><?= date('Y') - 2009 ?> years</span></li>
          <li class="p1">node.js<br><span class="color-black-40"><?= date('Y') - 2015 ?> years</span></li>
          <li class="p1">graphql<br><span class="color-black-40"><?= date('Y') - 2016 ?> years</span></li>
          <li class="p1">php/mysql<br><span class="color-black-40"><?= date('Y') - 2003 ?> years</span></li>
          <li class="p1">mongodb<br><span class="color-black-40"><?= date('Y') - 2013 ?> years</span></li>
          <li class="p1">linux</li>
          <li class="p1">git</li>
          <li class="p1">npm</li>
          <li class="p1">open source</li>
          <li class="p1">photoshop</li>
          <li class="p1">illustrator</li>
        </ul>

      </div></div>
    </section>

  </div></main>

  <div class="max51 px1 pb1 sd-px2 md-py1">
    <hr class="div color-black-10">
  </div>

  <footer class="max51 py1 sd-px1 md-px2">
    <nav class="lh4">
      <ul class="row flex-wrap py05">
        <li class="px1 py05"><script>
        var u = '%6a%70%65%6c%61%6b';
        var d = '%67%6d%61%69%6c';
        var t = '%63%6f%6d';
        document.write('<a class="ul" href=' + 'mail' + 'to:' + u + '%40' + d + '%2e' + t + '>' + 'Email' + '</a>');
        </script></li>
        <li class="px1 py05"><a class="ul" target="_blank" href="https://twitter.com/lemmon">Twitter</a></li>
        <li class="px1 py05"><a class="ul" target="_blank" href="https://github.com/lemmon">Github</a></li>
        <li class="px1 py05"><a class="ul" target="_blank" href="https://www.linkedin.com/in/jakubpelak/">LinkedIn</a></li>
        <!--
        <li class="p1"><a class="ul" target="_blank" href="https://navolnenoze.cz/prezentace/jakub-pelak/">Na Volné Noze</a></li>
        -->
      </ul>
    </nav>
  </footer>

</body>
</html>
