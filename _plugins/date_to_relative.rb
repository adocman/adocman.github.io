# _plugins/date_to_relative.rb
module Jekyll
  module RelativeDateFilter
    def date_to_relative(date)
      return '' if date.nil?

      seconds = (Time.now - date).to_i
      case seconds
      when 0..59
        "Justo ahora"
      when 60..3599
        "#{seconds / 60} minutos atrás"
      when 3600..86399
        "#{seconds / 3600} horas atrás"
      when 86400..604799
        "#{seconds / 86400} días atrás"
      when 604800..2591999
        "#{seconds / 604800} semanas atrás"
      when 2592000..31535999
        "#{seconds / 2592000} meses atrás"
      else
        "#{seconds / 31536000} años atrás"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::RelativeDateFilter)
