import React, {Component} from 'react';
import axios from 'axios'

class ArticleAdmin extends Component {

  constructor() {
    super();
    this.state = {
      article_title: '',
      article_date: '',
      article_author: '',
      article_categories: [],
      source_image: 1,
      source_description: '',
      article_premium: '',
      listCategories: [],
      statusMsg: '',
      published: false,
      article_id: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  // enregistre la valeur des inputs
  handleChange(event) {
    let target = event.target;
    let value = target.value
    let name = target.id;
    this.setState({[name]: value});
  }

  renderStatusMsg() {
    if(this.state.published) {
      return(
        <div>
          <p>L'article a été publié !</p>
          <a href={"/articles/"+this.state.article_id}>Acceder à l'article</a>
        </div>
      );
    } else {
      return(
        <div>
          <p>{this.state.statusMsg}</p>
        </div>
      );
    }
  }
  componentWillMount(){
    var authorization = {
      headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
    };

    // on récupère l'utilisateur actuel
    axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/',authorization)
    .then(response => {
      this.setState({article_author: response.data.username})
    }).catch(error => {
      console.log(error);
    });
  }
  sendArticle(event){
    // pour éviter le rechargement de la page
    event.preventDefault();

    // vérification des champs
    if(this.state.article_title.length < 10) {
      this.setState({statusMsg: "Le titre doit contenir au moins 10 charactères"})
    } else if (this.state.source_description.length < 10) {
      this.setState({statusMsg: "Le contenu doit contenir au moins 10 charactères"})
    } else if (this.state.article_premium === '') {
      this.setState({statusMsg: "Le niveau premium est requis"})
    } else if (this.state.source_image === '') {
      this.setState({statusMsg: "Une image est requise"})
    } else if (this.state.article_categories === '') {
      this.setState({statusMsg: "Une catégorie est requise"})
    } else {
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.post(process.env.REACT_APP_API_ADDRESS+'/articles/new/',{
        "image_id": this.state.source_image,
        "title": this.state.article_title,
        "author": this.state.article_author,
        "content": this.state.source_description,
        "premium": this.state.article_premium,
        "category_id": [this.state.article_categories]
      },authorization)
      .then(response => {
        console.log(response);
        this.setState({published: true,article_id: response.data.id})
      }).catch(error => {
        console.log(error);
      });
    }
  }
  render() {
    return (
      <section>
        <div className="container">
          <div className="row text-center">
            <h2 className="title-head" id="creer-article">Créer<span>
                Article</span>
            </h2>
            <div className="title-head-subtitle">
              {this.renderStatusMsg}
            </div>
            {this.renderStatusMsg()}
          </div>

          <form onSubmit={this.sendArticle.bind(this)}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6">

                {/* <!-- Titre --> */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="form-group">
                      <label className="control-label" htmlFor="article_title">Titre</label>
                      <div>
                        <input
                          id="article_title"
                          name="article_title"
                          type="text"
                          placeholder="Titre de l'article"
                          className="form-control input-md"
                          value={this.state.article_title}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- premium --> */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="form-group">
                      <label className="control-label" htmlFor="article_premium">Premium</label>
                      <div>
                        <select
                          id="article_premium"
                          name="article_premium"
                          className="form-control"
                          value={this.state.premium}
                          onChange={this.handleChange}>
                          <option value=""></option>
                          <option value="2">Debutant</option>
                          <option value="3">Avance</option>
                          <option value="4">Expert</option>
                          <option value="5">Lambo</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Categorie de l'article --> */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="form-group">
                      <div>
                        <label className="control-label" htmlFor="article_categories">Catégorie</label>
                        <select
                          id="article_categories"
                          name="article_categories"
                          className="form-control"
                          value={this.state.article_categories}
                          onChange={this.handleChange}>
                          <option value=""></option>
                          {this.state.listCategories.map(categorie => {
                            return (
                              <option key={categorie.id} value={[categorie.id]}>{categorie.name}</option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Image Couverture --> */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                          <label className="control-label" htmlFor="source_image">Image couverture (720x477)</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                          <input id="source_image" name="source_image" className="input-file" type="file"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-xs-12 col-sm-12 col-md-6">

                {/* <!-- Contenu de l'article --> */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="form-group">
                      <div>
                        <label className="control-label" htmlFor="article_date">Contenu de l'article</label>
                        <textarea
                          className="form-control"
                          id="source_description"
                          name="source_description"
                          placeholder="Contenu de l'article..."
                          value={this.state.source_description}
                          onChange={this.handleChange}>
                        </textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="form-group">
                      <div>
                        <button
                          type="submit"
                          id="submit-article"
                          name="submit-article"
                          className="btn btn-primary pull-right">
                          PUBLIER
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ArticleAdmin;
