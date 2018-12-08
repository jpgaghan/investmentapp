import React, { Component } from "react";
// import WordLookup from "./WordLookup";


class WordLookup extends Component {
    render() {
      return (
        <div>
          
          <style dangerouslySetInnerHTML={{__html: "#dictionarybox TD, INPUT, SELECT {font-size:12pt;}" }} />
          <form action="https://www.thefreedictionary.com/_/partner.aspx" method="get" target="_blank" name="dictionary" style={{display: 'inline', margin: 0}}>
            <table id="dictionarybox" cellSpacing={0} cellPadding={3} style={{border: '1px #336699 solid', fontFamily: '', width: '265px', backgroundColor: '#FFFFFF', color: '#003366'}}><tbody><tr>
                  <td bgcolor="#666666" style={{borderBottom: '1px #336699 solid'}}><img src="//img.tfd.com/Help.gif" width={25} height={25} /></td>
                  <td bgcolor="#666666" style={{borderBottom: '1px #336699 solid'}} colSpan={2} nowrap="yes"><a style={{textDecoration: 'none', color: '#FFFFFF'}} href="https://www.thefreedictionary.com" rel="nofollow"><div style={{fontSize: '14pt'}}><b>Online Reference</b></div>
                      <div style={{fontSize: '10pt'}}>Feel Free to Look Up Any Financial Terms Here!</div></a></td></tr>
                <tr><td align="center">Term:<br />
                    {/* <img id="dictionarybox_img_toggle" src="//img.tfd.com/toggle/b-down.gif" style={{cursor: 'pointer'}} onclick="var s=document.getElementById('dictionarybox_source').style;this.src='//img.tfd.com/toggle/b-'+(s.display?'up.gif':'down.gif');s.display=(s.display?'':'none')" /> */}
                    </td>
                  <td colSpan={2}><input name="Word" size={26} placeholder="Enter Term Here"/></td></tr>
                <tr id="dictionarybox_source" style={{display: 'none'}}><td align="right">Look in:</td><td colSpan={2} style={{fontSize: '10pt', textAlign: 'left'}} id="boxsource_td"><style dangerouslySetInnerHTML={{__html: "#boxsource_td A {color:#003366;text-decoration:none}" }} />
                    {/* <input type="radio" name="Set" defaultValue="www" defaultChecked="yes" />Dictionary<br />
                    <input type="radio" name="Set" defaultValue="freethesaurus" />Thesaurus<br />
                    <input type="radio" name="Set" defaultValue="medical-dictionary" />Medical Dictionary<br />
                    <input type="radio" name="Set" defaultValue="legal-dictionary" />Legal Dictionary<br /> */}
                    <input type="radio" name="Set" defaultValue="financial-dictionary" defaultChecked="yes"/>Financial Dictionary<br />
                    {/* <input type="radio" name="Set" defaultValue="acronyms" />Acronyms<br />
                    <input type="radio" name="Set" defaultValue="idioms" />Idioms<br />
                    <input type="radio" name="Set" defaultValue="encyclopedia2" />Encyclopedia<br />
                    <input type="radio" name="Set" defaultValue="encyclopedia" />Wikipedia<br />
                    <input type="radio" name="Set" defaultValue="periodicals" />Periodicals<br />
                    <input type="radio" name="Set" defaultValue="literature" />Literature */}
                    {/* <div style={{cursor: 'pointer'}} onclick="var s=document.getElementById('dictionarybox_ol').style;document.getElementById('dictionarybox_ol_img').src='//img.tfd.com/toggle/b-'+(s.display?'up.gif':'down.gif');s.display=(s.display?'':'none')"><img id="dictionarybox_ol_img" src="//img.tfd.com/toggle/b-down.gif" />Other languages:</div><div id="dictionarybox_ol" style={{display: 'none'}}>
                      <input type="radio" name="Set" defaultValue="es" />Spanish Dictionary<br />
                      <input type="radio" name="Set" defaultValue="de" />German Dictionary<br />
                      <input type="radio" name="Set" defaultValue="fr" />French Dictionary<br />
                      <input type="radio" name="Set" defaultValue="it" />Italian Dictionary<br />
                      <input type="radio" name="Set" defaultValue="zh" />Chinese Dictionary<br />
                      <input type="radio" name="Set" defaultValue="pt" />Portuguese Dictionary<br />
                      <input type="radio" name="Set" defaultValue="nl" />Dutch Dictionary<br />
                      <input type="radio" name="Set" defaultValue="no" />Norwegian Dictionary<br />
                      <input type="radio" name="Set" defaultValue="el" />Greek Dictionary<br />
                      <input type="radio" name="Set" defaultValue="ru" />Russian Dictionary</div> */}
                  </td></tr>
                <tr><td align="right">By: </td>
                  <td><select name="mode"><option value="w">Word</option><option value="s">Starts with</option>
                      <option value="e">Ends with</option><option value="d">Mentions</option></select></td>
                  <td align="right"><input type="submit" name="submit" defaultValue="Look it up" /></td></tr></tbody></table></form>
           {/*end of dictionary lookup box*/}
        </div>
      );
    }
  };

  export default WordLookup;