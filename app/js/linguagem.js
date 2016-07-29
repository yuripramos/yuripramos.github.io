// Linguagem setup 

$(document).ready(function($) {

var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['pt']=new Array();

aLangKeys['en']['home']='Home';
aLangKeys['en']['portfolio']='portfolio';
aLangKeys['en']['o que faco']='What I do';
aLangKeys['en']['quem eu sou']='About me';
aLangKeys['en']['contato']='contact';
aLangKeys['en']['case dos trabalhos']='Case from my lastest jobs';
aLangKeys['en']['todos portfolio']='All';
aLangKeys['en']['o que faço']='What I Do';
aLangKeys['en']['entenda melhor o que faço']='Understand better what i\'m offering to you';
aLangKeys['en']['web semantica']='Semantic Web';
aLangKeys['en']['semantica 1']=' HTML structure using semantics that language provides, and adding the use of microformats.';
aLangKeys['en']['semantica 2']='A website easy to understand for any developer.';
aLangKeys['en']['semantica 3']='Applying best practices (friendly URLs, semantic content, decrease in page load time, etc).';
aLangKeys['en']['semantica 4']='Suporte on saturdays';
aLangKeys['en']['semantica 5']='Your site well ranked higher on Google and other search systems.';
aLangKeys['en']['semantica 6']='Flexible terms according to the budget and project priority.';
aLangKeys['en']['web responsivo']='Responsive Webdesign';
aLangKeys['en']['responsivo 1']='Beauty and usability walking holding hands';
aLangKeys['en']['responsivo 2']='Focus on results';
aLangKeys['en']['responsivo 3']='Websites mobile-ready. Mobile Friendly by Google ®';
aLangKeys['en']['responsivo 4']='Layout based on templates or tottally personalized (It is up to you).';
aLangKeys['en']['wordpress']='Wordpress / Blog';
aLangKeys['en']['wordpress 1']='A layout straightforward, beautiful and functional.';
aLangKeys['en']['wordpress 2']='Finally a blog that doesn\'t looks like a blog.';
aLangKeys['en']['wordpress 3']='Easy edition/insertion of content by anyone.';
aLangKeys['en']['wordpress 4']='Your blog well ranked on google and other search engines.';
aLangKeys['en']['identidadevisual']='Visual Identity';
aLangKeys['en']['visual1']='How\'s your brand is remembered and seen.';
aLangKeys['en']['visual2']='Color study according to application  niche.';
aLangKeys['en']['visual3']='Logo creation';
aLangKeys['en']['visual4']='Up to 6 delivers of logo';
aLangKeys['en']['visual5']='15 days deadline';
aLangKeys['en']['quemsou']='About me';
aLangKeys['en']['introquem']='A little introduction about me';
aLangKeys['en']['sobremimtitulo']='Webdesigner & Web Developer from rio de janeiro to the world!';
aLangKeys['en']['sobremim1']='It\'s all right? So I will make a brief summary of how my life started with websites development, for you to better understand my story. I always liked to tinker with the Internet since I was 16 years old when I made my first web page with basic html. I worked as a freelancer for UX / UI and Web designer with 17 years and even developed folders for my High school.';
aLangKeys['en']['sobremim2']='After my university entrance I pulled away a little in website development due to overloading of the UFRJ studies required me. However this period was short-lived and 18 months after my university entrance started my first web developer stage. Currently working as a web developer in Globosat company and this site I use to promote my personal projects, I do not like being boring in my texts if you want to know more about me I provide my contact for more information.';
aLangKeys['en']['cv']='Download my resume in PDF';
aLangKeys['en']['xp']='Professional Experience';
aLangKeys['en']['jobs']='My recent works';
aLangKeys['en']['globosat']='Working on support team development in globosat enterprise. My function extends to create features and hotfixes for all the current projects in globosat enterprise, for example:';
aLangKeys['en']['dataglobosat']='Present';
aLangKeys['en']['funcaoglobosat']='Full-stack Web developer';
aLangKeys['en']['datacoppe']='Sep,2015';
aLangKeys['en']['coppetitulo']='Project Leader ';
aLangKeys['en']['coppeatuacao']='I work as a project leader CAPGOV PANEL. A project that consisted of an environment that displayed all sprints (Scrum) project in a WebAPP via javascript/AJAX and PHP. Within this project also included the development of the institutional portal.';
aLangKeys['en']['copperemoto']= ' An observation about this project that it was done mostly remotely.';
aLangKeys['en']['estagiocoppe']='Trainee in Web Developement';
aLangKeys['en']['descricaoestagio']='I worked in the development team PANEL CAPGOV and development of CAPGov portal. The same aforementioned project only with a smaller workload, more operational tasks than tactics and there was no remote work.';
aLangKeys['en']['dataestagio']='Dec, 2014';
aLangKeys['en']['educacao']='Education & Degrees';
aLangKeys['en']['desccarreira']='What i\'ve been doing with my academic career';
aLangKeys['en']['datauff']='Aug, 2015';
aLangKeys['en']['titulouff']='Computation Systems';
aLangKeys['en']['descuff']='With graduation forecast for 2016 finally found one of the molds course I needed.Dynamic and focused on the labor market, after completion I intend to start my project management MBA abroad.';
aLangKeys['en']['dataufrj']='Aug, 2015';
aLangKeys['en']['tituloufrj']='Computer Science';
aLangKeys['en']['descufrj']='After a busy year of studies realized my dream and joined in computer science at UFRJ. A very comprehensive course it should be any course of computer science, but too academic. Some workload problems and lack of identification with the methodology not facing the labor market made me move to another federal university';
aLangKeys['en']['datacsp']='Feb, 2006';
aLangKeys['en']['tituloucsp']='Computer Technician';
aLangKeys['en']['desccsp']='Since high school I always had curiosity with the computer world, so I decided to make my high school with computer technician. There I learned the Web basics, installation & maintenance of computers, networks, management and others.';
aLangKeys['en']['contatotitulo']='Contact me';
aLangKeys['en']['contatodetails']='Request your budget and/or feel free to ask what you want!';
aLangKeys['en']['detalhescontato']='Details of Contact';
aLangKeys['en']['falacomigo']='Let me hear you!';
aLangKeys['en']['ready']='Ready?';
aLangKeys['en']['logo 1']='Visual identity for an australian company';
aLangKeys['en']['site 1']='Development for the healthy fitness company SoulFit';
aLangKeys['en']['site 2']='Newsletter for a tv programa called TVZ';
aLangKeys['en']['site 3']='Hotsite for the TV channel Premiere UFC';
aLangKeys['en']['site 4']='Hotsite \'Big Actors\' and many features for the responsive site';
aLangKeys['en']['site 5']='E-commerce website for Virus Store';
aLangKeys['en']['site 6']='Features for the responsive website and promotions for channel Sexy Hot';
aLangKeys['en']['site 7']='Development of the website Sexy Hot Awards';
aLangKeys['en']['site 8']='Website responsive for the company DNAPHARMA';
aLangKeys['en']['ux 1']='Form Responsive w/ webservice for clients of company SoulFit';
aLangKeys['en']['logo 2']='Logo for Soul Fit Company';
aLangKeys['en']['logo 3']='Logo for Law Office Borges & Guerra';
aLangKeys['en']['ux 3']='Folder for the preparatory course from Senhora da Pena School';
aLangKeys['en']['logo 4']='Logo for a healthy and fitness australian company';
aLangKeys['en']['logo 5']='Logo for a company of parties and events';
aLangKeys['en']['logo 6']='Logo for the construction company Tavares & Siqueira';
aLangKeys['en']['site 9']='Website for the governmental company CAPGOV';
aLangKeys['en']['logo 7']='Logo for the book fair event';
aLangKeys['en']['site 10']='Front-end developer responsible for new features during this year';

//aLangKeys['en']['animacao-header1']='Developing';
//aLangKeys['en']['animacao-header2']='responsive sites, sites optimized for google, ideas';



aLangKeys['pt']['home']='Home';
aLangKeys['pt']['portfolio']='portfolio';
aLangKeys['pt']['o que faco']='o que eu faço';
aLangKeys['pt']['quem eu sou']='quem eu sou';
aLangKeys['pt']['contato']='contato';
aLangKeys['pt']['case dos trabalhos']='Case dos meus últimos trabalhos';
aLangKeys['pt']['todos portfolio']='Todos';
aLangKeys['pt']['o que faço']='O que eu faço';
aLangKeys['pt']['entenda melhor o que faço']='Entenda melhor o que eu posso fazer por você';
aLangKeys['pt']['web semantica']='Web Semântica';
aLangKeys['pt']['semantica 1']='Estruturação do HTML usando a semântica que a linguagem proporciona, e agregando a utilização de microformatos';
aLangKeys['pt']['semantica 2']='Um site de fácil entendimento para qualquer desenvolvedor.';
aLangKeys['pt']['semantica 3']='Aplicação das boas práticas (URLs amigáveis, conteúdo semântico, diminuição no tempo de carregamento da página, etc).';
aLangKeys['pt']['semantica 4']='Suporte aos sábados.';
aLangKeys['pt']['semantica 5']='Seu site bem rankeado no google e outros sistemas de busca.';
aLangKeys['pt']['semantica 6']='Prazos flexíveis de acordo com o orçamento e prioridade do projeto.';
aLangKeys['pt']['web responsivo']='Webdesign responsivo';
aLangKeys['pt']['responsivo 1']='Beleza e usabilidade andando de mãos dadas.';
aLangKeys['pt']['responsivo 2']='Foco em resultados.';
aLangKeys['pt']['responsivo 3']='Sites prontos para serem exibidos em qualquer dispositivo móvel.';
aLangKeys['pt']['responsivo 4']='Opção de layout semi-prontos ou totalmente personalizáveis.';
aLangKeys['pt']['wordpress']='Wordpress / Blog';
aLangKeys['pt']['wordpress 1']='Um layout objetivo, bonito e funcional.';
aLangKeys['pt']['wordpress 2']='Finalmente você terá um blog que não tem "cara" de blog.';
aLangKeys['pt']['wordpress 3']='Fácil edição/inserção de conteúdo por qualquer usuário leigo.';
aLangKeys['pt']['wordpress 4']='Seu blog bem rankeado no google e outros sistemas de busca.';
aLangKeys['pt']['identidadevisual']='Identidade Visual';
aLangKeys['pt']['visual1']='Como a sua marca é vista e lembrada.';
aLangKeys['pt']['visual2']='Estudo de cores de acordo com o nicho de aplicação.';
aLangKeys['pt']['visual3']='Criação de logomarca.';
aLangKeys['pt']['visual4']='Até 6 entregas de logo.';
aLangKeys['pt']['visual5']='Prazo de até 15 dias úteis.';
aLangKeys['pt']['quemsou']='Quem eu sou';
aLangKeys['pt']['introquem']='Uma pequena introdução sobre quem vos fala';
aLangKeys['pt']['sobremimtitulo']='Webdesigner & Web Developer do rio de janeiro para o mundo!';
aLangKeys['pt']['sobremim1']='Tudo bem? Então farei um breve resumo de como começou minha vida no desenvolvimento de sites para você entender melhor a minha história. Eu sempre gostei de mexer com internet desde os 16 anos, quando fiz minha primeira página web com html básico. Trabalhei como freelancer de UX/UI e Webdesigner aos 17 anos e até desenvolvi folders para o pré-vestibular do meu colégio.';
aLangKeys['pt']['sobremim2']='Após a minha entrada na universidade me afastei um pouco do desenvolvimento de sites devido a sobrecarga de estudos que a UFRJ me requeria. Contudo esse período durou pouco e 18 meses após a minha entrada na universidade comecei o meu primeiro estágio de desenvolvedor web. Atualmente trabalho como desenvolvedor web na empresa Globosat e esse site eu uso para divulgar os meus projetos pessoais, não gosto de ser enfadonho em meus textos, caso queira saber um pouco mais sobre mim disponibilizo meu contato para maiores informações.';
aLangKeys['pt']['cv']='Download do currículo em PDF';
aLangKeys['pt']['xp']='Experiência Profissional';
aLangKeys['pt']['jobs']='Meus Trabalhos anteriores';
aLangKeys['pt']['globosat']='Atuo no projeto de manutenção dos canais do grupo globosat. Minha função abrange criar features e hotfix para todos os projetos correntes dos canais globosat, como por exemplo:';
aLangKeys['pt']['dataglobosat']='Presente';
aLangKeys['pt']['funcaoglobosat']='Desenvolvedor Web Full-Stack';
aLangKeys['pt']['datacoppe']='Set,2015';
aLangKeys['pt']['coppetitulo']='Líder de Projeto Web';
aLangKeys['pt']['coppeatuacao']='Atuei como líder do projeto PAINEL CAPGOV. Um projeto que consistia em um ambiente que exibia todas as sprints(Scrum) dos projetos em um WebAPP via javascript/AJAX e PHP. Dentro desse projeto também constava o desenvolvimento do portal institucional.';
aLangKeys['pt']['copperemoto']='Uma observação interessante é que grande parte desse projeto foi feito remotamente.';
aLangKeys['pt']['estagiocoppe']='Estagiário de desenvolvimento WEB';
aLangKeys['pt']['descricaoestagio']='Atuei na equipe de desenvolvimento do PAINEL CAPGOV e do desenvolvimento do portal CAPGov. O mesmo projeto supracitado somente com uma carga horária menor, mais tarefas operacionais do que táticas e não havia trabalho remoto.';
aLangKeys['pt']['dataestagio']='Dez, 2014';
aLangKeys['pt']['educacao']='educacao & Diplomas';
aLangKeys['pt']['desccarreira']='O que eu tenho feito na minha carreira acadêmica';
aLangKeys['pt']['datauff']='Ago, 2015';
aLangKeys['pt']['titulouff']='Sistemas de Computação';
aLangKeys['pt']['descuff']='Com previsão de formatura para 2016, finalmente encontrei um curso dos moldes que eu precisava. Dinâmico e voltado para o mercado de trabalho, após a finalização pretendo iniciar meu MBA de gestão de projetos no exterior';
aLangKeys['pt']['dataufrj']='Ago, 2010';
aLangKeys['pt']['tituloufrj']='Ciência da Computação';
aLangKeys['pt']['descufrj']='Após um ano muito intenso de estudos realizei meu sonho e ingressei em ciência da computação na UFRJ. Um curso muito abrangente como deve ser qualquer curso de ciência da computação, contudo acadêmico demais. Alguns problemas de carga horária e falta de identificação com a metodologia não voltada para o mercado de trabalho me fizeram migrar para outra universidade federal.';
aLangKeys['pt']['datacsp']='Fev, 2006';
aLangKeys['pt']['tituloucsp']='Técnico em Informática';
aLangKeys['pt']['desccsp']='Desde o ensino médio sempre tive curiosidade com o mundo da informática, então resolvi fazer meu ensino médio com técnico em informática. Lá aprendi o básico de web, montagem & manutenção de computadores, redes, administração entre outros.';
aLangKeys['pt']['contatotitulo']='Entre em contato';
aLangKeys['pt']['contatodetails']='Solicite seu orçamento e/ou fique a vontade de perguntar o que deseja!';
aLangKeys['pt']['detalhescontato']='Detalhes de contato';
aLangKeys['pt']['falacomigo']='Fala Comigo!';
aLangKeys['pt']['ready']='Pronto?';
aLangKeys['pt']['logo 1']='Desenvolvimento da identidade visual para uma brand australiana de prestação de serviços';
aLangKeys['pt']['site 1']='Desenvolvimento do portal da empresa de saúde SoulFit';
aLangKeys['pt']['site 2']='Newsletter para o programa de tv chamado TVZ';
aLangKeys['pt']['site 3']='Hotsite para o canal Premiere UFC';
aLangKeys['pt']['site 4']='Hotsite Grandes Atores e diversas funcionalidades responsivas';
aLangKeys['pt']['site 5']='Website para a loja virtual Virus';
aLangKeys['pt']['site 6']='Diversas funcionalidades para o responsivo e campanhas para o canal Sexy Hot';
aLangKeys['pt']['site 7']='Desenvolvimento do site Prêmio Sexy Hot';
aLangKeys['pt']['site 8']='Website responsivo para a empresa DNAPHARMA';
aLangKeys['pt']['ux 1']='Formulário Responsivo w/ webservice para clientes da empresa Soul Fit';
aLangKeys['pt']['logo 3']='Logo para o escritório de advocacia Borges & Guerra';
aLangKeys['pt']['ux 3']='Folder para o curso preparatório do colégio Senhora da Pena';
aLangKeys['pt']['logo 4']='Logo para uma empresa australiana de saúde';
aLangKeys['pt']['logo 5']='Logo para uma empresa de animações de festas';
aLangKeys['pt']['logo 6']='Logo para a construtora Tavares & Videira';
aLangKeys['pt']['site 9']='Website para a empresa governamental CAPGOV';
aLangKeys['pt']['logo 7']='Logo para feira literária na chapada diamantina';
aLangKeys['pt']['site 10']='Desenvolvimento de diversas funcionalidades para o site responsivo';


    var lang = window.navigator.language.split("-")[0];
    if((lang != "en") && (lang != "pt")){
      var lang = "en";

      $('.tr').each(function(i){
          $(this).text(aLangKeys[lang][ $(this).attr('data-key')]);   
      });
    }

    $('.tr').each(function(i){
          $(this).text(aLangKeys[lang][ $(this).attr('data-key')]);   
    });

    if(lang == "en"){
      $(".animator-title").hide();
    }
    else{
      $(".animator-title").show();
    }

      // if(lang =="pt"){
    
      //   $("a[href='resumee.pdf']").attr('href', 'cv.pdf');
      // }



    // onclick behavior
    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id

        // translate all translatable elements
        $('.tr').each(function(i){
         $(this).text(aLangKeys[lang][ $(this).attr('data-key')]).addClass('animated lightSpeedIn');
             if(lang == "en"){
                $(".animator-title").hide();
              }
              else{
                $(".animator-title").show();
              }
        }); 
        //hotffix placeholder change according to placeholder

       // if (lang = en) {
        	//document.getElementsByName('name')[0].placeholder='Your name...'; 	
       // 
      });

    $('.lang').click(function(){
        var lang2 = $(this).attr('id');
        if(lang2=="pt"){ 
          $("a[href='resumee.pdf']").attr('href', 'cv.pdf');
        }
        else{
          $("a[href='cv.pdf']").attr('href', 'resumee.pdf');
        }
    });



});