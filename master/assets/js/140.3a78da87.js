(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{695:function(e,t,o){"use strict";o.r(t);var s=o(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"configure-state-sync"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-state-sync"}},[e._v("#")]),e._v(" Configure State-Sync")]),e._v(" "),o("p",[e._v("State sync will continuously work in the background to supply nodes with chunked data when bootstrapping.")]),e._v(" "),o("blockquote",[o("p",[e._v("NOTE: Before trying to use state sync, see if the application you are operating a node for supports it.")])]),e._v(" "),o("p",[e._v("Under the state sync section in "),o("code",[e._v("config.toml")]),e._v(" you will find multiple settings that need to be configured in order for your node to use state sync.")]),e._v(" "),o("p",[e._v("Lets breakdown the settings:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("enable")]),e._v(": Enable is to inform the node that you will be using state sync to bootstrap your node.")]),e._v(" "),o("li",[o("code",[e._v("rpc_servers")]),e._v(": RPC servers are needed because state sync utilizes the light client for verification.\n"),o("ul",[o("li",[e._v("2 servers are required, more is always helpful.")])])]),e._v(" "),o("li",[o("code",[e._v("temp_dir")]),e._v(": Temporary directory is store the chunks in the machines local storage, If nothing is set it will create a directory in "),o("code",[e._v("/tmp")])])]),e._v(" "),o("p",[e._v("The next information you will need to acquire it through publicly exposed RPC's or a block explorer which you trust.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("trust_height")]),e._v(": Trusted height defines at which height your node should trust the chain.")]),e._v(" "),o("li",[o("code",[e._v("trust_hash")]),e._v(": Trusted hash is the hash in the "),o("code",[e._v("BlockID")]),e._v(" corresponding to the trusted height.")]),e._v(" "),o("li",[o("code",[e._v("trust_period")]),e._v(": Trust period is the period in which headers can be verified.\n"),o("blockquote",[o("p",[e._v("⚠️ This value should be significantly smaller than the unbonding period.")])])])]),e._v(" "),o("p",[e._v("If you are relying on publicly exposed RPC's to get the need information, you can use "),o("code",[e._v("curl")]),e._v(".")]),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtcyBodHRwczovLzIzMy4xMjMuMC4xNDA6MjY2NTcvY29tbWl0IHwganEgJnF1b3Q7e2hlaWdodDogLnJlc3VsdC5zaWduZWRfaGVhZGVyLmhlYWRlci5oZWlnaHQsIGhhc2g6IC5yZXN1bHQuc2lnbmVkX2hlYWRlci5jb21taXQuYmxvY2tfaWQuaGFzaH0mcXVvdDsK"}}),e._v(" "),o("p",[e._v("The response will be:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2hlaWdodCZxdW90OzogJnF1b3Q7MjczJnF1b3Q7LAogICZxdW90O2hhc2gmcXVvdDs6ICZxdW90OzE4OEY0RjM2Q0JDRDJDOTFCNTc1MDlCQkYyMzFDNzc3RTc5QjUyRUUzRTBEOTBEMDZCMUEyNUVCMTZFNkUyM0QmcXVvdDsKfQo="}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);