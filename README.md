[bullgit.github.io](http://bullg.it "Go to bullgit") ![](https://travis-ci.org/bullgit/bullgit.github.io.svg)
=================

## Documentation

### For the contributorish gitches
- git clone <repo-url>
- `cd path/to/project`
- install jekyll if needed: `gem install jekyll`
  - for the homepage repo list: `gem install jekyll-github-metadata`
- `jekyll serve` or `jekyll serve --watch `

### Name

**bullgit** has only one name which is **bullgit**.

Not *BullGit*

Nor *Bullgit*

And also not *BuLlGiT*

Consider our [Manifesto](https://github.com/bullgit/bullgit-manifesto/blob/master/README.md)

### Members

To add members add a new entry to the [_data/members.yml](https://github.com/bullgit/bullgit.github.io/blob/master/_data/members.yml) file with this structure:
````yaml
- name: fullname of gitch
  twitter: username on twitter
  url: url of main page
  github: username on github
  codepen: username on codepen
  gravatar: link to image with s=460
  email: your preferred (==@bullg.it) email address
  title: bullshit job title of the gitch
  latlon:
    - latitude of place of gitch
    - longitude of place of gitch
  pro: true/false (whether you want to join https://github.com/bullgit/pro)
````

### Projects

The Projects are automatically added via the GitHub API in jekyll. Every new repo is listed on the main page. Unfortunately, this means that GitHub won't rebuild the site if a new repository is added, you can make this change yourself by updating any file or pushing an empty commit.

### Join bullgit

You find us awesome *(of course you do)* and want to be part of this big **Internet Party** just talk to us at our public chat room on gitter: https://gitter.im/bullgit/chat

You can also get in touch with us over other ways. If you are a real git power user, like all of us, then fork this repo and send a pull request with your information in the list of the members. If you add a nice little message in the PR description, we would be very happy.

![](https://img.shields.io/badge/such%20bull-very%20git-blue.svg)

![SUCH BULL | VERY GIT](http://cdn.memegenerator.net/instances/500x/43689240.jpg)
