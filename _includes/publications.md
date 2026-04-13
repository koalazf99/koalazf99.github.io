<div id="publications"{% unless page.full_publications %} class="publications--selected"{% endunless %}>

<div class="publication-header">
{% if page.full_publications %}
<h1 class="publication-header--title">Publications</h1>
{% else %}
<h1 class="publication-header--title">Selected Projects</h1>
<a class="publication-cta" href="{{ '/publications/' | relative_url }}" target="_self">View full list <span aria-hidden="true">→</span></a>
{% endif %}
</div>

{% assign publications = site.data.publications | sort: "sort_key" | reverse %}
{% for pub in publications %}
  {% if page.full_publications or pub.selected %}
  <div class="paper-box-text" data-selected="{{ pub.selected }}">
    <strong>{{ pub.title }}</strong><br>
    {% if pub.authors %}
      {{ pub.authors | markdownify | remove: '<p>' | remove: '</p>' | strip }}
    {% else %}
      {{ pub.authors_before | markdownify | remove: '<p>' | remove: '</p>' | strip }}
      <span id="authorsCollapsed-{{ pub.id }}">... , </span>
      <span id="authorsExpanded-{{ pub.id }}" style="display: none;">
      {{ pub.authors_expanded | markdownify | remove: '<p>' | remove: '</p>' | strip }}
      </span>
      {{ pub.authors_after | markdownify | remove: '<p>' | remove: '</p>' | strip }}
      <a href="#" onclick="
            var a = document.getElementById('authorsExpanded-{{ pub.id }}');
            var c = document.getElementById('authorsCollapsed-{{ pub.id }}');
            if(a.style.display==='none'){
               a.style.display='inline';
               c.style.display='none';
               this.innerText='[less authors]';
            } else {
               a.style.display='none';
               c.style.display='inline';
               this.innerText='[more authors]';
            }
            return false;
          ">
      [more authors]
      </a>
    {% endif %}
    <br>
    {% if pub.venue_html %}
      {{ pub.venue_html | markdownify | remove: '<p>' | remove: '</p>' | strip }} <br>
    {% endif %}
    {% for link in pub.links_primary %}
      {% unless forloop.first %}<span class="link-sep">·</span>{% endunless %}
      {% if link.icon == 'hf' %}<img src="{{ '/images/huggingface_logo.svg' | relative_url }}" class="hf-logo" alt="Hugging Face">{% endif %}
      <a href="{{ link.url }}" class="{{ link.class | default: 'pdf' }}"><span>{{ link.label }}</span></a>
    {% endfor %}
    {% if pub.note %} <span class="highlight-note">{{ pub.note }}</span>{% endif %}
    {% for link in pub.links_secondary %}
      <span class="link-sep">·</span>
      {% if link.icon == 'hf' %}<img src="{{ '/images/huggingface_logo.svg' | relative_url }}" class="hf-logo" alt="Hugging Face">{% endif %}
      <a href="{{ link.url }}" class="{{ link.class | default: 'pdf' }}"><span>{{ link.label }}</span></a>
    {% endfor %}
    <br>
    <span>{{ pub.summary }}</span>
    <br>
    <br>
  </div>
  {% endif %}
{% endfor %}

</div>
