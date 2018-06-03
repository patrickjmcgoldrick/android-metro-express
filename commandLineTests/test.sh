#/bin/sh
# test MetroExpressLanes.net site,
# now without cookies, instead we use URL rewriting.

#curl -A "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)" -c cookies1.out -D header.out -o loginPage1.html  "https://www.metroexpresslanes.net/vector/account/home/accountLogin.do" 

#cat header.out

#curl -L -A "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)" -c cookies.loggedin -D headerLogin.out -d "formid=frmLogin&login=dirtbag&loginType=username&password=Catalina69&btnLogin.x=0&btnLogin.y=0&ctokenElem=null" -o loginPage2.html "https://www.metroexpresslanes.net/vector/account/home/accountLogin.do"
curl -L -A "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)" -c cookies.loggedin -d "formid=frmLogin&login=dirtbag&loginType=username&password=Catalina69&btnLogin.x=0&btnLogin.y=0&ctokenElem=null" -o loginPage2.html "https://www.metroexpresslanes.net/vector/account/home/accountLogin.do"

cat headerLogin.out

#diff loginPage1.html loginPage2.html

curl  -A "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)" --cookie cookies.loggedin -D headerTxSearch.out -o transactionSearch.html "https://www.metroexpresslanes.net/vector/account/transactions/transactionSearch.do"

cat headerTxSearch.out

#curl -D header.out  "https://psm.telestaff.net/web/login"

#curl -D headerLogin.out -d "j_username=268795&j_password=Catalina&j_acessCode=2656" "https://psm.telestaff.net/web/submitLogin"

#set sessionID = `grep Location: headerLogin.out | awk 'BEGIN { FS=";"}{ print $2 } '`

#echo $sessionID

#curl -A "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)" -D header.out "https://psm.telestaff.net/web/scheduling/roster/picklist/view;$sessionID"

#curl -D headerPicklist.out "https://psm.telestaff.net/web/scheduling/roster/picklist/view;$sessionID" --data-urlencode "date=01/08/2013"

#cat headerPicklist.out
