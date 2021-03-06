import React, {Component} from 'react';

class Footer extends Component {

  render() {
    return(
      <div className="Footer Component">
        <div className="footer">
          {/* Footer Top Area Starts */}
          <div className="top-footer">
            <div className="container">
              <div className="row">
                {/* Footer Widget Starts */}
                <div className="col-sm-4 col-md-2">
                  <h4>CryptoConseils</h4>
                  <div className="menu">
                    <ul>
                      <li><a href="/">Accueil</a></li>
                      <li><a href="/team">Team</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
                {/* Footer Widget Ends */}
                {/* Footer Widget Starts */}
                <div className="col-sm-4 col-md-2">
                  <h4>Aide & Support</h4>
                  <div className="menu">
                    <ul>
                      <li><a href="/faq">FAQ</a></li>
                      <li><a href="/cgu">Conditions & utilisations</a></li>
                      <li><a href="/signup">Inscription</a></li>
                      <li><a href="/signin">Connexion</a></li>
                    </ul>
                  </div>
                </div>
                {/* Footer Widget Ends */}
                {/* Footer Widget Starts */}
                <div className="col-sm-4 col-md-3">
                  <h4>Contactez-nous</h4>
                  <div className="contacts">
                    <div>
                      <span><a href="mailto:cryptoconseilsfr@gmail.com" target="_top">cryptoconseilsfr@gmail.com</a></span>
                    </div>
                    {/*<div>
                      <span><a href="tel:+33637751315">06 37 75 13 15</a></span>
                    </div>
                    */}
                    <div>
                      <span>Paris, France</span>
                    </div>
                    <div>
                      <span>7j/7 & 24h/24</span>
                    </div>
                  </div>
                  {/* Social Media Profiles Starts */}
                  <div className="social-footer">
                    <ul>
                      <li><a href="https://www.facebook.com/groups/CryptoConseils.fr/"><i className="fa fa-facebook"></i> </a></li>
                      <li><a href="https://twitter.com/CryptoConseils"><i className="fa fa-twitter"></i> </a></li>
                      <li><a href="https://plus.google.com/u/0/103426360644440789179" ><i className="fa fa-google-plus"></i> </a></li>
                      <li><a href="https://www.linkedin.com/company/cryptoconseils-fr/"><i className="fa fa-linkedin"></i> </a></li>
                    </ul>
                  </div>
                  {/* Social Media Profiles Ends */}
                </div>
                {/* Footer Widget Ends */}
                {/* Footer Widget Starts */}
                <div className="col-sm-12 col-md-5">
                  {/* Facts Starts */}
                  <div className="facts-footer">
                    <div>
                      <h5>$198.76B</h5>
                      <span>Market cap</span>
                    </div>
                    <div>
                      <h5>243K</h5>
                      <span>Transactions journalières</span>
                    </div>
                    <div>
                      <h5>369K</h5>
                      <span>Comptes actifs</span>
                    </div>
                    <div>
                      <h5>127</h5>
                      <span>Pays supportés</span>
                    </div>
                  </div>
                  {/* Facts Ends */}
                  <div>
                    {/* Supported Payment Cards Logo Starts */}
                    <div className="payment-logos">
                      <h4 className="payment-title">Méthodes de paiement supportées</h4>
                      <img src="/images/icons/payment/paypal.png" alt="paypal"/>
                      <h4 className="payment-title">Méthodes de paiement à venir</h4>
                      <img src="/images/icons/payment/american-express.png" alt="american-express"/>
                      <img src="/images/icons/payment/mastercard.png" alt="mastercard"/>
                      <img src="/images/icons/payment/visa.png" alt="visa"/>
                      <img className="last" src="/images/icons/payment/maestro.png" alt="maestro"/>
                    </div>
                    {/* Supported Payment Cards Logo Ends */}
                  </div>
                  {/* Footer Widget Ends */}
                </div>
              </div>
            </div>
            {/* Footer Top Area Ends */}

          </div>

          {/* Back To Top Starts  */}
          <button id="back-to-top" className="back-to-top fa fa-arrow-up"></button>
          {/* Back To Top Ends  */}
        </div>
        {/*Footer Bottom Area Starts */}
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                {/*Copyright Text Starts */}
                <p className="text-center">Copyright © 2018 CryptoConseils | <a href="https://www.esgi.fr/ecole-informatique.html">ESGI</a></p>
                {/*Copyright Text Ends */}
              </div>
            </div>
          </div>
        </div>
        {/*Footer Bottom Area Ends */}
      </div>
    );
  }
}

export default Footer;
