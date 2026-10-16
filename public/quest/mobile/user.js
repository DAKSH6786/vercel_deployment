function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5UjiqzAR8Ng":
        Script1();
        break;
      case "5iKFLP8wtqm":
        Script2();
        break;
  }
}

function Script1()
{
  var player1 = GetPlayer();
var data = {};
data.api_type  = 'Launch';
submit_result(data);
}

function Script2()
{
  var player1 = GetPlayer();
var data = {};
data.api_type  = 'End';
submit_result(data);
}

